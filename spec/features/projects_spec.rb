require 'rails_helper'

RSpec.feature "Projects", type: :feature do
  let(:org) { Organization.create! name: 'Artsy' }
  let(:releasecop_comparison) do
    double('Releasecop::Comparison',
      ahead: double('Releasecop::ManifestItem', name: 'master'),
      behind: double('Releasecop::ManifestItem', name: 'production'),
      :unreleased? => true,
      lines: ['commit foo', 'commit bar']
    )
  end

  scenario 'view projects' do
    project = org.projects.create!(name: 'shipping')
    other = org.projects.create!(name: 'scheduling', tags: ['logistics'])
    project.stages.create!(name: 'master')
    project.stages.create!(name: 'production')
    Organization.create!(name: 'Etsy').projects.create!(name: 'foo_php', tags: nil)

    visit '/'

    expect(page).to have_content('Out of sync')
    expect(page).to have_content('Foo Php')
    expect(page).to have_content('Shipping')
    expect(page).to have_content('Scheduling')

    # view diffs...
    allow_any_instance_of(Releasecop::Checker).to receive(:check).and_return(
      Releasecop::Result.new('shipping', [releasecop_comparison])
    )
    ComparisonService.new(project).refresh_comparisons
    visit projects_path(organization_id: org.id)
    expect(page).to have_content('2 commits behind')

    # only persist new snapshots upon changes
    expect {
      ComparisonService.new(project).refresh_comparisons
    }.not_to change(Snapshot, :count)
  end
end

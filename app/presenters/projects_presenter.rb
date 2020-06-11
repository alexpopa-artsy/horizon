class ProjectsPresenter
  VIEWS = %w[detail dashboard]

  def initialize(params)
    @params = params
    @released_projects = released_projects()
    @unreleased_projects = unreleased_projects()
    @detailed_projects = detailed_projects()
  end

  def detailed_projects
    projects.sort_by { |p| [p.fully_released? ? 1 : 0, p.name] }
  end

  def unreleased_projects
    projects.reject(&:fully_released?).sort_by(&:severity).reverse
  end

  def released_projects
    projects.select(&:fully_released?).sort_by(&:name)
  end

  def view
    VIEWS.include?(@params[:view]) ? @params[:view] : 'detail'
  end

  class ProjectWrapper
    attr_accessor :project
    delegate :name, :snapshot, :id, :description, :deploy_blocks, to: :project

    def initialize(project)
      @project = project
    end

    def ordered_stages
      @ordered_stages ||= project.stages.sort_by(&:position)
    end

    def fully_released?
      snapshot && severity == 0
    end

    def severity
      scores = compared_stages.to_a.map { |stage| stage[:score] }
      scores.compact.max || 0
    end

    # enumerates pairs of stages, the corresponding comparison object, and severity score
    def compared_stages
      @compared_stages ||= ordered_stages.each_cons(2).map do |ahead, behind|
        comparison = snapshot&.comparisons&.detect{ |c| c.behind_stage_id == behind.id && c.ahead_stage_id == ahead.id }
        {
          stages: [ahead, behind],
          snapshot: comparison,
          score: (ComparisonService.comparison_score(comparison) if comparison)
        }
      end
    end

    def as_json(_options = nil)
      attributes = @project.as_json
      computed_attributes = {
        comparedStages: compared_stages,
        orderedStages: ordered_stages,
        severity: severity,
        isFullyReleased: fully_released?
      }
      attributes.merge(computed_attributes)
    end
  end

  private

  def projects
    @projects ||= begin
      query = Project.includes(:stages, snapshot: [:comparisons]).where(@params.permit(:organization_id))
      query = query.where('tags ?| array[:tags]', tags: @params[:tags]) if @params[:tags]&.any?
      query.map { |p| ProjectWrapper.new(p) }
    end
  end
end

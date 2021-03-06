import { ProjectsIndex, ProjectsProps } from "../index"
import {
  releasedProjectFixture,
  unreleasedProjectFixture,
} from "../../../fixtures/project"
import { Button } from "@artsy/palette"
import { NavBar } from "../../../components/MainLayout"
import { ProjectSummaryGrid } from "../../../components/Projects/ProjectsGrid"
import { ProjectsList } from "../../../components/Projects/ProjectsList"
import React from "react"
import { mount } from "enzyme"

describe("ProjectsIndex", () => {
  let component
  const props: ProjectsProps = {
    params: {},
    projects: [releasedProjectFixture, unreleasedProjectFixture],
    releasedProjects: [releasedProjectFixture],
    tags: ["galleries", "platform"],
    unreleasedProjects: [unreleasedProjectFixture],
  }
  beforeEach(() => {
    component = mount(<ProjectsIndex {...props} />)
  })

  it("displays team nav if tags provided", () => {
    expect(component.find(NavBar).first().text()).toMatch("Teams")
  })

  it("can toggle between views", () => {
    expect(component.find(ProjectSummaryGrid).first()).toHaveLength(1)
    component.find(Button).first().simulate("click")
    expect(component.find(ProjectsList).first()).toHaveLength(1)
  })

  describe("grid view", () => {
    it("displays unreleased projects", () => {
      expect(component.text()).toMatch("Out of sync")
      expect(
        component.find(ProjectSummaryGrid).first().props().projects.length,
      ).toBe(1)
      expect(
        component.find(ProjectSummaryGrid).first().props().projects[0]
          .isFullyReleased,
      ).toBeFalsy()
      expect(component.text()).toMatch("1 commit behind")
    })

    it("displays released projects", () => {
      expect(component.text()).toMatch("Up to date")
      expect(
        component.find(ProjectSummaryGrid).last().props().projects.length,
      ).toBe(1)
      expect(
        component.find(ProjectSummaryGrid).last().props().projects[0]
          .isFullyReleased,
      ).toBeTruthy()
    })
  })

  describe("list view", () => {
    it("shows all projects", () => {
      component.find(Button).first().simulate("click")
      expect(component.find(ProjectsList).first()).toHaveLength(1)
      expect(component.text()).toMatch(releasedProjectFixture.name)
      expect(component.text()).toMatch(unreleasedProjectFixture.name)
    })
  })
})

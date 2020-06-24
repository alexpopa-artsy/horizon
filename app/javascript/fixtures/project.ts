import { Project } from "Typings"

export const unreleasedProjectFixture: Project = {
  id: 11,
  name: "Force",
  organization_id: 1,
  created_at: "2018-11-14T17:26:37.086-05:00",
  updated_at: "2020-06-17T05:02:36.347-04:00",
  snapshot_id: 19463,
  description: "Artsy.net web front-end",
  tags: ["platform"],
  comparedStages: [
    {
      stages: [
        {
          id: 27,
          name: "master",
          position: 1,
          project_id: 11,
          git_remote: "https://github.com/artsy/force.git",
          tag_pattern: null,
          branch: null,
          hokusai: null,
          created_at: "2018-11-14T17:26:37.090-05:00",
          updated_at: "2018-11-14T23:24:42.723-05:00",
          profile_id: 1,
        },
        {
          id: 28,
          name: "staging",
          position: 2,
          project_id: 11,
          git_remote: "https://github.com/artsy/force.git",
          tag_pattern: null,
          branch: null,
          hokusai: "staging",
          created_at: "2018-11-14T17:26:37.096-05:00",
          updated_at: "2018-11-14T23:24:42.728-05:00",
          profile_id: 1,
        },
      ],
      snapshot: {
        id: 34970,
        snapshot_id: 19463,
        ahead_stage_id: 27,
        behind_stage_id: 28,
        released: true,
        description: [],
        position: 1,
        created_at: "2020-06-17T05:02:36.335-04:00",
        updated_at: "2020-06-17T05:02:36.335-04:00",
      },
      diff: [],
      blame: "",
      score: 0,
    },
    {
      stages: [
        {
          id: 28,
          name: "staging",
          position: 2,
          project_id: 11,
          git_remote: "https://github.com/artsy/force.git",
          tag_pattern: null,
          branch: null,
          hokusai: "staging",
          created_at: "2018-11-14T17:26:37.096-05:00",
          updated_at: "2018-11-14T23:24:42.728-05:00",
          profile_id: 1,
        },
        {
          id: 29,
          name: "production",
          position: 3,
          project_id: 11,
          git_remote: "https://github.com/artsy/force.git",
          tag_pattern: null,
          branch: null,
          hokusai: "production",
          created_at: "2018-11-14T17:26:37.102-05:00",
          updated_at: "2018-11-14T23:24:42.734-05:00",
          profile_id: 1,
        },
      ],
      snapshot: {
        id: 34971,
        snapshot_id: 19463,
        ahead_stage_id: 28,
        behind_stage_id: 29,
        released: false,
        description: [
          "5536a9026 2020-06-16 Possibly fix the loading issue on the auction registration form (Yuki Nishijima, yk.nishijima@gmail.com)",
        ],
        position: 2,
        created_at: "2020-06-17T05:02:36.341-04:00",
        updated_at: "2020-06-17T05:02:36.341-04:00",
      },
      diff: [
        {
          sha: "5536a9026",
          date: "2020-06-16",
          firstName: "Yuki",
          gravatar:
            "https://www.gravatar.com/avatar/6c7e6a8c3623300cf8992df120e6c2c1",
          href: "https://github.com/artsy/force/commit/5536a9026",
          message:
            "Possibly fix the loading issue on the auction registration form",
        },
      ],
      blame: "Yuki",
      score: 4.4608556519978855,
    },
  ],
  gitRemote: "https://github.com/artsy/force.git",
  block: {
    id: 61,
    project_id: 11,
    resolved_at: null,
    description: "Something happened and we can't deploy the project.",
    created_at: "2020-06-11T14:26:01.935-04:00",
    updated_at: "2020-06-17T12:59:25.006-04:00",
  },
  isFullyReleased: false,
  isKubernetes: true,
  orderedStages: [
    {
      id: 27,
      name: "master",
      position: 1,
      project_id: 11,
      git_remote: "https://github.com/artsy/force.git",
      tag_pattern: null,
      branch: null,
      hokusai: null,
      created_at: "2018-11-14T17:26:37.090-05:00",
      updated_at: "2018-11-14T23:24:42.723-05:00",
      profile_id: 1,
    },
    {
      id: 28,
      name: "staging",
      position: 2,
      project_id: 11,
      git_remote: "https://github.com/artsy/force.git",
      tag_pattern: null,
      branch: null,
      hokusai: "staging",
      created_at: "2018-11-14T17:26:37.096-05:00",
      updated_at: "2018-11-14T23:24:42.728-05:00",
      profile_id: 1,
    },
    {
      id: 29,
      name: "production",
      position: 3,
      project_id: 11,
      git_remote: "https://github.com/artsy/force.git",
      tag_pattern: null,
      branch: null,
      hokusai: "production",
      created_at: "2018-11-14T17:26:37.102-05:00",
      updated_at: "2018-11-14T23:24:42.734-05:00",
      profile_id: 1,
    },
  ],
  severity: 4.4608556519978855,
}

export const releasedProjectFixture: Project = {
  block: null,
  id: 25,
  name: "Radiation",
  organization_id: 1,
  created_at: "2018-11-14T22:26:37.395Z",
  updated_at: "2020-06-15T18:52:09.790Z",
  snapshot_id: 19401,
  description: "Inquiry email relaying",
  tags: ["platform"],
  comparedStages: [
    {
      stages: [
        {
          id: 67,
          name: "master",
          position: 1,
          project_id: 25,
          git_remote: "https://github.com/artsy/radiation.git",
          tag_pattern: "",
          branch: "master",
          hokusai: "",
          created_at: "2018-11-14T22:26:37.400Z",
          updated_at: "2020-03-11T18:36:40.186Z",
          profile_id: 1,
        },
        {
          id: 68,
          name: "staging",
          position: 2,
          project_id: 25,
          git_remote: "https://github.com/artsy/radiation.git",
          tag_pattern: "",
          branch: "staging",
          hokusai: "staging",
          created_at: "2018-11-14T22:26:37.407Z",
          updated_at: "2020-03-11T18:32:50.153Z",
          profile_id: 1,
        },
      ],
      snapshot: {
        id: 34867,
        snapshot_id: 19401,
        ahead_stage_id: 67,
        behind_stage_id: 68,
        released: true,
        description: [],
        position: 1,
        created_at: "2020-06-15T18:52:09.777Z",
        updated_at: "2020-06-15T18:52:09.777Z",
      },
      diff: [],
      blame: "",
      score: 0,
    },
    {
      stages: [
        {
          id: 68,
          name: "staging",
          position: 2,
          project_id: 25,
          git_remote: "https://github.com/artsy/radiation.git",
          tag_pattern: "",
          branch: "staging",
          hokusai: "staging",
          created_at: "2018-11-14T22:26:37.407Z",
          updated_at: "2020-03-11T18:32:50.153Z",
          profile_id: 1,
        },
        {
          id: 69,
          name: "production",
          position: 3,
          project_id: 25,
          git_remote: "https://github.com/artsy/radiation.git",
          tag_pattern: "",
          branch: "release",
          hokusai: "production",
          created_at: "2018-11-14T22:26:37.414Z",
          updated_at: "2020-03-11T18:32:22.197Z",
          profile_id: 1,
        },
      ],
      snapshot: {
        id: 34868,
        snapshot_id: 19401,
        ahead_stage_id: 68,
        behind_stage_id: 69,
        released: true,
        description: [],
        position: 2,
        created_at: "2020-06-15T18:52:09.784Z",
        updated_at: "2020-06-15T18:52:09.784Z",
      },
      diff: [],
      blame: "",
      score: 0,
    },
  ],
  gitRemote: "https://github.com/artsy/radiation.git",
  isFullyReleased: true,
  isKubernetes: true,
  orderedStages: [
    {
      id: 67,
      name: "master",
      position: 1,
      project_id: 25,
      git_remote: "https://github.com/artsy/radiation.git",
      tag_pattern: "",
      branch: "master",
      hokusai: "",
      created_at: "2018-11-14T22:26:37.400Z",
      updated_at: "2020-03-11T18:36:40.186Z",
      profile_id: 1,
    },
    {
      id: 68,
      name: "staging",
      position: 2,
      project_id: 25,
      git_remote: "https://github.com/artsy/radiation.git",
      tag_pattern: "",
      branch: "staging",
      hokusai: "staging",
      created_at: "2018-11-14T22:26:37.407Z",
      updated_at: "2020-03-11T18:32:50.153Z",
      profile_id: 1,
    },
    {
      id: 69,
      name: "production",
      position: 3,
      project_id: 25,
      git_remote: "https://github.com/artsy/radiation.git",
      tag_pattern: "",
      branch: "release",
      hokusai: "production",
      created_at: "2018-11-14T22:26:37.414Z",
      updated_at: "2020-03-11T18:32:22.197Z",
      profile_id: 1,
    },
  ],
  severity: 0,
}

export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_PROJECT = "FETCH_PROJECT";

export default {
    [FETCH_PROJECT] (state, project) {
        state.activeProject = project
    },

    [FETCH_PROJECTS] (state, projects) {
        state.projects = projects
    }
}
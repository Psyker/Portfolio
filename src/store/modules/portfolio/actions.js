import {FETCH_PROJECTS, FETCH_PROJECT} from "./mutations";

export const GET_PROJECTS_LIST = "GET_PROJECTS_LIST";
export const GET_PROJECT = "GET_PROJECT";

export default {
    async [GET_PROJECTS_LIST] ({commit}) {
        const projects = await fetch("https://jsonplaceholder.typicode.com/posts");
        commit(FETCH_PROJECTS, await projects.json())
    },

    async [GET_PROJECT] ({commit}, id) {
        const project = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        commit(FETCH_PROJECT, await project.json())
    }
}
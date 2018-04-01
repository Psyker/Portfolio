import {FETCH_PROJECTS, FETCH_PROJECT} from "./mutations";
import GithubApiWrapper from "../../../api/GithubApiWrapper";

export const GET_PROJECTS_LIST = "GET_PROJECTS_LIST";
export const GET_PROJECT = "GET_PROJECT";

const data = {
    "query": `{ 
      user(login: "Psyker") {
        repositories(first: 20) {
          edges {
            node {
              id
              name
              description
              createdAt
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 1) {
                      totalCount
                    }
                  }
                }
              }
              repositoryTopics(first: 10) {
                edges {
                  node {
                    id
                  topic {
                    name
                  }
                  }
                }
              }
            }
          }
        }
      }
    }`
};

export default {
    async [GET_PROJECTS_LIST] ({commit}) {
        commit(FETCH_PROJECTS, await GithubApiWrapper.graphQL(data))
    },

    async [GET_PROJECT] ({commit}, id) {
        const project = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        commit(FETCH_PROJECT, await project.json())
    }
}
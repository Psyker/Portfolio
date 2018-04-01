const BASE_URL = "https://api.github.com";

class GithubApiWrapper {
    constructor() {
        this.url = null;
        this.endpoint = null;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json, application/vnd.github.mercy-preview+json');
    }

    prepare(endpoint) {
        this.endpoint = endpoint;
        this.url = `${BASE_URL}/${this.endpoint}`
    }

    async get(endpoint) {
        this.prepare(endpoint);
        this.request = new Request(this.url, {
            method: 'GET',
            headers: this.headers
        });
        try {
            const response = await fetch(this.request);
            return await response.json()
        } catch (exception) {
            throw Error(exception)
        }
    }

    async graphQL(data) {
        data = JSON.stringify(data);
        console.log(data);
        this.prepare('graphql');
        this.headers.append('Authorization', 'Basic ' + new Buffer('******:******').toString('base64'));
        this.headers.append('X-Github-OTP', '******');
        this.request = new Request(this.url, {
            method: 'POST',
            json: true,
            headers: this.headers,
            body: data,
        });
        try {
            const response = await fetch(this.request, {body: data});
            return await response.json()
        } catch (exception) {
            throw Error(exception)
        }
    }
}

const wrapper = new GithubApiWrapper();
export default wrapper
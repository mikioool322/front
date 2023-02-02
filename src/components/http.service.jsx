import axios, { AxiosPromise } from 'axios';

const contentTypes = {
    json: 'application/json',
    multipartFormData: 'multipart/form-data',
};

class HttpService  {
    get(url) {
        return axios.get(url);
    }

     delete(url) {
        return axios.delete(url);
    }

     getJSON(url) {
        return axios.get(url)
            .then(response => response.data);
    }

     put(url, data) {
        const request = {
            url,
            data,
            method: 'put',
            headers: {
                Accept: contentTypes.json,
                'Content-Type': contentTypes.json,
                'Access-Control-Allow-Origin': '*'
            },
        };
        return axios(request);
    }

    post(url, data,
        contentType = contentTypes.json) {
        const request = {
            url: url,
            data: data,
            method: 'post',
            headers: {
                Accept: contentTypes.json,
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
            },
        };

        return axios(request);
    }
}

const HttpServiceInstance = new HttpService();

export {
    HttpServiceInstance as HttpService,
    contentTypes,
};

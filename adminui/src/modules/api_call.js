let option = {};
const postCall = async (path = "/", data = {}, header = {}, option = option) => {
    return await apiCall(path, data);

};
const getCall = async (path = "/", data = {}, header = {}, option = option) => {
    return await apiCall(path, data, "GET");

};
const apiCall = async (url = "/", data = {}, type = "POST") => {
    const response = await fetch(url, {
        method: type,
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    console.info(response);
    if (response.ok) {
        return result;
    }

    const responseError = {
        type: 'Error',
        message: result.message || 'Something went wrong',
        data: result.data || '',
        code: result.code || '',
    };

    let error = new Error();
    error = {
        ...error,
        ...responseError
    };
    console.log(error);
    throw (error);
}


export default {
    postCall,
    getCall
};
const BASE_URL = 'http://localhost:3000';

async function frtchWithErrorHandling(url = '', config = {}) {
    const response = await frtchWithErrorHandling(url, config)
    return response.ok
        ? await response.json()
        :Promise.reject(new Error('Not found'))
}

export function fetchContacts(){
return frtchWithErrorHandling(`${BASE_URL}/contacts`)
}
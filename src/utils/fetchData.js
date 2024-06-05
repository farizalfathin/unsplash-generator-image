const API_KEY = import.meta.env.VITE_API_KEY;
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

// eslint-disable-next-line no-unused-vars
const fetchingDataImg = async ( pageNumber = 1 ) => {

    try {
        const response = await fetch(`${API_ENDPOINT}photos?page=${pageNumber}&per_page=30`, {
            method: 'GET',
            headers: {
                'Authorization': `Client-ID ${API_KEY}`
            }
        });

        const results = await response.json();
        return { results, statusCode: response.status }
    } catch (error) {
        throw new Error(error);
    }
}

const fetchingDataImgBySearch = async (search) => {

    try {
        const response = await fetch(`${API_ENDPOINT}search/photos?query=${search.keyword}&page=1&per_page=${search.imgQty}`, {
            method: 'GET',
            headers: {
                'Authorization': `Client-ID ${API_KEY}`
            }
        });
        const { results } = await response.json();

        return { results, statusCode: response.status };
    } catch (error) {
        throw new Error(error);
    }
}

export { fetchingDataImgBySearch, fetchingDataImg };
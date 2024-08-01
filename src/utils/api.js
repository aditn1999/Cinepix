import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGQ5NjUyMmNkMmI2ODJmMTc4ZTZmNmMwZmJmZmExMiIsInN1YiI6IjY0ZjYzY2I2YjIzNGI5MDEzYTRhNjQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.duPVdtIacMo_TE4xSPnEeyse3waW2y3-nH5IywWp524";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

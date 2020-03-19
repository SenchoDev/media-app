import axios from 'axios';
import { key } from '../config';
import { genredIDs } from '../views/base';


const replaceGenre = (res) => {
    const genre = [];
    res.genre_ids.forEach(id => {
        const movie = genredIDs.find(genre => genre.id === id).name
        genre.push(movie);
    });
    res.genre_ids = genre.slice(0, 3).join(', ');
    return res;
}


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}`);
            this.result = res.data.results;
        } catch (err) {
            alert(err)
        }
    }
    replaceGenres() {
        this.result.map(res => replaceGenre(res));
    }
}


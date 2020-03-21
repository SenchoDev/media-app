import axios from 'axios';
import { key } from '../config';


export default class Search {
    constructor(id) {
        this.id = id;
    }

    async getResults() {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}&language=en-US`);
            this.background = res.data.backdrop_path;
            this.title = res.data.original_title;
            this.rating = res.data.vote_average;
            this.directors = res.data.tagline;
            this.genres = res.data.genres;
            this.modes = res.data.original_language;
            this.poster = res.data.poster_path;
            this.description = res.data.overview;
        
        } catch (err) {
            alert(err)
        }
    }

}


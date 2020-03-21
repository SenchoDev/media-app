import axios from 'axios';
import {key} from '../config'

export const genredIDs = [];

export const elements = {
    error: document.querySelector('.erorr'),
    searchText: document.querySelector('.search'),
    searchForm: document.querySelector('.search-box'),
    searchInput: document.querySelector('.search__field'),
    moviesList: document.querySelector('.movies'),
    content: document.querySelector('.content-second'),
    search: document.querySelector('.search-link'),
    release: document.querySelector('.newRrealease-link'),
    navbar: document.querySelector('.navbar'),
    grid: document.querySelector('.container-2')
}
export const getMovieGenres = async () => {
    try{
        const res = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
        genredIDs.push(...res.data.genres);
    } catch(err){
        alert(err)
    }
}
export const deleteContent = () => {
    elements.content.innerHTML = '';
}

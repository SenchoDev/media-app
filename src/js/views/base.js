import axios from 'axios';
import {key} from '../config'

export const genredIDs = [];

export const elements = {
    searchForm: document.querySelector('.search-box'),
    searchInput: document.querySelector('.search__field'),
    moviesList: document.querySelector('.movies'),
    content: document.querySelector('.content-second'),
    search: document.querySelector('.search-link'),
    release: document.querySelector('.newRrealease-link'),
    navbar: document.querySelector('.navbar'),
}

export const getMovieGenres = async () => {
    try{
        const res = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
        genredIDs.push(...res.data.genres);
    } catch(err){
        alert(err)
    }
}

// export const renderSearchPage = () => {
//     const markup = `
//             <div class="search">
//                 <h3 class="heading-tertiary search__fix">Search</h3>
//                 <form class="search-box">
//                     <input type="text" class="search__field" placeholder="Search over 100 000 movies and TV shows">
//                     <button class="btn-search search__btn">
//                         <img class="search__icon" src="img/search-1@2x.png" alt="search Btn">
//                     </button>
//                 </form>
//             </div>

    
//             <div class="movies">

//                 <!--

//                 <a href="movie.html">
//                     <div class="movies__card ">
//                         <div class="movies__rating movies__rating--green">
//                             <span class="movies__number">8.5</span>
//                         </div>
//                         <div class="movies__black">
//                             <img src="img/Rectangle -1@2x.png" alt="" class="movies__img">
//                         </div>
//                         <p class="movies__header">
//                             Ad Astra
//                         </p>
//                         <span class="movies__info">
//                             Drama, Thriller
//                         </span>
//                     </div>
//                 </a>
//                 -->        
//             </div>

//     `;
//     elements.content.insertAdjacentHTML('afterbegin', markup)

//}
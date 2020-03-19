import { elements, genredIDs} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}
export const clearResults = () => {
    elements.moviesList.innerHTML = '';
    elements.error.innerHTML = '';
}


const checkImg = (url, img) => {
    if (!img) return 'img/img-not.png';
    else return `${url}${img}`;
}
const checkColor = (vote) => {
   if(vote > 7.5){
       return `<div class="movies__rating movies__rating--green">
       <span class="movies__number">${vote}</span>
      </div>`
   } else if (vote > 5.5) {
    return `<div class="movies__rating movies__rating--yellow">
    <span class="movies__number">${vote}</span>
   </div>`
   } else {
    return `<div class="movies__rating movies__rating--red">
    <span class="movies__number">${vote}</span>
   </div>`
   }
}

const renderFilmUI = (film) => {
    const markup = `
    <a href="movie.html">
    <div class="movies__card">
        ${checkColor(film.vote_average)}
        <div class="movies__black"><img src="${checkImg('http://image.tmdb.org/t/p/w300//', film.poster_path)}" alt="" class="movies__img"></div>
        
        <p class="movies__header">
            ${film.title}
        </p>
        <span class="movies__info">
            ${film.genre_ids}
        </span>
    </div>
</a>
    `
    elements.moviesList.insertAdjacentHTML('beforeend', markup);
}
export const renderNoResults = () => {
    const markup = `
    <h3 class="heading-error">Result not found</h3>
    `
    elements.error.insertAdjacentHTML('afterbegin', markup);
}
export const renderResults = (results) => {
    results.forEach(res => renderFilmUI(res))
}

import { elements, getMovieGenres, deleteContent } from './views/base'
import * as searchView from './views/searchView'
import * as movieView from './views/movieView'
import Search from './models/Search';
import Movie from './models/Movie';

const state = {};

//----------------------SERACH PAGE------------------------
const controlSearch = async () => {
    // get query from state
    
    const query = searchView.getInput();

    if (query) {
        //New Search object and add to the state
        state.search = new Search(query);

        //prepare UI For the results, add loader, clear results, clear input
        searchView.clearInput();
        searchView.clearResults();     

        try {
            // search for films
            await state.search.getResults();

            if (state.search.result.length !== 0) {
                // add genres to data structure
                state.search.replaceGenres();
                // Render results on ui
                searchView.renderResults(state.search.result);
            } else {
                // render no results
                searchView.renderNoResults();
            }
        } catch (err) {
            console.error(err);
        }
    }
}

if (elements.searchForm) {
    elements.searchForm.addEventListener('submit', e => {
        e.preventDefault();
        controlSearch();
    })
}

//---------------------MOVIE INFO-----------------------
const controlMovie =  async () => {
    //Get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        //clear movie
        movieView.clearDisplay();

        //make object fromg given id
        state.movie = new Movie(id);

        try{
            // get data from film
            await state.movie.getResults()

            movieView.renderMovie(state.movie);

        } catch(err){
            console.error(err);
        }
    }
}


window.addEventListener('hashchange', controlMovie);
getMovieGenres();







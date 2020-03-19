import { elements, getMovieGenres } from './views/base'
import * as searchView from './views/searchView'
import Search from './models/Search';

const state = {};

const controlSearch = async () => {
    // get query from state
    const query = searchView.getInput();

    if(query){
        //New Search object and add to the state
        state.search = new Search(query);

        //prepare UI For the results, add loader, clear results, clear input
        searchView.clearInput();
        searchView.clearResults();

        try{
            // search for films
            await state.search.getResults();
            state.search.replaceGenres();
            
            // Render results on ui
            searchView.renderResults(state.search.result);
        } catch(err) {
            alert(err);
        }

    }
}


if(elements.searchForm){
    elements.searchForm.addEventListener('submit', e => {
        e.preventDefault();
        controlSearch();
    })
}

getMovieGenres();







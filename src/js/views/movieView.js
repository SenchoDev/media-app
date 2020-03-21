import { elements} from './base';

export const clearDisplay = () => {
    elements.grid.remove();
}

const renderStars = (rating) => {
    if(rating > 8.5){
        return `<img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">                    
        <p class="about__text">${rating}</p>`
    } else if (rating > 7.5) {
        return `<img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">                   
        <p class="about__text">${rating}</p>`
    } else if (rating > 6.5){
        return `<img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">                   
        <p class="about__text">${rating}</p>`
    } else if (rating > 5) {
        return `<img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">                   
        <p class="about__text">${rating}</p>`

    } else {
        return `<img src="img/star@2x.png" alt="stars" class="about__star">
        <img src="img/star@2x.png" alt="stars" class="about__star">                   
        <p class="about__text">${rating}</p>`
        
    }
}


export const renderMovie = (movie) => {
    //"${checkImg('http://image.tmdb.org/t/p/w300//', film.poster_path)}"
    const markup = `
    <div class="container-movie">
        <div class="header-logo">
            <a href="index.html"><img src="img/Group 3@2x.png" alt="Logo Img" class="header-logo__logo"></a>
        </div>
        <div class="header-main">
            <div class="header-main__memeber-box">
                <a href="#" class="text__medium"> Log in </a>
                <span class="text__medium">
                    |
                </span>
                <a href="#" class="text__medium"> Sign in</a>
            </div>
        </div>
        <div class="main">
            <div class="main__content">
                <a href="searches.html">
                    <h5 class="main__homepage heading--five">Go Back</h5>
                </a>
                <div class="main__image">
                    <img src="http://image.tmdb.org/t/p/w1280/${movie.background}" class="main__img" alt="Img">
                </div>
                <img src="img/play-circle@2x.png" alt="" class="main__playBtn">

                <a href="#" class="main__btn">Watch Trailer</a>
                <a href="#" class="main__reviews">
                    <h5 class="heading--five">See all reviews</h5>
                    <img src="img/iconmonstr-arrow-2@2x.png" alt="" class="main__svg">
                </a>


            </div>

        </div>
        <div class="about">
            <div class="about__box">
                <h2 class="heading-secondary-b about__header">
                    ${movie.title}
                </h2>
                <div class="about__stars">
                    ${renderStars(movie.rating)}
                </div>
                <img src="http://image.tmdb.org/t/p/w300/${movie.poster}" alt="Movie Img" class="about__img">
                <div class="about__movie">
                    <div class="about__director">
                        <p class="about__head">ABOUT</p>
                        <p class="about__head--names">${movie.directors}</p>
                    </div>

                    <div class="about__genre">
                        <p class="about__head">GENRE</p>
                        <p class="about__head--names">${movie.genres.map(el => el.name).join(', ')}</p>
                    </div>
                    <div class="about__modes">
                        <p class="about__head">LANGUAGE</p>
                        <p class="about__head--names">${movie.modes}</p>
                    </div>
                </div>

                <p class="about__head about__text-footer">
                ${movie.description}
                </p>
            </div>

        </div>
    </div>   `

        
   document.body.innerHTML = markup;
    
}
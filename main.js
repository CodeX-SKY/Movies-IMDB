let all = document.querySelector(".center");
var top = document.querySelector(".top");
var more = document.querySelector(".more");

// var f = function(){
//     if(window.scrollY > 1000){
//         top.classList.add("top-text");
//     } else {
//         top.classList.remove("top-text");
//     }
// }
// var debounce = (func, wait, immediate) => {
//     var timeout;
//     return function () {
//         var context = this, args = arguments;
//         var later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };
// console.log(window.scrollY);

// window.addEventListener("scrollY", debounce(f, 30));


let x = "1";
let kinolar = movies.map(function(movie){
    return {
        name: movie.Title,
        nmff: movie.fulltitle.toString(),
        full: movie.fulltitle.toString() + movie.Categories.split('|') + movie.imdb_rating,
        year: movie.movie_year,
        categr: movie.Categories.split('|'),
        info: movie.summary,
        rating: movie.imdb_rating,
        // lang: movie.language,
        time: movie.runtime,
        yid: movie.ytid,
        id: movie.imdb_id,
        img: movie.ImageURL,
        num: x++
    }
});

// let kinos_leng = 75 + more.onclick.75;

for(i = 0; i < 75; i++){
    let movies = document.createElement("div");
    movies.classList.add('movies');

    let mvname = document.createElement("h2");
    mvname.classList.add('mv-name');
    mvname.textContent = kinolar[i].name;

    let mvyear = document.createElement("p");
    mvyear.classList.add('mv-year');
    mvyear.textContent = kinolar[i].year + '-year';

    let mvtime = document.createElement("p");
    mvtime.classList.add('mv-time');
    mvtime.innerHTML = '<span class="icon fa-light fa-clock"></span>' + kinolar[i].time + '<span class="span">min</span>';

    let ul = document.createElement('ul');
    ul.classList.add('ul');
    for(a = 0; a < kinolar[i].categr.length; a++){
        let mvcategr = document.createElement('li');
        mvcategr.classList.add('mv-categr');
        mvcategr.textContent = kinolar[i].categr[a];
        ul.appendChild(mvcategr);
    }

    let mvrat = document.createElement("p");
    mvrat.classList.add('mv-rating');
    mvrat.innerHTML = '<i class="icon fa-sharp fa-solid fa-signal-bars-good"></i>' + kinolar[i].rating + '<span class="span">score</span>';

    let mvimg = document.createElement("img");
    mvimg.classList.add('mv-image');
    mvimg.src = kinolar[i].img;
    mvimg.alt = kinolar[i].nmff;
    
    let mvinf = document.createElement("p");
    mvinf.classList.add('mv-info');
    mvinf.textContent = kinolar[i].info;

    let mvlan = document.createElement("p");
    mvlan.classList.add('mv-lang');
    mvlan.textContent = kinolar[i].lang;

    let mvwt = document.createElement("a");
    mvwt.classList.add('mv-watch');
    mvwt.href = 'https://www.imdb.com/title/' + kinolar[i].id;
    mvwt.innerHTML = '<i class="icon fa-light fa-high-definition"></i>' + 'Watch trailer IMDB';

    let mvnum = document.createElement("p");
    mvnum.classList.add('mv-num');
    mvnum.textContent = kinolar[i].num;


        
    movies.appendChild(mvname);
    movies.appendChild(mvyear);
    movies.appendChild(mvtime);
    movies.appendChild(mvrat);
    // movies.appendChild(mvlan);
    movies.appendChild(ul);
    movies.appendChild(mvnum);
    movies.appendChild(mvwt);
    // movies.appendChild(mvinf);
    
    all.appendChild(movies);
}


// Search 
let form = document.querySelector(".form");
let input = document.querySelector(".input");

form.addEventListener('submit' , function(evt){
    evt.preventDefault();

    let key = new RegExp(input.value, 'gi');

    let result = kinolar.filter(function(movi){
        return movi.full.match(key);

        // full = full title = movie title + category + rating + // movie number
    })

    all.textContent = '';
    more.classList.remove("remove");

    for(i = 0; i < 22; i++){
        let movies = document.createElement("div");
        movies.classList.add('movies');
    
        let mvname = document.createElement("h2");
        mvname.classList.add('mv-name');
        mvname.textContent = result[i].name;
    
        let mvyear = document.createElement("p");
        mvyear.classList.add('mv-year');
        mvyear.textContent = result[i].year + '-year';
    
        let mvtime = document.createElement("p");
        mvtime.classList.add('mv-time');
        mvtime.innerHTML = '<span class="icon fa-light fa-clock"></span>' + result[i].time + '<span class="span">min</span>';
    
        let ul = document.createElement('ul');
        ul.classList.add('ul');
        for(a = 0; a < result[i].categr.length; a++){
            let mvcategr = document.createElement('li');
            mvcategr.classList.add('mv-categr');
            mvcategr.textContent = result[i].categr[a];
            ul.appendChild(mvcategr);
        }
    
        let mvrat = document.createElement("p");
        mvrat.classList.add('mv-rating');
        mvrat.innerHTML = '<i class="icon fa-sharp fa-solid fa-signal-bars-good"></i>' + result[i].rating + '<span class="span">score</span>';
    
        let mvimg = document.createElement("img");
        mvimg.classList.add('mv-image');
        mvimg.src = result[i].img;
        mvimg.alt = result[i].nmff;
        
        let mvinf = document.createElement("p");
        mvinf.classList.add('mv-info');
        mvinf.textContent = result[i].info;
    
        let mvlan = document.createElement("p");
        mvlan.classList.add('mv-lang');
        mvlan.textContent = result[i].lang;
    
        let mvwt = document.createElement("a");
        mvwt.classList.add('mv-watch');
        mvwt.href = 'https://www.imdb.com/title/' + result[i].id;
        mvwt.innerHTML = '<i class="icon fa-light fa-high-definition"></i>' + 'Watch trailer IMDB';
    
        let mvnum = document.createElement("p");
        mvnum.classList.add('mv-num');
        mvnum.textContent = result[i].num;
    
    
            
        movies.appendChild(mvname);
        movies.appendChild(mvyear);
        movies.appendChild(mvtime);
        movies.appendChild(mvrat);
        // movies.appendChild(mvlan);
        movies.appendChild(ul);
        movies.appendChild(mvnum);
        movies.appendChild(mvwt);
        // movies.appendChild(mvinf);
        
        all.appendChild(movies);
    }
})

// + Show more
// more.addEventListener('click' , function(){
//     let addMovie = kinolar.length + addMovieNum;
//     let addMovieNum = kinolar.length + 75;
// })
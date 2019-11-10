//func to get movieS by SEARCH QUERY(extracting id from session store) with api call and display contents as unordered list-group

function getMovies() {

    let query = sessionStorage.getItem('query');

    fetch(`http://www.omdbapi.com/?s=${query}&apikey=5868b208`)
        .then((response) => {

            response.json().then(function (data) {

                let movies = data.Search;
                let output = '';

                if (typeof movies !== 'undefined' && movies.length > 0) {
                    movies.slice(0, 8).map(movie => {
                        if (movie.Poster == "N/A") movie.Poster = "https://via.placeholder.com/350x530?text=No+Image+found";
                        output += `
                        <div class="card">
                        <a onclick="movieSelected('${movie.imdbID}')" class="" href="#"><img src="${movie.Poster}"></a>
                          <div class="container">
                             <h5><b>${movie.Title}</b></h5>
                             
                          </div>
                        </div>
                       
                        
                    `;
                    })

                    movies.slice(8, 100).map(movie => {
                        if (movie.Poster == "N/A") movie.Poster = "https://via.placeholder.com/350x530?text=No+Image+found";
                        output += `
                        <div class="card show_more_results">
                        <a onclick="movieSelected('${movie.imdbID}')" class="" href="#"><img src="${movie.Poster}"></a>
                          <div class="container">
                             <h5><b>${movie.Title}</b></h5>
                          </div>
                        </div>
                       
                        
                    `;
                    })

                }


                if (output == '') {
                    output = `<div><h1 class="no-results">Sorry! No results found</h1></div>`
                }


                var d1 = document.querySelector('#extra');
                d1.insertAdjacentHTML('afterend', output);
            });




        })
        .catch((err) => {
            console.log(err);
        });
}

// function to implement show more button
// It picks up all elements of class "show_more_results" and changes their display to "inline" and also makes the show more button go away

function showMore() {


    let show_more = document.getElementById("show_more");
    let all = document.getElementsByClassName("show_more_results");


    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "inline";
    }


    show_more.style.display = "none";

}









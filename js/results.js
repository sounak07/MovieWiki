function getMovies() {

    let query = sessionStorage.getItem('query');

    fetch(`http://www.omdbapi.com/?s=${query}&apikey=5868b208`)
        .then((response) => {

            response.json().then(function (data) {

                let movies = data.Search;
                let output = '';

                if (typeof movies !== 'undefined' && movies.length > 0) {
                    movies.map(movie => {
                        if (movie.Poster == "N/A") movie.Poster = "https://via.placeholder.com/350x530?text=No+Image+found";
                        output += `
                        <div class="card">
                          <img src="${movie.Poster}">
                          <div class="container">
                             <h5><b>${movie.Title}</b></h5>
                             <p>
                               <a onclick="movieSelected('${movie.imdbID}')" class="" href="#">Movie Details</a>
                             </p>
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






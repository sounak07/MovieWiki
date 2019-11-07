function getMovies() {

    let query = sessionStorage.getItem('query');

    fetch(`http://www.omdbapi.com/?s=${query}&apikey=5868b208`)
        .then((response) => {

            response.json().then(function (data) {

                let movies = data.Search;
                let output = '';
                movies.map(movie => {
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


                var d1 = document.querySelector('#extra');
                d1.insertAdjacentHTML('afterend', output);
            });




        })
        .catch((err) => {
            console.log(err);
        });
}






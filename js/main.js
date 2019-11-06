document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#searchForm").addEventListener('submit', function (e) {
        e.preventDefault();
        let searchVal = document.querySelector("#searchText").value;
        getMovies(searchVal);
    })
});


function getMovies(searchVal) {
    fetch(`http://www.omdbapi.com/?s=${searchVal}&apikey=5868b208`)
        .then((response) => {

            response.json().then(function (data) {

                let movies = data.Search;
                console.log(movies);
                let output = '';
                movies.map(movie => {
                    output += `
                    <div class="mov">
                      <div class="each">
                        <img src="${movie.Poster}">
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="" href="#">Movie Details</a>
                      </div>
                    </div>
                    
                `;
                })


                var d1 = document.getElementById('movies');
                d1.insertAdjacentHTML('afterend', output);
            });




        })
        .catch((err) => {
            console.log(err);
        });
}




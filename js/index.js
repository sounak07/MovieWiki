//function to extract search query, store it in a session and redirect to results page

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#searchForm").addEventListener('submit', function (e) {
        e.preventDefault();
        let searchVal = document.querySelector("#searchText").value;
        sessionStorage.setItem('query', searchVal);
        window.location = 'results.html';
        return false;
    })
});
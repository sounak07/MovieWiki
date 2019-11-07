document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#searchForm").addEventListener('submit', function (e) {
        e.preventDefault();
        let searchVal = document.querySelector("#searchText").value;
        sessionStorage.setItem('query', searchVal);
        window.location = 'results.html';
        return false;
    })
});
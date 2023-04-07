var buttonEl = document.querySelector("#formSubmit");


function getApi(event) {
    event.preventDefault();
    var myValue = document.querySelector('#searchInput').value;
    var selectEl = document.querySelector("#libraryDropdown").value;

    var requestUrl = "https://www.loc.gov/search/?fo=json&q=" + myValue + "&format=" + selectEl; 
    fetch(requestUrl)
        .then(function (response) {
    
            return response.json();
    })
        .then(function (data) {
            //location.replace("search-results.html");
            var spanEl = document.querySelector("#searchHeader");
            spanEl.textContent = data.search.query;
            console.log(data);
    });
}

// call function on form submit
buttonEl.addEventListener("click", getApi);
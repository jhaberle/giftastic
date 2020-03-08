var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cEm2R8y7shniOVf8cxDEDp6nusYySg89&q=Dimaggio&limit=10&offset=0&rating=G&lang=en";

var players = ["sandy koufax", "Babe Ruth", "Larry Walker", "Philly Fanatic", "Nolan Arendado", "Hank Aaron"];

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});

$('#add-player').on('click' + response)
alert("You clicked on a button");
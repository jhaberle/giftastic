

var players = [];




function newButton() {

$('#new-player').empty();

for (var i = 0; i < players.length; i++) {
    var a = $('<button>');
    a.addClass('player');
    a.attr('data-name', players[i]);
    $('#new-player').append(a);
    console.log("I cliked a button");
}

}

$('search-player').on('click', function(event) {
    event.preventDefault();
    var player = $('#player-input').val().trim();
    players.push(player);

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cEm2R8y7shniOVf8cxDEDp6nusYySg89&q="+ players + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    
});



newButton();


// initial variables when the page is loaded

var players = ["Ichiro", "Ted Williams", "Babe Ruth"];


// function to create a new button at top of page after search button is clicked

function newButton() {
    
    $("#new-player").empty();
    for (var i = 0; i < players.length; i++) {
        var addedPlayer = $("<button>");
        addedPlayer.addClass("player");
        addedPlayer.attr("data-name", players[i]);
        addedPlayer.text(players[i])
        $("#new-player").append(addedPlayer);
        
    }
    gifCall();
}


    $("#search-player").on("click", function(event) {
        event.preventDefault();
        var player = $("#player-input").val().trim();
        players.push(player);
        newButton();
    });

  
// function for ajax call and to push gifs onto page
    function gifCall() {
        
        $(".player").on("click", function(event) {
            event.preventDefault()
            var playerName = $(this).attr("data-name");
            console.log(playerName);
            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cEm2R8y7shniOVf8cxDEDp6nusYySg89&q="+ playerName + "&limit=10&offset=0&rating=G&lang=en";
        
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
            console.log(response);
            // $(document).on("click", ".gifs", response.data[i].url);
            
            var gifUrl = response.data[0].images.fixed_height.url;
            // for (i = 0; i < gifHTML.length; i++);
            var gifHTML = $(`<img src='${gifUrl}'>`)
            $(".gifs-img").append(gifHTML);
            });
        })
    }


 

newButton();

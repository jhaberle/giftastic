var players = ["Ichiro", "Barry Bonds", "Babe Ruth"];

    // $("#player-input").on("click", function(){
    //     alert("you're pressing the search button")
    // });

    function newButton() {
    
        $("#new-player").empty();
        for (var i = 0; i < players.length; i++) {
            var addedPlayer = $("<button>");
            addedPlayer.addClass("player");
            addedPlayer.attr("data-name", players[i]);
            $("#new-player").append(addedPlayer);
        }
    }


    function displayGif() {
    // $("#search-player").on("click", function(event) {
    //     event.preventDefault();
        var player = $(this).attr("#player-input");
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cEm2R8y7shniOVf8cxDEDp6nusYySg89&q=" + player[i] + "&limit=10&offset=0&rating=G&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var playerGif = $("<div class='play-gif'");
            var gif = $("<img>").attr("src", queryURL);
            playerGif.append(gif);
        $("#new-player").prepend(playerGif);
    
        });
    }



$(document).on("click", ".player", displayGif) 

newButton();


    

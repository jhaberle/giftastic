var players = ["Ichiro", "Barry Bonds", "Babe Ruth"];



function newButton() {
    
    $("#new-player").empty();
    for (var i = 0; i < players.length; i++) {
        var addedPlayer = $("<button>");
        addedPlayer.addClass("player");
        addedPlayer.attr("data-name", players[i]);
        addedPlayer.text(players[i])
        $("#new-player").append(addedPlayer);
        
    }
}


    $("#search-player").on("click", function(event) {
        event.preventDefault();
        var player = $("#player-input").val().trim();
        players.push(player);
        newButton();
    });

  

    function gifCall() {
        
        $(".button").on("click", function(call) {
            call.preventDefault()
            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cEm2R8y7shniOVf8cxDEDp6nusYySg89&q="+ players + "&limit=10&offset=0&rating=G&lang=en";
        
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
            console.log(response);
            });
        })
    }

newButton();
gifCall();
 //Onclick for Naruto Search Engine
            $("#addNarutoBtn").on("click", function() {
                var addCharacter = $("#newNarutoInput").val()
                var search = $("<button>")
                $(search).addClass("press")
                $(search).attr("data-character", addCharacter)    
                $(search).text(addCharacter)
                $(".row").append(search)
                console.log(search);
                console.log($(search).prop("class"))
                
            });
            $(document).on('click', '.press', function() {
                var character = $(this).attr("data-character")
                console.log("press");
                var queryURL = "https:api.giphy.com/v1/gifs/search?api_key=Kb48PxWjm5vKNWf7Aa7LXa6pWV1Ljntf&q=" + character + "&limit=10&offset=0&rating=PG&lang=en";
            $.ajax({
                url: queryURL,
                method: "GET"
                }).then(function(response) {
                  var results = response.data;
          for (var i = 0; i < results.length; i++) {
            console.log(results);
            var gifDiv = $("<div>");
              
              var rating = results[i].rating;
             
              var p = $("<p>").text("Rating: " + rating);
             
              var characterImage = $("<img>");
            
              characterImage.attr("src", results[i].images.fixed_height_still.url);
            
              gifDiv.append(p);
              gifDiv.append(characterImage);
                
              $("#gifs-appear-here").prepend(gifDiv);
              
            }
            $('img').on('click', function() {

                  var src = $(this).attr("src");
                  $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
                    console.log(src);
                }); 
            })
           
    });

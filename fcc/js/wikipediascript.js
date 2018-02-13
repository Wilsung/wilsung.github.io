var heading = [];
var description = [];
var url = [];

$(document).ready(function(){
  
   $('#search').click(function(){
     //Gets search input
     var sTerm = $('#searchTerm').val();
     
     //URL for the search results for the search term using Wikipedia's API. 
     var search_url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + sTerm + "&callback=?"
     $.ajax({
       type:"GET",
       url:search_url,
       async:false, //statement has to complete before continuing
       dataType: "json",
       success: function(data){
         $('#list').empty();
         for (var i = 0; i<data[1].length; i++){
           $('#list').append(
            '<a href="' + data[3][i] + '" target="blank">' +
            '<div class = "result-item animated bounceInUp">' +
            "<h2>" + data[1][i] + "</h2>" +
            data[2][i] + "</br>" + "</div>" +
            '</a>' 
           )
         }
       },
       error: function(errorMessage){
         alert("Search unable to be processed.");
       }
       
     });
   });
});
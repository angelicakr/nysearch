$(document).ready(function() {
    $("#search").on("click", function(event){
        event.preventDefault();
        console.log("click");
        var searchTerm =$("#searchTerms").val();
        paramsObj = {
            'api-key': "c6c68c289a56437693e3c6c15550662a",
            'q': searchTerm,
          //   'fq': numArticles,
          //   'begin_date': beginDate,
          //   'end_date': endDate,
          };
        
        console.log(searchTerm);
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var myURL = queryURL + '?' + $.param(paramsObj);
        $.ajax({
            url: myURL,
            method:"GET",
        
        }).then(function(response){
            console.log(response);
        })
    })
})
    
    // var numArticles= $(this).attr("fq");
    // var beginDate = $(this).attr("begin_date");
    // var endDate = $(this).attr("end_date");



// })
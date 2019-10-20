export const fetchApiTopStories = function(url){
    return (
        $.ajax({
            method:"GET",
            url:url,
            // contentType:"application/json",
            dataType: "json"
        })
    )
}
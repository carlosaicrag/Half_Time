export const fetchApiTopStories = function(url){
    debugger
    return (
        $.ajax({
            method:"GET",
            url:url,
            // contentType:"application/json",
            dataType: "json"
        })
    )
}
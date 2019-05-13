export const createLike = (storyId) =>{
    return(
        $.ajax({
            method: "POST",
            url:"api/likes",
            data: {storyId}
        })
    )
}
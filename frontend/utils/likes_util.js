export const createLike = (storyId) =>{
    return(
        $.ajax({
            method: "POST",
            url:"api/likes",
            data: {storyId}
        })
    )
}

export const removeLike = (storyId) =>{
    return(
        $.ajax({
            method: "DELETE",
            url:`api/likes/${storyId}`
        })
    )
}
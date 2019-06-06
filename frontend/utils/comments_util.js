export const createComment = (commentData) => {
    return(
        $.ajax({
            method: "POST",
            url: "api/comments/",
            data: commentData,
            contentType: false,
            processData: false
        })
    )
} 

export const removeComment = (commentId) => {
    return(
        $.ajax({
            method:"DELETE",
            url: `api/comments/${commentId}`,
            data: `${commentId}`
        })
    )
}


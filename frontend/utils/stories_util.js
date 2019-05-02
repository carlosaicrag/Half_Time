export const fetchStory = (id) => {
    return(
        $.ajax({
            method:"GET",
            url:`api/stories/${id}`
        })
    )
}
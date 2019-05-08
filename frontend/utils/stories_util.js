export const fetchStories = () => {
    return (
        $.ajax({
            method: "GET",
            url: `api/stories`
        })
    )
}

export const fetchStory = (id) => {
    return(
        $.ajax({
            method:"GET",
            url:`api/stories/${id}`
        })
    )
}

export const createStory = (formData) => {
    return(
        $.ajax({
            method:"POST",
            url:`api/stories/`,
            data: formData,
            contentType: false,
            processData: false
        })
    )
}
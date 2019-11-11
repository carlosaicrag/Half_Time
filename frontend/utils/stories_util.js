export const fetchStories = () => {
    debugger
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

export const deleteStory = (id) => {
    return(
        $.ajax({
            method:"DELETE",
            url:`api/stories/${id}`
        })
    )
}

export const updateStory = (formData,storyId) => {
    return(
        $.ajax({
            method:"PATCH",
            url:`api/stories/${storyId}`,
            data: formData,
            contentType: false,
            processData: false
        })
    )
}
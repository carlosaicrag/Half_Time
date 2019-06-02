export const createFollow = (followeeId) => {
    return(
        $.ajax({
            method: "POST",
            url:"api/follows",
            data: {followeeId}
        })
    )
}

export const removeFollow = (followeeId) => {
    return(
        $.ajax({
            method:"DELETE",
            url:`api/follows/${followeeId}`,
            data: {followeeId}
        })
    )
}
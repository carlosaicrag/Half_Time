export const fetchUser = (id) => {
    return(
        $.ajax({
            method:"GET",
            url:`api/users/${id}`
        })
    )
}

// export const deleteUser = (id) => {
//     return(
//         $.ajax({
//             method:"DELETE",
//             url: `api/users/${id}`
//         })
//     )
// }
//ajax request needed to signup a user
export const postUser = user => (
    $.ajax({
        url: "api/users",
        method: "POST",
        //Data is the information that we're sending to the database to create a new user
        data: { user },
    })
)

//ajax request needed to log a user in
export const postSession = user => (
    $.ajax({
        url: "api/session",
        method: "POST",
        data: { user },
    })
)

//ajax request needed to log a user out 
export const deleteSession = () => (
    $.ajax({
        url: "api/session",
        method: "DELETE",
    })
)
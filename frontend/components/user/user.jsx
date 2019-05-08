import React from 'react'

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.currentUser
    }

    render(){
        // let stories = this.state.map(story =>{
        //     return(
        //         this.state.stories;
        //     )
        // })
        return(
            <h1>Hello, {this.state.email}</h1>
        )
    }
}

export default User;
import React from "react";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        //this will track the local state of this class component 
        this.state = {
            email: "",
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //e is the event. e.target.value is the input value in the form. type is 
    //value argument that gets passed into handleInput.  In our case it could be username, email, or password
    //the square brackets are there because the type is a string at first, therefore we need to key into the type in state 
    //and then evaulate that.
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then(() => this.props.history.push(`/`))
    }

    render() {
        return (
            <div className="session-form">
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label >Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                        />
                    </label>
                    <label >Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                        />
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default Signup;

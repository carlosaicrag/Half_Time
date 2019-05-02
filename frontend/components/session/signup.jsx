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
        // this.props.closeModal();
        this.props.action(this.state).then(this.props.closeModal);
    }

    rendererrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul> 
        )
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="session-header">
                    <h2>{this.props.formType}</h2>
                    <p>
                        Sign in to get personalized story reccommendations, 
                        follow authors and topics you love, and interact with stories
                    </p>
                </div>

                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label >
                        <input
                            className="session-inputs"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                            placeholder="Email"
                        />
                    </label>
                    <label >
                        <input
                            className="session-inputs"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                            placeholder="Password"
                        />
                    </label>
                    {/* <input className="session-inputs" type="submit" value={this.props.formType}/> */}
                    <button className="form-button">{this.props.formType}</button>
                </form>
                {this.rendererrors()}
            </div>
        )
    }
}

export default Signup;

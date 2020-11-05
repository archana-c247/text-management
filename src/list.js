import React, { Component } from 'react'
import Validator from "js-object-validation";
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            text: '',
            errors: ""
        }
    }
    handleChange = (event) => {
        event.preventDefault()
        const { target: { name, value } } = event
        this.setState({
            [name]: value,
            errors:""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
             const {text} = this.state
            const data = {
                text
            }
            const validations = {
                text: {
                    required: true
                }
            }
            const messages = {
                text: {
                    text: "This Field is required",
                },
            }
            const { isValid, errors } = Validator(data, validations, messages);
            if (!isValid) {
                this.setState({  errors:"This Filed is required" })
            }
        
}
    render() {
        const { errors, text } = this.state
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" value={text} name="text" Placeholder="Please enter text" onChange={this.handleChange} />
                    {errors  ?
                        <p className={'error'}>{errors}</p> : ""}
                        </div>
                    <button type="Submit" onClick={this.handleSubmit} >Add</button>
                </form>
            </>
        )
    }
}

export default List
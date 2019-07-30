import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    onChange = (e) => this.setState({title: e.target.value });
   
    render() {
        return (
        <form onSubmit={this.onSubmit} > 
            <input 
            type="text" 
            name="title" 
            value={this.state.title} 
            onChange={this.onChange} 
            placeholder="add todo"
            />
            <input 
            type="submit" 
            value="Submit" 
            />
        </form>
        )
    }
}

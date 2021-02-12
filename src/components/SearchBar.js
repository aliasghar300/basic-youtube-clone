import React, { Component } from "react";

class SearchBar extends Component {

    state = {searchTerm: ""};

    inputHandler = (e) => {
        this.setState({searchTerm: e.target.value})
        
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.searchTerm)
        
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.submitHandler}className="ui form">
                    <div className="field">
                        <label> Video Search </label>
                        <input type="text" value={this.state.searchTerm} onChange={this.inputHandler} />
                     </div>
                </form>
            </div>
        )
    }
    
}
export default SearchBar
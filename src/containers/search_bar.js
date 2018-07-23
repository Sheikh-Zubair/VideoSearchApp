import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchTerm } from '../actions/index';
import React, { Component } from 'react'; // it means Component = React.Component;
// a javascript class for search bar which inherits the properties of React.Component


class SearchBar extends Component {

   constructor (props){
       super (props);

       this.state = {
           term:''
       }
   }
    render() {

        return (
        <div className = "search-bar">
            <input
                value = {this.state.term}
                onChange={(event) => {this.onInputChange(event.target.value)}} />
        </div>
        ); // es6 syntax
    }
    
    onInputChange(term) { //old js syntax of same code above n curly braces
        this.setState({term});
        this.props.searchTerm(term); // passing the search term to the action creator
    }
}

function mapDispatchToProps (dispatch) {

    return bindActionCreators ({searchTerm:searchTerm}, dispatch);
    // {videosSearch:videosSearch}
}

export default connect (null, mapDispatchToProps)(SearchBar);



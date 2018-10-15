import React, { Component } from 'react';
import '../css/SearchResults.css';
import Aux from '../helper/Hoc';
import SearchResultDisplay from './SearchResultDisplay';

class SearchResults extends Component {

    render() {
        let searchResults = [];
        this.props.searchResults.forEach((value,key) => {
            searchResults.push(
                <SearchResultDisplay
                    searchResult={value}
                    key={key}
                  />
            );
        })

        return (
            <Aux>
                <div className="container-fluid container search-toolbar">
                    <div className="row">
                        <div className="col-4"> Name </div>
                        <div className="col-4"> Language </div>
                        <div className="col-3"> Description </div>
                    </div>
                </div>
                <div className="container-fluid container">
                    {searchResults}
                </div>
            </Aux>
        );
    }
}

export default SearchResults;

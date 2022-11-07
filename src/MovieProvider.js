import React, { Component } from "react";

export const MovieContext = React.createContext();

export class MovieProvider extends Component {
    state = {
        movieData: [{
            id: 1,
            name: 'bandersnatch',
            price: '$10'
        }, {
            id: 2,
            name: 'inception',
            price: '$20'
        }, {
            id: 3,
            name: 'harry potter',
            price: '$30'
        }]
    }
    render() {
        return (
            <React.Fragment>
                <MovieContext.Provider value={this.state.movieData}>
                    {this.props.children}
                </MovieContext.Provider>
            </React.Fragment>
        )
    }
}

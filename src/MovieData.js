import React, { Component } from "react";
import Display from "./Display";
import { MovieContext } from "./MovieProvider";

export default class MovieData extends Component {
    static contextType = MovieContext;

    // state = {
    //     movieData: [{
    //         id: 1,
    //         name: 'bandersnatch',
    //         price: '$10'
    //     }, {
    //         id: 2,
    //         name: 'inception',
    //         price: '$20'
    //     }, {
    //         id: 3,
    //         name: 'harry potter',
    //         price: '$30'
    //     }]
    // }

    render() {
        console.log(this.context);
        return <Display movieData={this.context} />
    }
}
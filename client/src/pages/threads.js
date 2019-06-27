import React, { Component } from 'react'
import "./floatingButton.css"
import CreateThreadModel from './newThreadModel';

export default class Threads extends Component {
    render() {
        return (
            <div className="container ">
                <div className="card border-secondary m-4" style={{maxWidth : "60rem"}}>
                <div className="card-body">
                <h4 className="card-title">Title: </h4>
                <p className="card-text">Description: Some quick example text to build on the card title 
                and make up the bulk of the card's content.</p>
                <div  style={{display: 'flex', justifyContent: "space-between"}}>
                <p> <span class="badge badge-pill badge-info">Info</span></p>
                <p> <span class="badge badge-secondary">Secondary</span></p>
                </div>
             </div>
            </div>
          <CreateThreadModel />
            </div>
        )
    }
}

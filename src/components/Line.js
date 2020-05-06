import Papa from 'papaparse';

import { lines } from "./MARTALines";
import React, { Component } from "react";
import Autosuggest from "react-autosuggest";


function Button (props) {
    return (<div><button
        key={props.name}
        className="lineBubble"
        style={{ "background-color":  props.color,
                'opacity':props.transparency}}
        onClick = {() => props.onClick(props.name)}
       
      ></button></div>)
    }
function ClearSelection (props) {
    return(<div><button
        key = {'clear'}
        className = 'lineBubble'
        style = {{"background-color": '#FFF'}}
        onClick = {() => props.onClick(null)}
        >clear</button></div>)
}


 

class Line extends Component{
   constructor(){
       super()
       this.state = {
           currentSelection: null,
           lines: {lines}
       }

    }

    handleClick(name){
        //work on this. CSS for this is in StationSearch.css
        this.setState({currentSelection: name})
        
        return;
    }

    render() {
        let arr = []
        
        lines.forEach(element => arr.push(<Button name = {element.name}
            color = {element.color}
            onClick = {(name) => this.handleClick(name)}
            transparency = {(this.state.currentSelection == null || this.state.currentSelection == element.name ? 1 : .5) } />))
        
        arr.push(<ClearSelection onClick = {(name) => this.handleClick(name)}
        ></ClearSelection>)
    return (<section className= 'container'>{arr}</section>);
       
    }


}

export default Line;


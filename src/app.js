import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
    render(){
        return(
            <h1>This is {this.props.Info.color} Car. And have max speed {this.props.Info.speed}</h1>
        )
    }
}
class Lambo extends React.Component{
    constructor(){
        super();
        this.state = {
            color : 'Yellow',
            speed : '250' 
        }
    }
    render(){
        const info = {
            color : 'Red',
            speed : '230'
        };    
        return(
            <div>
                <h1>Lambo is {this.state.color} color with speed {this.state.speed} </h1>
                <Car Info = {info} />
            </div>
        )

    }
}
export default Lambo;
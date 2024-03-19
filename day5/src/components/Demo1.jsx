import React from "react";

class Vechicle extends React.Component {
    render() {
        return <h1>Vehichle Class</h1>
    }
}

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "ford",
            color: "red"
        } // useState
    }
    changeColor = () =>{
        this.setState({color:"green"});
    }
    render() {
        return (
            <>
                <h2>Hi I am Car called {this.props.name} and {this.state.model}. My color is {this.state.color} . You called me using the class
                </h2>

                <button type="button" onClick={this.changeColor}>Change Color</button>

                <Vechicle />
            </>
        )
    }
}



/**

Vehicle class (props) age
Car Class numofwheels, Train Class

 */
/**
 
 */

// function CarFunc(){
//     return(
//         <h2>Hi I am From Car object you called me using functional Component</h2>

//     )
// }

/*

Online Exam - JEE,NEET, OBJECIVRE EXAM ONLINE

- Suppose You want to create a test portal where each question has only 2 min to be solved and you can select any of the 4 options -> a b c d.
1 min in fierst 3 phases -> 
1) only 1 min or 
2) you want that asap the component mounts on screen and is visble to students then the timer shoudk start
*/




/* *
1) Mounting
2) Updating
3) Unmounitng 

three phases
*/


/* Mounting  - Putting Elements into dom

- constructor()
- getDerviedStateFromProps()
- render()
- componentDidMount()


*/


export default Car;
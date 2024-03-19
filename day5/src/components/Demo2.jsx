// export deffault function func_name(){

// }

import React, { useState } from "react";

class Header extends React.Component{
    constructor(){
        super();
        console.log("I logged from render function")
        this.state = {
            name: "Mustang GT",
            brand: "Ford",
            average: 19
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("I logged from getderived...fromprops")
        // console.log("props state",props,state)
        return {name: props.name};
    }

    componentDidMount(){
        console.log("I logged from comp did mount methid");
    }

    render(){
        console.log("I logged from render fuctnion");

        console.log(this.props,this.state)

        return(
            <>
                <h1> I am header who are u </h1>
                {(2==2) ? "Hello Component" : "World"}
                {this.state.name}
            </>
        )
    }
}

function Header2(){
    console.log("Hello fgege");
    const [val,setVal] = useState({
        name: "Mustang GT",
        brand: "Ford",
        average: 19
    })
    return(
        <>
            <h1> I am header who are u </h1>
            {(2==2) ? "Hello Functional" : "World"}
            {val.name}
        </>
    )
}

export default Header;

/**

Create a Javascript function to change functional component to class based component on your own this will not be discussed in class just for your knowlege/fun

 */


/**
 * nmouting phase - just before mount during ount just after ount
 
 * 1. consturctor
 * 2. getDer...props
 * 3. render fuctnion
 * 4. component did mount
 * 
 * 
 * 
 * constructor function 
 * - called before anything else
 * - When the compoent is initated
 * - specify or set initial values
 * props is the argument and you have to call super()/super(props)
 * 
 * 
 * getDerivedSrteProps
 * this is called jsut beofre rendering the html inside the dom
 * you can set state base on inital props here
 * props and state
 * return -> this will be the updated 
 * 
 



Unmounting Phase
 */
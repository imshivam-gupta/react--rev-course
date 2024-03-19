import React from "react";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }

    delHeader = () => {
        this.setState({ show: false });
    }

    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />
        }

        return (
            <>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </>
        )
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component will leave bro")
    }
    render() {
        return (
            <h1>Child Comp</h1>
        )
    }
}

export default Container;
import React from 'react';

export default class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: undefined
        }
    }

    componentDidMount() {
      this.fetchData();
    }

    fetchData = () => {
    };

    render(){

        if (!this.state.url) {
           return( <div style={{position: "relative", margin: "0 auto", left: "40%", top: "100px"}}>Please wait, loading image...</div>);
        }

        return (
            <div>
            <img src={this.state.url} alt={""}/>
            </div>
        )
    }

}
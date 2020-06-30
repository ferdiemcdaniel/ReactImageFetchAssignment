import React from 'react';

export default class PlayButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isPaused: true 
        }
    }

    onToggle = () => {
        const {isPaused} = this.state;
        if(isPaused) this.props.playAction()
        else this.props.pauseAction();
        this.setState({isPaused: !isPaused});
    }

    render(){
        return(
            <button onClick={this.onToggle} style={{height: "30px"}}>
                {this.state.isPaused ? 'Play': 'Pause'}
            </button>
        )
    }
}
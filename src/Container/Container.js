import React from 'react';
import PlayButton from '../Elements/Button';
import ChangeCounter from '../Elements/Counter';
import Photo from '../Elements/Image';

const INTERVAL = 5000;

export default class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            dupe: 0, 
            remaining: INTERVAL,
            url: undefined,
        }
    }

    componentDidMount() {
      this.fetchData();
    }

    getImage = () => {
        fetch('https://source.unsplash.com/random')
            .then(({url}) => {
                this.setState({
                    counter: this.state.counter + 1,
                    dupe: (url === this.state.url ? this.state.dupe + 1 : this.state.dupe),
                    url
                });
                this.resume(INTERVAL);
            })
            .catch(error => {
                console.error('Error: ', error);
            })
    };

    pause = () => {
        if(this.state.start){
            window.clearTimeout(this.state.timerId);
            let remaining = this.state.remaining - (new Date() - this.state.start);
            this.setState({remaining});
        }
    }

    resume = (delay) => {
        let remaining = !!delay ? delay : this.state.remaining;
        const start = new Date();
        const timerId = window.setTimeout(() => {
            this.getImage();
        }, remaining);
        this.setState({
            timerId,
            start
        });
    }

    fetchData = () => {
        this.pause();
    }

    render(){
        const containerStyle = {
            height: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: "20%"
        };

        const statsContainer = {
            display: "flex",
            flexDirection: "row",
            width: "640px",
            height: "50px",
            justifyContent: "space-evenly",
            alignItems: "center"
        };
        return (
            <div style={containerStyle}>
                {(!this.state.url) 
                    ? (<div style={{border: "1px solid lightgray", width: "640px", height: "400px", justifyContent: "center", display: "flex", alignItems: "center"}}>Please wait, loading image...</div>)
                    : <Photo url={this.state.url} />
                }
                <div style={statsContainer}>
                    <ChangeCounter count={this.state.counter} label={"Image Change"} />
                    <ChangeCounter count={this.state.dupe} label={"Image Duplicate"}/>
                    <PlayButton pauseAction={this.pause} playAction={this.resume} />
                </div>
            </div>
        )
    }

}


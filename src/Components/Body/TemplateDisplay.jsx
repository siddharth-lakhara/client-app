import React, { Component } from 'react';
import PageScroll from '../PageScroll';
import Canvas from '../Canvas/Canvas';
import "./TemplateDisplay.css";


class TemplateDisplay extends Component {
    state={
        pageNumber: 0,
    }

    backPage = () => {
        let { pageNumber } = this.state;
        pageNumber = pageNumber - 1 >= 0 ? pageNumber - 1 : 0;
        this.setState({
            pageNumber: pageNumber,
        });
    }

    nextPage = () => {
        let { pageNumber } = this.state;
        const length = this.props.data.pages.length;
        pageNumber = pageNumber + 1 < length ? pageNumber + 1 : length - 1;
        this.setState({
            pageNumber: pageNumber,
        });
    }

    render() {
        const { backPage, nextPage } = this;
        

        return (
            <div className="canvas">
                <Canvas data={this.props.data} pageNumber={this.state.pageNumber} />
                <PageScroll backPage={backPage} nextPage={nextPage} />
            </div>
        );
    }
}

export default TemplateDisplay;

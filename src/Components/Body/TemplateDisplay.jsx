import React, { Component } from 'react';
import PageScroll from '../PageScroll';
import Canvas from '../Canvas/Canvas';
import "./TemplateDisplay.css";
import ReactGA from 'react-ga';

class TemplateDisplay extends Component {
    state={
        pageNumber: 0,
    }

    backPage = () => {
        let { pageNumber } = this.state;
        const currentPage = pageNumber + 1;
        pageNumber = pageNumber - 1 >= 0 ? pageNumber - 1 : 0;
        ReactGA.event({
            category: 'Navigation',
            action: `Went back from ${currentPage} -> ${pageNumber + 1}`,
          });
        this.setState({
            pageNumber: pageNumber,
        });
    }

    nextPage = () => {
        let { pageNumber } = this.state;
        const currentPage = pageNumber + 1
        const length = this.props.data.pages.length;
        pageNumber = pageNumber + 1 < length ? pageNumber + 1 : length - 1;
        ReactGA.event({
            category: 'Navigation',
            action: `Went forward from ${currentPage} -> ${pageNumber + 1}`,
          });
        this.setState({
            pageNumber: pageNumber,
        });
    }

    render() {
        const { backPage, nextPage } = this;
        return (
            <div className="canvas">
                <Canvas data={this.props.data} pageNumber={this.state.pageNumber} />
                <PageScroll backPage={backPage} nextPage={nextPage} pageNumber={this.state.pageNumber}/>
            </div>
        );
    }
}

export default TemplateDisplay;

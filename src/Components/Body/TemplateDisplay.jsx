import React, { Component } from 'react';
import PageScroll from '../PageScroll';
import Template1 from '../Templates/Template1';

const lookupTemplate = {
    "Bullet List": Template1,
    "Line Chart": (<div>Template to be Implemented</div>)
}

const RenderAllPages = ({ pagesList, pageNumber }) => {
    if (pagesList) {
        console.log('page',pagesList);
        const Pages = pagesList.map((p) => {
            const {template, ...data} = p;
            const TemplateName = lookupTemplate[p.template];
            if (p.template === "Bullet List") {
                return (
                <TemplateName data={data} />
                );
            } else {
                return (TemplateName);
            }
        });
        return Pages[pageNumber];
    }
    return <div>Something</div>;
}

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
        const { data } = this.props;
        // console.log('pages', data.pages);
        const { pageNumber } = this.state;
        const { backPage, nextPage } = this;
        // const pageToDisplay = <div>Something</div>;
        const pageToDisplay = <RenderAllPages pagesList={data.pages} pageNumber={pageNumber} />;
        return (
            <div>
                {pageToDisplay}
                <PageScroll backPage={backPage} nextPage={nextPage} />
            </div>
        );
    }
}

export default TemplateDisplay;

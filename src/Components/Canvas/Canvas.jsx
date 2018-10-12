import React, { Component } from 'react';
import BulletList from '../Templates/BulletList';
import './Canvas.css';

const lookupTemplate = {
  'Bullet List': BulletList,
  'Line Chart': (<div>Template to be Implemented</div>),
};

const RenderAllPages = ({ pagesList, pageNumber }) => {
  if (pagesList) {
    console.log('page', pagesList);
    const Pages = pagesList.map((p) => {
      const { template, ...data } = p;
      const TemplateName = lookupTemplate[p.template];
      if (p.template === 'Bullet List') {
        return (
          <TemplateName data={data} />
        );
      }
      return (TemplateName);
    });
    return Pages[pageNumber];
  }
  return <div>Loading</div>;
};


class Canvas extends Component {
  render() {
    const { data, pageNumber } = this.props;
    const pageToDisplay = <RenderAllPages pagesList={data.pages} pageNumber={pageNumber} />;

    return (
      <div className="canvas-frame">
        {pageToDisplay}
      </div>
    );
  }
}


export default Canvas;

import React, { Component } from 'react';
import BulletList from '../Templates/BulletList';
import LineChart from '../Templates/LineChart';
import Feedback from '../Templates/Feedback';
import './Canvas.css';

const lookupTemplate = {
  'Bullet List': BulletList,
  'Line Chart': LineChart,
  Feedback,
};

const RenderAllPages = ({ pagesList, pageNumber }) => {
  if (pagesList) {
    console.log('page', pagesList);
    const Pages = pagesList.map((p) => {
      const { template, ...data } = p;
      const TemplateName = lookupTemplate[p.template];
      return (
        <TemplateName data={data} />
      );
    });
    return Pages[pageNumber];
  }
  return <div>Loading</div>;
};

class Canvas extends Component {
  render() {
    const { data, pageNumber } = this.props;
    console.log(data.pages);
    const pageToDisplay = <RenderAllPages pagesList={data.pages} pageNumber={pageNumber} />;

    return (
      <div className="canvas-frame">
        {pageToDisplay}
      </div>
    );
  }
}


export default Canvas;

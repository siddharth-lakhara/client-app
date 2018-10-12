import React from 'react';
import './Template1.css';

const Template1 = ({ data }) => {
  const {
    head, listItems,
  } = data;
  const { content, ...headStyle } = head;
  return (
    <div className="template1">
      <h1 style={headStyle}>{content}</h1>
      <ul>
        {listItems.map((item) => {
          const { content, ...contentStyle } = item;
          return (<li style={contentStyle}>{content}</li>);
        })}
      </ul>
    </div>
  );
};

export default Template1;

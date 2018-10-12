import React from 'react';
import './BulletList.css';

const BulletList = ({ data }) => {
  const {
    head, listItems,
  } = data;
  const { content, ...headStyle } = head;
  return (
    <div className="BulletList">
      <h1 style={headStyle} className="BulletList-h1">{content}</h1>
      <ul>
        {listItems.map((item) => {
          const { content, ...contentStyle } = item;
          contentStyle.fontSize = Number(contentStyle.fontSize);
          return (<li style={contentStyle} className="BulletList-li">{content}</li>);
        })}
      </ul>
    </div>
  );
};

export default BulletList;

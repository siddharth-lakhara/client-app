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
      <div>
        {listItems.map((item) => {
          const { content, ...contentStyle } = item;
          contentStyle.fontSize = Number(contentStyle.fontSize);
          return (
            <div>
              <input type="radio" name="question" style={{ margin: '30px 0px 0px 120px' }} />
              <label style={contentStyle} className="feedback-radio">
                {content}
              </label>
            </div>

          );
        })}
      </div>
      <div>Have any questions?</div>
      <textarea />
    </div>
  );
};

export default BulletList;

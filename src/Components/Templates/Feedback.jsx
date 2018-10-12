import React from 'react';
import './BulletList.css';
import ReactGA from 'react-ga';

const addQuestion = (value) => {
  ReactGA.event({
    category: 'Input Manipulation',
    action: 'Asked a question',
  });
  console.log('value', value);
};

const changeFeedback = (value) => {
  console.log('feedback', value);
  ReactGA.event({
    category: 'Input Manipulation',
    action: 'Changed Feedback',
  });
};

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
              <input type="radio" name="question" style={{ margin: '30px 0px 0px 120px' }} onChange={event => changeFeedback(event.target.value)} />
              <label style={contentStyle} className="feedback-radio">
                {content}
              </label>
            </div>

          );
        })}
      </div>
      <div className="bullet">
        <div className="bullet-qn">Have any questions?</div>
        <textarea onChange={event => addQuestion(event.target.value)} className="bullet-txt" />
      </div>

    </div>
  );
};

export default BulletList;

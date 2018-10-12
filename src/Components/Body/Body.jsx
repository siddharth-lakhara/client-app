import React, { Component } from 'react';
import axios from 'axios';
import TemplateDisplay from './TemplateDisplay';

const feedBackTemplate = {
  head: {
    content: 'How is template 1?',
      fontSize: 14,
        fontFamily: 'Arial'
  },
  listItems: [
      {
        content: 'Very good',
        fontSize: 14,
        fontFamily: 'Arial'
      },
      {
        content: 'Good',
        fontSize: 14,
        fontFamily: 'Arial'
      },
      {
        content: 'Bad',
        fontSize: 14,
        fontFamily: 'Arial'
      },
      {
        content: 'Very bad',
        fontSize: 14,
        fontFamily: 'Arial'
      }
    ],
      template: 'Feedback'
};

class Body extends Component {
  state={
    presentations: [{
      data: {}
    }]
  }

  componentDidMount() {
    const { userName, projectId } = this.props;
    axios.get(`https://1euk0sb2a2.execute-api.ap-south-1.amazonaws.com/hackathon-demo/quickapp?userId=${userName}`).then((response) => {
      const presentations = response.data.body;
      const templateData = presentations.find(elem => elem.projectId === projectId);
      templateData.pages.push(feedBackTemplate);
      this.setState({
        presentations: templateData,
      }, () => {
        console.log(this.state.presentations);
      });
    });
  }

  render() {
    return (
      <TemplateDisplay data={this.state.presentations}/>
    );
  }
}

export default Body;

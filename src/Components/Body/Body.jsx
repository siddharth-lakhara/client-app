import React, { Component } from 'react';
import axios from 'axios';
import TemplateDisplay from './TemplateDisplay';

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
      console.log(presentations);
      const templateData = presentations.find(elem => elem.projectId === projectId);
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

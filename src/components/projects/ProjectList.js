import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';

export default class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="project-list section">
        {
          projects && projects.map((project,index) => {
            return <ProjectSummary project={project} key={index}/>
          })
        }
      </div>
    )
  }
}

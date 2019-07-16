import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from "react-router-dom";

export default class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="project-list section">
        {
          projects && projects.map((project,index) => {
            return (
              <Link to={'/project/' + project.id} key={index}>
                <ProjectSummary project={project} key={index}/>
              </Link>
              )
          })
        }
      </div>
    )
  }
}

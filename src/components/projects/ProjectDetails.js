import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit accusantium quas blanditiis amet adipisci aut. Vero praesentium minima inventore explicabo harum repudiandae officiis possimus illo? Eaque ad numquam hic!</p>
        </div>
        <div className="card-action gray lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

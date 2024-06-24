import React from 'react'


const Project = () => {


    const myProjectList = Array.from({ length: 4 }).map((_, idx) => ({
        ProjectName: myProjectObj.getName(idx),
        ProjectDescription: myProjectObj.getDescription(idx),
        ProjectPhtos: myProjectObj.getPhtos(idx),
        ProjcetLink: myProjectObj.getProjectLink(idx),

    }));


  return (
    <div>Project</div>
  )
}

export default Project
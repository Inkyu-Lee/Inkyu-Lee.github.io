import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const myProjectObj = {
  getName(idx){
    return "TEST"
},

  getPhtos(idx){
    return "TEST2"
},

  getDescription(idx){
    return "TEST3"
},

  getProjectLink(idx){
    return "TEST4"
}
};

const Project = () => {


    const myProjectList = Array.from({ length: 4 }).map((_, idx) => ({
        ProjectName: myProjectObj.getName(idx),
        ProjectDescription: myProjectObj.getDescription(idx),
        ProjectPhtos: myProjectObj.getPhtos(idx),
        ProjcetLink: myProjectObj.getProjectLink(idx),

    }));
    console.log(myProjectObj.getName(1));
    console.log(myProjectObj.getDescription(1));
    console.log(myProjectObj.getProjectLink(1));

  return (
    <div>Project
      <h1></h1>
    </div>
    
  )
}

export default Project
import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
  	<div className='imgBox'>
      <img id='inputImage' alt='' src={imageUrl} width='500px' height='300px'/>
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>
  );
} 

export default FaceRecognition; 

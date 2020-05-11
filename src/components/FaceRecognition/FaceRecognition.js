import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
  	<div className='imgBox'>
      <img id='inputImage' alt='' src={imageUrl} width='500px' height='300px'/>
      {boxes.map(box => {
      	return <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    	})
    	}
    </div>
  );
} 

export default FaceRecognition; 

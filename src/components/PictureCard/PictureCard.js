import React from "react";



const PictureCard = props => (
<div className="col-md-3 pictureCard card"  data-id={props.id} onClick={props.onClick}> 
    <div className="card-body">
      <img alt={props.name} src={props.image} />
      <div><strong> {props.name}</strong></div>

      
    </div>

  </div>


);

export default PictureCard;

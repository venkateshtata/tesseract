import React from 'react';
import {OBJModel} from 'react-3d-viewer'

import '../styles/render-window.css';






const RenderWindow = (props) => (
  <div>
       <OBJModel className="render_window" src={props.item} texPath=""/>
  </div>
);


export default RenderWindow;


import React from 'react';
import {OBJModel} from 'react-3d-viewer'

import '../styles/render-window.css';

import droneB from "./droneB.obj";
import dolphin from "./dolphin.obj";




const RenderWindow = (props) => (
  <div>
       <OBJModel className="render_window" src={props.item} texPath=""/>
  </div>
);


export default RenderWindow;


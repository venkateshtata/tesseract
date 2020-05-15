import React from 'react';
import TopicTwo from './TopicTwo';
import Image from 'react-bootstrap/Image';
import '../styles/selected_item.css';

import j1_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j1.png";
import j2_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j2.png";
import j3_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j3.png";
import j4_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j4.png";
import j5_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j5.png";
import j6_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j6.png";
import j7_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j7.png";
import j8_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j8.png";



const SelectedItem = () => (
    <div>
        <TopicTwo text="Selected Item :"/>
        
        <Image className="selected_image" src={j3_img} rounded />
        <TopicTwo text="A-3"/>
    </div>
);


export default SelectedItem;


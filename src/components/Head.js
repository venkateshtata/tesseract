import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/head.css';
import Typical from 'react-typical'


const Head = () => (
  <div>
      {/* <h1 className="head" >You Imagine. We Print</h1> */}
      <Typical className="head"
        steps={['You Imagine. We Print. ',1]}
        loop={2}
        wrapper="p"
      />
      <p className="headPara">We are here to push your limits to imagine things, and let you create products seemlessly than ever before. By 3D printing what you need and delivering to your door doorstep.</p>
  </div>
);


export default Head;

import React from 'react';
import Header from './components/Header';
import Head from './components/Head';
import Tilee from './components/Tile';
import Hr from './components/Hr';
import Topic from './components/Topic';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Sections from './components/Sections';


const HomePage = (props) =>(
  <div>
    <Header />
    <Head />
    <Hr />
    <Topic text="What do we make ?" />
    <Tilee/>
    <Hr />
    <Topic text="Available print types" />
    <Cards />
    <Hr />
    <Topic text="Industries" />
    <Sections/>
    <Footer/>
  </div>
);





export default class App extends React.Component {
  state = { 
    tab: 'home' 
  };

  open_artifacts = () => {
    this.setState(() => ({
      tab: 'artifact'
    }))
  }

  open_engineering = () => {
    this.setState(() => ({
      tab: 'engineering'
    }))
  }

  open_prototyping = () => {
    this.setState(() => ({
      tab: 'prototyping'
    }))
  }
  render() {

    if(this.state.tab=='home'){
      return (<HomePage/>);
    }

    
  }




}

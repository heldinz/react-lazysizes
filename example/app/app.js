import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import LazySizes from 'react-lazysizes';

import './bower_components/bootstrap-customize/css/bootstrap.css';
import './assets/styles/app.scss';

class App extends React.Component {
  render() {
    return (
      <div className='layout-page'>
        <Header/>
        <main className='layout-main'>
          <div className='container'>
            <LazySizes width='1920' height='1024'
              dataSrc='http://lorempixel.com/1920/1024/sports/1'
              className='img-responsive'/>
            <hr/>
            <LazySizes width='940' height='500'
              dataSrc='http://lorempixel.com/940/500/sports/2'
              className='img-responsive'/>
            <hr/>
            <LazySizes width='640' height='480'
              dataSrc='http://lorempixel.com/640/480/sports/3'
              className='img-responsive'/>
            <hr/>
            <LazySizes width='600' height='600'
              dataSrc='http://lorempixel.com/600/600/sports/4'
              className='img-responsive'/>
            <hr/>
            <LazySizes width='600' height='600'
              src='http://lorempixel.com/600/600/sports/6'
              className='img-responsive'/>
            <hr/>
            <LazySizes width='940' height='500'
              dataSrcSet='https://farm9.staticflickr.com/8200/8248153196_7a7664e147_m.jpg 240w,https://farm9.staticflickr.com/8200/8248153196_7a7664e147_n.jpg 320w,https://farm9.staticflickr.com/8200/8248153196_7a7664e147.jpg 500w,https://farm9.staticflickr.com/8200/8248153196_7a7664e147_c.jpg 800w,https://farm9.staticflickr.com/8200/8248153196_7a7664e147_b.jpg 1024w'
              className='img-responsive'/>
            <hr/>
            <LazySizes dataSrc='//www.youtube.com/embed/ZfV-aYdU4uE'
              iframe={true} frameBorder={0} width='650' height='480'/>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

function run() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}

import React, {Component} from 'react' ;
import './App.css';


import Header  from './weather/Header';
import Footer  from './weather/Footer';
import WeatherChannel from './weather/WeatherChannel';

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <Header />
        <WeatherChannel />
        <Footer />
      </div>
    );
  }
}

export default App;

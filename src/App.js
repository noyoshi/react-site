import React, {
  Component
} from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <MainPage />
      </div>
    );
  }
}

export default App;

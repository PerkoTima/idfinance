import React from "react";
import "./App.scss"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form'

function App() {
  return (
    <div className="app">
        <Header />
      <div className="wrapper">
        <Form/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

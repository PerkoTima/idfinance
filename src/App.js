import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Wrapper/Wrapper';
// import { useState } from 'react';
import schema from "./schema/schema.json"

function App() {
  // const [data, setData] = useState()
  console.log(schema)
  
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

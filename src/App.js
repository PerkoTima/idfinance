import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Wrapper/Wrapper';
import { getSchema } from './API/getSchema';

function App() {
  console.log(getSchema())
  async function getDataFromSchema(){
    try{
      const schemaData = await getSchema()
      console.log(schemaData)
    }catch(err){
      console.log(err)
    }
  }

  getDataFromSchema()
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

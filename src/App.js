import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title'
import Phrase from './components/Prhase'




function App() {
  return (
    <section className="containter">
      <div  className="container">
      <Title></Title>

      </div>
      <div className="container">
        <Phrase></Phrase>
      </div>
      
    </section>
  );
}

export default App;

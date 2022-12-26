import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import Clock from './index';
import Buttons from './Button';
import Table from './Table';


const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {
  return (
    <>
      <Clock/>
      <Buttons/>
      <Table/>
    </>
  );
}
root.render( <App/>)
export default App;

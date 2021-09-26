import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Donors from './components/Donors/Donors';

function App() {
  return (
    <div className="container py-5">
      <Header></Header>
      <Donors></Donors>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Voting from './components/Voting'
import Header from "./components/Header"
import Footer from "./components/Footer"

const current_date = new Date().getFullYear();

function App() {
  return (
    <div className="App">
      <Header/>
      <Voting />
      <Footer current_date={current_date}/>
    </div>
  );
}

export default App;

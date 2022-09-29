import './App.css';
import Exercises from './Components/Exercises/Exercises';
import Ques from './Components/Ques/Ques';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Exercises></Exercises>
      <Ques></Ques>
     
    </div>
  );
}

export default App;

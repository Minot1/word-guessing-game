import CustomBar from './CustomBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomBar percent="50%" word="deneme1"></CustomBar>
      <CustomBar percent="30%" word="deneme2"></CustomBar>
      <CustomBar percent="75%" word="deneme3"></CustomBar>
      <CustomBar percent="50%" word="deneme4"></CustomBar>
      <CustomBar percent="100%" word="deneme5"></CustomBar>
    </div>
  );
}

export default App;

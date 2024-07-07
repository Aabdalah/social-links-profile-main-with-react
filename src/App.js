import './App.css';
import Card from './Components/Card';
import avatr from './avatar-jessica.jpeg';
let description = {
  "h1":"Jessica Randall",
  "p1":"London,United Kingdom",
  "p2":`"Front-end developer and avid reader"`
}

let socila = {
  "l1":["https://github.com/Aabdalah","GitHub"],
  "l2":["https://www.frontendmentor.io/profile/Aabdalah","Frontend Mentor"],
  "l3":["https://www.linkedin.com/in/ahmed-abdallah-808828261/","LinkedIn"],
  "l4":["https://github.com/Aabdalah","Twitter"],
  "l5":["https://github.com/Aabdalah","Instagram"]
}

function App() {
  return (
    <div className="App">
      <Card data={[avatr,description,socila]}/>
    </div>
  );
}

export default App;

import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather city="London"/>
      <footer>
        <a href="https://github.com/kbish9/Weather-App-React" target="_blank" rel="noreferrer">
          Open source
        </a>       
         <span> website created by Kelsey Bishop</span>
      </footer>
      </div>
      
    </div>
  );
}



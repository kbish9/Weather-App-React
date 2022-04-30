import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
      <Weather city="London"/>
      <footer>
        Created by Kelsey Bishop and is 
        <a href="https://github.com/kbish9/Weather-App-React" target="_blank" rel="noreferrer">
          Open Source
        </a>
      </footer>
      </div>
      
    </div>
  );
}



import "./App.css";
import { AirPollution, DateTime, SearchBox, Weather } from "./components";

function App() {
  return (
    <div className="h-full bg-blue-50 p-8">
      <div className="flex items-center justify-between">
        <DateTime />
        <SearchBox />
      </div>
      <div className="flex gap-8 items-start">
        <Weather />
        <AirPollution/>
      </div>
    </div>
  );
}

export default App;

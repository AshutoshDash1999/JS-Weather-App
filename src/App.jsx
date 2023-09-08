import "./App.css";
import { DateTime, SearchBox, Weather } from "./components";

function App() {
  return (
    <div className="h-screen bg-blue-50 p-8">
      <div className="flex items-center justify-between">
        <DateTime />
        <SearchBox />
      </div>
      <div>
        <Weather />
      </div>
    </div>
  );
}

export default App;

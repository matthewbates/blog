import "./App.css";

import Blogs from "./components/Blogs";
import Header from "./components/Header";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Blogs />
    </div>
  );
}

export default App;

import './App.css';
import Sidebar from "./component/sidebar"
import Main from "./component/main"


function App() {
  return (
    <div className="layout">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;

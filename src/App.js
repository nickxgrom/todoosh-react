import Sidebar from "./components/Sidebar";
import Note from "./components/Note";

function App() {
  return (
    <div className="d-flex">
        <Sidebar />
        <Note />
    </div>
  );
}

export default App;
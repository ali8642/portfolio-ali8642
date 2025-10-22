import "./App.css";
import BlackFireCursor from "./components/BlackFireCursor";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <section className="blobMain">
        <div className="container">
          <div className="blob"></div>
        </div>
      </section>
      <Sidebar />
      <BlackFireCursor />
    </>
  );
}

export default App;

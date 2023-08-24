import "./App.css";
import { useState } from "react";
import Toast from "./components/Toast";

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="App">
      <button
        className="toast-toggle-btn"
        onClick={() => setShowToast(!showToast)}
      >
        {showToast ? "Hide Toast" : "Show Toast"}
      </button>
      {showToast && <Toast />}
    </div>
  );
}

export default App;

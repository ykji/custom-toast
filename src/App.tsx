import "./App.css";
import { useState } from "react";
import Toast, { ToastProps } from "./components/Toast";

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const deleteToastProps: ToastProps = {
    title: "Delete Confirmation",
    details:
      "You won't be able to undo this action. Do you want to delete this item?",
    actions: [
      {
        id: 1,
        name: "Confirm",
        onClick: () => {
          console.log("confirm");
        },
      },
      {
        id: 2,
        name: "Cancel",
        onClick: handleCloseToast,
      },
    ],
    color: "#2970FF",
  };

  return (
    <div className="App">
      <button
        className="toast-toggle-btn"
        onClick={() => {
          setShowToast(!showToast);
        }}
      >
        {showToast ? "Hide Toast" : "Show Toast"}
      </button>
      {showToast && <Toast {...deleteToastProps} />}
    </div>
  );
}

export default App;

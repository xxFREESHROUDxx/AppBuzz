import React from "react";
import "./App.css";
import PushNotificationDemo from "./PushNotificationDemo";

function App() {
  localStorage.setItem("code","console.log('apple')");
  return (
    <div className="App">
      <PushNotificationDemo />
    </div>
  );
}

export default App;

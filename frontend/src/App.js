import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Log from "./pages/log";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notFound";
import Goals from "./pages/goal";
import Register from "./pages/register";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUsername={setUsername} />} />
          <Route path="/login" element={<Login setUsername={setUsername} />} />
          <Route path="/log" element={<Log username={username} />} />
          <Route path="/dashboard" element={<Dashboard username={username} />} />
          <Route path="/goal" element={<Goals username={username} />} />
          <Route path="/register" element={<Register setUsername={setUsername} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import logo from "./logo.svg";
import "./App.css";
import Routing from "./Components/routing/routing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginFormik from "./Components/Login/logIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginFormik />}>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

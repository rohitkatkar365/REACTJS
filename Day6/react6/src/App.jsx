import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import PageNot from "./component/PageNot";
import User from "./component/User";
import Filter from "./component/Filter";
import Contact from "./component/Contact";
import Company from "./component/Company";
import Channel from "./component/Channel";
import Login from "./component/Login";
import Protected from "./component/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Protected Cmp={Home} />} />

          {/* About Page */}
          <Route path="/about" element={<Protected Cmp={About} />} />

          {/* User Page with Dynamic Parameter */}
          <Route path="/user/:name" element={<Protected Cmp={User} />} />

          {/* Filter Page */}
          <Route path="/filter" element={<Protected Cmp={Filter} />} />

          {/* Contact Page with Nested Routes */}
          <Route path="/contact" element={<Contact></Contact>}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
          </Route>

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* 404 Page Not Found */}
          <Route path="/*" element={<PageNot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

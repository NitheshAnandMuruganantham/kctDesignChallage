import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Contact from "./pages/contactus";
import Home from "./pages/home";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

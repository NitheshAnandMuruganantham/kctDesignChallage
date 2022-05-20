import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Contact from "./pages/contactus";
import Home from "./pages/home";
import Events from "./pages/events";
import AddEvents from "./pages/evensPage";
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/add" element={<AddEvents />} />
      </Routes>
    </div>
  );
};

export default App;

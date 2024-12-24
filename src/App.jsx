import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Detail from "./pages/detail";
import Feed from "./pages/feed";
import Results from "./pages/results";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<Detail />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./Pages/Main";
import Issue from "./Pages/Issue";
import Issue1 from "./Pages/Issue1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* <Route index element={<Main />} />
          <Route imdex element={<Issue/>} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/issue">
            <Route index element={<Issue />} />
            <Route path="1" element={< Issue1 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;

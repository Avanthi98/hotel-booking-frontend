import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Client_Pages/homePage";
import AdminPage from "./pages/Admin_Pages/adminHomePage";


function App() {
  return(
    <BrowserRouter>
    <Routes path="/*">
      <Route path="/admin/*" element={<AdminPage/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

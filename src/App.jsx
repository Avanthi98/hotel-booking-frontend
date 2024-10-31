import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Client_Pages/ClientHomePage/homePage";
import AdminPage from "./pages/Admin_Pages/adminHomePage";
import TestComponent from "./Components/Test/testComponent";
import Login from "./pages/LoginPage/loginPage";
import LoginPage from "./pages/LoginPage/loginPage";
import SignUpPage from "./pages/SignUpPage/signUpPage";


function App() {
  return(
    <BrowserRouter>
    <Routes path="/*">
      <Route path="/admin/*" element={<AdminPage/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
      {/*<Route path="/test" element={<TestComponent/>}></Route>*/}
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signup" element={<SignUpPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

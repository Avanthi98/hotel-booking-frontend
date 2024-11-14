import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Client_Pages/ClientHomePage/homePage";
import AdminPage from "./pages/Admin_Pages/adminHomePage";
import TestComponent from "./Components/Test/testComponent";
import LoginPage from "./pages/LoginPage/loginPage";
import CategoriesPage from "./pages/Client_Pages/ClientPages/categories";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />{" "}
      {/*Adding react hot toast for send messages*/}
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/test" element={<TestComponent />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/categories" element={<CategoriesPage />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

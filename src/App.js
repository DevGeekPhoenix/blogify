import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import PopularAuthors from "./Pages/PopularAuthors";
import SignUp from "./Pages/SignUp";
import HomeLayout from "./Pages/HomeLayout";
import DashbordLayout from "./Pages/DashbordLayout";
import SignIn from "./Pages/SignIn";
import UserBlogs from "./Components/UserDashboard/UserBlogs";
import NewBlog from "./Components/UserDashboard/NewBlog";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="popularauthors" element={<PopularAuthors />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />

          <Route path="dashboard" element={<DashbordLayout />}>
            <Route path="/dashboard" element={<UserBlogs />} />
            <Route path="newblog" element={<NewBlog />} />
            <Route path="blog/:id" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

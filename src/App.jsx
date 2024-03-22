
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import ProjectPage from './pages/ProjectPage'


// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
  
//   {
//     path: "/profile",
//     element:<AuthProvider><PrivateRoutes><Profile /></PrivateRoutes>
//     </AuthProvider>,
//   },
// ]);

function App() {
  return (
    <Router>
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/ProjectPage" element={<ProjectPage/>}/>
          {/* <Route path="/ProjectPage/:id" element={<ProjectPage/>}/> */}
        </Route>
      </Routes>
    </AuthProvider>
</Router>

  );
}

export default App;
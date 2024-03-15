import { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProvider from './contexts/UserContext';
import PrivateRoutes from './components/PrivateRoutes';
import Navbar from './components/Navbar';
import Login from './pages/login';
import ThemeProvider from './contexts/ThemeContext';
// import Timer from './components/Timer'
// import UseRefDemo from './components/UseRefDemo'

// const MyLazyComponent = lazy(()=>import('path_of_compoenn t or page'))
const LazyHomePage = lazy(() => import('./pages/home'));
const LazyAboutPage = lazy(() => import('./pages/about'));
const LazyContactPage = lazy(() => import('./pages/contact'));

function App() {


  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <Router>
            <div className='bg-white dark:bg-gray-800 text-black dark:text-white'>
            <Navbar />
            <Suspense fallback={<div>Loading....</div>}>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route element={<LazyHomePage />} path='/' />
                  <Route element={<LazyAboutPage />} path='/about' />
                  <Route element={<LazyContactPage />} path='/contact' />
                </Route>
                <Route element={<Login />} path="/login" />
              </Routes>
            </Suspense>
            </div>
          </Router>
        </ThemeProvider>
      </UserProvider>
    </>
  )
}

export default App

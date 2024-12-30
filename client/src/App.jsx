import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Cart from "./components/cart/Cart"
import ProfileInfo from "./components/profile/Profile"
import Search from "./components/search/bookList"
import Details from "./components/details/Details"
import Register from "./components/register/Register"
import { useEffect, useState } from "react"
import { AuthContext } from "./contexts/AuthContext"
import { getSession } from "./api/auth-api"



function App() {

  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state)
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    isAuthenticated: !!authState.email,
    changeAuthState
  }

  useEffect(() => {
    const initializeAuthState = async () => {
      try {

  
        
        const response = await getSession();
        

        
        if (response) {
          changeAuthState({
            _id: response._id,
            email: response.email,
          });
        }
      } catch (error) {
        console.error("Failed to initialize authentication:", error);
      }
    }

    initializeAuthState();
  }, []);


  return (
    <AuthContext.Provider value={contextData}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={contextData.isAuthenticated ? <ProfileInfo /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:bookId" element={<Details />} />
          <Route path="/cart" element={contextData.isAuthenticated ? <Cart /> : <h1>Sign in to use cart</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App

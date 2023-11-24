import './App.css'
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import {UserStorage} from "./UserContext.jsx";

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <UserStorage>
                        <Header></Header>
                        <Routes>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/login/*" element={<Login/>}></Route>
                        </Routes>
                        <Footer></Footer>
                    </UserStorage>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App

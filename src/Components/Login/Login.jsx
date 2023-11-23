import {Route, Routes} from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import LoginPasswordLost from "./LoginPasswordLost.jsx";
import LoginPasswordReset from "./LoginPasswordReset.jsx";
import LoginPasswordCreate from "./LoginPasswordCreate.jsx";

const Login = () => {
    return <div>
        <Routes>
            <Route path="/" element={<LoginForm/>}></Route>
            <Route path="/create" element={<LoginPasswordCreate/>}></Route>
            <Route path="/lost" element={<LoginPasswordLost/>}></Route>
            <Route path="/reset" element={<LoginPasswordReset/>}></Route>
        </Routes>
    </div>
}

export default Login
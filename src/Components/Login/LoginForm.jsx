import {Link} from "react-router-dom";
import React from "react";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import useForm from "../../Hooks/UseForm.jsx";
import {USER_GET} from "../../api.jsx";
import {UserContext} from "../../UserContext.jsx";

const LoginForm = () => {
    const {userLogin} = React.useContext(UserContext);
    const username = useForm();
    const password = useForm();

    React.useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            getUser(token)
        }
    }, [])

    async function getUser(token) {
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options)
        const json = await response.json()
        console.log(response)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!(username.validate() && password.validate())) return;

        userLogin(username.value, password.value);
    }

    return <section>
        <h1>Login</h1>
        <form action='' onSubmit={handleSubmit}>
            <Input name="username" label="User" type="text" {...username}></Input>
            <Input name="password" label="Password" type="password" {...password}></Input>
            <Button>Sign-in</Button>
            {/*<input type='text' value={username} onChange={({target}) => setUsername(target.value)}/>*/}
            {/*<input type='text' value={password} onChange={({target}) => setPassword(target.value)}/>*/}
        </form>
        <Link to="/login/create">Cadastro</Link>
    </section>
}

export default LoginForm
import {Link} from "react-router-dom";
import React from "react";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import useForm from "../../Hooks/UseForm.jsx";
import {TOKEN_POST, USER_GET} from "../../api.jsx";

const LoginForm = () => {
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

        const {url, options} = TOKEN_POST({username: username.value, password: password.value});
        const response = await fetch(url, options)
        const json = (await response).json()
        window.localStorage.setItem('token', json.token);
        await getUser(json.token);
        console.log('json:', json)
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
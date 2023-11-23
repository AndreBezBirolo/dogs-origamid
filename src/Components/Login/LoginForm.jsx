import {Link} from "react-router-dom";
import React from "react";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                return json;
            });
    }

    return <section>
        <h1>Login</h1>
        <form action='' onSubmit={handleSubmit}>
            <Input name="username" label="User" type="text"></Input>
            <Input name="password" label="Password" type="password"></Input>
            <Button>Sign-in</Button>
            {/*<input type='text' value={username} onChange={({target}) => setUsername(target.value)}/>*/}
            {/*<input type='text' value={password} onChange={({target}) => setPassword(target.value)}/>*/}
        </form>
        <Link to="/login/create">Cadastro</Link>
    </section>
}

export default LoginForm
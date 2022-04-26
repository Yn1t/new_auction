import styled from '@emotion/styled';
import { useState } from 'react';
import Input from './Input';

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1.5rem;
    color: inherit;
    border: 5px solid rgb(185, 206, 241);
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    height: max-content;
    min-width: 200px;
    min-height: 200px;
`;

const Button = styled.button`
    padding: 10px;
    margin-top: 10px;
    margin: 5px;
    background: radial-gradient(rgb(231, 235, 241), rgb(99, 117, 144));
    border-radius: 10px;
    color: rgb(98, 98, 98);
    box-shadow: 0 0 5px 2.5px rgb(99, 117, 144);
    font-size: 20px;
    min-width: 200px;
    max-width: 550px;
`;

type LoginInfo = {
    name?: string;
    pass?: string;
};

const LoginContainer = () => {
    const [loginData, setLoginData] = useState<LoginInfo>({});

    return (
            <LoginForm>

                <Input onChange={(value) => {
                    setLoginData({ name: value, pass: loginData.pass });
                }} placeholder="Input your email ..." type="email"/>

                <Input onChange={(value) => {
                    setLoginData({ name: loginData.name, pass: value });
                }} placeholder="Input your password ..." type="password"/>

                <Button> Login </Button>
                <Button> Registration</Button>
            </LoginForm>

    )
}

export default LoginContainer;
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useStore } from '../stores/storeContext';
import Home from '../../pages';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useRouter } from 'next/router';


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
    & * {
        margin-bottom: 2.5px;
    }
`;

const SubmitButton = styled(Button)`
    padding: 10px;
    margin-top: 10px;
    margin: 5px;
    background: rgb(185, 206, 241);
    border-radius: 10px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    min-width: 200px;
    max-width: 550px;
    text-align: center;
    &:hover {
        box-shadow: 0 0 5px 2.5px rgb(214, 214, 214);
    }
    &:hover * {
        color: rgb(185, 206, 241);
    }
`;

const StyledText = styled.link`  
`;

const Input = styled(TextField)`
`;

type LoginInfo = {
    email?: string;
    pass?: string;
};

const LoginContainer = () => {
    const router = useRouter(); 
    const { userStore } = useStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const signupEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
        location.pathname = "/signup";
    }

    const onSubmit = (data: LoginInfo) => {
        if (data.pass && data.email) {
            userStore.signin(data.email, data.pass);
            router.push("/");
        }
    };

    return (
        <LoginForm onSubmit={handleSubmit(onSubmit)}>

            <Input
                label="email"
                variant="filled"
                className={errors.email ? "red-error" : ""}

                error={Boolean(errors.email)}
                {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                    validate: (value: string) => {
                        if (value.length < 5)
                            return "Минимальная длина 5 символов";
                        if (!(RegExp(/\S+@\S+\.\S+/).test(value)))
                            return "Почта неправильная";
                    },
                })}
                helperText={
                    errors &&
                    errors.email &&
                    (errors.email.type == "required"
                        ? "Это поле обязательное"
                        : errors.email.message)
                }
            />

            <Input
                type="password"
                label="password"
                variant="filled"
                className={errors.pass ? "red-error" : ""}

                error={Boolean(errors.pass)}
                {...register("pass", {
                    required: true,
                    pattern: /\S+/,
                    validate: (value: string) => {
                        if (value.length < 5) return "Минимальная длина 5 символов";
                    },
                })}
                helperText={
                    errors &&
                    errors.pass &&
                    (errors.pass.type == "required"
                        ? "Это поле обязательное"
                        : errors.pass.message)
                }
            />

            <SubmitButton type="submit"> Login </SubmitButton>

            <SubmitButton onClick={signupEvent}>
                <StyledText as="a" href="/signup"> Signup </StyledText>
            </SubmitButton>

        </LoginForm>

    )
}

export default LoginContainer;
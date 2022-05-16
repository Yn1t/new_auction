import styled from "@emotion/styled";
import React, { useState } from 'react';
import { useStore } from "../stores/storeContext";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { signup } from "../api/authApi";
import { saveSession } from "../utils/authService";
import { debug } from "console";

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

type SignUpInfo = {
    email?: string;
    login?: string;
    pass?: string;
};

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

const Input = styled(TextField)`
`;

const SignupContainer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { userStore } = useStore();

    const onSubmit = (data: SignUpInfo) => {
        //debug;
        console.log(data.pass)
        if (data.pass && data.email && data.login) {
            signup(data.email, data.pass, data.login);
            saveSession(data.email, data.pass);
            location.href = "/";
        }
        
    };

    return (
        <>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="email"
                    variant="filled"
                    className={errors.email ? "red-error" : ""}

                    error={Boolean(errors.email)}
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+\.\S+$/,
                        validate: (value: string) => {
                            if ((!RegExp(/\S+@\S+\.\S+/).test(value)))
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
                    label="login"
                    variant="filled"
                    className={errors.login ? "red-error" : ""}

                    error={Boolean(errors.login)}
                    {...register("login", {
                        required: true,
                        pattern: /\S+/,
                        validate: (value: string) => {
                            if (value.length < 5) return "Минимальная длина 5 символов";
                        },
                    })}
                    helperText={
                        errors &&
                        errors.login &&
                        (errors.login.type == "required"
                            ? "Это поле обязательное"
                            : errors.login.message)
                    }
                />

                <Input
                    label="password"
                    type="password"
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

                <SubmitButton type="submit"> Submit </SubmitButton>

            </LoginForm>
        </>
    )
}

export default SignupContainer;
import React, { FC } from "react";
import styled from 'styled-components';
import Button from "./Button";
import StyledButton from "./Button";
import Input from "./Input";
import StyledInput from "./Input";
import Label from "./Label";
import { SubmitHandler, useForm } from 'react-hook-form';
import InvalidEmailError from "./InvalidEmailError";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const StyledForm = styled.form`
    width: 640px;
    display: flex;
    flex-direction: column;
    align-items: stretch; 
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch; 
    margin-bottom: 20px;
`;

const CheckboxField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin-bottom: 40px;
`;

const RequiredError = styled.span`
    color: var(--error-color);
    font-size: 14px;
    margin-top: 8px;
`;

type FormValues = {
    email: string;
    password: string;
};

const Form: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const {login} = useActions();
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        login(data.email, data.password);
    }

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {error &&
                <Field>
                    <InvalidEmailError>{error}</InvalidEmailError>
                </Field>
            }
            <Field>
                <Label>Логин</Label>
                <StyledInput 
                    type='text' 
                    placeholder='steve.jobs@example.com'
                    {...register('email', {required: 'Обязательное поле'})}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <RequiredError>{errors.email.message}</RequiredError>}
            </Field>
            <Field>
                <Label>Пароль</Label>
                <StyledInput 
                    type='password' 
                    placeholder='password'
                    {...register('password', {required: 'Обязательное поле'})}
                    aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <RequiredError>{errors.password.message}</RequiredError>}
            </Field>
            <CheckboxField>
                <StyledInput type='checkbox'/>
                <Label>Запомнить пароль</Label>
            </CheckboxField>
            <StyledButton type='submit' disabled={isLoading} primary>Войти</StyledButton>
        </StyledForm>
    );
};

export default Form;
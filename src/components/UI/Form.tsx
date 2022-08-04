import React, { FC } from "react";
import styled from 'styled-components';
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { useForm } from 'react-hook-form';

const StyledForm = styled.form`
    width: 640px;
    display: flex;
    flex-direction: column;
    align-items: stretch; 
`;

const Field = styled.div`
    height: 89px;
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

const Form: FC = () => {
    type FormValues = {
        email: string;
        password: string;
    };
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        alert(JSON.stringify(data))
    }

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Field>
                <Label>Логин</Label>
                <Input 
                    type='text' 
                    placeholder='steve.jobs@example.com'
                    {...register('email')}
                />
            </Field>
            <Field>
                <Label>Пароль</Label>
                <Input 
                    type='password' 
                    placeholder='password'
                    {...register('password')}
                />
            </Field>
            <CheckboxField>
                <Input type='checkbox'/>
                <Label>Запомнить пароль</Label>
            </CheckboxField>
            <Button type='submit'>Войти</Button>
        </StyledForm>
    );
};

export default Form;
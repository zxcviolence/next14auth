import React from 'react';
import { login } from '@/actions';

const LoginForm = () => {
    return (
        <form action={login}>
            <input type="text" name="username" required placeholder='username' />
            <input type="password" name="password" required placeholder='password' />
            <button>Login</button>
        </form>
    );
};

export default LoginForm;
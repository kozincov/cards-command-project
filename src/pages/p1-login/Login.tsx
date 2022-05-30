import React from 'react';
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import Checkbox from "../../common/checkbox/Checkbox";

const Login = () => {
    return (
        <>
            <h1>Log in</h1>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <Input placeholder="username" name="username" autoComplete="username" required id="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input placeholder="password" name="password" autoComplete="current-password" required id="password"
                           type="password"/>
                </div>
                <Checkbox>Remember me</Checkbox>
                <Button type="submit">Submit</Button>
            </form>
        </>
    );
};

export default Login;
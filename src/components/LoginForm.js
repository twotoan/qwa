import React from "react";
import Button from '@material-ui/core/Button';

function LoginForm() {
    return (
        <form>
            <input type="text" id="username"/>
            <input type="password" id="password"/>
            <Button variant="raised" color="primary"/>
        </form>
    )
}

export default LoginForm
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import axios from "axios";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        console.log('Login Form Submitted..');
        event.preventDefault();
        console.log('Username: ' + this.state.username);
        // TODO: Set up API mock..
        axios.post('https://db86c963-c36e-4b17-96b2-e64db9e85bfd.mock.pstmn.io/login', {
            firstName: this.state.username,
            lastName: this.state.password
        })
            .then(function (response) {
                console.log(response);
                return window.location.href = '/dashboard';
            })
            .catch(function (error) {
                console.log(error);
                return window.location.href = '/';
            });
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.container}>
                <form onSubmit={this.handleSubmit}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input id="username" autoFocus type="text" value={this.state.username}
                               onChange={this.handleChange}/>
                        <FormHelperText id="name-error-text">Error</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        <FormHelperText id="name-error-text">Error</FormHelperText>
                    </FormControl>
                    <Button
                        bssize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);

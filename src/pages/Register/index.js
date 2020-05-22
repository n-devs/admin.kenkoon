import React, { Suspense } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Skeleton from '@material-ui/lab/Skeleton';
import { useRegister } from '@kenkoon/controller';
import { useStyles } from './styles';
import axios from 'axios'

export default function RegisterPage() {
    const classes = useStyles();
    const {
        email,
        firstName,
        lastName,
        password,
        passwordConfirm,
        showPassword,
        showPasswordConfirm,
        textComponent,
        setEmail,
        setFirstName,
        setLastName,
        setPassword,
        setPasswordConfirm,
        setShowPassword,
        setShowPasswordConfirm
    } = useRegister();

    const history = useHistory();

    const handleChange = prop => event => {
        switch (prop) {
            case "email":
                const emailEleError = document.getElementById("email_error")
                emailEleError.textContent = "";
                setEmail(event.target.value)
                break;
            case "firstName":
                const firstNameEleError = document.getElementById("first_error")
                firstNameEleError.textContent = "";
                setFirstName(event.target.value)
                break;
            case "lastName":
                const lastNameEleError = document.getElementById("last_error")
                lastNameEleError.textContent = "";
                setLastName(event.target.value)
                break;
            case "password":
                setPassword(event.target.value)
                break;
            case "passwordConfirm":
                setPasswordConfirm(event.target.value);
                const passwordEleError = document.getElementById("password_error")
                passwordEleError.textContent = "";
                break;
            default:
                throw new Error();
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleClickShowPasswordConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const handleMouseDownPasswordConfirm = event => {
        event.preventDefault();
    };



    function goPath() {
        history.push('/login');
    }

    return (
        <Suspense
            fallback={
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <center>
                            <div className={classes.titleLoginContainer}>
                                <Skeleton variant="text" width={200} height={60} />
                                <Skeleton variant="text" width={260} height={60} />
                            </div>
                            <div className={classes.mainLoginContainer}>
                                <div>
                                    <FormControl className={clsx(classes.margin, classes.textField)}>
                                        <Skeleton variant="rect" width={260} height={50} />
                                        <Skeleton variant="rect" width={260} height={50} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={clsx(classes.margin, classes.textField)}>
                                        <Skeleton variant="rect" width={260} height={50} />
                                        <Skeleton variant="rect" width={260} height={50} />
                                        <Skeleton variant="rect" width={260} height={50} />
                                        <Skeleton variant="rect" width={260} height={50} />
                                        <Skeleton variant="rect" width={260} height={50} />
                                    </FormControl>
                                </div>
                                <div>
                                    <Skeleton variant="rect" width={150} height={80} />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}>
                                    <Skeleton variant="text" width={100} height={60} />
                                </div>
                            </div>
                        </center>
                    </Paper>
                </div>
            }
        >

            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <center>
                        <div className={classes.titleLoginContainer}>
                            <Typography variant="h3" component="h3">{textComponent.header.text}</Typography>
                            <Typography variant="h5" component="h5">{textComponent.title.text}</Typography>
                        </div>

                        <div className={classes.mainRegisterContainer}>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="standard-adornment-first-name">{textComponent.labal.firstName.text}</InputLabel>
                                    <Input
                                        id="standard-adornment-first-name"
                                        type="text"
                                        value={firstName}
                                        onChange={handleChange('firstName')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle first-name visibility"
                                                // onClick={handleClickShowEmail}
                                                // onMouseDown={handleMouseDownEmail}
                                                >
                                                    <AccountCircleIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <div id="first_error"></div>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="standard-adornment-last-name">{textComponent.labal.lastName.text}</InputLabel>
                                    <Input
                                        id="standard-adornment-last-name"
                                        type="text"
                                        value={lastName}
                                        onChange={handleChange('lastName')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle last-name visibility"
                                                // onClick={handleClickShowEmail}
                                                // onMouseDown={handleMouseDownEmail}
                                                >
                                                    <AccountCircleIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <div id="last_error"></div>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="standard-adornment-email">{textComponent.labal.email.text}</InputLabel>
                                    <Input
                                        id="standard-adornment-email"
                                        type="text"
                                        value={email}
                                        onChange={handleChange('email')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle email visibility"
                                                // onClick={handleClickShowEmail}
                                                // onMouseDown={handleMouseDownEmail}
                                                >
                                                    <AlternateEmailIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <div id="email_error"></div>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="standard-adornment-password">{textComponent.labal.pass.text}</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="standard-adornment-password-confirmation">{textComponent.labal.passC.text}</InputLabel>
                                    <Input
                                        id="standard-adornment-password-confirmation"
                                        type={showPasswordConfirm ? 'text' : 'password'}
                                        value={passwordConfirm}
                                        onChange={handleChange('passwordConfirm')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password-confirmation visibility"
                                                    onClick={handleClickShowPasswordConfirm}
                                                    onMouseDown={handleMouseDownPasswordConfirm}
                                                >
                                                    {showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <div id="password_error"></div>
                                </FormControl>
                            </div>
                            <div>
                                <Button onClick={() => {
                                    if (firstName !== "") {
                                        if (lastName !== "") {
                                            if (email !== "") {
                                                if (password === passwordConfirm) {
                                                    axios.post('https://api-kenkoon.herokuapp.com/api/auth/register', {
                                                        first_name: firstName,
                                                        last_name: lastName,
                                                        email: email,
                                                        password: password,
                                                        passwordConf: passwordConfirm
                                                    }).then(check => {
                                                        if (check) {
                                                            alert(`Finished account creation`)
                                                            setEmail("")
                                                            setFirstName("")
                                                            setLastName("")
                                                            setPassword("")
                                                            setPasswordConfirm("")
                                                            setShowPassword("")
                                                            setShowPasswordConfirm("")
                                                        }
                                                    });

                                                } else {
                                                    const passwordEle = document.getElementById("standard-adornment-password-confirmation")
                                                    const passwordEleError = document.getElementById("password_error")
                                                    passwordEleError.textContent = "password is required";
                                                    passwordEleError.style.color = "red";
                                                    passwordEle.focus();
                                                }
                                            } else {
                                                const emailEle = document.getElementById("standard-adornment-email")
                                                const emailEleError = document.getElementById("email_error")
                                                emailEleError.textContent = "Email is required";
                                                emailEleError.style.color = "red";
                                                emailEle.focus();
                                            }
                                        } else {
                                            const lastNameEle = document.getElementById("standard-adornment-last-name")
                                            const lastNameEleError = document.getElementById("last_error")
                                            lastNameEleError.textContent = "Last Name is required";
                                            lastNameEleError.style.color = "red";
                                            lastNameEle.focus();
                                        }
                                    } else {
                                        const firstNameEle = document.getElementById("standard-adornment-first-name")
                                        const firstNameEleError = document.getElementById("first_error")
                                        firstNameEleError.textContent = "First Name is required";
                                        firstNameEleError.style.color = "red";
                                        firstNameEle.focus();
                                    }

                                }} variant="outlined" size="large" color="primary" className={classes.margin}>{textComponent.button.regis.text}</Button>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}>
                                {/* <Link
                                    component="button"
                                    variant="body2"
                                    onClick={goPath}
                                >{textComponent.button.login.text}</Link> */}
                            </div>
                        </div>
                    </center>
                </Paper>
            </div>
        </Suspense>
    )
}
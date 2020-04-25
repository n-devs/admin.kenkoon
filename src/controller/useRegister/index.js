
import { useState } from 'react';

export default function useRegister() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [textComponent] = useState({
        header: {
            text: "Kenkoon"
        },
        title: {
            text: "Register Admin System"
        },
        labal: {
            email: {
                text: "E-mail"
            },
            firstName: {
                text: "First Name"
            },
            lastName: {
                text: "Last Name"
            },
            pass: {
                text: "Password"
            },
            passC: {
                text: "Password Confirmation"
            }
        },
        button: {
            login: {
                text: "Login"
            },
            regis: {
                text: "Register"
            }
        }
    });

    return {
        email, firstName, lastName, password, passwordConfirm, showPassword, showPasswordConfirm, textComponent,
        setEmail, setFirstName, setLastName, setPassword, setPasswordConfirm, setShowPassword, setShowPasswordConfirm
    }

}
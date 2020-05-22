import { useState } from 'react';

export default function useLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [textComponent] = useState({
        header: {
            text: "Kenkoon"
        },
        title: {
            text: "Login Admin System"
        },
        labal: {
            email: {
                text: "E-mail or Username"
            },
            pass: {
                text: "Password"
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

    return { email, password, showPassword, textComponent, setEmail, setPassword, setShowPassword }

}
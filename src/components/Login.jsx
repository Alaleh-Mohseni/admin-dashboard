import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "@contexts/auth-provider";
import { auth } from "@config/firebase";
import { useRedirectActiveUser } from "@hooks/useRedirectActiveUser";
import logo from "@assets/images/t-logo.png"
import ShowPassword from "./ShowPassword";

function Login() {
    const { login } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [invalid, setInvalid] = useState(false)

    useRedirectActiveUser(auth.currentUser, "/profile");

    const onSubmit = async (data) => {
        try {
            await login(auth, data?.email, data?.password)
            setInvalid(false)
            console.log("user logged in")
        } catch (error) {
            setInvalid(true)
            setTimeout(() => {
                setInvalid(false)
            }, 3000);
        }
    }


    return (
        <div className="mb-3">
            {invalid && <p className="alert alert-danger text-center">Error: invalid login credentials</p>}
            <div className="text-center">
                <img src={logo} className="logo" />
            </div>
            <p className="text-center mb-3 text-secondary">جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام نمایید</p>
            <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formEmail" >
                    <Form.Label>ایمیل</Form.Label>
                    <Form.Control
                        type="email"
                        {...register('email', {
                            required: 'ایمیل الزامی است',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "ایمیل معتبر نیست",
                            }
                        })}
                        className={`${errors.email && 'is-invalid'}`}
                    />
                    {errors.email && errors.email.type === 'required' &&
                        <p className="text-danger small mt-1">
                            {errors.email?.message}
                        </p>
                    }
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword" >
                    <Form.Label>رمز عبور</Form.Label>
                    <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', { required: 'رمز عبور الزامی است' })}
                        className={`${errors.password && 'is-invalid'}`}
                    />
                    <ShowPassword showPassword={showPassword} setShowPassword={setShowPassword} />
                    {errors.password && errors.password.type === 'required' &&
                        <p className="text-danger small mt-1">
                            {errors.password?.message}
                        </p>
                    }
                </Form.Group>

                <div className="mb-3">
                    <p className="small">
                        <Link className="text-primary">
                            رمز عبور خود را فراموش کرده اید؟
                        </Link>
                    </p>
                </div>
                <div className="d-grid">
                    <Button variant="primary" type="submit">
                        وارد شوید
                    </Button>
                </div>
            </Form>
            <div className="mt-3">
                <p className="mb-0  text-center">
                    ثبت نام نکرده اید؟ {" "}
                    <Link to="/register" className="text-primary">
                        ثبت نام کنید
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
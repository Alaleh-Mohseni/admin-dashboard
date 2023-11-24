import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "@contexts/auth-provider";
import { auth } from "@config/firebase";
import { Link } from "react-router-dom";
import { useRedirectActiveUser } from "@hooks/useRedirectActiveUser";
import logo from "@assets/images/t-logo.png"
import ShowPassword from "./ShowPassword";

function SignUp() {
    const { signup, currentUser } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [registerError, setRegisterError] = useState(false)
    const [registered, setRegistered] = useState(false)


    useRedirectActiveUser(currentUser, "/profile");

    const onSubmit = async (data) => {
        try {
            await signup(auth, data.email, data.password)
            setRegistered(true)
            setTimeout(() => {
                setRegistered(false)
            }, 3000);
            console.log("user registered");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setRegisterError(true)
                setTimeout(() => {
                    setRegisterError(false)
                }, 3000);    
            }
        }
    }


    return (
        <div className="mb-3 mt-2">
            {registerError && <p className="alert alert-danger text-center">Error: Email already in use</p>}
            {registered && <p className="alert alert-success text-center">User Registered Successfuly</p>}
            <div className="text-center">
                <img src={logo} className="logo" />
            </div>
            <p className="mb-3 text-center text-secondary">جهت استفاده از ویژگی های پلتفرم آموزش آنلاین ثبت نام کنید</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                        <p className="text text-danger small mt-1">
                            {errors.password?.message}
                        </p>
                    }
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicConfirmPassword" >
                    <Form.Label>تکرار رمز عبور</Form.Label>
                    <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        {...register('confirmPassword', {
                            required: 'تکرار رمز عبور الزامی است',
                            validate: (value) => {
                                if (watch('password') !== value) {
                                    return 'عدم تطابق با رمز وارد شده'
                                }
                            }
                        })}
                        className={`${errors.confirmPassword && 'is-invalid'}`}
                    />

                    <ShowPassword showPassword={showPassword} setShowPassword={setShowPassword} />
                    {errors.confirmPassword && errors.confirmPassword.type === 'required' &&
                        <p className="text text-danger small mt-1">
                            {errors.confirmPassword?.message}
                        </p>
                    }
                    {errors.confirmPassword && errors.confirmPassword.type === 'validate' &&
                        <p className="text text-danger small mt-1">
                            {errors.confirmPassword?.message}
                        </p>
                    }
                </Form.Group>

                <div className="d-grid">
                    <Button variant="primary" type="submit">
                        ثبت نام کنید
                    </Button>
                </div>
            </Form>
            <div className="mt-3">
                <p className="mb-0  text-center">
                    قبلا ثبت نام کرده اید؟{" "}
                    <Link to="/login" className="text-primary">
                        وارد شوید
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default SignUp
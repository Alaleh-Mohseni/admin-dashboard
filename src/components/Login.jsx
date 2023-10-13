import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/images/t-logo.png"
import ShowPassword from "./ShowPassword";

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className="mb-3">
            <div className="text-center">
                <img src={logo} className="logo" />
            </div>
            <p className="text-center mb-3 text-secondary">جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام نمایید</p>
            <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formPhoneNumber" >
                    <Form.Label>موبایل</Form.Label>
                    <Form.Control
                        {...register('mobile', { required: 'موبایل الزامی است', minLength: 11, maxLength: 11 })}
                        className={`${errors.mobile && 'is-invalid'}`}
                    />
                    {errors.mobile && errors.mobile.type === 'required' &&
                        (
                            <p className="text-danger small mt-1">
                                {errors.mobile?.message}
                            </p>
                        )
                    }
                    {errors.mobile && (errors.mobile.type === 'minLength' || errors.mobile.type === 'maxLength') &&
                        (
                            <p className="text-danger small mt-1">
                                موبایل باید 11 رقم باشد
                            </p>
                        )}
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
                        (
                            <p className="text-danger small mt-1">
                                {errors.password?.message}
                            </p>
                        )
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
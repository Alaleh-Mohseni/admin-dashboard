import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/t-logo.png"
import ShowPassword from "./ShowPassword";

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className="mb-3 mt-2">
            <div className="text-center">
                <img src={logo} className="logo" />
            </div>
            <p className="mb-3 text-center text-secondary">جهت استفاده از ویژگی های پلتفرم آموزش آنلاین ثبت نام کنید</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                        (
                            <p className="text-danger small mt-1">
                                {errors.confirmPassword?.message}
                            </p>
                        )
                    }
                    {errors.confirmPassword && errors.confirmPassword.type === 'validate' &&
                        (
                            <p className="text-danger small mt-1">
                                {errors.confirmPassword?.message}
                            </p>
                        )
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
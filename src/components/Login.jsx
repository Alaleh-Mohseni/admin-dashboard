import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/t-logo.png"
import ShowPassword from "./ShowPassword";

function Login() {
    return (
        <div className="mb-3">
            <div className="text-center">
                <img src={logo} className="logo" />
            </div>
            <p className="text-center mb-3 text-secondary">جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام نمایید</p>
            <Form className="mb-3">
                <Form.Group
                    className="mb-3"
                    controlId="formPhoneNumber"
                >
                    <Form.Label>موبایل</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                    <Form.Label>رمز عبور</Form.Label>
                    <Form.Control type="password"/>
                    <ShowPassword />
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
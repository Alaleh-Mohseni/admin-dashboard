import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/t-logo.png"
import ShowPassword from "./ShowPassword";

function SignUp() {
    return (
        <div className="mb-3 mt-2">
            <div className="text-center">
                <img src={logo} className="logo" />
            </div>
            <p className="mb-3 text-center text-secondary">جهت استفاده از ویژگی های پلتفرم آموزش آنلاین ثبت نام کنید</p>
            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="formPhoneNumber"
                >
                    <Form.Label>موبایل</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group
                    className="mb-3 position-relative"
                    controlId="formBasicPassword"
                >
                    <Form.Label>رمز عبور</Form.Label>
                    <Form.Control type="password" />
                    <ShowPassword />
                </Form.Group>
                <Form.Group
                    className="mb-3 position-relative"
                    controlId="formBasicPassword"
                >
                    <Form.Label>تکرار رمز عبور</Form.Label>
                    <Form.Control type="password" />
                    <ShowPassword />
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
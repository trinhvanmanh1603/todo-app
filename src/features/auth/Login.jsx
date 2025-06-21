import React, { useState } from "react";
import authStore from "../../store/auth/athStore";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(null); // null | true | false

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const success = await authStore.login(email, password);

        if (success) {
            setLoginStatus(true);
            setTimeout(() => {
                navigate("/home");
            }, 1500);
        } else {
            setLoginStatus(false);
        }
    };

    return (
        <div className="login">
            <h2>Đăng nhập</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Đăng nhập</button>

                {loginStatus === true && (
                    <p style={{ color: "green" }}>Đăng nhập thành công!</p>
                )}
                {loginStatus === false && (
                    <p style={{ color: "red" }}>Sai email hoặc mật khẩu.</p>
                )}

                <p>
                    Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;

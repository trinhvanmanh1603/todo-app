import React, { useState } from 'react';
import authStore from '../../store/auth/athStore';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (form.password !== form.confirmPassword) {
            setError("Mật khẩu xác nhận không khớp.");
            return;
        }

        try {
            await authStore.register({
                username: form.username,
                email: form.email,
                password: form.password
            });

            navigate('/');
        } catch (err) {
            setError(err.message || "Đăng ký thất bại.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <input
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                required
            />
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                required
            />
            <input
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
                required
            />
            <input
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                type="password"
                required
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit">Đăng ký</button>
        </form>
    );
};

export default RegisterForm;

import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import authStore from '../../store/auth/athStore';

const Login = () => {
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(null);

    const onFinish = async (values) => {
        const { email, password } = values;

        const success = await authStore.login(email, password);

        if (success) {
            setLoginStatus(true);
            message.success('Login successful!');
            setTimeout(() => {
                navigate('/home');
            }, 1500);
        } else {
            setLoginStatus(false);
            message.error('Login failed! Check credentials.');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                {loginStatus === true && (
                <p style={{ color: 'green' }}>Login successful!</p>
            )}
            {loginStatus === false && (
                <p style={{ color: 'red' }}>Login failed! Check credentials.</p>
            )}
            <p>
                Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </p>
            </Form.Item>
            
        </Form>
    );
};

export default Login;

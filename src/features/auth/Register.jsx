import React, { useState } from 'react';
import authStore from '../../store/auth/athStore';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import "../../styles/features/auth/register.scss";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setError('');

    if (values.password !== values.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp.');
      return;
    }

    try {
      await authStore.register({
        username: values.username,
        email: values.email,
        password: values.password
      });

      navigate('/');
    } catch (err) {
      setError(err.message || "Đăng ký thất bại.");
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      className="register-form"
      layout="vertical"
    >
      <h2>Đăng ký</h2>

      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Vui lòng nhập username' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Vui lòng nhập email' },
          { type: 'email', message: 'Email không hợp lệ' }
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Mật khẩu"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Xác nhận mật khẩu"
        rules={[{ required: true, message: 'Vui lòng xác nhận mật khẩu' }]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Form.Item name="agreement" valuePropName="checked" rules={[
        {
          validator: (_, value) =>
            value ? Promise.resolve() : Promise.reject(new Error('Bạn cần đồng ý với điều khoản')),
        },
      ]}>
        <Checkbox>Tôi đồng ý với các điều khoản và điều kiện</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Đăng ký</Button>
      </Form.Item>

      <p>Đã có tài khoản? <a href="/">Đăng nhập</a></p>
    </Form>
  );
};

export default RegisterForm;

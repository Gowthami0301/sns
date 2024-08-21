import React from 'react';
import { Form, Button, Card } from 'antd';
import FormInput from '../components/FormInput';
import { authService } from '../services/authService';
import '../styles/formStyles.css';
import {Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await authService.login(values);
      navigate('/users');
    } catch (error) {
    }
  };

  return (
    <div className="container">
      <Card title="Login" bordered={false} className="card">
        <Form onFinish={onFinish}>
          <FormInput name="email" label="Email" type="email" placeholder="Email" />
          <FormInput name="password" label="Password" type="password" placeholder="Password" />
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <span>Don't have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </Card>
    
    </div>
  );
};

export default Login;

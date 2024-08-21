import React from 'react';
import { Form, Button, Card } from 'antd';
import FormInput from '../components/FormInput';
import RoleSelect from '../components/RoleSelect';
import { authService } from '../services/authService';
import '../styles/formStyles.css';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const onFinish = async (values: any) => {
    try {
      await authService.signup(values);
      // Redirect to login or show success message
    } catch (error) {
      // Handle signup error
    }
  };

  return (
    <div className="container">
      <Card title="Sign Up" bordered={false} className="card">
        <Form onFinish={onFinish}>
          <FormInput name="firstName" label="First Name" placeholder="First Name" />
          <FormInput name="lastName" label="Last Name" placeholder="Last Name" />
          <FormInput name="email" label="Email" type="email" placeholder="Email" />
          <FormInput name="mobileNo" label="Mobile No" placeholder="Mobile No" />
          <RoleSelect />
          <FormInput name="password" label="Password" type="password" placeholder="Password" />
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </Card>
    </div>
  );
};

export default Signup;

import React from 'react';
import { Input, Form } from 'antd';

interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ name, label, type = 'text', placeholder }) => {
  return (
    <Form.Item name={name} label={label} rules={[{ required: true, message: `Please input your ${label}!` }]}>
      <Input type={type} placeholder={placeholder} />
    </Form.Item>
  );
};

export default FormInput;

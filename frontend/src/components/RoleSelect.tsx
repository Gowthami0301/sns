import React from 'react';
import { Select, Form } from 'antd';

const RoleSelect: React.FC = () => {
  return (
    <Form.Item name="role" label="Role" rules={[{ required: true, message: 'Please select a role!' }]}>
      <Select placeholder="Select Role">
        <Select.Option value="User">User</Select.Option>
        <Select.Option value="Admin">Admin</Select.Option>
        <Select.Option value="Guest">Guest</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default RoleSelect;

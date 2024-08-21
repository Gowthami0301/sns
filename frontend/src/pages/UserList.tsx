import React, { useEffect, useState } from 'react';
import { Card, Table } from 'antd';
import { userService } from '../services/userService';
import { IUser } from '../types/User';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await userService.listUsers();
      setUsers(result);
    };
    fetchUsers();
  }, []);

  const columns = [
    { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Mobile No', dataIndex: 'mobileNo', key: 'mobileNo' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
  ];

  return <Card>
         <Table dataSource={users} columns={columns} rowKey="id" />
       </Card> ;
};

export default UserList;

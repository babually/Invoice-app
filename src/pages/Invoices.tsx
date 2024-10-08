import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker, InputNumber, App } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface Invoice {
  key: string;
  id: string;
  client: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

const Invoices: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const columns: ColumnsType<Invoice> = [
    {
      title: 'Invoice ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status: string) => {
        let color = status === 'Paid' ? 'green' : status === 'Pending' ? 'geekblue' : 'volcano';
        return (
          <span style={{ color: color }}>
            {status.toUpperCase()}
          </span>
        );
      },
    },
  ];

  const data: Invoice[] = [
    {
      key: '1',
      id: 'INV-001',
      client: 'Acme Corp',
      amount: 1000.00,
      date: '2024-03-15',
      status: 'Paid',
    },
    {
      key: '2',
      id: 'INV-002',
      client: 'Globex Inc',
      amount: 1500.50,
      date: '2024-03-20',
      status: 'Pending',
    },
    {
      key: '3',
      id: 'INV-003',
      client: 'Initech',
      amount: 2000.75,
      date: '2024-03-10',
      status: 'Overdue',
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log('New invoice:', values);
      // Here you would typically send the new invoice data to your backend
      message.success('Invoice created successfully');
      setIsModalOpen(false);
      form.resetFields();
    }).catch((info) => {
      console.log('Validate Failed:', info);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
          Create Invoice
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Create New Invoice"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="customerName"
            label="Customer Name"
            rules={[{ required: true, message: 'Please input the customer name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="customerAddress"
            label="Customer Address"
            rules={[{ required: true, message: 'Please input the customer address!' }]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item
            name="invoiceDate"
            label="Invoice Date"
            rules={[{ required: true, message: 'Please select the invoice date!' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            name="dueDate"
            label="Due Date"
            rules={[{ required: true, message: 'Please select the due date!' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: 'Please input the invoice amount!' }]}
          >
            <InputNumber
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value!.replace(/\$\s?|(,*)/g, '')}
              className="w-full"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Invoices;
import React from 'react';
import { Form, Input, DatePicker, InputNumber, Button, Select } from 'antd';

const { Option } = Select;

const CreateInvoice: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Here you would typically send the invoice data to your backend
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create Invoice</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="max-w-2xl"
      >
        <Form.Item name="clientName" label="Client Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="invoiceDate" label="Invoice Date" rules={[{ required: true }]}>
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item name="dueDate" label="Due Date" rules={[{ required: true }]}>
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
          <InputNumber
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value!.replace(/\$\s?|(,*)/g, '')}
            className="w-full"
          />
        </Form.Item>
        <Form.Item name="status" label="Status" rules={[{ required: true }]}>
          <Select>
            <Option value="pending">Pending</Option>
            <Option value="paid">Paid</Option>
            <Option value="overdue">Overdue</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-blue-500">
            Create Invoice
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateInvoice;
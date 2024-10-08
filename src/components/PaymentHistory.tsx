import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface Payment {
  key: string;
  id: string;
  invoiceId: string;
  amount: number;
  date: string;
  method: string;
}

const columns: ColumnsType<Payment> = [
  {
    title: 'Payment ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Invoice ID',
    dataIndex: 'invoiceId',
    key: 'invoiceId',
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
    title: 'Method',
    dataIndex: 'method',
    key: 'method',
  },
];

const data: Payment[] = [
  {
    key: '1',
    id: 'PAY-001',
    invoiceId: 'INV-001',
    amount: 1000.00,
    date: '2024-03-15',
    method: 'Credit Card',
  },
  {
    key: '2',
    id: 'PAY-002',
    invoiceId: 'INV-002',
    amount: 1500.50,
    date: '2024-03-20',
    method: 'Bank Transfer',
  },
  {
    key: '3',
    id: 'PAY-003',
    invoiceId: 'INV-004',
    amount: 750.25,
    date: '2024-03-22',
    method: 'PayPal',
  },
];

const PaymentHistory: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Payment History</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default PaymentHistory;
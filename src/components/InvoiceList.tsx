import React from 'react';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface Invoice {
  key: string;
  id: string;
  client: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

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
        <Tag color={color}>
          {status.toUpperCase()}
        </Tag>
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

const InvoiceList: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Invoice List</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default InvoiceList;
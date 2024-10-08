import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { DollarSign, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={15000}
              prefix={<DollarSign className="w-5 h-5 text-green-500" />}
              precision={2}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Invoices Sent"
              value={25}
              prefix={<FileText className="w-5 h-5 text-blue-500" />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Paid Invoices"
              value={20}
              prefix={<CheckCircle className="w-5 h-5 text-green-500" />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Overdue Invoices"
              value={5}
              prefix={<AlertCircle className="w-5 h-5 text-red-500" />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {RecDetails} from "./recDetails";
import {Table} from "antd";
import {Role, data, ExportStatus, MockTransaction} from "./data";

function App() {
  const [role, setRole] = useState<Role>(Role.SPENDER);
  const switchRole = ()=>{
    role === Role.SPENDER? setRole(Role.ADMIN) : setRole(Role.SPENDER)
  }

  const columns = [
    {
        title: "Vendor",
        dataIndex: "vendor",
        key: "vendor"
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date"
    },
    {
        title: "Method",
        dataIndex: "method",
        key: "method"
    },
    {
        title: "Amout",
        dataIndex: "amount",
        key: "amount"
    },
    {
        title: "Status",
        key: "status",
        render: (record: any)=>{
          return (
            <RecDetails gl={record.gl} tx={record.tx} receipt={record.receipt}
            exportMethod = {record.exportMethod} role={role}
            />
          )
        }
    }
  ]
  return (
    <div className="App">
      <div className="status">
        Current Role: {role}
      </div>
      <button onClick={switchRole} >Switch</button>
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import dataJson from '../assets/Data.json';

export default function ListPage() {
  const [Data, setData] = useState([]);
  return (
    <div>
      <Navbar />
      <Table data={dataJson.dataEvent} />
    </div>
  );
}

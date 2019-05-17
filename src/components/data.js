export const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  segment: 'A'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  segment: 'B'
}, {
  key: '3',
  name: 'Joe Black',
  age: 45,
  address: 'Sidney No. 1 Lake Park',
  segment: 'C'
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
  segment: 'A'
}, {
  key: '5',
  name: 'Betty White',
  age: 12,
  address: 'United States No. 2 Pipe View',
  segment: 'B'
},  {
  key: '6',
  name: 'Monica Pink',
  age: 22,
  address: 'India No. 8 Pop Avenue',
  segment: 'C'
}, {
  key: '7',
  name: 'Sara Red',
  age: 16,
  address: 'Brazil No. 10 Shake Park',
  segment: 'A'
}, {
  key: '8',
  name: 'Karen Blue',
  age: 82,
  address: 'Sweden No. 10 Lake View',
  segment: 'B'
},  {
  key: '9',
  name: 'Jessica Purple',
  age: 62,
  address: 'Norway No. 19 River Run',
  segment: 'C'
}, {
  key: '10',
  name: 'Kate Black',
  age: 18,
  address: 'Denmark No. 85 Chocolate Tunnel',
  segment: 'A'
},
];


export const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  // filters: [
  //   { text: 'Joe', value: 'Joe' },
  //   { text: 'Jim', value: 'Jim' },
  // ],
  // // filterMultiple: true,
  // filteredValue: filteredInfo.name || null,
  // onFilter: (value, record) => record.name.includes(value),
  // sorter: (a, b) => a.name.length - b.name.length,
  // sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  // ...this.getColumnSearchProps('age'),
  // sorter: (a, b) => a.age - b.age,
  // sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  // filters: [
  //   { text: 'London', value: 'London' },
  //   { text: 'New York', value: 'New York' },
  //   { text: 'Sidney', value: 'Sidney' },
  // ],
  // filteredValue: filteredInfo.address || null,
  // onFilter: (value, record) => record.address.includes(value),
  // sorter: (a, b) => a.address.length - b.address.length,
  // sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
}, {
  title: 'Segment',
  dataIndex: 'segment',
  key: 'segment',
  // filters: [
  //   { text: 'A', value: 'A' },
  //   { text: 'B', value: 'B' },
  //   { text: 'C', value: 'C' },
  // ],
  // filteredValue: filteredInfo.segment || null,
  // onFilter: (value, record) => record.segment.includes(value),
  // sorter: (a, b) => a.segment.length - b.segment.length,
  // sortOrder: sortedInfo.columnKey === 'segment' && sortedInfo.order,
}];

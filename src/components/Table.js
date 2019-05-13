import React from 'react';
import { Table, Button, Input, Icon } from 'antd';
import 'antd/dist/antd.css';



//Have to figure out how to use select here.

const data = [{
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




class TableExp extends React.Component {
    state = {
      filteredInfo: null,
      sortedInfo: null,
      searchText: '',
    };

    handleChange = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter,
      });
    }

    clearFilters = () => {
      this.setState({ filteredInfo: null });
    }

    clearAll = () => {
      this.setState({
        filteredInfo: null,
        sortedInfo: null,
      });
    }

    setAgeSort = () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'age',
        },
      });
    }


    //for the type in search feature
    getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => (
        <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
    });

    handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };


  render() {
//You need to change filtered info and set state on it
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      // filterMultiple: true,
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      ...this.getColumnSearchProps('age'),
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
        { text: 'Sidney', value: 'Sidney' },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    }, {
      title: 'Segment',
      dataIndex: 'segment',
      key: 'segment',
      filters: [
        { text: 'A', value: 'A' },
        { text: 'B', value: 'B' },
        { text: 'C', value: 'C' },
      ],
      filteredValue: filteredInfo.segment || null,
      onFilter: (value, record) => record.segment.includes(value),
      sorter: (a, b) => a.segment.length - b.segment.length,
      sortOrder: sortedInfo.columnKey === 'segment' && sortedInfo.order,
    }];


    return(
      <div>
        <div>Table appears here</div>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          <Button onClick={this.clearAll}></Button>
        </div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
    )
  }
}

export default TableExp;
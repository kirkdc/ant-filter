//NOT WIRED UP TO ANYTHING YET

import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredInfo: null,
      sortedInfo: null,
      searchText: '',
      columns: props.columns
    };
  }

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
          <Button onClick={this.passItOn}>PASS IT ON</Button>

          {console.log(filteredInfo)}
        </div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} pass={this.passItOn}/>
      </div>
    )
  }

}

export default Filter;
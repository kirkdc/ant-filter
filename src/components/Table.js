import React from 'react';
import { Table, Button, Input, Icon } from 'antd';
import { data } from './data';
import 'antd/dist/antd.css';


class TableExp extends React.Component {
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
      // this.props.newFilteredData(this.state.filteredInfo);
    }

    passItOn = () => {
      this.props.newFilteredData(this.state.filteredInfo);
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


  //This pulls the info from the prop { filters }
  getData = () => {
    const {segment, name} = this.props;

    //when the user changes the segment apply changes
    const handleAll =  data.filter(data => segment.length === 0 || segment.indexOf(data.segment) !== -1 || name.some(name => data.name.includes(name)));


     const segmentProp = data.filter(data => segment.length === 0 || segment.indexOf(data.segment) !== -1);

     const nameProp = data.filter(data => name.length === 0 ||
      name.some(name => data.name.includes(name)));
      // data.name.includes(name));


    console.log(this.props);
    // return data.filter(d => filters.length === 0 || filters.indexOf(d.segment) !== -1);
    console.log(this.props.name)
    return  handleAll;
  }


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
        </div>

        <Table columns={columns} dataSource={this.getData()} onChange={this.handleChange} pass={this.passItOn}/>
      </div>
    )
  }
}

export default TableExp;
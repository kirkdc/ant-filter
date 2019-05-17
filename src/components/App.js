import React from "react";
import TableExp from "./Table";
import ModalExp from "./Modal";

//for the plain table
// import {Button, Table } from 'antd';
// import { data, columns } from './data';

import "antd/dist/antd.css";
// import Column from 'antd/lib/table/Column';

class App extends React.Component {
  // dont know if this makes sense. I want this to get updated everytime a filter is added
  constructor(props) {
    super(props);
    this.clearEverything = React.createRef();
  }
  state = {
    segment: [],
    name: [],
    sortedInfo: null,
    searchText: ""
  };

  //Trying to set the filteredInfo to the changes made in the filter. Pass in my values from the modal and setState
  newData = test => {
    console.log(test);
    this.setState({
      filteredInfo: test
    });
  };

  onFilterSubmit = modal => {
    //filter request is being passed on to the App(parent) frm modal.
    console.log(modal);

    this.setState({
      segment: modal.seg,
      name: modal.name
    });
    // filterThis = (value, record ) => {
    //   record.name.includes(value);
    // }
  };

  checkboxFilter = (value, record) => {
    // record.{{column.name}}.includes(value)
  };

  newFilter = (value, record) => {
    record.segment.includes(value);
  };

  // handleChange = (pagination, filters, sorter) => {
  //   console.log("Various parameters", pagination, filters, sorter);
  //   this.setState({
  //     filteredInfo: filters,
  //     sortedInfo: sorter
  //   });

  //   // this.props.newFilteredData(this.state.filteredInfo);
  // };

  render() {
    return (
      <div>
        <ModalExp onSubmit={this.onFilterSubmit} />

        {/* <Table columns={columns} dataSource={data}  pass={this.passItOn}/> */}
      {console.log(this.state)}
        <TableExp
          segment={this.state.segment}
          name={this.state.name}
          newFilteredData={this.newData}
        />
      </div>
    );
  }
}
export default App;

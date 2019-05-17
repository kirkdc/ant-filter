import React from 'react';
import { Modal, Button, Tabs, Checkbox } from 'antd';
const TabPane = Tabs.TabPane;

//For the segments
const CheckboxGroup = Checkbox.Group;


const segment = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
];

const name = [
  { label: 'John', value: 'John' },
  { label: 'Jim', value: 'Jim' },
  { label: 'Joe', value: 'Joe' },
];

class ModalExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 'null',
      name: 'null',
    };
  }

  // handleFilterChange = (pagination, filters, sorter, seg) => {
  //   console.log('Various parameters', pagination, filters, sorter, seg);
  //   this.setState({
  //     filteredInfo: filters,
  //     sortedInfo: sorter,
  //   });
  // }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }


//to set up the check buttons and the modal
   onSegChange = (checkedValues) => {
    const seg = checkedValues;
    this.setState({ seg });
  }
//Need to make this work!
  onNameChange = (checkedValues) => {
    const name = checkedValues;
    this.setState({ name });
  }

  onFilterSubmit = (e) => {
    // console.log(this.state.seg);
    //when user click on OK this func is called and passes the state up to the parent as a prop(onSubmit) in the App.js file
    this.props.onSubmit(this.state);

  }


  render() {

    return (
      <div>
        <Button type="primary" onClick={() => this.setModalVisible(true)}>
          Filters
        </Button>
        <Modal
          title="Filters"
          centered
          visible={this.state.modalVisible}
          //onOk has to be passed the function that applies the filters
          onOk={this.onFilterSubmit}
          onCancel={() => this.setModalVisible(false)}
        >
          <p>THE ANT DESIGN SELECT COMPONENT HERE </p>

            <Tabs defaultActiveKey="1" tabPosition='left' size="large" style={{ height: 350 }}>

            <TabPane tab="Segment" key="1">

              <CheckboxGroup options={segment} defaultValue={[null]} onChange={this.onSegChange} />

            </TabPane>
            <TabPane tab="Name" key="2">

              <CheckboxGroup options={name} defaultValue={[null]} onChange={this.onNameChange} />

            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of tab 3
            </TabPane>
            <TabPane tab="Tab 4" key="4">
              Content of tab 4
            </TabPane>
            <TabPane tab="Tab 5" key="5">
              Content of tab 5
            </TabPane>
            <TabPane tab="Tab 6" key="6">
              Content of tab 6
            </TabPane>
            <TabPane tab="Tab 7" key="7">
              Content of tab 7
            </TabPane>
            <TabPane tab="Tab 8" key="8">
              Content of tab 8
            </TabPane>
            <TabPane tab="Tab 9" key="9">
              Content of tab 9
            </TabPane>
            <TabPane tab="Tab 10" key="10">
              Content of tab 10
            </TabPane>
            <TabPane tab="Tab 11" key="11">
              Content of tab 11
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default ModalExp;

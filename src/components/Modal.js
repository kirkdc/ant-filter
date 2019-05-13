import React from 'react';
import { Modal, Button, Tabs, Radio } from 'antd';

const TabPane = Tabs.TabPane;

class ModalExp extends React.Component {
  // state = {
  //   modalVisible: false,
  // };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }



//to set up the radio buttons
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      seg: 'null',
    };
  }

  handleSegChange = e => {
    const seg = e.target.value;
    this.setState({ seg });
  };

  onFilterSubmit = (e) => {
    // console.log(this.state.seg);
    //when user click on OK this func is called and passes the state up to the parent as a prop(onSubmit) in the App.js file
    this.props.onSubmit(this.state.seg);
  }


  render() {

    const { seg } = this.state;

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

              {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}> */}
              <Radio.Group onChange={this.handleSegChange} value={ seg } defaultChecked='false'  style={{ marginBottom: 8 }}>
                <Radio.Button value="A">A</Radio.Button>
                <Radio.Button value="B">B</Radio.Button>
                <Radio.Button value="C">C</Radio.Button>
              </Radio.Group>

            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of tab 2
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

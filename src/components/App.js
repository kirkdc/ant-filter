import React from 'react';
import TableExp from './Table';
import ModalExp from './Modal';

class App extends React.Component {
  onFilterSubmit(seg) {
    //now the filter request is being passed on to the app.
    console.log(seg)
  }

  render() {
    return(
      <div>
      <ModalExp onSubmit={this.onFilterSubmit} />
      <TableExp />
      </div>
    );
  }

}
export default App;
import React from 'react';
import Order from './Order';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Order/>
      </div>
    );
  }
}

  export default App;
import React from 'react'

class Welcome extends React.Component{
  render(){
    return (
      <h1>Ab yeh karke dikhao {this.props.name} {this.props.desc}</h1>

    // return(
    //   React.createElement('div',
    //     null,
    //     React.createElement('h1',null,'Welcome to class Components')
    //   )
    );
  }


}

export default Welcome;

import React from 'react';

class App extends React.Component {
  render () {
    const boss = 'qwelao7';
    return (
        <div>
          <h2>独立团,boss:{boss}</h2>
          <FirstCommand boss='qwe'></FirstCommand>
        </div>
    )
  }
}

class FirstCommand extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      soldiers: ['111', '222', '333']
    }
  }


  render () {
    return (
        <div>
          <h2>一营营长：{this.props.boss}</h2>
          <ul>
            {this.state.soldiers.map(val => {
              return <li key={val}>{val}</li>
            })}
          </ul>
        </div>
    )
  }
}

export default App

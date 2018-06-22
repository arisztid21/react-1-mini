import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      picture: '',
      name: '',
      friends: [{
        name: 'my 404 friend',
        picture: 'https://http.cat/404'},
        {name: 'my cat with the munchies',
        picture: 'https://http.cat/420'
      }]
    };
  }

changeName(event){
  console.log(event.target.value);
  this.setState({
    name: event.target.value
  })
}
changePicture(event){
  console.log(event.target.value);
  this.setState({
    picture: event.target.value
  })
}

addFriend(){
  const newFriend = {
    name: this.state.name,
    picture: this.state.picture
  };
  this.setState({
    friends: this.state.friends.concat(newFriend)
  });
}

  render() {
    return (
      <div>
        name: <input placeholder='SlowLaneFamilia' value={this.state.name} onChange = {(event) =>
        this.changeName(event)}/>
        picture: <input placeholder='first name' value={this.state.picture} onChange = {(event) =>
        this.changePicture(event)}/>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        <div>
          {this.state.friends.map(friend => {
          return <div>
                    <img src={friend.picture}/>
                  </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;

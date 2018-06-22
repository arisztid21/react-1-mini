import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      picture: 'alksdjfalksfj',
      name: 'Tyler',
      friends: [{
        name: 'My 404 friend',
        picture: 'https://http.cat/404'
      }, {
        name: 'My chill cat with the munchies',
        picture: 'https://http.cat/420'
      }]
    };
  }

  changeName(name) {
    this.setState({
      name: name,
    })
  }

  changePicture = (event) => {
    this.setState({
      picture: event.target.value,
    })
  }

  addFriend() {
    const newFriend = {
      name: this.state.name,
      picture: this.state.picture,
    };
    this.setState({
      friends: this.state.friends.concat(newFriend)
    });
  }
  
  render() {
    return (
      <div>
        Name: <input value={this.state.name} onChange={(event) => this.changeName(event.target.value)} />
        Picture: <input value={this.state.picture} onChange={(event) => this.changePicture(event)} />
        <button onClick={() => this.addFriend()}>Add friend</button>
        <div>
          {this.state.friends.map(friend => {
            return (
              <p><img src={friend.picture} alt={friend.name} /> {friend.name}</p>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;

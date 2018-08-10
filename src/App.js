import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      friends:[{
        name: "austin",
        picture: "http://http.cat/420"
      },{
        name: "arron davis",
        picture: "http://http.cat/500"
      }],
      name: '',
      picture: ''
    }
    this.updateName=this.updateName.bind(this)
    this.updatePicture=this.updatePicture.bind(this)
    this.addFriend=this.addFriend.bind(this)
  }
      updateName(val){
        this.setState({
          name: val
        })
      }
      
      updatePicture(val){
        this.setState({
          picture: val
        })
      }

      addFriend(){
        let friend = {
          name: this.state.name,
          picture: this.state.picture
        }
        const newFriends = this.state.friends.slice()
        newFriends.push(friend)
        this.setState({
          friends: newFriends
        })
      }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={e=> this.updateName(e.target.value)} placeholder="update name"/>
        <input value={this.state.picture} onChange={e=> this.updatePicture(e.target.value)} placeholder="update picture"/>
        <button onClick={()=>this.addFriend()}>new friend boi!</button>
        {this.state.friends.map((friend, index) => {
          return <div key={index}>name:{friend.name} picture:{<img className="pic"src={friend.picture} alt="cat friends"/>}</div>
        })}
      </div>
    );
  }
}

export default App;

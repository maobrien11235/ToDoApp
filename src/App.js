import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button'
import List, { ListItem, ListItemText} from 'material-ui/List'
import CheckBox from 'material-ui/Checkbox' 

class App extends Component {
  state={
    myList:[],
    isChecked: false
  }

  onClick=()=>{
    this.setState({
      myList:[...this.state.myList, "eggs"]
      }
    )
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <List>

          {this.state.myList.map(val=>(
            <ListItem key={val}>
              <CheckBox checked={this.state.isChecked}/>
              <ListItemText primary={val}/>
            </ListItem>))}

        </List>
        <Button raised color="primary" onClick={this.onClick}>Click Me</Button>

      </div>
    );
  }
}

export default App


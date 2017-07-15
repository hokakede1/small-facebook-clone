import React, {Component} from 'react'

export default class SearchBar extends Component{
  constructor(){
    super()

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

// Recording what user type in InputField
  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return(
      <div>
        <div>
        <input onChange={this.handleChange}
          placeholder='Search for a name ...'></input>
        <button>Search</button>
        </div>
        <div>
          <ul>
            <li>Profile</li>
            <li>Gallery</li>
            <li>Friends</li>
          </ul>
        </div>
      </div>
    )
  }
}

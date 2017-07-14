import React, {Component} from 'react'

export default class SearchBar extends Component{
  constructor(){
    super()

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return(
      <div>
        <input onChange={this.handleChange}
          placeholder='Search for a name ...'></input>
      </div>
    )
  }
}

import React, { Component } from 'react'

class NumberedList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [...props.items],
      id: props.id,
    }
  }

  add_item(item) {
    this.setState({
      items: [...this.state.items, item],
    }, () => {
      document.getElementById(this.state.id).appendChild(<li>{item}</li>)
    })
  }

  render() {
    return (
      <div className="content">
        <ol type="1" id={this.state.id}>
          {
            this.state.items.map((item, index) => (<li key={index}>{item}</li>))
          }
        </ol>
      </div>
    )
  }
}

export default NumberedList

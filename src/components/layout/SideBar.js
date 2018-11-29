import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  state = { activeItem: 'homee' }

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name })

}

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing vertical>
        <Menu.Item name='homee' active={activeItem === 'homee'} onClick={this.handleItemClick} >
       
        </Menu.Item>
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
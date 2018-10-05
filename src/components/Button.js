import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      class: 'drum-pad'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
  componentWillUpdate() {
    document.getElementById(this.props.name).volume = this.props.volume;
  }
  handleKeydown(e) {
    if (String.fromCharCode(e.keyCode) === this.props.name)
        this.handleClick()
  }
  handleClick() {
    const audio = document.getElementById(this.props.name)

    this.setState({
      class: 'drum-pad clicked-btn'
    })

    setTimeout(() => {
      this.setState({
        class: 'drum-pad'
      })
    }, 100)

    if (!this.props.powerTrigger)
      return

    audio.currentTime = 0;
    
    this.props.setDisplayedText(this.props.id)
    
    audio.play();
  }
  render() { 
    return (
      <div className={this.state.class} id={this.props.id} onClick={this.handleClick}>
        <audio className='clip' id={this.props.name} src={this.props.src}></audio>
        {this.props.name}   
      </div>
    )
  }
}

export default Button
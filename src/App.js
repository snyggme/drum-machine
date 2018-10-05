import React, { Component } from 'react'
import Button from './components/Button'
import { Control } from './components/Control'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: '1',
      displayedText: '',
      powerTrigger: true,
      bankTrigger: false
    }
    this.handleDisplayedText = this.handleDisplayedText.bind(this)
    this.handlePowerButton = this.handlePowerButton.bind(this)
    this.handleBankButton = this.handleBankButton.bind(this)
    this.handleVolumeChange = this.handleVolumeChange.bind(this)
  } 
  handleDisplayedText(text) {
    this.setState({
      displayedText: text
    })
  }
  handlePowerButton() {
    this.setState(prevState => ({
      powerTrigger: !prevState.powerTrigger 
    }))
  }
  handleBankButton() {
    const text = this.state.bankTrigger ? 'Drum Bank' : 'Piano Bank'
    this.setState(prevState => ({
      bankTrigger: !prevState.bankTrigger,
      displayedText: text
    }))
  }
  handleVolumeChange(e) {
    this.setState({
      volume: e.target.value,
      displayedText: 'Volume: ' + Math.round(e.target.value * 100)
    })
    
    setTimeout(() => {
      this.setState({
        displayedText: '' 
      })
    }, 1000)
  }
  render() {
    const keys = this.state.bankTrigger ? [...bankSecond] : [...bankFirst] 
    const content = this.state.powerTrigger ? 
          (<div id="drum-machine">
            <div id="grid">
              {keys.map(val => 
                <Button name={val.key} 
                        volume={this.state.volume} 
                        src={val.src} 
                        id={val.id} 
                        setDisplayedText={this.handleDisplayedText}
                        powerTrigger={this.state.powerTrigger}/>)}
            </div>
            <div className="controls-grid">
              <Control name='Power' trigger={this.state.powerTrigger}  onClick={this.handlePowerButton}/>
              <div id="display">{this.state.displayedText}</div>
              <Control name='Bank' trigger={this.state.bankTrigger} onClick={this.handleBankButton}/>
              <div className="slider">
                <input type="range" min='0' max='1' step='0.01'  onChange={this.handleVolumeChange}/>
              </div>
            </div>
          </div>)
         : 
          (<div id="drum-machine">
            <div id="grid">
              {keys.map(val => <Button name={val.key} volume={this.state.volume} />)}
            </div>
            <div className="controls-grid">
              <Control name='Power' trigger={this.state.powerTrigger}  onClick={this.handlePowerButton}/>
               <div id="display">{this.state.displayedText}</div>
              <Control name='Bank' trigger={this.state.bankTrigger}/>
              <div className="slider">
                <input type="range" min='0' max='1' step='0.01'  disabled='true'/>
              </div> 
            </div>
          </div>)
        
    return content
  }
}

const bankFirst = [
  {
    key: 'Q',
    id: 'Snare',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/snare.wav'
  },
  {
    key: 'W',
    id: 'Organ',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/organ.mp3'
  },
  {
    key: 'E',
    id: 'Guitar 1',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/guitar.wav'
  },
  {
    key: 'A',
    id: 'Guitar 2',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/guitar%20strum.wav'
  },
  {
    key: 'S',
    id: 'Kick Bass',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/kick%20bass.mp3'
  },
  {
    key: 'D',
    id: 'Kick Drum',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/kick%20drum.mp3'
  },
  {
    key: 'Z',
    id: 'Clap',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/clap.wav'
  },
  {
    key: 'X',
    id: 'Sax',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/saxophone.WAV'
  },
  {
    key: 'C',
    id: 'Plastic Drum',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/plastic%20drum.mp3'
  }
]

const bankSecond = [
  {
    key: 'Q',
    id: 'Piano 1',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/piano.wav'
  },
  {
    key: 'W',
    id: 'Piano 2',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/piano%202.wav'
  },
  {
    key: 'E',
    id: 'Piano 3',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/piano%203.wav'
  },
  {
    key: 'A',
    id: 'Piano 4',
    src: 'https://freesound.org/data/previews/203/203502_1622584-lq.mp3'
  },
  {
    key: 'S',
    id: 'Piano Hit',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/piano%20hit.mp3'
  },
  {
    key: 'D',
    id: 'Conga 1',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/conga.wav'
  },
  {
    key: 'Z',
    id: 'Conga 2',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/conga%202.wav'
  },
  {
    key: 'X',
    id: 'Conga 3',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/conga%203.wav'
  },
  {
    key: 'C',
    id: 'Alarm',
    src: 'https://raw.githubusercontent.com/snyggme/m3-solution/master/site/mp3_bank1/alarm.mp3'
  }
]

export default App;

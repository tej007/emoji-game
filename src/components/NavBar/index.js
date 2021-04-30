// Write your code here.
import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  renderScores = () => {
    const {topScore, totalScore, gameOver} = this.props
    if (gameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score-label">
          Score: <span className="score-value">{topScore}</span>
        </p>
        <p className="score-label">
          Score: <span className="score-value">{totalScore}</span>
        </p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar-container">
        <div className="title-with-score-container">
          <div className="logo-and-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              className="emoji-logo"
              alt="Emoji Logo"
            />
            <h1 className="title">Emoji Game</h1>
          </div>
          {this.renderScores()}
        </div>
      </nav>
    )
  }
}

export default Navbar

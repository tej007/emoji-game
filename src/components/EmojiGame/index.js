/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
    state={
        clickedEmojis:[],
        isGameOver:false,
        topScore:0
}

onClickEmoji=(id) =>{
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isEmojiPresent = clickedEmojis.includes(id)
    const clickedEmojisLength = clickedEmojis.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojis: [...previousState.clickedEmojis, id],
      }))
    }
  }

}

getShuffledEmojiList =() =>{
    const{emojiList} = this.props 
    return emojiList.sort(()=> Math.random() -0.5)
}

renderEmojisList = () =>{
    const shuffledEmojiList = this.getShuffledEmojiList()
    return (
        <ul className="emojiListContainer">
        {shuffledEmojiList.map(emoji =>(
        <EmojiCard 
            emoji={emoji}
            id = {emoji.id}
            onClickEmoji = {this.onClickEmoji}
            />
        ))}
            

        </ul>
    )
}


  setIsGameOver = value => {
    this.setState({isGameOver: value})
  }

  resetGame = () => {
    this.setIsGameOver(false)
    this.setState({clickedEmojis: []})
  }


renderScoreCard = () =>{
    const {emojiList} = this.props 
    const{clickedEmojis} = this.state 
    const isWon = clickedEmojis.length === emojiList.length 
    return (
        <WinOrLoseCard 
        isWon = {isWon}
        onClickButton = {this.resetGame}
        score={clickedEmojis.length}
        />
    )
};

render(){
    const {clickedEmojis,isGameOver,topScore} = this.state 
    return(
        <div className="emoji-game-container">
            <NavBar
            currentScore = {clickedEmojis.length}
            isGameOver={isGameOver}
            topScore = {topScore}
            />
            <div className="emoji-game-body">
          {isGameOver ? this.renderScoreCard() : this.renderEmojisList()}
        </div>
        </div>
    )
}
}


export default EmojiGame
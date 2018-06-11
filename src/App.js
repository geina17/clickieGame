import React, { Component } from 'react';
import Cards from './Components/Cards';
import Score from './Components/Score';
import Title from './Components/Title';
import playCards from './playCards.json';
import './App.css';

class App extends Component {
  state = {
    playCards,
    score: 0,
    clicked: []
  };

  checkedClicked = (e) => {
    const cardName = e.target.cardName
    const cardId = e.target.cardId
    if (this.state.clicked.includes(cardId)) {
      alert('youve already slected ${cardName}\n\nGame restarting...')
      this.setState({
        score: 0,
        clicked: [],
      })
    } else {
      const clickedArray = this.state.clicked
      clickedArray.push(cardId)
      this.setState({
        score: this.state.score + 1,
        clicked: clickedArray
      });
      if (this.state.score === 14) {
        alert('youve won!');
        this.setState({
          score: 0,
          clicked: []
        });
      }
    }
    this.shuffleCards();
  }
  shuffleCards = () => {
    const cards = this.state.playCards;
    for (let i = cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    } this.setState({
      playCards: cards
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='col-7'>
            <Title />
          </div>
          <div className="col-5">
            <Score
              score={this.state.score}
            />
          </div>
        </div>
        <div className='row'>
          <div className="col-13 animated fadeInUp">
            {this.state.playCards.map(card => (
              <Cards
                id={card.id}
                name={card.name}
                key={card.id}
                cardClass={card.class}
                cardImage={card.cardImage}
                shuffle={this.shuffleCards}
                checkedClicked={this.checkedClicked}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

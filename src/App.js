import React, { Component } from 'react';
import Header from "./components/Header";
// import Pictures from "./components/Pictures";
import PictureCard from "./components/PictureCard";
import friends from "./friends.json"


class App extends Component {

  state = {
    friends: friends,
    clickedCards: [], 
    score: 0,
    topScore: 0,
    message: "Click on the images to play, Don't click on an image twice!"
    
  }

  shuffleBoard(friends) {
    var j, x, i;
    for (i = friends.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = friends[i];
        friends[i] = friends[j];
        friends[j] = x;
    }
    return friends;
  }

  gameReset = () => {
    this.setState({
      friends: this.shuffleBoard(friends),
      clickedCards: [], 
      score: 0,
      message: "Clicked Twice! You Lose!"
      
    })
  }

  cardClick = (id) => {
    let clickedCards = this.state.clickedCards
    if (!clickedCards.includes(id)){
      clickedCards.push(id)
      console.log('clicked cards: ', clickedCards);

      this.setState({
        score: this.state.score + 1,
        topScore:  this.state.score + 1 > this.state.topScore ? this.state.score +1 : this.state.topScore,
        friends: this.shuffleBoard(friends),
  
      });

    } else if (clickedCards.includes(id)){
      this.gameReset()
      console.log('clicked cards: ', clickedCards);
    } 

    
  }
  


  render() {
    return (
      <div>
      <Header 
        score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
        <div className="jumbotron pictureArea">
          {this.state.friends.map(friend => (
            <PictureCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              onClick={this.cardClick.bind(this, friend.name)}
            />
          ))}
        


        </div>



     </div>
    );
  }
}

export default App;

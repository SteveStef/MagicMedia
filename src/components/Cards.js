import React, { Component } from 'react';
import '../App.css';

class CardContainer extends Component {
  state = {
    cards: [
      { question: 'What is social media marketing?', answer: 'Social media marketing is the process of using social media platforms to connect with your audience and promote your brand, products, or services. It involves creating and sharing content on social media, listening to and engaging with customers, and analyzing the results of your efforts to improve your strategy.', flipped: false },
      { question: 'How will this benifit my buisness?', answer: 'Social media can increase brand awareness, improve customer relationships, increase conversion rates, and improve search engine rankings. It allows for interaction with customers and the ability to post engaging content and run campaigns to drive traffic to websites.', flipped: false },
      { question: 'How does our agency approach marketing?', answer: 'We use a data-driven approach to customize and execute a social media strategy that aligns with your business goals. Our tactics include content creation, paid advertising, and engagement, and we track and analyze results to optimize and improve our approach.', flipped: false },
      { question: 'How to measure your success with us?', answer: 'Reach, engagement, traffic, conversion rate, and ROI are all important metrics to consider when evaluating the success of social media marketing efforts. These metrics can help you understand the effectiveness of your efforts and make informed decisions about how to optimize and improve your strategy.', flipped: false }
    ]
  };

  flip = (index) => {
    this.setState((state) => {
      const cards = state.cards.map((card, i) => {
        if (i === index) {
          return { ...card, flipped: !card.flipped };
        }
        return card;
      });
      return { cards };
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="card-container">
        {cards.map((card, index) => {
          return (
            <div
              className={`card${card.flipped ? ' flipped' : ''}`}
              onClick={() => this.flip(index)}>
              <div className="card-front">
                <div className="card-title">{!card.flipped ? card.question : ""}</div>
                <div className="card-content">{!card.flipped ? "Click for answer!" : ""}</div>
              </div>
              <div className="card-back">
              <div className="card-answer-wrapper">
                {card.flipped ? card.answer : ""}
              </div>
                
                </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardContainer;

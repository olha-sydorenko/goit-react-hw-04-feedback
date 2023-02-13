import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleGood = () => {
    this.setState(state => {
      return {
        good: state.good + 1,
      };
    });
  };
  onHandleNeutral = () => {
    this.setState(state => {
      return {
        neutral: state.neutral + 1,
      };
    });
  };
  onHandleBad = () => {
    this.setState(state => {
      return {
        bad: state.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return good ? Math.round((good / (good + neutral + bad)) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.onHandleGood}>
            Good
          </button>
          <button type="button" onClick={this.onHandleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.onHandleBad}>
            Bad
          </button>
        </div>
        <ul>Statistics</ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {this.countTotalFeedback()}</li>
        <li>Percentage: {this.countPositiveFeedbackPercentage()} %</li>
      </>
    );
  }
}

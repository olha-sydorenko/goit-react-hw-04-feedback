import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // onHandleButton = name => {
  //   this.setState(prevState => {
  //     return { [name]: prevState[name] + 1 };
  //   });
  // };

  const onHandleButton = name => {
    if (name === 'good') setGood(prevState => prevState + 1);
    if (name === 'neutral') setNeutral(prevState => prevState + 1);
    if (name === 'bad') setBad(prevState => prevState + 1);
  };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  const countTotalFeedback = () => {
    //const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // countPositiveFeedbackPercentage = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good ? Math.round((good / (good + neutral + bad)) * 100) : 0;
  // };

  const countPositiveFeedbackPercentage = () => {
    //
    return good ? Math.round((good / (good + neutral + bad)) * 100) : 0;
  };

  // const { good, neutral, bad } = this.state;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, bad, neutral })}
          onLeaveFeedback={onHandleButton}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

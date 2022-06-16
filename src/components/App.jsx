import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setStats = stat => {
    switch (stat) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        alert('Error');
    }
  };

  const totalFeadBack = good + neutral + bad;
  const options = Object.keys({ good, neutral, bad });
  const positive = Math.round((good / totalFeadBack) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={setStats} />
      </Section>
      <Section title="Statisctic">
        {totalFeadBack > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeadBack}
            positivePercentage={positive}
          ></Statistics>
        ) : (
          <Notification text="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};

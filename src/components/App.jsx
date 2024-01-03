import React, { useState } from 'react';
import { Section } from './Section/Section.jsx';
import { Statistics } from './Statistics/Statistics.jsx'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx'
import {Notification} from './Notification/Notification.jsx'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


    const onLeaveFeedback = (name) => {
    if (name === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (name === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (name === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? ((good / total) * 100).toFixed(0) : 0;
  };

  return (
    <>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={Object.keys({good, neutral, bad})}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
  
}

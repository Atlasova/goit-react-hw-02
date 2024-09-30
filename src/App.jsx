import './App.css';
import { useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const { good, neutral, bad } = feedback;

  let totalFeedback = good + neutral + bad;
  let positivePercent = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        total={totalFeedback}
        update={updateFeedback}
        reset={resetFeedback}
      />
      {good || neutral || bad ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          posPercent={positivePercent}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;

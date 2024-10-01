import css from './Feedback.module.css';

const Feedback = ({ feedBack, totalFeedback, positiveFeedback }) => {
  let { good, neutral, bad } = feedBack;
  return (
    <div className={css.feedback_container}>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;

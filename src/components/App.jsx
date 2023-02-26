import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackOptions title="Please leave feedback" />
    </div>
  );
};

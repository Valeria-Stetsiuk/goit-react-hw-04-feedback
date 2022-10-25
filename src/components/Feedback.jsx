import PropTypes from 'prop-types';
import { Statistics } from './Statistcs/Statistcs'; 
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const Feedback = ({
  options,
  countFeedback,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <Section class="section__title" title="Please leave feedback">
        <FeedbackOption onLeaveFeedback={countFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            total={total}
            options={options}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification warning="There is no feedback" />
        )}
      </Section>
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.object,
  countFeedback: PropTypes.func,
  total: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.func,
};
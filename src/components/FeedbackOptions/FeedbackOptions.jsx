import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  countTotalFeedback() {
    this.setState(state => ({
      total: state.good + state.neutral + state.bad,
    }));
    this.countPositiveFeedbackPercentage();
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      positivePercentage: ((100 * state.good) / state.total).toFixed(0),
    }));
  };

  goodStateValueIncrement = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
    this.countTotalFeedback();
  };

  neutralStateValueIncrement = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
    this.countTotalFeedback();
  };

  badStateValueIncrement = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
    this.countTotalFeedback();
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        {title && <h2 className={css.title}>{title}</h2>}
        <button
          className={css.buttonOttions}
          type="button"
          onClick={this.goodStateValueIncrement}
        >
          Good
        </button>
        <button
          className={css.buttonOttions}
          type="button"
          onClick={this.neutralStateValueIncrement}
        >
          Neutral
        </button>
        <button
          className={css.buttonOttions}
          type="button"
          onClick={this.badStateValueIncrement}
        >
          Bad
        </button>
        <div>
          <h3 className={css.title}>Statistics</h3>
          <div className={css.statBlock}>
            <span>Good: {this.state.good}</span>
            <span>Neutral: {this.state.neutral}</span>
            <span>Bad: {this.state.bad}</span>
            <span>Total: {this.state.total}</span>
            <span>Positive feedback: {this.state.positivePercentage} %</span>
          </div>
        </div>
      </div>
    );
  }
}

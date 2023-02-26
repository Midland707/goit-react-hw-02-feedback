import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodStateValueIncrement = () => {
    this.setState(state => ({
      good: this.state.good + 1,
    }));
  };

  neutralStateValueIncrement = () => {
    this.setState(state => ({
      neutral: this.state.neutral + 1,
    }));
  };

  badStateValueIncrement = () => {
    this.setState(state => ({
      bad: this.state.bad + 1,
    }));
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        {title && <h2 class={css.title}>{title}</h2>}
        <button
          class={css.buttonOttions}
          type="button"
          onClick={this.goodStateValueIncrement}
        >
          Good
        </button>
        <button
          class={css.buttonOttions}
          type="button"
          onClick={this.neutralStateValueIncrement}
        >
          Neutral
        </button>
        <button
          class={css.buttonOttions}
          type="button"
          onClick={this.badStateValueIncrement}
        >
          Bad
        </button>
        <div>
          <h3 class={css.title}>Statistics</h3>
          <div class={css.statBlock}>
            <span>Good: {this.state.good}</span>
            <span>Neutral: {this.state.neutral}</span>
            <span>Bad: {this.state.bad}</span>
          </div>
        </div>
      </div>
    );
  }
}

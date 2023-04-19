import { Component } from "react";
import { Statistics } from "components/statistics/statistics";
import { FeedbackOptions } from "components/feedbackOptions/feedbackOptions";
import { Section } from "components//section/section";
import { Notification } from "components/notification/notification";
import css from "./App.module.css";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render(){
    return(
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions 
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    )
  }
};

export default App;
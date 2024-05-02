import React, { useState, useEffect } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

const appStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // fontSize: 40,
  // color: '#010101',
};

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  // export class App extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       good: 0,
  //       neutral: 0,
  //       bad: 0,
  //     };
  //   }

  const handleFeedback = event => {
    const { name } = event.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };
  //   handleFeedback = event => {
  //     const { name } = event.target;
  //     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  //   };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <>
      <div style={appStyles}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={handleFeedback}
          />
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    </>
  );
}

// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     };
//   }

//   totalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   positivePercentageFeedback = () => {
//     return Math.round((this.state.good / this.totalFeedback()) * 100);
//   };

//   handleFeedback = event => {
//     const { name } = event.target;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.totalFeedback();
//     const positivePercentage = this.positivePercentageFeedback();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.handleFeedback}
//           />
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

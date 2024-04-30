import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback_container}>
      {Object.keys(options).map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={css.feedback_btn}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <ul className={css.feedback_list}>
//       {options.map(option => (
//         <li className={css.feedback_item} key={option}>
//           <button
//             type="button"
//             name={option}
//             onClick={onLeaveFeedback(option)}
//             className={css.feedback_btn}
//           >
//             {option}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section_container}>
      <h2 className={css.section_header}>{title}</h2>
      {children}
    </section>
  );
};

// export const Section = ({ title, children }) => {
//   return (
//     <section className={css.section_container}>
//       <h1 className={css.section_header}>{title}</h1>
//       {children}
//     </section>
//   );
// };

// export const Section = ({ title }) => <h1 className={css.header}>{title}</h1>;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

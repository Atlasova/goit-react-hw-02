import css from './Options.module.css';

const Options = ({ updateFeedback, resetFeedBack, totalFeedback }) => {
  return (
    <div className={css.options_wrap}>
      <button className={css.goodBtn} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button
        className={css.neutralBtn}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={css.badBtn} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {Boolean(totalFeedback) && (
        <button className={css.resetBtn} data-reset onClick={resetFeedBack}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

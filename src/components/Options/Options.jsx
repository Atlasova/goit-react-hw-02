import css from './Options.module.css';
const Options = ({ update, reset, total }) => {
  return (
    <div className={css.options_wrap}>
      <button className={css.goodBtn} onClick={() => update('good')}>
        Good
      </button>
      <button className={css.neutralBtn} onClick={() => update('neutral')}>
        Neutral
      </button>
      <button className={css.badBtn} onClick={() => update('bad')}>
        Bad
      </button>
      {total ? (
        <button className={css.resetBtn} onClick={reset}>
          Reset
        </button>
      ) : null}
    </div>
  );
};
export default Options;

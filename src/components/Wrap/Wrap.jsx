import s from './Wrap.module.css';

const Wrap = ({ children }) => {
  return <div className={s.wrap}>{children}</div>;
};

export default Wrap;

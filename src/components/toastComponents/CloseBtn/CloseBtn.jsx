import icon from '../../../assets/icons.svg';

const CloseBtn = () => {
  return (
    <span>
      <svg width="15" height="15">
        <use href={`${icon}#icon-x`}></use>
      </svg>
    </span>
  );
};
export default CloseBtn;

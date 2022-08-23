const Button = ({ isVisible }) => {

  return (
    <button className={ 'btn ' + (isVisible ? 'btn--show' : 'btn--hide')}>
      It works!
    </button>
  );

};

export default Button;
const Input = ({ validation }) => {

  const passwordOK = (ok) => {
    ok === '252525' ? validation(true) : validation(false);
  };

  return (
    <form className ="container--flex">

      <label className="form__title">Name</label>
      <input className="form__content" type="text" name="Name" placeholder="Your name..." />

      <label className="form__title">Password</label>
      <input className="form__content" type="password" name="Password" placeholder="Your Password..."
      onChange={ (ok) => passwordOK( ok.target.value ) } />

    </form>
  );
};

export default Input; 
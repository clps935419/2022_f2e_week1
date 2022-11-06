function Button(props){
  const {disabled} = props;
  const className = "my-btn";
  if(disabled){
    className += " .disabled";
  }
  return (
    <>
      <button type="button" className={className}>
        {props.children}
      </button>
    </>
  );
}
export default Button;
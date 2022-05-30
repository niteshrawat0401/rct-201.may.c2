
import pic from "../Components/eye.svg"
export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}

      <input className={`input`} type={"password"} size={size} onChange={onChange}/>
      <img src={pic} width={"20px"} alt="" />
    </div>
  );
};
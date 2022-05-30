// import Eye from "./eve.svg"
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
      <input className={`input
      
      ${type="text"} 

    ${rightLogo="./eve.svg"}

      `} />
    </div>
  );
};

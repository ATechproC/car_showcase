// "use client";

// import { CustomButtonProps } from "../types";

// const Button = ({
//   isDisabled,
//   btnType,
//   containerStyles,
//   textStyles,
//   title,
//   handleClick,
// }: CustomButtonProps) => (
//   <button
//     disabled={isDisabled}
//     type={btnType || "button"}
//     className={ title === "view more" ? "bg-[#40A2E3]  text-white p-[3px] rounded-[7px] mt-[6px] w-full": ` custom-btn ${containerStyles}`}
//     onClick={handleClick}
//   >
//     <span className={`flex-1 ${textStyles}`}>{title}</span>
//   </button>
// );

// export default Button;

type ContainerProps = React.ComponentProps<"button">;

export function Button1(props : ContainerProps) {
  return <button {...props} />
}

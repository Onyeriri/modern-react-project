import propTypes from "prop-types";
import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = classNames("px-3 py-5 border", {
    "border-blue-600 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-400 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "outline-4 bg-white text-blue-600": outline && primary,
    "outline-4 bg-white text-gray-900": outline && secondary,
    "outline-4 bg-white text-green-600": outline && success,
    "outline-4 bg-white text-yellow-400": outline && warning,
    "outline-4 bg-white text-red-500": outline && danger,
  });

  // const outlined = classNames({
  //   "outline-4 bg-white text-blue": outline,
  // });

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of the following can be true primary, secondary, success, warning and danger"
      );
    }
  },
};

export default Button;

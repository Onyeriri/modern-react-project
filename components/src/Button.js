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
  const finalCss = classNames("px-4", {
    "bg-blue-300": true,
    "bg-yellow-300": false,
  });

  console.log(finalCss);

  return (
    <button className="px-3 py-5 border border-blue-600 bg-blue-500 text-white">
      {children}
    </button>
  );
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

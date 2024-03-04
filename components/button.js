import Link from "next/link";
import PropTypes from "prop-types";

const ButtonSpan = ({ type, size, children, shadow }) => {
  return (
    <div
      className={`text-white font-bold text-center ${
        type == "tertiary"
          ? ` bg-tertiary hover:bg-tertiary-100 ${shadow ? "shadow-tertiary" : null}`
          : type == "primary"
          ? ` bg-primary hover:bg-primary-100 ${shadow ? "shadow-primary" : null}`
          : ` bg-secondary hover:bg-secondary-100 ${shadow ? "shadow-secondary" : null}`
      } ${
        size == "sm"
          ? `text-xs lg:text-sm lg:py-3 lg:px-9 py-1.5 px-5 rounded-xs lg:rounded-sm ${shadow ? "shadow-sm" : null}`
          : size == "md"
          ? `text-sm lg:text-lg py-4 px-7 lg:py-5 lg:px-10 rounded-md ${shadow ? "shadow-md" : null}`
          : `text-xs lg:text-2xl py-0.5 lg:py-[18px] px-3.5 lg:px-[54px] rounded-lg ${shadow ? "shadow-lg" : null}` 
      } 
    `}
    >
      {children}
    </div>
  );
};

function Button({ type, size, link, children, shadow }) {
  return link ? (
    <Link href={link}>
      <button>
        <ButtonSpan type={type} size={size} shadow={shadow}>
          {children}
        </ButtonSpan>
      </button>
    </Link>
  ) : (
    <button>
      <ButtonSpan type={type} size={size} shadow={shadow}>
        {children}
      </ButtonSpan>
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.string,
  children: PropTypes.string,
  // shadow: PropTypes.boolean,
};
Button.defaultProps = {
  type: "tertiary",
  size: "sm",
  children: "Click Me",
  // shadow: false,
};

export default Button;

import styles from "./Button.module.css";

const Button = ({ children, onClick, type = "button", ...props }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

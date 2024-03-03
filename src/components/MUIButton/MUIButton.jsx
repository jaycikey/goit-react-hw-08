import Button from "@mui/material/Button";

const MUIButton = ({
  children,
  onClick,
  type = "button",
  variant = "contained",
  color = "primary",
  ...props
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </Button>
  );
};
export default MUIButton;

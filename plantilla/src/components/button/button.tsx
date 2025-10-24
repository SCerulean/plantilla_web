import React from "react";
import button1 from "./Button.module.css"; // si usas CSS Modules
import button2 from "./btn2.module.css"; // si usas CSS Modules
interface ButtonProps {
  variant: "button1" | "button2"
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
}

const style = {
  button1,
  button2
}


export const ButtonComponent = ({
  variant,
  type = "button",
  children,
  disabled,
  onClick,
  loading,
  icon,
}: ButtonProps) => {
    
    const styles = style[variant]

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={styles.btn}
    >
      {loading ? (
        <span className={styles.loading}>Cargando...</span>
      ) : (
        <>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

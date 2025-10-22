import React from "react";
import styles from "./Button.module.css"; // si usas CSS Modules

interface ButtonProps {
  styleName: string;
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const ButtonComponent = ({
  styleName,
  type = "button",
  children,
  disabled,
  onClick,
  loading,
  icon,
}: ButtonProps) => {
    
    const classStyle = styles[styleName]

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classStyle}
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

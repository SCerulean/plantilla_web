"use client";
import styles from "./float-button.module.css";
import Image from "next/image";

const FloatButton = () => {
  return (
    <a
      href="https://wa.me/56912345678"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <Image
        src="/WhatsApp.svg.webp"
        alt="WhatsApp"
        width={60}
        height={60}
        priority
      />
    </a>
  );
};

export default FloatButton;

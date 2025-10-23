"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css"
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className={styles["nav"]}>
      <div className={styles["logo"]}>MiHotel</div>
      <div className={`${styles["linksContainer"]} ${open ? styles["open"] : ""}`}>
      <div className={styles["navLinks"]}>
        <Link href="/" onClick={toggleMenu}>Inicio</Link>
        <Link href="/Habitaciones" onClick={toggleMenu}>Habitaciones</Link>
        <Link href="/Servicios" onClick={toggleMenu}>Servicios</Link>
        <Link href="/Contacto" onClick={toggleMenu}>Contacto</Link>
      </div>
       </div>

      <div className={`${styles["hamburger"]} ${open ? styles["open"] : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

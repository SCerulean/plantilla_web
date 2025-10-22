import styles from "./navbar.module.css"; // si usas CSS Modules

export const NavBar = () =>{

    return (
        <nav className={styles["nav"]}>
            <div className={styles["logo"]}>
                <h2>logo</h2>
            </div>

            <ul className={styles["ul"]}>
              <li className={styles["li"]}>
                <a href="/Reservas">Reservas</a>
              </li>
              <li className={styles["li"]}><a href="">dos</a></li>
              <li className={styles["li"]}><a href=""> tres</a></li>
            </ul>
        </nav>
    )
}
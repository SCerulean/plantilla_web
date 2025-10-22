import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaTripadvisor } from "react-icons/fa";

export const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Hotel Valparaíso</h2>
          <p>Tu descanso frente al mar 🌊</p>
        </div>

        <div className={styles.socialSection}>
          <h3>Síguenos</h3>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Tripadvisor"><FaTripadvisor /></a>
          </div>
        </div>

        <div className={styles.contactSection}>
          <h3>Contáctanos</h3>
          <p>📍 Av. Altamirano 123, Valparaíso</p>
          <p>📞 +56 9 1234 5678</p>
          <p>✉️ reservas@hotelvalpo.cl</p>
        </div>
      </div>

      <div className={styles.copyRight}>
        © {new Date().getFullYear()} Hotel Valparaíso. Todos los derechos reservados.
      </div>
    </footer>
  );
};

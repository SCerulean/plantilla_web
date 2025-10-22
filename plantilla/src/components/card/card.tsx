"use client";
import styles from "./card.module.css"
import { ButtonComponent } from "../button/button";
import Image from "next/image";
export interface CardDataProps {

    id: number
    icon : string
    alt : string
    title : string | null,
    description : string | null
    classStyle : string
   
} 


const Card = ({icon,alt,title, description ,classStyle}: CardDataProps) => {


return (
        <div className={styles["cardContainer"]}>

            <div className={styles["fondo"]} >
              <Image
                src={icon}
                alt={alt}
                fill           // ocupa todo el contenedor
                style={{ objectFit: "cover" }} // recorta manteniendo proporción
                />
            </div>

            <div className={styles["info"]}>

                <h2 className={styles["title"]}>
                    {title}
                </h2>

                <p className={styles["descripcion"]}>
                    {description}
                </p>

                <a href="">ver mas detalles </a>
                <span className={styles["precio"]}>precio</span>

                <button className={styles["btn2"]}>Reservar Ahora </button>

            </div>
            
        </div>
)

}


export default Card
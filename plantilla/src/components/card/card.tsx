"use client";
import card1 from "./card.module.css"
import card2 from "./card2.module.css"
import card3 from "./card3.module.css"
import Image from "next/image";
export interface CardDataProps {

    id: number
    icon : string
    alt : string
    title : string | null,
    description : string | null
    variant : "card1" | "card2" | "card3"
   
} 

const style =  { 
card1,
card2,
card3
}


const Card = ({icon,alt,title, description ,variant}: CardDataProps) => {

    const styles = style[variant]

return (
        <div className={styles["cardContainer"]}>

            <div className={styles["imgContainer"]} >
              <Image
                src={icon}
                alt={alt}
                fill           // ocupa todo el contenedor
                className={styles["cardImg"]}
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
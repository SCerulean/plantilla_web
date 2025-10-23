import styles from "./mapa.module.css"
interface MapaProps {
    src : string
    classStyle: string
}



export const MapaUbicacion = ({src, classStyle} : MapaProps) => {


return(
        <div className={styles["mapaContainer"]}>

        <iframe src={src} className={styles["mapaIframe"]}
        ></iframe>
      </div>
)
    
}
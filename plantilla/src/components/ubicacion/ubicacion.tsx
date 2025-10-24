import mapa1 from "./mapa.module.css"

interface MapaProps {
    src : string
    variant: "mapa1"
}

const style = {
  mapa1,
}

export const MapaUbicacion = ({src, variant} : MapaProps) => {
const styles = style[variant]
return(
        <div className={styles["mapaContainer"]}>

        <iframe src={src} className={styles["mapaIframe"]}
        ></iframe>
      </div>
)
    
}
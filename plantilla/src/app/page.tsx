import styles from "./home.module.css";
import dataCard from "./data.json"
import Card from "@/components/card/card";
import Image from "next/image";
import { MapaUbicacion } from "@/components/ubicacion/ubicacion";
import FloatButton from "@/components/float-button/float-button";

export default function Home() {

  return (
<>
     <div  className={styles["homeImg"]} >
      <h1>Tu empresa</h1>
         <Image
                src={"/3.jpg"}
                alt={"img"}
                fill          
                priority
                className={styles["backgroundHome"]}
                />
    </div>

    <section  className={styles["infoSection"]}>
      <h1>Informacion de Tu empresa</h1>

      <p >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab illo, quam ipsa laboriosam rerum nesciunt architecto, quod suscipit natus quas ea voluptatibus, itaque commodi cum. Voluptatum a vero exercitationem earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum odio quaerat quos veritatis aspernatur ad sit tenetur dolor est dicta, doloremque laborum temporibus asperiores saepe fugit at ex libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quo odit eligendi accusamus placeat alias sit? Aliquam possimus, consectetur labore nulla, est eligendi, ratione perferendis vitae hic suscipit repellendus dolor!
      </p>

    </section>

    <section className={styles["HabitacionSection"]}>
      <h1>
        Habitaciones Populares
      </h1>
      
    {
      dataCard.map((data) => 
        <Card key={data.id} id={data.id} icon={data.icon} alt={data.alt} title={data.title} description = {data.description} variant="card1" />

      )  
    }
    </section>

    <section className={styles["ubicacion"]}>
      <h1>
        Nuestra Ubicacion 
      </h1>
      <MapaUbicacion   variant="mapa1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53462.650344800146!2d-71.71532110756415!3d-33.1244433209178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e2041ccac981%3A0xe4a0449c37f0da25!2sLaguna%20Verde%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1761249765980!5m2!1ses-419!2scl"></MapaUbicacion>
  
    </section>
    <FloatButton/>
</>
  );
}

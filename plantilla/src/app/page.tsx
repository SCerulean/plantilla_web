import { ButtonComponent } from "@/components/button/button";
import { NavBar } from "@/components/navbar/navbar";
import styles from "./page.module.css";
import dataCard from "./data.json"
import Card from "@/components/card/card";
import Carrusel from "@/components/carrusel/carrusel";
import Image from "next/image";
export default function Home() {


  return (
<>

    <NavBar/> 

     <section  className={styles["homeImg"]} >
      <h1>Tu empresa</h1>
         <Image
                src={"/3.jpg"}
                alt={"img"}
                fill          
                priority
                className={styles["backgroundHome"]}
                />
    </section>

    <section  className={styles["infoSection"]}>
      <h1>seccion de info</h1>

      <p >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab illo, quam ipsa laboriosam rerum nesciunt architecto, quod suscipit natus quas ea voluptatibus, itaque commodi cum. Voluptatum a vero exercitationem earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum odio quaerat quos veritatis aspernatur ad sit tenetur dolor est dicta, doloremque laborum temporibus asperiores saepe fugit at ex libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quo odit eligendi accusamus placeat alias sit? Aliquam possimus, consectetur labore nulla, est eligendi, ratione perferendis vitae hic suscipit repellendus dolor!
      </p>

    </section>

    <section className={styles["carrusel"]}>
      <h1>
        Carrucel Imagenes
      </h1>

  
    {
      dataCard.map((data) => 
        <Card key={data.id} id={data.id} icon={data.icon} alt={data.alt} title={data.title} description = {data.description} classStyle={data.classStyle} />

      )  
    }



    </section>


    <section>
      <h1>
        Ubicacion
      </h1>
    </section>


    <footer>
      <h1>footer</h1>
    </footer>

</>
  );
}

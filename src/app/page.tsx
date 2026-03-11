import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
      <main>
       <Banner/>
       <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-start",alignContent:"flex-start" ,gap: "50px"}}>
         <Card/>
       </div>
      </main>
    
  );
}

import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner (){
    return(
        <div className={styles.banner}>
                <Image src={'/img/banner.jpg'} 
                alt='cover'
                fill={true}
                priority
                objectFit='cover'/>;
                <div className={styles.bannerText}>
                    <h1 className="text-6xl font-bold tracking-tight">where every event finds its venue</h1>
                    <h3 className="text-3xl mt-4 opacity-90">Festival, Gala, or Conference. We got it all!</h3>
                </div>
        </div>
    )
}
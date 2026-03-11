    import styles from './card.module.css'
    import Image from 'next/image'

    export default function Card(){
        return(
            <div className={styles.card}>
                <div className={styles.cardimg}>
                    <Image src={'/img/room1.jpg'} 
                        alt='Product Picture'
                        fill={true}
                        objectFit='cover'
                    />
                </div>
                <div className={styles.cardText}>
                        Viridian Dome Hotel: Picus Hall A
                    <div className={styles.cardDesc}>
                        Host your unforgettable gala in our elegant ballroom: white-linen tables, towering floral centerpieces, candlelit ambiance, dramatic purple-orange lighting, premium service.
                    </div>
                    </div>
            </div>
        )
    }
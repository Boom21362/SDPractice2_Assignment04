    import styles from './card.module.css'
    import Image from 'next/image'

    export default function Card({venueName,imgSrc}:{venueName:string,imgSrc:string}){
        return(
            <div className="relative w-[280px] h-[320px] bg-white shadow-md shadow-black/20 rounded-[10px] overflow-hidden">
                <div className="relative w-full h-1/2">
                    <Image src= {imgSrc} 
                        alt='Product Picture'
                        fill={true}
                        objectFit= 'cover'
                    />
                </div>
                <div className={styles.cardText}>
                    {venueName}
                </div>
            </div>
        );
    }
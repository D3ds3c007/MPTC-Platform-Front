import styles from '@/app/components/ui/Loading/MLoading.module.css';

export function MLoading(){
    return(
        <>
            <div className={styles["spinner"]}></div>
        </>
    ) 
}
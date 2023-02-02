import { FiCheck, FiX } from "react-icons/fi";
import styles from "./NextPartnerProvider.module.css";

class NextPartnerProvider {

    constructor(listOfPartners) {
        this.listOfPartners = listOfPartners
    }

    nextPartner(next) {
        this.listOfPartners(next)
    }

    degree = () => new Map([
        ["COMPUTER_SCIENCE", "Informatyka"],
        ["MEDICINE", "Medycyna"],
        ["DIETETICS", "Dietetyka"],
        ["PEDAGOGY", "Pedagogika"],
        ["JOURNALISM", "Dziennikarstwo"],
    ]);

    gender = () => new Map([
        ["FEMALE", "kobieta"],
        ["MALE", "mężczyzna"],
    ]);

    renderNextPartner(next, saveAccept, saveDecline) {
        return this.listOfPartners !== undefined && this.listOfPartners[next] !== undefined ?
            (
                <>
                    <div className={styles.container}>

                        <div className={styles.photoSection}>
                            <FiCheck className={styles.check} onClick={saveAccept} />
                            <div className={styles.image}>

                            </div>
                            <FiX className={styles.x} onClick={saveDecline} />
                        </div>
                        <div className={styles.informations}>
                            <div className={styles.informations}>
                                <div>
                                    <div>Imie:{this.listOfPartners[next].userName}</div>
                                    <div>Wiek:{this.listOfPartners[next].age}</div>
                                    <div>Kierunek:{this.degree().get(this.listOfPartners[next])}</div>
                                    <div>Płeć: {this.listOfPartners[next].gender} </div>
                                    <div>Opis: {this.listOfPartners[next].description} </div>
                                </div>
                            </div>
                        </div>
                    </div></>
            ) : <></>
    }

    printDates() {
        return this.listOfPartners !== undefined ?
            (
                <>
                    <div className={styles.container}>
                        <div className={styles.informations}>

                            {this.listOfPartners.map((e) =>
                             <div> Imie: {e.userName}, numer telefonu: {e.phoneNumber} </div>)}
                        </div>
                    </div>
                </>
            ) : <></>
    }
}


export { NextPartnerProvider }
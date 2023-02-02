import styles from "./ButtonProvider.module.css";
import { Button } from "@mui/material";

class ButtonProvider {

    renderAutenticatedUserButtons(autenticatedUser) {
        return autenticatedUser ? (<>         <Link href="/selection" className={styles.backButton}>
            <Button variant="contained" color="primary">
                Przejdz do par
            </Button>
        </Link>
            <Link href="/choose-preferences" className={styles.backButton}>
                <Button variant="contained" color="primary">
                    Przejdz do preferencji
                </Button>
            </Link></>) : <></>
    }
}

const ButtonProviderInstance = new ButtonProvider();

export {
    ButtonProviderInstance as ButtonProvider1,
};

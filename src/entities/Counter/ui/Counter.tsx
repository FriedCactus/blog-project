import {Button} from "shared/ui/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import styles from "./Counter.module.css";
import {useTranslation} from "react-i18next";

export const Counter = () => {
    const {t} = useTranslation();

    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-test-id="counter" className={styles.Counter}>
            <h1 data-testid="value-title">{t('Значение')} = {counterValue}</h1>

            <div className={styles.buttons}>
                <Button
                    data-testid="increment-btn"
                    onClick={increment}
                >
                    {t('Увеличить')}
                </Button>
                <Button
                    data-testid="decrement-btn"
                    onClick={decrement}
                >
                    {t('Уменьшить')}
                </Button>
            </div>
        </div>
    );
};
import { useRef , useState} from 'react';
import Input from '../Shared/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [isFormValid, setISFormValid] = useState(true);

    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value.trim();
        if(enteredAmount <= 0 || enteredAmount > 5){
            setISFormValid(false);
            return;
        }
        setISFormValid(true);
        props.onAddToCart(+enteredAmount);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '0'
                }}

            />
            <button>+ Add</button>
            {!isFormValid && <p>Please enter a valid amout (1-5).</p>}
        </form>
    )
}
export default MealItemForm;

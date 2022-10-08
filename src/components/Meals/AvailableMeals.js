import { useEffect } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../Shared/Card';
import MealItem from './MealItem';
import useHttp from '../../hooks/use-http';
import { ENVRONMENT } from '../../environments/environment';
const AvailableMeals = () => {
    const { state, sendRequest } = useHttp();
    const apiUrl = `${ENVRONMENT.apibaseUrl}food.json`;

    useEffect(() => {
        sendRequest({ url: apiUrl });
    }, [apiUrl]);

    let mealItems = <h3>Loading....</h3>
    if(!state.loading && !state.error && state.data.length > 0) {
        mealItems = state.data.map((meal, index) => (
            <MealItem key={index} meal={meal} />
        ))
    }
    if(!state.loading && !state.error && state.data.length == 0) {
        mealItems = <h3>No Meal items found</h3>
    }
    if(!state.loading && state.error) {
        mealItems = <h3>{state.error}</h3>
    }
   
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealItems}
                </ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;
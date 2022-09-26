import classes from './AvailableMeals.module.css';
import mealsData from '../utils/data.json';
import Card from '../Shared/Card';
import MealItem from './MealItem';
const AvailableMeals = () => {
    console.log(mealsData);
    const mealItems = mealsData.map((meal, index) => (
        <MealItem key={index} meal={meal} />
    ))
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    { mealItems }
                </ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;
export default function Map() {
    let fruits = ["Apple","Mango","Banana","Grapes"];
    let newFruits = fruits.filter(fruit => fruit !== "Banana");  //Here we have used filter 
    console.log(newFruits);
    function fruitList() {
        return (
            <>
            {newFruits.map((fruit) => (
                <h3 key={fruit}>{fruit}</h3>    //Here we have used key because it is good to use key when you are using Map it acts like a unique identifier for each element in the list.
            ))}
            </>
        );
    }
    return (
        fruitList()
    );
}
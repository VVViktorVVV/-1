
import arrayOrder from "../arrays/arrayOrder";
// import arrayGZ from "./arrays/arrayGZ";
import arrayLost from "../arrays/arrayLost";

const finisharray = [];

const creatFinishArray = () => {

    finisharray.length = 0;    
    console.log(arrayLost);

    arrayOrder.forEach((el) => {
        if (!arrayLost.includes(el.id)) {
            finisharray.push(el)
        }
    });


    console.log(finisharray);
    return finisharray;
}



export default creatFinishArray;



import arrayOrder from "../arrays/arrayOrder";
import arrayLost from "../arrays/arrayLost";


const finisharray = [];

const creatFinishArray = () => {

    finisharray.length = 0;    
    arrayOrder.forEach((el) => {
        if (!arrayLost.includes(el.id)) {
            finisharray.push(el)
        }
    });




   

    console.log(finisharray);

    return finisharray;
}



export default creatFinishArray;


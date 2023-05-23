
import arrayOrder from "../arrays/arrayOrder";
import arrayLost from "../arrays/arrayLost";
import fetchPostUsers from "./FetchPost";


const finisharray = [];

const creatFinishArray = () => {

    finisharray.length = 0;    
    arrayOrder.forEach((el) => {
        if (!arrayLost.includes(el.id)) {
            finisharray.push(el)
            fetchPostUsers(el)
        }
    });

 

    console.log(finisharray);

    return finisharray;
}



export default creatFinishArray;


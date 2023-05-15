import arrayGZ from "../arrays/arrayGZ";


const creatGzArrayWithPeriodDays = () => {
    
    
    arrayGZ.forEach((el) => {
        el.periodNumbers.length = 0;
        

       
        for (let i = Number(el.startPeriod1.slice(1, 3)); i <= Number(el.finishPeriod1.slice(1, 3)); i += 1) {
            el.periodNumbers.push(i);
        };

        for (let i = Number(el.startPeriod2.slice(1, 3)); i <= Number(el.finishPeriod2.slice(1, 3)); i += 1) {
            el.periodNumbers.push(i);
        };
    });
    
    

    console.log(arrayGZ);

    

}

export default creatGzArrayWithPeriodDays;
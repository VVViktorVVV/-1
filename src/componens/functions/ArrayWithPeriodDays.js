import arrayOrder from "../arrays/arrayOrder";


const creatArrayWithPeriodDays = () => {
    
    
    arrayOrder.forEach((el) => {
        el.periodNumbers30t.length = 0;
        el.periodNumbers100t.length = 0;

       
        for (let i = Number(el.startPeriod30t.slice(1, 3)); i <= Number(el.finishPeriod30t.slice(1, 3)); i += 1) {
            el.periodNumbers30t.push(i);
        };

        for (let i = Number(el.startPeriod100t.slice(1, 3)); i <= Number(el.finishPeriod100t.slice(1, 3)); i += 1) {
            el.periodNumbers100t.push(i);
        };
    });
    
    

    console.log(arrayOrder);

}

export default creatArrayWithPeriodDays;
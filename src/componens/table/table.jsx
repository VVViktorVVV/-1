import React from "react";
import classes from "./table.module.css"


import TableItem from "./table.item";
// import arrayOrder from "../arrays/arrayOrder";
import creatFinishArray from "../Filter";




const Table = function () {
   

    return (
        <div>
            <table className={classes.table}>
                <caption>Винагорода до виплати</caption>
                <thead>
                    <tr>
                        <th>№п.п</th>
                        <th>ІПН</th>
                        <th>ПІБ</th>
                        <th>Днів 30 000</th>
                        <th>Днів 100 000</th>
                    </tr>
                </thead>
                <tbody>
                    {creatFinishArray().map(el => <TableItem array={{ id: el.id, name:el.name, day30t: el.day30t, day100t: el.day100t}} key={el.id} />)}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
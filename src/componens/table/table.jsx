import React from "react";
import classes from "./table.module.css"
import TableItem from "./table.item";


const Table = function ({arrayUsers}) {
   

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
                    {arrayUsers.map((el, index) => <TableItem number={index + 1} array={{ id: el.id, name: el.name, days30t: el.days30t, days100t: el.days100t }} key={el.id + index + 1} />)}
                    
                </tbody>
            </table>
        </div>
    );
};

export default Table;
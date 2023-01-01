import React from "react";
import classes from "./table.module.css"


const TableItem = (props) => {
    
    
    return (
        <tr className={classes}>
            <td>{props.number}</td>
            <td>{props.array.id}</td>
            <td>{props.array.name}</td>
            <td>{props.array.days30t}</td>
            <td>{props.array.days100t}</td>
        </tr>
    );
}

export default TableItem;
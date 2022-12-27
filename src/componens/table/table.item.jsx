import React from "react";
import classes from "./table.module.css"


const TableItem = (props) => {
    
    
    return (
        <tr className={classes}>
            <td>1</td>
            <td>{props.array.id}</td>
            <td>{props.array.name}</td>
            <td>{props.array.day30t}</td>
            <td>{props.array.day100t}</td>
        </tr>
    );
}

export default TableItem;
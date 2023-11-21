import React from "react";

function TodoLists(props) {
    return (
            <>
            
                <li className="list-item">
                    {props.item}
                <span className="del-btn">
                    <i className="fa-solid fa-trash delicn" onClick={()=>{props.deleteItem(props.index)}}></i>
                    </span>
                </li>
            </>

          
    )

}

export default TodoLists;
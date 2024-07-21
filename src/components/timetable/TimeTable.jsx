import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { TableCell } from "../ui/table";
import { Button } from "../ui/button";

export function TimeTableCell(props){
    const {type, day, time, userId, changeTimeTable} = props;
    
    return (
        <Fragment>
            {
            type == userId ?
            <TableCell className="bg-green-600 stripes deg45"></TableCell>:
            type == "S" ? 
            <TableCell className="bg-green-300" onClick={()=>changeTimeTable(day, time, "A")}>
                <FontAwesomeIcon icon={faCheck} className="text-green-700"/>
            </TableCell> :
            type == "A" ?
            <TableCell className="bg-green-300" onClick={()=>changeTimeTable(day, time, "S")}>
                    <FontAwesomeIcon icon={faCircle} className="text-white"/>
            </TableCell> :
            type == "U" ?
            <TableCell className="bg-gray-600"></TableCell> :
            <TableCell className="bg-red-300"></TableCell>
            }

        </Fragment>
    )
}



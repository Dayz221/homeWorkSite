import { useState } from "react"
import classes from "classes"

export const Option = ({ children, key }) => {
    return (
        <div className="option" >{ children }</div>
    )
}

export const Select = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    console.log(children)
    
    return (
        <div className="select_container" onClick={ setIsExpanded(prev => !prev) }>
            <div className="current_element"></div>
            <div classname={ classes(["arrow", {active: isExpanded} ]) } ></div>
            <div className="elements">{ children }</div>
        </div>
    )
}
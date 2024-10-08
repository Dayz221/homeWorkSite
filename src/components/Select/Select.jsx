import { useState } from "react"
import classnames from "classnames"
import './Select.css'

export const Option = ({ children, key }) => {
    return (
        <div className="option" >{ children }</div>
    )
}

export const Select = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [curElement, setCurElement] = useState(0)
    
    return (
        <div className="select_container" onClick={ () => setIsExpanded(prev => !prev) }>
            <div className="current_element">dffdfdfd</div>
            {/* <div classname={ classnames("arrow", { active: isExpanded } ) } ></div> */}
            <div className={ classnames("elements", {disable: !isExpanded}) }>{ children }</div>
        </div>
    )
}
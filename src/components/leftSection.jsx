import { useState } from "react/cjs/react.development";
import InboxComponent from "./sub components/inbox";

function LeftSection(props){
  const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(false);
  console.log(props.toggleTable)
  return (
  <div className="left_section_Container">
    <a href="#all" className="dropdown_menu" onClick={()=>{
      setShow(!show)
      setCollapse(!collapse)
      }}>
    <div className="arrow_up" style={{transform: collapse ? "rotate(90deg)":"none"}}></div>
    <p href="#all" data-toggle="dropdown" className="dropdown_menu_all">All</p>
    </a>
    {/* {inline style online 9, however instead we used tenery operator to display either block or none.
          to do that, we used hooks on line 4 to change state. Default state is set to false.} */}
    <ul className="dropdown_subMenu" style={{display: show ? 'block': 'none'}}> 
      <hr /><a href="#inbox" onClick={()=>props.toggleTable(true)}>Inbox</a>
      <hr /><a href="#draft" >Draft</a>
      <hr /><a href="#sent">Sent</a>
      <hr /><a href="#deleted">Deleted</a>
    </ul>
  </div>
  )
}

export default LeftSection;



/*
Parent Component

const [displayTable, toggleDisplayTable] = useState(false);
return (
    <...>{displayTable && <SubComponent />}<ClickableComponent toggle={toggleDisplayTable} /><...>}



Clickable Component

const ClickableComponent = ({ toggle }) => {
    return(<button onClick={() => toggle(true)}>Click me to display</buttton>)
}

*/
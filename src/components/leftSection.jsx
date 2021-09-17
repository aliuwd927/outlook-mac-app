import { useState } from "react/cjs/react.development";

function LeftSection(){
  const [show, setShow] = useState(false);
  return (
  <div className="left_section_Container">
    <a href="#all" data-toggle="dropdown" className="dropdown_menu" onClick={()=>setShow(!show)}>All</a>
    {/* {inline style online 9, however instead we used tenery operator to display either block or none.
          to do that, we used hooks on line 4 to change state. Default state is set to false.} */}
    <ul className="dropdown_subMenu" style={{display: show ? 'block': 'none'}}> 
      <hr /><a href="#inbox">Inbox</a>
      <hr /><a href="#draft">Draft</a>
      <hr /><a href="#sent">Sent</a>
      <hr /><a href="#deleted">Deleted</a>
    </ul>
  </div>
  )
}

export default LeftSection;
import { useState } from "react";

function RightSection(props){
 
  return (
  <div className="right_section_Container">
    {props.showEmail}
  </div>
  )
}

export default RightSection;
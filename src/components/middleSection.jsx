import InboxComponment from "./sub components/inbox";

function MiddleSection(props){  
  return (
    <div className="middle_section_Container">
      <InboxComponment showTable = {props}/>
    </div>
  )
}

export default MiddleSection;
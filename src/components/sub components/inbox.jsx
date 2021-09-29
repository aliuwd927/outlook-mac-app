import { useState } from "react/cjs/react.development";
import { emailObjects } from "./emailObject";

function InboxComponent(props){
  const [showDiv, setShowDiv] = useState(false);
  console.log(props.name);
return(
  <table style={{display: showDiv ? "block":"none" }}>
    <tbody>
      <tr>
        {emailObjects.map((element,index) =>(
          <td key={index}>{element.nameOfSender}</td>
          ))}
      </tr>
    </tbody>
  </table>
  )
}



export default InboxComponent;

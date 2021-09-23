import { emailObjects } from "./emailObject";

function InboxComponent(){
return(
  <tr>
      {emailObjects.map((element,index) =>(
        <td key={index}>{element.nameOfSender}</td>
      ))}
  </tr>
)
}

export default InboxComponent;
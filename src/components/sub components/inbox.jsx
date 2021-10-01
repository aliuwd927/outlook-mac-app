import { emailObjects } from "./emailObject";

function InboxComponent(props){
  
return(
  <table style={{display: props.showTable ? "block":"none"}}>
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

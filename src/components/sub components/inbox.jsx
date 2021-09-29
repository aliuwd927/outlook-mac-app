import { emailObjects } from "./emailObject";

function InboxComponent(){
console.log("test");
return(
  <table>
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

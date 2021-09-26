import { useState } from "react";
import { emailObjects } from "./emailObject";

function InboxComponent(){

return(
  <table style={{display: "none"}}>
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

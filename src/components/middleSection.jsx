import { emailObjects } from "./sub components/emailObject";

function MiddleSection(){

  return (
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

export default MiddleSection;
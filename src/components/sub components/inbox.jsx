import { emailObjects } from "./emailObject";

function InboxComponent(props){
  console.log(props.showTable.showTable)
return(
  <table style={{display: props.showTable.showTable ? "block":"none"}}>
    <tbody>
      <tr className="table_row_data">
        {emailObjects.map((element,index) =>(
          <td key={index}>{element.nameOfSender}</td>
          ))}
      </tr>
    </tbody>
  </table>
  )
}



export default InboxComponent;

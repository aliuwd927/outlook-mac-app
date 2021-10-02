import { emailObjects } from "./emailObject";

function InboxComponent(props){
  console.log(props.showTable.showTable)
return(
  <table style={{display: props.showTable.showTable ? "block":"none"}}>
    <tbody>
      <tr className="table_row_data">
        {emailObjects.map((element,index) =>{
          return(
            <div className="table_data_emailObj">
              <td>{element.nameOfSender}</td>
              <td>{element.titleOfEmail}</td>
            </div>
          )
        })}
      </tr>
    </tbody>
  </table>
  )
}



export default InboxComponent;

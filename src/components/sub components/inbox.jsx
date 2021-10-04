import { emailObjects } from "./emailObject";

function InboxComponent(props){
  console.log(props.showTable.showTable)
return(
  <table className="table_Container"style={{display: props.showTable.showTable ? "block":"none"}}>
    <tbody className="table_body">
      <tr className="table_row_data">
        {emailObjects.map((element,index) =>{
          return(
            <div className="table_data_emailObj">
              <td>{element.nameOfSender}</td>
              <td><strong>{element.titleOfEmail}</strong></td>
              <td>{element.sentencePreview}</td>
              <hr />
            </div>
          )
        })}
      </tr>
    </tbody>
  </table>
  )
}



export default InboxComponent;

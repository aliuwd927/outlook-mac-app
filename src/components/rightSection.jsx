import { emailObjects } from "./sub components/emailObject";

function RightSection(props){
 
  return (
  <div className="right_section_Container">
    {emailObjects.map((element,index) => {
      if(props.showEmail === index){
        return (
          <div className="right_display_emailObj">
              <td>{element.nameOfSender}</td>
              <td><strong>{element.titleOfEmail}</strong></td>
              <td>{element.sentencePreview}</td>
              <hr />
            </div>
        )
      }else{
        return null;
      }
    })}
    
  </div>
  )
}

export default RightSection;

function InboxComponent(event){
  // console.log(event)
  fetch("./emails.json")
  .then(response =>{
    console.log(response);
    return response.json();
  })
  .then(data =>{
    console.log(data);
  })
}

export default InboxComponent;
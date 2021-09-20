
function InboxComponent(event){
  // console.log(event)
  fetch("./emails.json")
  .then(response =>{
    console.log(response);
    console.log(response.ok)
    return response.json();
  })
  .then(data =>{
    console.log(data);
    console.log(data.listOfEmails)
    console.log(data.listOfEmails[0].nameOfSender)
  })
}

export default InboxComponent;
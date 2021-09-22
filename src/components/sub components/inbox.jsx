
function InboxComponent(event){
  // console.log(event)
  let emailObj = [];
  fetch("./emails.json")
  .then(response =>{
     console.log(response)
    return response.json();
  })
  .then(data =>{
    //use forEach method because we don't need to return any value.
    //we just need the function to execute for each item in array to push to emailObj
    console.log(data)
  })
}

export default InboxComponent;
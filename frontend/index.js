const form = document.querySelector("form")
const details = document.querySelector('.expense_details');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const amount = event.target.amount.value;
    const description =event.target.description.value ;
    const category = event.target.category.value;
    let expense_details = {
        amount:amount,
        description:description,
        category:category
    };
    axios.post("http://localhost:3000/user/add-expense",expense_details)
    .then(res => {
        console.log(res)
        showExpenseOnScreen(res.data);
    })
    .catch(err => console.log(err));
})
 window.addEventListener("DOMContentLoaded",() =>{
    axios.get("http://localhost:3000/user/get-expenses")
    .then(res =>{
        for(var i=0;i<res.data.length;i++){
             showExpenseOnScreen(res.data[i]);
        }
    })
     .catch(err => console.log(err));
 })
    // let myobj_serialized = JSON.stringify(expense_details);
    // localStorage.setItem(description,myobj_serialized);
function showExpenseOnScreen(expense_details){
    const newli = document.createElement('li');
    const newlit = document.createTextNode(expense_details.amount+'-'+expense_details.description+'-'+expense_details.category);
    newli.appendChild(newlit);
    const button = document.createElement('button');
    const buttont = document.createTextNode('delete expense');
    button.appendChild(buttont);
    button.onclick = () =>{
      axios.delete(`http://localhost:3000/user/delete-expense/${expense_details.id}`)
      .then(res => {
        details.removeChild(newli);
      })
      .catch(err => console.log(err));   
    }
    document.getElementById('number').value = "";
    document.getElementById('text').value = "";
    document.getElementById('select').value ="";
    newli.appendChild(button);
    const edit = document.createElement('button');
    const editt = document.createTextNode('edit expense');
    edit.appendChild(editt);
     edit.onclick = () =>{
    //   axios.patch(`http://localhost:3000/user/edir-expense/${expense_details.id}`)
    //   .then(res => {
    //       expe
    //   })
    //    document.getElementById('number').value = amount;
    //    document.getElementById('text').value = description;
    //    document.getElementById('select').value =category;
    //  axios.delete('')
    //  .then(()=>{
    //     details.removeChild(newli);
    //  })
    //  .catch()

    }
    newli.appendChild(edit);
    details.appendChild(newli);
}
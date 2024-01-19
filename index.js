const form = document.querySelector("form")
form.addEventListener('submit',function(event){
    event.preventDefault();
    const details = document.querySelector('.expense_details');
    const amount = event.target.amount.value;
    const description =event.target.description.value ;
    const category = event.target.category.value;
    let expense_details = {
        expense_amount:amount,
        expense_description:description,
        expense_category:category
    };
    let myobj_serialized = JSON.stringify(expense_details);
    localStorage.setItem(description,myobj_serialized);
    const newli = document.createElement('li');
    const newlit = document.createTextNode(amount+'-'+description+'-'+category);
    newli.appendChild(newlit);
    const button = document.createElement('button');
    const buttont = document.createTextNode('delete expense');
    button.appendChild(buttont);
    button.onclick = () =>{
        localStorage.removeItem(description);
        details.removeChild(newli);
        document.getElementById('number').value = "";
       document.getElementById('text').value = "";
       document.getElementById('select').value ="";
    }
    newli.appendChild(button);
    const edit = document.createElement('button');
    const editt = document.createTextNode('edit expense');
    edit.appendChild(editt);
    edit.onclick = () =>{
       localStorage.removeItem(description);
       details.removeChild(newli);
       document.getElementById('number').value = amount;
       document.getElementById('text').value = description;
       document.getElementById('select').value =category;
    }
    newli.appendChild(edit);
    details.appendChild(newli);
})
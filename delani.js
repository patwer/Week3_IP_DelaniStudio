//function to pick the date from input date of birth and map to Akan name
const receive_message=()=>
{

//get values from form elements

// name
const elementName=document.getElementById('name');
const name=String(elementName.value);


//email
const elementEmail=document.getElementById('email');
const email=String(elementEmail.value);

//message
const elementMessage=document.getElementById('message');
const message=String(elementMessage.value);


if (name=="" || email=="" ||message=="")
{
    window.alert("Please provide all details");
}
else
{
 
//alert
window.alert(`${name}, your message has been received. Thank you for reaching out to us`);


}

}

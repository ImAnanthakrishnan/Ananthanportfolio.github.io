   function validateform()
    {
        var name=document.myform.name.value;
        var email=document.myform.email.value;
        var tarea=document.myform.message.value;
        if(name==null || name=="")
        {
            var text=document.querySelector('#name');
            text.style.color='red';
            text.innerText="Enter the name";
           return false;
        }
        if(email==null || email==""){
            var text=document.querySelector('#email');
            text.style.color='red';
            text.innerText="Enter the email";
            return false;
        }
        //for email format
            /*var atpos=email.indexOf('@');
            var dotpos=email.lastIndexOf('.');
            if(atpos<1 || dotpos<atpos+2 || dotpos+2>email.lenght)
            {
                alert("Please enter a valid email")
                return false;
            }*/
          //
         



           var reg = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
           var result=reg.test(email);
           if(result==false)
           {
            alert("Please enter a valid email")
           }

        if(tarea==null || tarea=="")  
        {
            var text=document.querySelector('#tarea');//span id
            text.style.color='red';
            text.innerText="Enter the message";
            return false;
        }

    }
//button click content checking.
function textfield(input1)
{    //var name=document.myform.name.value;
    var error=document.querySelector('#name')
        if(input1!==null && isNaN(input1)){
            error.innerText='';
        }


 }
 function textfield1(input2)
 {    
    var error=document.querySelector('#email');
    if(input2!==null){
        error.innerText='';
    }

 
 }

 function textfield2(input3)
 {
    var error=document.querySelector('#tarea');
    if(input3!==null){
        error.innerText='';
    }
 }



 //phone number checking

 function restrictNumberLength(inputField) {
    // Get the length of the input field.
    var length = inputField.value.length;
  
    // If the length is already 11, then prevent the user from entering any more characters.
    if (length === 13) {
      inputField.value = inputField.value.substring(0, length-1);
    }
    if(length<10)
    document.querySelector('#numb').innerText="Minimum length 10";
    else
    document.querySelector('#numb').innerText='';
 
  }

  



   function isNumber(event) {
    // Get the character code of the key that was pressed.
    var keyCode = event.keyCode;
  
    // If the character code is not between 48 and 57, then it is not a number.
    if (keyCode < 48 || keyCode > 57) {
      // Prevent the user from entering the character.
      event.preventDefault();
    }
  }


    


function mySubmitForm(event) {
    event.preventDefault();
  alert("Succefully submitted");
  }


  function downloadPDF() {
    const url = 'https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:69045e85-ff49-4239-8610-20ebf0fb5ceb';
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Ananthan_resume.docx';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }



//hire me
const btn=document.querySelector('butn')
function redirectlink(){
  window.location.href = 'https://www.linkedin.com/in/anantha-krishnan-s-82780b266/'; 
}




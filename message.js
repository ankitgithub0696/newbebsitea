var f_name=document.getElementById('full_name');
var email=document.getElementById('email-id');
var message=document.getElementById('message');
var buttonsubmit=document.getElementsByClassName('post')[0];

buttonsubmit.addEventListener('submit',(e)=>
{
    e.preventDefault();
    console.log("Message sent ");

    

    Email.send({
      SecureToken : "f8f6ac26-2130-4fec-a421-3018a2d02dd1",
      To : 'ankitkumar060896@gmail.com',
      From : "ankitkumar060896@gmail.com",
      Subject : "contact",
      Body : f_name.value+email.value+message.value
      }).then(
    message => alert(message)
  );
});
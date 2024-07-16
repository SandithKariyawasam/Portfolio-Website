
//for word change style

var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer'],
    typeSpeed:70,
      backSpeed:70,
      loop:true,
      backDelay:1000,
  });


//for about me tab changes  

  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

//for cv download 

  document.getElementById('downloadBtn').addEventListener('click', function() {
    const url = 'pdf/dfghfgh.pdf'; // Update this path to the correct location of your file

    const a = document.createElement('a');
    a.href = url;
    a.download = 'dfghfgh.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

//for my service part navigations

document.getElementById('navigateBtn').addEventListener('click', function() {
  document.getElementById('4').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('webdesign').addEventListener('click', function() {
  document.getElementById('1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('uiuxdesign').addEventListener('click', function() {
  document.getElementById('2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('appdesign').addEventListener('click', function() {
  document.getElementById('3').scrollIntoView({ behavior: 'smooth' });
});

//for navigation buttons path

document.getElementById('hom').addEventListener('click', function() {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('abo').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('ser').addEventListener('click', function() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('port').addEventListener('click', function() {
  document.getElementById('1').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('con').addEventListener('click', function() {
  document.getElementById('4').scrollIntoView({ behavior: 'smooth' });
});

//for contact me part

const form=document.querySelector("form");
    const fullName=document.getElementById("name");
    const email=document.getElementById("email");
    const phone=document.getElementById("Phone");
    const subject=document.getElementById("subject");
    const mess=document.getElementById("message"); 

    function sendEmail(){
        const bodymessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "sandithkariyawasam2001@gmail.com",
            Password : ".........................",
            To : 'sandithkariyawasam2001@gmail.com',
            From : "sandithkariyawasam2001@gmail.com",
            Subject : subject.value,
            Body : bodymessage
        }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
            });
        }
    }
        );    
}
    function checkInputs(){
        const items = document.querySelectorAll(".item");

        for(const item of items){
            if(item.value==""){
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
            if (items[1].value !=""){
                chechEmail();
            }
            items[1].addEventListener("keyup",()=>{
                chechEmail();
            });
            item.addEventListener("keyup",()=>{
                if(item.value!=""){
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
            }else{
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
            }});
        }
    }
    function chechEmail(){
        const emailRegex= /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const errorTxtEmail = document.querySelector(".error-txt.email");
        if(!email.value.match(emailRegex)){
            email.classList.add("error");
            email.parentElement.classList.add("error");

            if(email.value !=""){
                errorTxtEmail.innerText="Enter valid email address";
            }else{
                errorTxtEmail.innerText="Email Address can't be blank";
            }

        }else{
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
        }
    }
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        checkInputs()

        if(!fullName.classList.contains("error")&& 
            !email.classList.contains("error")&&
            !phone.classList.contains("error")&&
            !subject.classList.contains("error")&&
            !mess.classList.contains("error")){
                sendEmail();
                form.reset();
                return false;
            }
          
    });

//scroll js part

window.addEventListener('scroll',reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i=0;i<reveals.length;i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint=150;

    if(revealtop<windowheight-revealpoint){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active');
    }
  }
}



//mobile view portfolio part

let selectedWork = null;

document.querySelectorAll('.work').forEach(item => {
    item.addEventListener('click', () => {
        const layer = item.querySelector('.layer');
        layer.style.transform = 'translateY(0px)';

        if (selectedWork && selectedWork !== item) {
            selectedWork.querySelector('.layer').style.display = 'none';
            selectedWork.querySelector('img').classList.remove('blurred');
            selectedWork.style.height = '150px';
        }

        if (item.style.height !== '300px') {
          layer.style.display = 'flex';
          item.querySelector('img').classList.add('blurred');
          item.style.height = '300px'; 
      } else {
          layer.style.display = 'none';
          item.querySelector('img').classList.remove('blurred');
          item.style.height = '150px'; 
      }

        layer.style.display = 'flex';
        item.querySelector('img').classList.add('blurred');
        selectedWork = item;

    });
});




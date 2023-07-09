const sendYourMail = (e) => {
    e.preventDefault();
  
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_6j2rnla";
    const templateID = "template_qx8zzab";
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message was sent successfully!!");
      })
      .catch(err => console.log(err));
  }
  





const bar = () => {
    const mobile = document.querySelector(".menu-area");
    mobile.classList.toggle("open");
    console.log("ejrbfejrbf")
}

let cat_list = document.querySelectorAll(".list");
let item_box = document.querySelectorAll(".itemBox");

for(let i=0; i<cat_list.length; i++){
    cat_list[i].addEventListener('click', function (){
        for(let j = 0; j<cat_list.length; j++){
            cat_list[j].classList.remove('active');
        }
        this.classList.add('active');

        let data_filter = this.getAttribute('data-filter');

        for( let k=0; k < item_box.length; k++){
            item_box[k].classList.add('hide'); 
            item_box[k].classList.remove('active'); 

            if(item_box[k].getAttribute('data-item') == data_filter || data_filter == 'all'){
                item_box[k].classList.remove('hide'); 
                item_box[k].classList.add('active'); 
            }

        }
    })
}

function imageSlider(anything) {
    document.querySelector('.review').src = anything;
}

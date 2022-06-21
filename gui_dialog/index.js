const clickHereBtn = document.getElementById('click-here');
const outputBox = document.querySelector('output');
const confirmResult = document.querySelector('#confirmBtn');
const selectedItem = document.querySelector('select');


const avatarBtn = document.getElementById('add_new_avatar');


avatarBtn.addEventListener('click', function onOpen() {
    dialog.showModal();
});


const avatarElement = document.querySelector("#get_avatar_image_form");

function formSubmitted(event){
    const fileInput = avatarElement.querySelector("input[name=userimage]");
    const files = fileInput.files;
    if(files.length == 0 ) {
        console.log("No file submitted");
        return;
    }
    const image = files[0];
   const imageUrl = URL.createObjectURL(image);
   addImage(imageUrl);

}
function addImage(imageURL){
    const button = document.createElement("button");
    button.classList.add("avatar-img-btn");
    const closeIcon = document.createElement("ion-icon");
    closeIcon.classList.add("close-avatar-icon");
    closeIcon.id="close";
    closeIcon.name = "close-outline";

    button.appendChild(closeIcon);
    
    const imageElt = document.createElement("img");
    imageElt.src = imageURL;
    imageElt.classList.add("avatar-img");

    button.appendChild(imageElt);
    const addAvatarButton = document.querySelector("#add_new_avatar");
    document.body.insertBefore(button, addAvatarButton);
 console.log(closeIcon);

 //removing the image
 closeIcon.addEventListener('click', function deleteImage(){
  
    let txt;
  if (confirm("Are you sure you want to delete this user?")) {
    txt = button.parentNode.removeChild(button)
  } else {
    txt = "OK!";
  }


    });   

}


avatarElement.addEventListener("submit", formSubmitted);
var map=document.querySelector(".map"),popup=document.querySelector(".modal-map");map.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal_show")});var close=document.querySelector(".modal_close");close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal_show")});var form=document.querySelector(".lost"),formPopup=document.querySelector(".feedback-form"),formFocus=formPopup.querySelector("[name=name]");form.addEventListener("click",function(e){e.preventDefault(),formPopup.classList.add("modal_show"),formFocus.focus()});var formClose=formPopup.querySelector(".modal_close");formClose.addEventListener("click",function(e){e.preventDefault(),formPopup.classList.remove("modal_show")});

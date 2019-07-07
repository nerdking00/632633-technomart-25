    var map = document.querySelector(".map");
    var popup = document.querySelector(".modal-map");
    map.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("modal_show");
    });
    var close = document.querySelector(".modal_close");
    close.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("modal_show");
    });
    var form = document.querySelector(".lost");
    var formPopup = document.querySelector(".feedback-form");
    var formFocus = formPopup.querySelector("[name=name]");
    form.addEventListener("click", function(evt) {
        evt.preventDefault();
        formPopup.classList.add("modal_show");
        formFocus.focus();
    });
    var formClose = formPopup.querySelector(".modal_close");
    formClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        formPopup.classList.remove("modal_show");
    });

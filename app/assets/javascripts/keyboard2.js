class KeyboardController{
    constructor(target){
        this.target = target.firstChild;
        // console.log(this.target);
        // console.log(this.target.textContent);
    }

    UpdateTextbox(key){
        console.log(this.target.textContent);
        var text_box_text = this.target.textContent;
        console.log(key.attr('id'));
        if (key.attr('id')=="Bksp"){
            this.target.textContent = text_box_text.substr(0, text_box_text.length-1);
        }
        else if (key.attr('id')=="space"){
            text_box_text = text_box_text + " ";
            this.target.textContent = text_box_text;
        }
        else {
            var key_text = key[0].textContent;
            key_text = $.trim(key_text);
            text_box_text = text_box_text + key_text;
            this.target.textContent = text_box_text;
        }

    }

}

// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	keyboard_controller = new KeyboardController($(".text-box")[0]);
    $(".key").click(function () {
        keyboard_controller.UpdateTextbox($(this))
    });

});

function myFunction() {
    var x = document.getElementById("kcontainer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
class KeyboardController{
    constructor(target){
        this.target = target;
        // console.log(this.target);
        // console.log(this.target.textContent);
    }

    UpdateTextbox(key){
        console.log(this.target.textContent);
        var text_box_text = this.target.textContent;
        console.log(key.attr('id'));
        if (key.attr('id')=="Bksp"){
            // console.log(this.target[0].lastChild);
            if(this.target[0].lastChild != null) {
                this.target[0].lastChild.remove();
            }
        }
        else if (key.attr('id')=="space"){
            // text_box_text = text_box_text + " ";
            // this.target.textContent = text_box_text;
            this.target.append(' ');
        }
        else if (key.attr('id')=="enter"){
            // text_box_text = text_box_text + '<br>';
            this.target.append('<br>');
            // this.target.textContent = text_box_text;
        }
        else {
            var key_text = key[0].textContent;
            key_text = $.trim(key_text);
            this.target.append(key_text);
            // text_box_text = text_box_text + key_text;
            // this.target.textContent = text_box_text;
        }

    }

}

// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	keyboard_controller = new KeyboardController($(".wiwi"));
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
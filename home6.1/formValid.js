// регистрация события загрузки документа.
window.addEventListener("load", init);



var elementForms = document.querySelector('[type="text"]');
var elementForm = document.querySelector('[type="submit"]');
console.log(elementForm)
function init(){
    let form = document.forms.form1;
    
    
    form.addEventListener('change',function(e){
    var target =e.target; 
    var pattern = [/\D/,/\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i,/\d{5}/];
        if (target===form.elements[0]){
        var res = pattern[0].test(target.value);  
        }else if(target===form.elements[1]){
            res = pattern[1].test(target.value);  
        }else{
            res = pattern[2].test(target.value);
        }
              
    if (res === false) {
        target.className = "invalid";
    } // установка CSS класса 
    else {
        target.className = "valid";
    }


})
};
function onsubmitHandler(e){
for (var i = 0; i < form1.elements.length; ++i) {
    if (form1.elements[i].className == "valid"){
            var invalid = false;
    }else if (form1.elements[i].className == "invalid")invalid = true;
    
if (invalid) {
                alert("Допущены ошибки при заполнении формы.");
                e.preventDefault();
                return false; // отмена отправки формы.
            }
}
    
}

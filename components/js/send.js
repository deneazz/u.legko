var form = document.querySelector("#send-form");
form.addEventListener("submit", validate);

var course = form.course.value;
var name = form.name.value;
var kidName = form.kidName.value;
var tel = form.tel.value;

function validate(e){
    e.preventDefault();

    var courseError = document.querySelector("#course-error");
    var nameError = document.querySelector("#name-error");
    var kidNameError = document.querySelector("#kidName-error");
    var telError = document.querySelector("#tel-error");

    var course = form.course.value;
    var name = form.name.value;
    var kidName = form.kidName.value;
    var tel = form.tel.value;

    courseError.innerHTML = "";
    nameError.innerHTML = "";
    kidNameError.innerHTML = "";
    telError.innerHTML = "";

    let isValid = true;

    if (course === ""){
        courseError.innerHTML = "Курс не выбран";
        form.course.style.border = "1px solid var(--red)";
        isValid = false;
    }
    else{
        form.course.style.border = "1px solid var(--green)";
    }

    if (name === ""){
        nameError.innerHTML = "Имя не введено";
        form.name.style.border = "1px solid var(--red)";
        isValid = false;
    }
    else if (name.length < 2 || !isNaN(name)){
        nameError.innerHTML = "Имя введено некорректно";
        form.name.style.border = "1px solid var(--red)";
        isValid = false;
    }
    else{
        form.name.style.border = "1px solid var(--green)";
    }

    if (kidName === ""){
        kidNameError.innerHTML = "Имя ребенка не введено";
        form.kidName.style.border = "1px solid var(--red)";
        isValid = false;
    }
    else if (kidName.length < 2 || !isNaN(kidName)){
        kidNameError.innerHTML = "Имя введено некорректно";
        form.kidName.style.border = "1px solid var(--red)";
        isValid = false;
    }
    else{
        form.kidName.style.border = "1px solid var(--green)";
    }

    if (tel === ""){
        telError.innerHTML = "Телефон не введен";
        form.tel.style.border = "1px solid var(--red)";
        isValid = false;
    }
    else if (!tel.match(/^\+7(\s+)?\(?([0-9]{3})\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/)){
        telError.innerHTML = "Телефон введен некорректно";
        form.tel.style.border = "1px solid var(--red)";
        isValid = false;
    }
    else{
        form.tel.style.border = "1px solid var(--green)";
    }

    if (isValid == true){
        send();
    }
}


var formCourse = document.querySelector("#course");
formCourse.addEventListener("change", () => {
    document.querySelector("#course-error").innerHTML = "";
    formCourse.style.border = "1px solid #ddd";
});

var formName = document.querySelector("#name");
formName.addEventListener("change", () => {
    document.querySelector("#name-error").innerHTML = "";
    formName.style.border = "1px solid #ddd";
});

var formKidName = document.querySelector("#kidName");
formKidName.addEventListener("change", () => {
    document.querySelector("#kidName-error").innerHTML = "";
    formKidName.style.border = "1px solid #ddd";
});

var formTel = document.querySelector("#tel");
formTel.addEventListener("change", () => {
    document.querySelector("#tel-error").innerHTML = "";
    formTel.style.border = "1px solid #ddd";
});


window.onload = function() {
    MaskedInput({
     elm: document.getElementById('tel'),
     format: '+7 (___) ___-__-__',
     separator: '+7 ()-'
  });
};

(function(a){a.MaskedInput=function(f){if(!f||!f.elm||!f.format){return null}if(!(this instanceof a.MaskedInput)){return new a.MaskedInput(f)}var o=this,d=f.elm,s=f.format,i=f.allowed||"0123456789",h=f.allowedfx||function(){return true},p=f.separator||"/:-",n=f.typeon||"_YMDhms",c=f.onbadkey||function(){},q=f.onfilled||function(){},w=f.badkeywait||0,A=f.hasOwnProperty("preserve")?!!f.preserve:true,l=true,y=false,t=s,j=(function(){if(window.addEventListener){return function(E,C,D,B){E.addEventListener(C,D,(B===undefined)?false:B)}}if(window.attachEvent){return function(D,B,C){D.attachEvent("on"+B,C)}}return function(D,B,C){D["on"+B]=C}}()),u=function(){for(var B=d.value.length-1;B>=0;B--){for(var D=0,C=n.length;D<C;D++){if(d.value[B]===n[D]){return false}}}return true},x=function(C){try{C.focus();if(C.selectionStart>=0){return C.selectionStart}if(document.selection){var B=document.selection.createRange();return -B.moveStart("character",-C.value.length)}return -1}catch(D){return -1}},b=function(C,E){try{if(C.selectionStart){C.focus();C.setSelectionRange(E,E)}else{if(C.createTextRange){var B=C.createTextRange();B.move("character",E);B.select()}}}catch(D){return false}return true},m=function(D){D=D||window.event;var C="",E=D.which,B=D.type;if(E===undefined||E===null){E=D.keyCode}if(E===undefined||E===null){return""}switch(E){case 8:C="bksp";break;case 46:C=(B==="keydown")?"del":".";break;case 16:C="shift";break;case 0:case 9:case 13:C="etc";break;case 37:case 38:case 39:case 40:C=(!D.shiftKey&&(D.charCode!==39&&D.charCode!==undefined))?"etc":String.fromCharCode(E);break;default:C=String.fromCharCode(E);break}return C},v=function(B,C){if(B.preventDefault){B.preventDefault()}B.returnValue=C||false},k=function(B){var D=x(d),F=d.value,E="",C=true;switch(C){case (i.indexOf(B)!==-1):D=D+1;if(D>s.length){return false}while(p.indexOf(F.charAt(D-1))!==-1&&D<=s.length){D=D+1}if(!h(B,D)){c(B);return false}E=F.substr(0,D-1)+B+F.substr(D);if(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1){D=D+1}break;case (B==="bksp"):D=D-1;if(D<0){return false}while(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1&&D>1){D=D-1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);break;case (B==="del"):if(D>=F.length){return false}while(p.indexOf(F.charAt(D))!==-1&&F.charAt(D)!==""){D=D+1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);D=D+1;break;case (B==="etc"):return true;default:return false}d.value="";d.value=E;b(d,D);return false},g=function(B){if(i.indexOf(B)===-1&&B!=="bksp"&&B!=="del"&&B!=="etc"){var C=x(d);y=true;c(B);setTimeout(function(){y=false;b(d,C)},w);return false}return true},z=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if((C.metaKey||C.ctrlKey)&&(B==="X"||B==="V")){v(C);return false}if(C.metaKey||C.ctrlKey){return true}if(d.value===""){d.value=s;b(d,0)}if(B==="bksp"||B==="del"){k(B);v(C);return false}return true},e=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if(B==="etc"||C.metaKey||C.ctrlKey||C.altKey){return true}if(B!=="bksp"&&B!=="del"&&B!=="shift"){if(!g(B)){v(C);return false}if(k(B)){if(u()){q()}v(C,true);return true}if(u()){q()}v(C);return false}return false},r=function(){if(!d.tagName||(d.tagName.toUpperCase()!=="INPUT"&&d.tagName.toUpperCase()!=="TEXTAREA")){return null}if(!A||d.value===""){d.value=s}j(d,"keydown",function(B){z(B)});j(d,"keypress",function(B){e(B)});j(d,"focus",function(){t=d.value});j(d,"blur",function(){if(d.value!==t&&d.onchange){d.onchange()}});return o};o.resetField=function(){d.value=s};o.setAllowed=function(B){i=B;o.resetField()};o.setFormat=function(B){s=B;o.resetField()};o.setSeparator=function(B){p=B;o.resetField()};o.setTypeon=function(B){n=B;o.resetField()};o.setEnabled=function(B){l=B};return r()}}(window));


function send(){
    const params = {
        course: course,
        name: name,
        kidName: kidName,
        tel: tel
    }

    async function loadDataEnter(parameters = null, url, method) {
        let params;
        if (parameters) {
            params = new URLSearchParams();
            params.set('course', parameters.course)
            params.set('name', parameters.name)
            params.set('kidName', parameters.kidName)
            params.set('tel', parameters.tel)
        }
        const res = await fetch(url, {
            method: method,
            body: params
        });
        
        const json = await res.json();
        return json;
    }

    const result = loadDataEnter(params, '../php/sender.php', 'POST');
    console.log(result);

    alert("Заявка успешно отправлена!");

    setTimeout("location.replace('index.html')", 2000);
}
// Javascript File

var login = document.getElementById('btn_login');
var forms = document.getElementsByClassName('form_login');
var invalid = document.getElementById('invalid');
var checkbox = document.getElementById('checkbox_lembrar');
var chk_hidden = document.getElementById('chk_hidden');
var formSenha = document.getElementById('senha');
var formEmail = document.getElementById('email');


for (i = 0; i < forms.length; i++) {
	forms[i].addEventListener('keydown', function(event){
		event.target.classList.remove('form_login_error');
		event.target.classList.remove('form_login_sucess');
		invalid.classList.remove('invalid_show');
	});
}

formEmail.addEventListener('focusin', function(event){
	formEmail.setAttribute("placeholder", "");
});

formEmail.addEventListener('focusout', function(event){
	if (formEmail.value.length === 0) {
		formEmail.setAttribute("placeholder", "e-mail");
	}
});

formSenha.addEventListener('focusin', function(event){
	formSenha.setAttribute("placeholder", "");
	formSenha.classList.add('form_senha_c');
});

formSenha.addEventListener('focusout', function(event){
	if (formSenha.value.length === 0) {
		formSenha.classList.remove('form_senha_c');
		formSenha.setAttribute("placeholder", "senha");
	}
});

login.addEventListener('click', function(event){
	var flagInvalid = 0;
	for (i = 0; i < forms.length; i++) {
		if (forms[i].value.length < 5) {
			forms[i].classList.add('form_login_error');
			flagInvalid++;
		} else {
			forms[i].classList.add('form_login_sucess');
		}
	}
	if (flagInvalid > 0) {
		invalid.classList.add('invalid_show');	
	}
});

var flagChkActive = 0;
checkbox.addEventListener('click', function(event){
	if (!flagChkActive) {
		checkbox.classList.add('div_chk_active');
		flagChkActive = 1;
		chk_hidden.setAttributeNode(document.createAttribute("checked"));
	} else {
		checkbox.classList.remove('div_chk_active');
		flagChkActive = 0;
		chk_hidden.removeAttribute("checked");
	}
});

function _(id) {
    return document.getElementById(id);
}

function emailCheck(email){
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}
function submitForm(){
    if(!(emailCheck(_('email').value))){
        _('error-message').innerHTML = "Invalid email"
    }
    if(_('name').value== null || _('email').value=='' || _('message').value=='' )
    {
        _('error-message').innerHTML = "Fill out all fields!"
    }
    let formData = new FormData();
    formData.append("name", _('name').value);
    formData.append("email", _('email').value);
    formData.append("message", _('message').value);
    let ajax = new XMLHttpRequest();
    ajax.open("POST", "http://www.slicestic.com/api/v1/fe-dev");

    
    ajax.send(formData);
}
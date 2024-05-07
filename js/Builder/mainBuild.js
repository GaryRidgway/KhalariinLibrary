ready(function(){
    let html = 
        '<form class="spell-form">\
        ' + initDefinitionForm() + '\
        </form>';

    document.querySelector('formContainer').outerHTML = html;
});
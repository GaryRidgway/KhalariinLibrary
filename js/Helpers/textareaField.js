function textareaField(key, value='') {

    let html = 
        '<label for="' + key + '">' + formatKey(key) + '</label>\
        <textarea id="' + key + '" name="' + formatKey(key) + '">'+ value.trim() + '</textarea>';
    return html;
}
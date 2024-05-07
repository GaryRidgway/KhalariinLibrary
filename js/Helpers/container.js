function container(key, htmlInput) {
    let html = 
        '<label class="group-container">' + formatKey(key) + '</label>\
        <div class="container ' + key + '">\
            ' + htmlInput + '\
        </div>'

    return html;
}
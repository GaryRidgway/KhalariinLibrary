function selectField(key, optionsArray) {

    let html = 
        '<label class="sr-only" for="' + key + '">' + formatKey(key) + '</label>\
        <select name="' + formatKey(key) + '" id="' + key + '">';
    let endHtml = '</select>'

    optionsArray.forEach(option => {
        html += '<option value="' + option.toLowerCase() + '">' + formatKey(option) + '</option>'
    });

    return html + endHtml;
}
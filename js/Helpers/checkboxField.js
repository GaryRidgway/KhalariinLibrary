function checkboxField(key, checked = false) {

    let html = 
        '<input \
            type="checkbox" \
            id="' + key + '" \
            name="' + formatKey(key) + '" \
            value="' + key + '"\
            '+ (checked ? 'checked' : '') + '\
        >\
        <label for="' + key + '">' + formatKey(key) + '</label>';

    return html;
}
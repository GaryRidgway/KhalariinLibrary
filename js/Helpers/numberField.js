function numberField(key, value, type, min = 0, max = null) {
    let step = 0.1;
    if (type === 'int') {
        step = 1;
    }

    let html = 
        '<label class="sr-only" for="' + key + '">' + formatKey(key) + '</label>\
        <input \
            type="number" \
            id="' + key + '" \
            name="' + formatKey(key) + '" \
            min="' + min +'" \
            max="' + max +'"\
            step="' + step + '" \
            value="' + value + '" \
        ></input>'

    return html;
}
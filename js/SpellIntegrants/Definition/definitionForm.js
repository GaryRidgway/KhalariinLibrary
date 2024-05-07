function initDefinitionForm() {
    let html = '';
    const dfo = definitionFormOptions;
    const dfoKeys = Object.keys(dfo);

    dfoKeys.forEach(function(key) {
      const internalHtml = function() {
        const dfoGroup = dfo[key];
        const dfoGroupKeys = Object.keys(dfoGroup);

        let internalHtml = '';

        dfoGroupKeys.forEach(function(groupKey) {
          const splitKey = splitCamelCase(groupKey);
          const type = removeAtIndex(splitKey, 0)[0];
          const sansTypeKey = splitKey.join('');
          
          switch(type) {
              case 'float':
                internalHtml += numberField(sansTypeKey, dfo[key][groupKey], 'float');
                break;
  
              case 'select':
                internalHtml += selectField(sansTypeKey, enums[dfo[key][groupKey]]);
                break;
  
              case 'bool':
                internalHtml += checkboxField(sansTypeKey, dfo[key][groupKey]);
              break;
  
              case 'string':
                internalHtml += textareaField(sansTypeKey, dfo[key][groupKey]);
              break;
  
              default:
                // code block
            }
        });

        return internalHtml;
      }();
        html += container(key, internalHtml);



        
    });

    return html;
}
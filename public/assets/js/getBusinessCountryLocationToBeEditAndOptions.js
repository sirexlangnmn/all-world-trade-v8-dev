
function getBusinessCountryLocationToBeEditAndOptions(value, elementId) {
    fetch('assets/json/countries.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let code = value[0].business_country;
            let filtered = data.filter((d) => d.iso2 == code);

            document.getElementById(elementId).innerHTML =
                '<option value="' + filtered[0].iso2 + '" >' + filtered[0].name + '</option>';

            for (var i = 0; i < data.length; i++) {
                document.getElementById(elementId).innerHTML =
                    document.getElementById(elementId).innerHTML +
                    '<option value="' +
                    data[i].iso2 +
                    '">' +
                    data[i].name +
                    '</option>';

                if (i + 1 == data.length) {
                    $('#' + elementId).selectpicker('refresh');
                }
            }
        });
}


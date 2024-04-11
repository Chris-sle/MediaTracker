function updateModel(inputId) {
    const checkbox = document.getElementById(inputId);
    
    if (inputId === 'movieCheckbox' && checkbox.checked) {
        model.inputs.homepage.moviesIsChecked = true;
        model.inputs.homepage.seriesIsChecked = false;
        model.inputs.homepage.animeIsChecked = false;
        document.getElementById('seriesCheckbox').checked = false;
        document.getElementById('animeCheckbox').checked = false;
    } else if (inputId === 'seriesCheckbox' && checkbox.checked) {
        model.inputs.homepage.moviesIsChecked = false;
        model.inputs.homepage.seriesIsChecked = true;
        model.inputs.homepage.animeIsChecked = false;
        document.getElementById('movieCheckbox').checked = false;
        document.getElementById('animeCheckbox').checked = false;
    } else if (inputId === 'animeCheckbox' && checkbox.checked) {
        model.inputs.homepage.moviesIsChecked = false;
        model.inputs.homepage.seriesIsChecked = false;
        model.inputs.homepage.animeIsChecked = true;
        document.getElementById('movieCheckbox').checked = false;
        document.getElementById('seriesCheckbox').checked = false;
    }
}
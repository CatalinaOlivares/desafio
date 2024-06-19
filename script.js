function filterCitizens() {
    let input = document.getElementById('search-input');
    let filter = input.value.toLowerCase();
    let ul = document.getElementById('citizen-list');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

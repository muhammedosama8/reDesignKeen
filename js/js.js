
/* ************************************* */
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("select");
    filter = input.value;

    table = document.getElementById("myTable");
    trs = table.getElementsByTagName("tr");
    console.log(trs);
    for (const tr of trs) {
        if (filter.toString().toLowerCase() == 'all'){
            tr.style.display = '';
        } else if (tr.getAttribute('data-col') && tr.getAttribute('data-col').toLowerCase() == filter.toString().toLowerCase()) {
            tr.style.display = '';
        } else if (tr.getAttribute('data-col')) {
            tr.style.display = 'none';
        }
    }
}




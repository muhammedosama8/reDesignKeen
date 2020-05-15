const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
var d = new Date();
var day = d.getDate();
document.getElementById('date').innerText = monthNames[d.getMonth()] + ' ' + day

function toggle(source) {
    var checkboxes = document.getElementsByName('box');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}

document.getElementById('slide').addEventListener('click',function (evt) {
    evt.preventDefault();
    var kaside=document.getElementById('kaside');
    var kbody=document.getElementById('kbody');

    kaside.classList.toggle('add1');
    kaside.classList.toggle('kasideWidth');
    kbody.classList.toggle('add2');
    kbody.classList.toggle('kbodyWidth');

});

function openRecord(){
    document.querySelector('.addRecord').style.display='block';
}
document.getElementById('save').addEventListener('click',function () {
    let date = document.getElementById('addDate').value,
        status = document.getElementById('status').value,
        company = document.getElementById('company').value,
        title = document.getElementById('title').value;

    if (status=='no'){
        return showSweetAlert('Status','You Should select','error');
    } else if(date=='' ){
        return showSweetAlert('Date','You Should Enter Date','error');
    } else if(company==''){
        return showSweetAlert('Company','You Should Enter Company Name','error');
    } else if(title==''){
        return showSweetAlert('Title','You Should Enter Company Title','error');
    } else {
        showSweetAlert('Done','You add New Record','success');
    }
    var table = document.getElementById("myTable"),
        trs = table.getElementsByTagName("tr"),
        trCount=trs.length;



    $('#myTable').append('<tr class="border-top"  data-col="'+status+'">\n' +
        '                                        <td class="coulmn1">\n' +
        '                                            <div class="toolbar">\n' +
        '                                                <i class="fas fa-ellipsis-h" data-toggle="dropdown"></i>\n' +
        '                                                <div class="fath dropdown-menu fadeIn animated">\n' +
        '                                                    <ul>\n' +
        '                                                        <li>\n' +
        '                                                            <a href="#">\n' +
        '                                                                <i class="i fas fa-print"></i>\n' +
        '                                                                print\n' +
        '                                                            </a>\n' +
        '                                                        </li>\n' +
        '                                                        <li>\n' +
        '                                                            <a href="#">\n' +
        '                                                                <i class="i fas fa-file"></i>\n' +
        '                                                                copy\n' +
        '                                                            </a>\n' +
        '                                                        </li>\n' +
        '                                                        <li>\n' +
        '                                                            <a href="#">\n' +
        '                                                                <i class="i fas fa-file-excel"></i>\n' +
        '                                                                excl\n' +
        '                                                            </a>\n' +
        '                                                        </li>\n' +
        '                                                        <li>\n' +
        '                                                            <a href="#">\n' +
        '                                                                <i class="i fas fa-file-csv"></i>\n' +
        '                                                                csv\n' +
        '                                                            </a>\n' +
        '                                                        </li>\n' +
        '                                                        <li>\n' +
        '                                                            <a href="#">\n' +
        '                                                                <i class="i     fas fa-file-pdf"></i>\n' +
        '                                                                pdf\n' +
        '                                                            </a>\n' +
        '                                                        </li>\n' +
        '                                                    </ul>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </td>\n' +
        '                                        <td class="coulmn2">\n' +
        '                                            <span class="'+status+'">'+status+'</span>\n' +
        '                                        </td>\n' +
        '                                        <td class="coulmn3">\n' +
        '                                            <span>'+date+'</span>\n' +
        '                                        </td>\n' +
        '                                        <td class="coulmn4">\n' +
        '                                            <div>\n' +
        '                                                <img src="img/4.png" alt="logo">\n' +
        '                                                <div class="info">\n' +
        '                                                    <h6>'+company+'</h6>\n' +
        '                                                    <p>'+title+'</p>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </td>\n' +
        '                                        <td class="coulmn5">\n' +
        '                                            <div class="custom-control custom-checkbox">\n' +
        '                                                <input type="checkbox" name="box" class="custom-control-input" id="ckeck'+trCount+'">\n' +
        '                                                <label class="custom-control-label" for="ckeck'+trCount+'"></label>\n' +
        '                                            </div>\n' +
        '                                        </td>\n' +
        '                                    </tr>');
    trCount++;
    document.querySelector('.addRecord').style.display='none';
    clear();
});

document.getElementById('close').addEventListener('click',function (evt) {
    evt.preventDefault();
    document.querySelector('.addRecord').style.display='none';
    clear();
});
function clear() {
    let date = document.getElementById('addDate').value='',
        status = document.getElementById('status').value='',
        company = document.getElementById('company').value='',
        title = document.getElementById('title').value='';
}


function showSweetAlert(title,text,icon) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    });
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/*
function showKaside() {
    var x = document.querySelector('.kaside '),
        y = document.querySelector('.leftNavUl ');
    if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}*/
/*
function showNav() {
    var x = document.querySelector('.kaside '),
        y = document.querySelector('.leftNavUl ');
    if (y.hasChildNodes()) {
        y.style.display = "block";
        x.style.display = "none";
    } else {
        y.style.display = "none";
    }
}*/
function showNav() {
    document.getElementById('leftNavUl').classList.toggle('show');
    document.getElementById('kaside').classList.remove('show');
}
function showKaside() {
    document.getElementById('kaside').classList.toggle('show');
    document.getElementById('leftNavUl').classList.remove('show');
}

let myDropzone = new Dropzone("div#myId", {url: "/file/post"});



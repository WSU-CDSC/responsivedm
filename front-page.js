// search functions used on main landing page

function imageSearch() {
    var input = document.getElementById('ImageSearchTerm').value
    window.open("/digital/search/searchterm/" + input + "!image" + "/field/all!type/mode/all!all/conn/and!and/cosuppress/","_self");
}

function allSearch() {
    window.open("/digital/search");
}

// functions for searching CRBEHA

function crbehaSearch() {
    var input = document.getElementById('SearchTerm').value
    window.open("/digital/search/collection/5985!cchm!wsuvan1!imls_2!imls_3!cvoralhist!methhist/searchterm/" + input + "/field/all/mode/all/conn/and/cosuppress/","_self");
}

function crbehaSearch2() {
    var input = document.getElementById('SearchTerm2').value
    window.open("/digital/search/collection/5985!cchm!wsuvan1!imls_2!imls_3!cvoralhist!methhist/searchterm/" + input + "/field/all/mode/all/conn/and/cosuppress/","_self");
}

// functions for collections that require searching across multiple CDM 'collections' e.g. CRBEHA

function SearchDropDownSociety() {
    var input = document.getElementById('SearchPathSociety').value
    window.open("/digital/search/collection/" + input + "/mode/all/conn/and/cosuppress/","_self");
}

function SearchDropDownType() {
    var input = document.getElementById('SearchPathType').value
    window.open("/digital/search/collection/" + input + "/field/type!all/mode/all!all/conn/and!and","_self");
}

function SearchDropDownSubject() {
    var input = document.getElementById('SearchPathSubject').value
    window.open("/digital/search/collection/" + input + "/field/subject!all/mode/all!all/conn/and!and","_self");
}

function SearchDropDownDate() {
    var input = document.getElementById('SearchPathDate').value
    window.open("/digital/search/collection/" + input + "/field/all!all/mode/any!all/conn/and!and/cosuppress/","_self");
}

// functions for custom searches in pages (single collection)

function SingleSearchType(){
    var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
    var input = document.getElementById('SearchPathType').value
    window.open("/digital/collection/" + collectionToSearch + "/search/searchterm/" + input + "/field/type/mode/all/conn/and/order/nosort/ad/asc","_self");
}

function SingleSearchDate(){
    var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
    var input = document.getElementById('SearchPathDate').value
    window.open("/digital/collection/" + collectionToSearch + "/search/searchterm/" + input + "/field/all/mode/all/conn/and/order/nosort/ad/asc","_self");
}

function SingleSearchSubject(){
    var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
    var input = document.getElementById('SearchPathSubject').value
    window.open("/digital/collection/" + collectionToSearch + "/search/searchterm/" + input + "/field/subject/mode/all/conn/and/order/nosort/ad/asc","_self");
}

// functions for limiting advanced search collections

function checkCollection_A() {
  if ( window.location.href.split('/collection/')[1] != undefined && window.location.href.split('/collection/')[1].split('/')[1] != undefined ) {
  var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
  document.getElementsByClassName("btn-see-more-less")[0].click();
  window.setTimeout(checkCollection_B,1000)
  }
}

function checkCollection_B() {
  var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
  if ( document.getElementsByName("selectAll")[0].checked) {
    document.getElementsByName("selectAll")[0].click();
    document.getElementsByName(collectionToSearch)[0].click();
    document.querySelectorAll("[data-id='updateBtn']")[0].click();
  }
  document.getElementsByClassName("btn-see-more-less")[0].click();
}
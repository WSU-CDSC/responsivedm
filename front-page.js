function imageSearch() {
    var input = document.getElementById('ImageSearchTerm').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/searchterm/" + input + "!image" + "/field/all!type/mode/all!all/conn/and!and/cosuppress/","_self");
}

function allSearch() {
    window.open("http://cdm16866.contentdm.oclc.org/digital/search");
}

function crbehaSearch() {
    var input = document.getElementById('SearchTerm').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/collection/5985!cchm!wsuvan1!imls_2!imls_3!cvoralhist!methhist/searchterm/" + input + "/field/all/mode/all/conn/and/cosuppress/","_self");
}

function crbehaSearch2() {
    var input = document.getElementById('SearchTerm2').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/collection/5985!cchm!wsuvan1!imls_2!imls_3!cvoralhist!methhist/searchterm/" + input + "/field/all/mode/all/conn/and/cosuppress/","_self");
}


function SearchDropDownSociety() {
    var input = document.getElementById('SearchPathSociety').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/collection/" + input + "/mode/all/conn/and/cosuppress/","_self");
}

function SearchDropDownType() {
    var input = document.getElementById('SearchPathType').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/collection/" + input + "/field/type!all/mode/all!all/conn/and!and","_self");
}

function SearchDropDownSubject() {
    var input = document.getElementById('SearchPathSubject').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/collection/" + input + "/field/subject!all/mode/all!all/conn/and!and","_self");
}

function SearchDropDownDate() {
    var input = document.getElementById('SearchPathDate').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/collection/" + input + "/field/all!all/mode/any!all/conn/and!and/cosuppress/","_self");
}
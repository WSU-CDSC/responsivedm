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

function SearchDropDownSociety() {
    var input = document.getElementById('SearchPathSociety').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/collection/" + input + "/mode/all/conn/and/cosuppress/","_self");
}

function SearchDropDownType() {
    var input = document.getElementById('SearchPathType').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/collection/" + input + "/field/type!all/mode/all!all/conn/and!and","_self");
}
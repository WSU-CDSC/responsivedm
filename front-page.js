function imageSearch() {
    var page = document.getElementById('ImageSearchTerm').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/searchterm/" + ImageSearchTerm.value + "!image" + "/field/all!type/mode/all!all/conn/and!and/cosuppress/","_self");
}

function allSearch() {
    var page = document.getElementById('ImageSearchTerm').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search");
}

function crbehaSearch() {
    var page = document.getElementById('SearchTerm').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/collection/5985!cchm!wsuvan1!imls_2!imls_3!cvoralhist!methhist/searchterm/" + SearchTerm.value + "/field/all/mode/all/conn/and/cosuppress/","_self");
}
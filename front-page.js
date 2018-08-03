function imageSearch() {
    var page = document.getElementById('ImageSearchTerm').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search/searchterm/" + ImageSearchTerm.value + "!image" + "/field/all!type/mode/all!all/conn/and!and/cosuppress/","_self");
}

    function allSearch() {
    var page = document.getElementById('ImageSearchTerm').value
    window.open("http://cdm16866.contentdm.oclc.org/digital/search");
}

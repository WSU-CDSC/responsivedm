// search functions used on main landing page

function imageSearch() {
    var input = document.getElementById('ImageSearchTerm').value
    window.open("/digital/search/searchterm/" + input + "!image" + "/field/all!type/mode/all!all/conn/and!and/cosuppress/","_self");
}

function allSearch() {
    window.open("/digital/search");
}
//function to clone search button at the top and bottom of ladning pag
(function() {
  'use strict';

  let globalScope = true;
  // set to true to run this recipe for the entire site
  let collectionScope = [
    ''
  ];
  // list the collection aliases to which the recipe should apply

  ['cdm-collection-landing-page:ready','cdm-collection-landing-page:update'].forEach(function(e) {
    document.addEventListener(e, function(e){
      if (globalScope || collectionScope.includes(e.detail.collectionId)) {
        const previousDiv = document.getElementsByClassName('grayDividerLine')[0];
        const clonedBrowseButton = document.getElementsByClassName('CollectionLanding-landingBrowseButton')[0].parentNode.cloneNode(true);
        previousDiv.insertAdjacentElement('afterend',clonedBrowseButton);
      }
    });
  });

})();

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

function SingleSearchKeyword(){
    var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
    var input = document.getElementById('SingleSearchKeywordInput').value
    if (input !== "") {
      window.open("/digital/collection/" + collectionToSearch + "/search/searchterm/" + input + "/field/all/mode/all/conn/and/order/nosort/ad/asc","_self");
    }
}

function SingleSearchType(){
    var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
    var input = document.getElementById('SingleSearchTypeInput').value
    if (input !== "") {
      window.open("/digital/collection/" + collectionToSearch + "/search/searchterm/" + input + "/field/type/mode/all/conn/and/order/nosort/ad/asc","_self");
    }
}

function SingleSearchSubject(){
    var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
    var input = document.getElementById('SingleSearchSubjectInput').value
    if (input !== "") {
      window.open("/digital/collection/" + collectionToSearch + "/search/searchterm/" + input + "/field/subject/mode/all/conn/and/order/nosort/ad/asc","_self");
    }
}

function SingleSearchCoverage(){
    var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
    var input = document.getElementById('SingleSearchCoverageInput').value
    if (input !== "") {
      window.open("/digital/collection/" + collectionToSearch + "/search/searchterm/" + input + "/field/coverage/mode/all/conn/and/order/nosort/ad/asc","_self");
    }
}

function SingleSearchDate(){
    var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
    var rawInput = document.getElementById('SingleSearchDateInput').value
    if (rawInput == '1860-1869'){
        var parsedInput = '1860 1861 1862 1863 1864 1865 1866 1867 1868 1869'
    } else if (rawInput == '1870-1879'){
         var parsedInput = '1870 1871 1872 1873 1874 1875 1876 1877 1878 1879'
    } else if (rawInput == '1880-1889'){
         var parsedInput = '1880 1881 1882 1883 1884 1885 1886 1887 1888 1889'
    } else if (rawInput == '1890-1899'){
         var parsedInput = '1890 1891 1892 1893 1894 1895 1896 1897 1898 1899'
    } else if (rawInput == '1900-1909'){
         var parsedInput = '1900 1901 1902 1903 1904 1905 1906 1907 1908 1909'
    } else if (rawInput == '1910-1919'){
         var parsedInput = '1910 1911 1912 1913 1914 1915 1916 1917 1918 1919'
    } else if (rawInput == '1920-1929'){
         var parsedInput = '1920 1921 1922 1923 1924 1925 1926 1927 1928 1929'
    } else if (rawInput == '1930-1939'){
         var parsedInput = '1930 1931 1932 1933 1934 1935 1936 1937 1938 1939'
    } else if (rawInput == '1940-1949'){
         var parsedInput = '1940 1941 1942 1943 1944 1945 1946 1947 1948 1949'
    } else if (rawInput == '1950-1959'){
         var parsedInput = '1950 1951 1952 1953 1954 1955 1956 1957 1958 1959'
    } else if (rawInput == '1960-1969'){
         var parsedInput = '1960 1961 1962 1963 1964 1965 1966 1967 1968 1969'
    } else if (rawInput == '1970-1979'){
         var parsedInput = '1970 1971 1972 1973 1974 1975 1976 1977 1978 1979'
    } else if (rawInput == '1980-1989'){
         var parsedInput = '1980 1981 1982 1983 1984 1985 1986 1987 1988 1989'
    } else if (rawInput == '1990-1999'){
         var parsedInput = '1990 1991 1992 1993 1994 1995 1996 1997 1998 1999'
    } else if (rawInput == '2000-2009'){
         var parsedInput = '2000 2001 2002 2003 2004 2005 2006 2007 2008 2009'
    } else if (rawInput == '2010-2019'){
         var parsedInput = '2010 2011 2012 2013 2014 2015 2016 2017 2018 2019'
    } else if (rawInput == '2020-2029'){
         var parsedInput = '2020 2021 2022 2023 2024 2025 2026 2027 2028 2029'
    }

    window.open("/digital/collection/" + collectionToSearch + "/search/searchterm/" + parsedInput + "/field/date/mode/any/conn/and/order/nosort/ad/asc","_self");
}

// functions for limiting advanced search collections

window.addEventListener("DOMContentLoaded", function(event) {
    findAdvancedSearch()
})

function findAdvancedSearch(){
  if (typeof document.getElementsByClassName("SimpleSearch-headerAdvancedSearchButtonLink")[0] == 'object') {
    advancedListener()
  }
  else {
    window.setTimeout(findAdvancedSearch,200)
  }
}

function findSeeAll(){
  if (typeof document.getElementsByClassName("btn-see-more-less")[0] == 'object') {
    document.getElementsByClassName("btn-see-more-less")[0].click();
  }
  else {
    console.log('button not loaded')
    window.setTimeout(findSeeAll,200)
  }
}

function findCollectionToSearch(){
  if (document.readyState == 'complete') {
    var collectionToSearch = [window.location.href.split('/collection/')[1].split('/')[0]];
    console.log(collectionToSearch)
    if (collectionToSearch[0] == 'cchm') {
      collectionToSearch = [ 'cchm','5985','wsuvan1','imls_2','imls_3','cvoralhist','methhist']
    }
    collectionToSearch.forEach(function(collection) {
      document.getElementsByName(collection)[0].click();
    })
  }
  else {
    if (typeof loopLimiter == 'undefined') {
      loopLimiter = 1
    }
    if (loopLimiter < 30 ) {
      console.log('looping')
      window.setTimeout(findCollectionToSearch,200)
      loopLimiter = loopLimiter + 1
    }
  }
}

function advancedListener(){
    console.log('loaded')
    document.getElementsByClassName("SimpleSearch-headerAdvancedSearchButtonLink")[0].addEventListener("click", function(){
    window.setTimeout(checkCollection_A,800)
    });
}

function checkCollection_A() {
  if ( window.location.href.split('/collection/')[1] != undefined && window.location.href.split('/collection/')[1].split('/')[1] != undefined ) {
  var collectionToSearch = window.location.href.split('/collection/')[1].split('/')[0];
  findSeeAll()
  checkCollection_B()
  }
}

function checkCollection_B() {
  console.log('seeking')
  if ( document.getElementsByName("selectAll")[0].checked) {
    document.getElementsByName("selectAll")[0].click();
    findCollectionToSearch()
    document.querySelectorAll("[data-id='updateBtn']")[0].click();
  }
  document.getElementsByClassName("btn-see-more-less")[0].click();
}

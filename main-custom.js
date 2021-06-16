// search functions used on main landing page

function imageSearch() {
    var input = document.getElementById('ImageSearchTerm').value
    window.open("/digital/search/searchterm/" + input + "!image" + "/field/all!type/mode/all!all/conn/and!and/cosuppress/","_self");
}

function allSearch() {
    window.open("/digital/search");
}
//function called to grab the current link location and append to form on MASC site to provide item feedback
function SendFeedback(){
    var CurrentLocation = window.location;
    var CollectionId = window.location.href.split('/collection/')[1].split('/')[0];
    var ItemId = window.location.href.split('/id/')[1].split('/')[0];
       window.location = "https://libraries.wsu.edu/masc/digital-collections-feedback?ref=" +CurrentLocation+ "&coll="+CollectionId+ "&item="+ItemId;
}


//function to clone search button at the top and bottom of collection landing pages
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
//Function to insert Feedback Link

  (function () {
  'use strict';

  let globalScope = false;
  // set to true to run this recipe for the entire site
  let collectionScope = [
    'nash'
  ];

  function insertTwitterFollowButton(){
    const twitBtn = document.getElementsByClassName('ItemOptions-itemOptions');
  //  if (twitBtn == null || twitBtn.length === 0) {
      const linkContainer = document.createElement('div');
      linkContainer.className = 'text-center';
      //linkContainer.innerHTML = '<a href="https://twitter.com/' + screenName + '" class="twitter-follow-button" data-show-count="false" data-show-screen-name="true" data-size="large">Follow WSU Libraries</a>';
       linkContainer.innerHTML = '<a href="javascript:SendFeedback()" class="twitter-follow-button" data-show-count="false" data-show-screen-name="true" data-size="large">Tell us about this Item!</a>';
      Array.from(document.querySelectorAll('.ItemOptions-itemOptions'))
        .forEach(el => {
          el.prepend(linkContainer.cloneNode(true));
        });

    //  loadScript('https://platform.twitter.com/widgets.js');
    //}
  }

  //const twitterScreenName = 'WSULibraries';

 /* document.addEventListener('cdm-home-page:ready', function() {
    insertTwitterFollowButton(twitterScreenName);
  }); -->
  document.addEventListener('cdm-about-page:ready', function() {
    insertTwitterFollowButton(twitterScreenName);
  });
  document.addEventListener('cdm-search-page:ready', function() {
    insertTwitterFollowButton(twitterScreenName);
  });
  document.addEventListener('cdm-collection-page:ready', function() {
    insertTwitterFollowButton(twitterScreenName);
  });
  document.addEventListener('cdm-advanced-search-page:ready', function() {
    insertTwitterFollowButton(twitterScreenName);
  }); */
  document.addEventListener('cdm-item-page:ready', function(e) {
    let collection = e.detail.collectionId;
    if (globalScope || collectionScope.includes(collection)){
    insertTwitterFollowButton();
  }
  });
  /* document.addEventListener('cdm-custom-page:ready', function() {
    insertTwitterFollowButton(twitterScreenName);
  });  */

})();
//PDF button download (changing this to a item feedback link...)
(function() {
    'use strict';

    // helper function to extract archival download link of current item
    function buildPDFDownloadLink(collection, item) {
      return fetch('/digital/api/collections/' + collection + '/items/' + item + '/false')
        .then(function(response) {
          // return API info about item as JSON
          return response.json();
        })
        .then(function(json) {
          // if print PDF exists get download URL
          console.log('has print pdf: ' + json.hasPrintPDF);

          if (json.hasPrintPDF == true) {
            let printLink = json.downloadParentUri;
            console.log('parent uri: ' + json.downloadParentUri);
            return printLink;
          } else {
            let printLink = false;
            return printLink;
          }
        })
        .catch(function(error) {
          console.log('No print PDF link found: ' + error);
        })
    }

    let downloadPDFButton = {
      insert: function(printLink) {
        let button = document.createElement('div');
        button.className = 'btn-group btn-group-default print-pdf-button';

        let buttonAnchor = document.createElement('a');
        buttonAnchor.title = "Download Full PDF";
        buttonAnchor.href = printLink;
        buttonAnchor.className = 'cdm-btn btn btn-primary';
        buttonAnchor.target = '_self';

        let buttonIcon = document.createElement('span');
        buttonIcon.className = 'fa fa-file-pdf-o fa-2x';

        buttonAnchor.appendChild(buttonIcon);
        button.appendChild(buttonAnchor);

        Array.from(document.querySelectorAll('.ItemOptions-itemOptions>.btn-toolbar'))
          .forEach(el => {
//            el.appendChild(button.cloneNode(true)); // insert button far right
            el.prepend(button.cloneNode(true)); // insert button far left
          });
      },
      remove: function() {
        Array.from(document.querySelectorAll('.print-pdf-button'))
          .forEach(el => {
            if (el && el.parentElement) {
              el.parentElement.removeChild(el);
            }
          });
      }
    }

    // locates download link and replaces the target URL
    function removeExistingPDFDownload() {
      Array.from(document.querySelectorAll('li > a[data-metrics-event-label*="download:All"]'))
        .forEach(el => {
          if (el && el.parentNode) {
            el.parentNode.remove();
          }
        });
    }

  //helper function to sequence fetch promises
  function insertPrintPDFDownload(collection, item) {
    buildPDFDownloadLink(collection, item)
      .then(function(response) {
        if (response) {
          downloadPDFButton.insert(response);
          removeExistingPDFDownload();
        }
      });
  }

  let globalScope = true; // set to true for global scripts or false for collection-constrained scripts
  let collectionScope = [ // list all collection aliases that should trigger this script
  ];


  document.addEventListener('cdm-item-page:ready', function(e) {
    let collection = e.detail.collectionId;
    if (globalScope || collectionScope.includes(collection)) {
      insertPrintPDFDownload(collection, e.detail.itemId);
    }
  });

  document.addEventListener('cdm-item-page:update', function(e) {
    let collection = e.detail.collectionId;
    if (globalScope || collectionScope.includes(collection)) {
      downloadPDFButton.remove();
      insertPrintPDFDownload(collection, e.detail.itemId);
    }
  });

  document.addEventListener('cdm-item-page:leave', function(e) {
    let collection = e.detail.collectionId;
    if (globalScope || collectionScope.includes(collection)) {
      downloadPDFButton.remove();
    }
  });

})();


//event logging debug script from  OCLC

(function() {
  'use strict';
  //debug script to show all event triggers in dev console when navigating through CONTENTdm
  //this script needs to be in the main JS file to work reliably

  const pageClasses = [
  //array of every page class in the lifecycle
    'cdm-home-page','cdm-about-page',
    'cdm-login-page','cdm-notfound-page',
    'cdm-search-page','cdm-collection-search-page',
    'cdm-advanced-search-page',
    'cdm-collection-page','cdm-collection-landing-page',
    'cdm-item-page','cdm-custom-page',
    'cdm-saved-items-page','cdm-shared-items-page'
  ];

  const eventCategories = ['enter','ready','update','leave'];
  //the four event categories

  const allPageEvents = [];

  pageClasses.forEach(pageClass => {
  //combine every event category with every page class
    eventCategories.forEach(eventCat => {
      allPageEvents.push(pageClass + ':' + eventCat);
    })
  });


  const valueStyle = 'font-weight: bold; font-style: italic;';
  //custom styling to emphasize log messages in the console

  document.addEventListener('cdm-app:ready', function(e) {
  //cdm-app only has the :ready event so is handled separately
    console.log('event: %c cdm-app:ready', valueStyle);
  });

  allPageEvents.forEach(eventType => {
  //run through every event type
    document.addEventListener(eventType, function(e) {
    //attach listeners to the event for every event type
      if (e.detail.collectionId || e.detail.itemId || e.detail.filename) {
      //create log group if multiple event details exist
        console.groupCollapsed('event: %c' + eventType, valueStyle);
        if (e.detail.collectionId || e.detail.itemId) {
          console.log('alias: %c' + e.detail.collectionId, valueStyle);
          console.log('id: %c' + e.detail.itemId, valueStyle);
        }
        if (e.detail.filename) {
          console.log('page name: %c' + e.detail.filename, valueStyle);
        }
        console.groupEnd();
      } else {
      //only a single event detail; og without group
        console.log('event: %c' + eventType, valueStyle);
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

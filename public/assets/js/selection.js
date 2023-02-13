const companyDetailsJsonObj2 = [];
const dataForDisplaySearchParameter = [];
var intervalId = null;
var varCounter = 0;

$(function () {
    getCompaniesRelatedToCurrentUser();
    displayFirstCompanyDetails();
    displayTopCompany();
});

$(window).scroll(function (e) {
    var $el = $('.fixed-top-mid');
    var isPositionFixed = $el.css('position') == 'fixed';
    if ($(this).scrollTop() > 200 && !isPositionFixed) {
        $el.css({ position: 'fixed', top: '0px' });
    }
    if ($(this).scrollTop() < 200 && isPositionFixed) {
        $el.css({ position: 'static', top: '0px' });
    }
});

let tradeCategories;
let subCategories;
let minorSubCategories;

let companiesProfilePicture;

// to get the active image in carousel
let selectionsNextSlide;
let selectionsPrevSlide;
let activeDivOfCarousel;
let activeImageOfCarousel;
let imageSrcOfActiveImageInCarousel;
let imageNameOfActiveImageInCarousel;
let fileNameOfActiveImageInCarousel;

//cards of selection column
let selectionLeftColumn;
let cardForDetailsOfSpecificCompany;
let cardForCompanySearchResult;
let selectionMidColumnCompanyBanner;

// for selection/filter (left column)
let selectionRegionOfOperation;
let displayselectedRegionOfOperation;
let displaySelectedCountry;
let displaySelectedState;
let displaySelectedCity;
let displaySelectedlanguage;
let displaySelectedBusinessScale;
let displaySelectedTradeCategories;
let displaySelectedSubCategories;
let displaySelectedMinorSubCategories;
let selectedRegionOfOperation;
let selectedCountry;
let selectedState;
let selectedCity;
let selectedLanguage;
let selectedBusinessScale;
let selectedTradeCategories;
let selectedSubCategories;
let selectedMinorSubCategories;

tradeCategories = getId('trade-categories');
subCategories = getId('sub-categories');
minorSubCategories = getId('minor-sub-categories');

companiesProfilePicture = getId('companiesProfilePicture');

selectionsNextSlide = getId('selections-next-slide');
selectionsPrevSlide = getId('selections-prev-slide');

selectionLeftColumn = getId('selectionLeftColumn');
selectionMidColumnCompanyBanner = getId('selectionMidColumnCompanyBanner');
cardForDetailsOfSpecificCompany = getId('cardForDetailsOfSpecificCompany');
cardForCompanySearchResult = getId('cardForCompanySearchResult');

selectionRegionOfOperation = getId('selectionRegionOfOperation');
displayselectedRegionOfOperation = getId('displayselectedRegionOfOperation');
displaySelectedCountry = getId('displaySelectedCountry');
displaySelectedState = getId('displaySelectedState');
displaySelectedCity = getId('displaySelectedCity');
displaySelectedlanguage = getId('displaySelectedlanguage');
displaySelectedBusinessScale = getId('displaySelectedBusinessScale');
displaySelectedTradeCategories = getId('displaySelectedTradeCategories');
displaySelectedSubCategories = getId('displaySelectedSubCategories');
displaySelectedMinorSubCategories = getId('displaySelectedMinorSubCategories');
selectedRegionOfOperation = getId('selectedRegionOfOperation');
selectedCountry = getId('selectedCountry');
selectedState = getId('selectedState');
selectedCity = getId('selectedCity');
selectedLanguage = getId('selectedLanguage');
selectedBusinessScale = getId('selectedBusinessScale');
selectedTradeCategories = getId('selectedTradeCategories');
selectedSubCategories = getId('selectedSubCategories');
selectedMinorSubCategories = getId('selectedMinorSubCategories');

// ============================================
// responsiveness of height in selection [start]
// ============================================

addEventListener('load', (event) => {
    let screenHeight = window.innerHeight;
    let adjustedScreenHeight = screenHeight - 125;
    let adjustedScreenHeight2 = (screenHeight - 125) / 2;

    let customStyles = {
        height: adjustedScreenHeight + 'px',
    };

    let customStyles2 = {
        height: adjustedScreenHeight2 + 'px',
    };

    Object.assign(selectionLeftColumn.style, customStyles);
    Object.assign(companiesProfilePicture.style, customStyles);
    Object.assign(selectionMidColumnCompanyBanner.style, customStyles);
    Object.assign(cardForDetailsOfSpecificCompany.style, customStyles2);
    Object.assign(cardForCompanySearchResult.style, customStyles2);
});

addEventListener('resize', (event) => {
    let screenHeight = window.innerHeight;
    let adjustedScreenHeight = screenHeight - 125;
    let adjustedScreenHeight2 = (screenHeight - 125) / 2;

    let customStyles = {
        height: adjustedScreenHeight + 'px',
    };

    let customStyles2 = {
        height: adjustedScreenHeight2 + 'px',
    };

    Object.assign(selectionLeftColumn.style, customStyles);
    Object.assign(companiesProfilePicture.style, customStyles);
    Object.assign(selectionMidColumnCompanyBanner.style, customStyles);
    Object.assign(cardForDetailsOfSpecificCompany.style, customStyles2);
    Object.assign(cardForCompanySearchResult.style, customStyles2);
});

// ============================================
// responsiveness of height in selection [end]
// ============================================

// selectionsPrevSlide.onmouseup = function () {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// };

// selectionsPrevSlide.onmousedown = function () {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// };

// selectionsPrevSlide.onkeyup = function () {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// };

// selectionsPrevSlide.addEventListener('click', (e) => {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// });

selectionsPrevSlide.addEventListener('mouseleave', (e) => {
    varCounter = 0;
    intervalId = setInterval(getImageName, 1000);
});

// selectionsPrevSlide.onmouseover = function () {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// };

// selectionsNextSlide.onmouseup = function () {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// };

// selectionsNextSlide.onmousedown = function () {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// };

//not working
// selectionsNextSlide.onkeyup = function () {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// };

// selectionsNextSlide.addEventListener('click', (e) => {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// });

var timer,
    num = 0;

$('#selections-prev-slide').click(function () {
    varCounter = 0;

    /*This condition is required because 2 click events are fired for each
    dblclick but we only want to record the time of the first click*/
    if (num % 2 === 0) {
        if (num === 0) {
            timer = new Date().getTime() - 2000;
        } else {
            timer = new Date().getTime();
        }
    }

    let time2 = new Date().getTime(),
        dblClickTime = time2 - timer;
    console.log('dblClickTime: ', dblClickTime);
    console.log('time2: ', time2);
    console.log('timer: ', timer);

    if (dblClickTime > 1000) {
        console.log('good: ', dblClickTime);
        intervalId = setInterval(getImageName, 1500);
    } else {
        console.log('too fast: ', dblClickTime);
    }
    num++;
});

$('#selections-next-slide').click(function () {
    varCounter = 0;

    /*This condition is required because 2 click events are fired for each
    dblclick but we only want to record the time of the first click*/
    if (num % 2 === 0) {
        if (num === 0) {
            timer = new Date().getTime() - 2000;
        } else {
            timer = new Date().getTime();
        }
    }

    let time2 = new Date().getTime(),
        dblClickTime = time2 - timer;
    // console.log('dblClickTime: ', dblClickTime);
    // console.log('time2: ', time2);
    // console.log('timer: ', timer);

    if (dblClickTime > 1000) {
        // console.log('good: ', dblClickTime);
        intervalId = setInterval(getImageName, 1500);
    } else {
        // console.log('too fast: ', dblClickTime);
    }
    num++;
});

selectionsNextSlide.addEventListener('mouseleave', (e) => {
    varCounter = 0;
    intervalId = setInterval(getImageName, 1000);
});

// selectionsNextSlide.onmouseover = function () {
//     varCounter = 0;
//     intervalId = setInterval(getImageName, 1500);
// };

document.getElementById('selections-next-slide').addEventListener('transitionend', getImageName);
document.getElementById('selections-prev-slide').addEventListener('transitionend', getImageName);

let isTransitioning = false;
function getImageName() {
    if (!isTransitioning && varCounter < 3) {
        isTransitioning = true;
        varCounter++;

        const activeDivOfCarousel = getSl('.uk-active.uk-transition-active');
        const activeImageOfCarousel = activeDivOfCarousel.getElementsByTagName('img')[0];
        const imageSrcOfActiveImageInCarousel = activeImageOfCarousel.src;
        const imageNameOfActiveImageInCarousel = imageSrcOfActiveImageInCarousel.split('/').pop();

        console.log('imageNameOfActiveImageInCarousel: ', imageNameOfActiveImageInCarousel);
        displayCompanyDetailsUsingImageName(imageNameOfActiveImageInCarousel);

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    } else if (varCounter >= 3) {
        clearInterval(intervalId);
    }
}

function displayCompanyDetailsUsingImageName(filename) {
    const companyDetails = companyDetailsJsonObj2[0].find((details) => details.banner === filename);

    const {
        business_name: businessName,
        business_tagline: businessTagline,
        business_language_of_communication: businessLanguageOfCommunication,
        business_major_category: businessMajorCategory,
        business_sub_category: businessSubCategory,
        business_minor_sub_category: businessMinorSubCategory,
        business_scale: businessScale,
        business_industry_belong_to: businessIndustryBelongTo,
        country_of_operation: countryOfOperation,
        states_of_operation: statesOfOperation,
        city_of_operation: cityOfOperation,
        region_of_operation: regionOfOperation,
        start_operating_hour: startOperatingHour,
        end_operating_hour: endOperatingHour,
    } = companyDetails;


    const businessIndustryBelongId = getId('selection-business-industry-belong');
    const businessLanguageOfCommunicationId = getId('selection-business-language-of-communication');
    const companyNameId = getId('selection-company-name');
    const companyTaglineId = getId('selection-company-tagline');
    const businessMajorCategoryId = getId('selection-business-major-category');
    const businessSubCategoryId = getId('selection-business-sub-category');
    const businessMinorSubCategoryId = getId('selection-business-minor-sub-category');
    const businessScaleId = getId('selection-business-scale');
    const companyRegionOfOperationsId = getId('selection-company-region-of-operations');
    const countryOfOperationsId = getId('selection-company-country-of-operations');
    const stateOfOperationsId = getId('selection-company-state-of-operations');
    const localOperatingTimeId = getId('local-operating-time');
    const uctOperatingTimeId = getId('uct-operating-time');

    businessIndustryBelongId.innerHTML = '';
    businessLanguageOfCommunicationId.innerHTML = '';
    companyRegionOfOperationsId.innerHTML = '';
    countryOfOperationsId.innerHTML = '';
    stateOfOperationsId.innerHTML = '';

    if (!companyDetails) return;
    console.log('companyDetails', companyDetails);
    companyNameId.innerHTML = businessName;
    companyTaglineId.innerHTML = businessTagline || '';
    businessMajorCategoryId.innerHTML = businessMajorCategory
        ? getTradeCategoriesTitleById(businessMajorCategory)
        : 'N/A';
    businessSubCategoryId.innerHTML = businessSubCategory ? getSubCategoriesTitleById(businessSubCategory) : 'N/A';
    businessMinorSubCategoryId.innerHTML = businessMinorSubCategory
        ? getMinorSubCategoriesTitleById(businessMinorSubCategory)
        : 'N/A';
    businessScaleId.innerHTML = businessScale ? getBusinessScaleTitle(businessScale) : 'N/A';
    businessLanguageOfCommunication ? formattingLanguageName(businessLanguageOfCommunication) : '';
    businessIndustryBelongTo ? formattingBusinessTags(businessIndustryBelongTo) : '';
    countryOfOperation ? getCountryNameUsingCode(countryOfOperation, 'selection-company-country-of-operations') : '';
    statesOfOperation
        ? getStatesNameToBeDisplayUsingCode(statesOfOperation, 'selection-company-state-of-operations')
        : '';
    cityOfOperation ? getCityNameToBeDisplayUsingCode(cityOfOperation, 'selection-company-city-of-operations') : '';
    companyRegionOfOperationsId.innerHTML = regionOfOperation ? regionOfOperation : 'N/A';
    localOperatingTimeId.innerHTML =
        startOperatingHour && endOperatingHour ? `${startOperatingHour} - ${endOperatingHour}` : 'N/A';
    uctOperatingTimeId.innerHTML =
        startOperatingHour && endOperatingHour
            ? convertTimeToInternationalStart(startOperatingHour, 'Philippines', 'UTC') +
              ' - ' +
              convertTimeToInternationalEnd(endOperatingHour, 'Philippines', 'UTC')
            : 'N/A';
}

function displayFirstCompanyDetails() {
    const [firstCompany] = companyDetailsJsonObj2[0];

    if (firstCompany === undefined) {
        replaceDashCompanyDetailsDiv();
        return;
    }

    const {
        business_name: businessName,
        business_tagline: businessTagline,
        business_language_of_communication: businessLanguageOfCommunication,
        business_major_category: businessMajorCategory,
        business_sub_category: businessSubCategory,
        business_minor_sub_category: businessMinorSubCategory,
        business_scale: businessScale,
        business_industry_belong_to: businessIndustryBelongTo,
        country_of_operation: countryOfOperation,
        states_of_operation: statesOfOperation,
        city_of_operation: cityOfOperation,
        region_of_operation: regionOfOperation,
        start_operating_hour: startOperatingHour,
        end_operating_hour: endOperatingHour,
    } = firstCompany;

    const businessIndustryBelongId = getId('selection-business-industry-belong');
    const businessLanguageOfCommunicationId = getId('selection-business-language-of-communication');
    const companyNameId = getId('selection-company-name');
    const companyTaglineId = getId('selection-company-tagline');
    const businessMajorCategoryId = getId('selection-business-major-category');
    const businessSubCategoryId = getId('selection-business-sub-category');
    const businessMinorSubCategoryId = getId('selection-business-minor-sub-category');
    const businessScaleId = getId('selection-business-scale');
    const companyRegionOfOperationsId = getId('selection-company-region-of-operations');
    const localOperatingTimeId = getId('local-operating-time');
    const uctOperatingTimeId = getId('uct-operating-time');

    companyNameId.innerHTML = businessName;
    companyTaglineId.innerHTML = businessTagline || 'N/A';
    businessLanguageOfCommunication ? formattingLanguageName(businessLanguageOfCommunication) : '';
    businessMajorCategoryId.innerHTML = businessMajorCategory
        ? getTradeCategoriesTitleById(businessMajorCategory)
        : 'N/A';
    businessSubCategoryId.innerHTML = businessSubCategory ? getSubCategoriesTitleById(businessSubCategory) : 'N/A';
    businessMinorSubCategoryId.innerHTML = businessMinorSubCategory
        ? getMinorSubCategoriesTitleById(businessMinorSubCategory)
        : 'N/A';
    businessScaleId.innerHTML = businessScale ? getBusinessScaleTitle(businessScale) : 'N/A';

    businessIndustryBelongTo ? formattingBusinessTags(businessIndustryBelongTo) : '';

    countryOfOperation ? getCountryNameUsingCode(countryOfOperation, 'selection-company-country-of-operations') : '';
    statesOfOperation
        ? getStatesNameToBeDisplayUsingCode(statesOfOperation, 'selection-company-state-of-operations')
        : '';
    cityOfOperation ? getCityNameToBeDisplayUsingCode(cityOfOperation, 'selection-company-city-of-operations') : '';
    companyRegionOfOperationsId.innerHTML = regionOfOperation || 'N/A';
    localOperatingTimeId.innerHTML =
        startOperatingHour && endOperatingHour ? `${startOperatingHour} - ${endOperatingHour}` : 'N/A';
    uctOperatingTimeId.innerHTML =
        startOperatingHour && endOperatingHour
            ? convertTimeToInternationalStart(startOperatingHour, 'Philippines', 'UTC') +
              ' - ' +
              convertTimeToInternationalEnd(endOperatingHour, 'Philippines', 'UTC')
            : 'N/A';
}

function displayTopCompany() {
    const elementId = document.getElementById('top-selection-results');
    elementId.innerHTML = '';

    const leng = companyDetailsJsonObj2[0].length;
    for (let i = leng - 1; i >= 0; i--) {
        elementId.innerHTML += `<div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                <div class="flex-1">
                    <a href="#" onclick="displayTopCompanyDetails('${companyDetailsJsonObj2[0][i].business_name}')" class="text-base font-semibold capitalize">
                        ${companyDetailsJsonObj2[0][i].business_name}
                    </a>
                </div>
            </div>`;
    }
}

function displaySearchParameter() {
    const displaySearchParameterEl = document.getElementById('displaySearchParameter');
    let html = `
      <li>
        <a href="index.html">Home</a>
      </li>
      <li class="active">
        <a href="#">Selection </a>
      </li>
    `;
    const data = dataForDisplaySearchParameter[0];

    if (data.business_major_category) {
        html += `
        <li class="">
          <a href="#">${getTradeCategoriesTitleById(data.business_major_category)}</a>
        </li>
      `;
    }
    if (data.business_sub_category) {
        html += `
        <li class="">
          <a href="#">${getSubCategoriesTitleById(data.business_sub_category)}</a>
        </li>
      `;
    }
    if (data.business_minor_sub_category) {
        html += `
        <li class="">
          <a href="#">${getMinorSubCategoriesTitleById(data.business_minor_sub_category)}</a>
        </li>
      `;
    }
    if (data.region_of_operation) {
        html += `
        <li class="">
          <a href="#">${data.region_of_operation}</a>
        </li>
      `;
    }
    if (data.country_of_operation) {
        html += `
        <li class="">
          <a href="#" id="displaySearchParameter_countryOperation"></a>
        </li>
      `;
        getCountryNameUsingCode(data.country_of_operation, 'displaySearchParameter_countryOperation');
    }
    if (data.states_of_operation) {
        html += `
        <li class="">
          <a href="#" id="displaySearchParameter_stateOperation"></a>
        </li>
      `;
        getStatesNameToBeDisplayUsingCode(data.states_of_operation, 'displaySearchParameter_stateOperation');
    }

    displaySearchParameterEl.innerHTML = html;
}

function getCountryNameUsingCode(code, elementId) {
    console.log('getCountryNameUsingCode code: ', code);
    // $('#' + elementId).empty();
    document.getElementById(elementId).innerHTML = '';

    if (code) {
        fetch('assets/json/countries.json')
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                let countryCode = code.split(',');

                for (var i = 0; i < countryCode.length; i++) {
                    let filtered = data.filter((d) => d.iso2 == countryCode[i]);
                    let countryName;
                    if (countryCode.length > 1 || i == countryCode.length + 1) {
                        countryName = filtered[0].name + ', ';
                    } else {
                        countryName = filtered[0].name;
                    }
                    document.getElementById(elementId).innerHTML =
                        document.getElementById(elementId).innerHTML + countryName;
                }
            });
    } else {
        document.getElementById(elementId).innerHTML = 'N/A ';
    }
}

function returnCountryNameUsingCode(code) {
    if (code) {
        fetch('assets/json/countries.json')
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                let countryCode = code;
                console.log('countryCode', countryCode);
                for (var i = 0; i < countryCode.length; i++) {
                    console.log('countryCode[i]', countryCode[i]);
                    return data.filter((d) => d.iso2 == countryCode[i]);
                }
            });
    }
}

function test(countryCode) {
    fetch('assets/json/countries.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let filtered = data.filter((d) => d.iso2 == countryCode);
            return filtered[0].name;
        });
}

function getStatesNameToBeDisplayUsingCode(code, elementId) {
    if (code) {
        fetch('assets/json/states.json')
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                let filtered = data.filter((d) => d.id == code);
                document.getElementById(elementId).innerHTML = filtered[0].name;
            });
    } else {
        document.getElementById(elementId).innerHTML = 'N/A';
    }
}

function getCityNameToBeDisplayUsingCode(code, elementId) {
    if (code) {
        fetch('assets/json/cities.json')
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                let filtered = data.filter((d) => d.id == code);
                document.getElementById(elementId).innerHTML = filtered[0].name;
            });
    } else {
        document.getElementById(elementId).innerHTML = 'N/A';
    }
}

function getCompaniesProfilePicture(id, uuid) {
    let value;
    $.ajax({
        url: '/api/get/companies-profile-picture',
        type: 'POST',
        data: { id: id, uuid: uuid },
        async: false,
        success: function (data) {
            value = data;
        },
    });
    return value;
}

// consume api to get all trade categories
async function getTradeCategories() {
    let response = await fetch(host + '/api/get/trade-categories-for-today');
    let data = await response.json();
    return data;
}

// display all trade categories in frontend select option
getTradeCategories().then((data) => {
    // tradeCategories.innerHTML +=
    //     '<div class="filterByTradeCategoryClass text-md font-md text-white-900 dark:text-white-300 p-2 hover:bg-gray-50 orbitron" data-el="Trade Everyday">Trade Everyday</div>';
    for (var i = 0; i < data.length; i++) {
        tradeCategories.innerHTML +=
            '<div class="filterByTradeCategoryClass text-md font-md text-white-900 dark:text-white-300 p-2 hover:bg-gray-50 orbitron" data-el="' +
            data[i]['id'] +
            '">' +
            data[i]['title'] +
            '</div>';
    }
});

function getSubCategory(tradeCategoriesElementId, subCategoriesElementId) {
    $('#' + subCategoriesElementId).empty();
    let tradeCategoryId = document.getElementById(tradeCategoriesElementId).value;
    if (tradeCategoryId) {
        async function getSubCategoriesByTradeCategoryId() {
            let response = await fetch(host + '/api/get/sub-categories-by-trade-category-id/' + tradeCategoryId);
            let data = await response.json();
            return data;
        }

        getSubCategoriesByTradeCategoryId().then((data) => {
            subCategories.innerHTML =
                '<div class="filterBySubCategoryClass text-md font-md text-white-900 dark:text-white-300 p-2 hover:bg-gray-50" data-el="">Any</div>';
            for (var i = 0; i < data.length; i++) {
                subCategories.innerHTML +=
                    '<div class="filterBySubCategoryClass text-md font-md text-white-900 dark:text-white-300 p-2 hover:bg-gray-50" data-el="' +
                    data[i]['id'] +
                    '">' +
                    data[i]['title'] +
                    '</div>';
            }
        });
    } else {
        displaySelectedSubCategories.innerHTML = '';
    }
}

// display all minor sub categories under sub category in frontend select option
subCategories.addEventListener('change', function () {
    $('#minor-sub-categories').empty();
    let subCategoryId = this.value;

    async function getMinorSubCategoriesByTradeCategoryId() {
        let response = await fetch(host + '/api/get/minor-sub-categories-by-sub-category-id/' + subCategoryId);
        let data = await response.json();
        return data;
    }

    getMinorSubCategoriesByTradeCategoryId().then((data) => {
        minorSubCategories.innerHTML = '<option value="" selected>Any</option>';
        for (var i = 0; i < data.length; i++) {
            minorSubCategories.innerHTML =
                minorSubCategories.innerHTML +
                '<option value="' +
                data[i]['id'] +
                '">' +
                data[i]['title'] +
                '</option>';
        }

        $('#minor-sub-categories').selectpicker('refresh');
    });
});

function getMinorCategory(subCategoriesElementId, minorSubCategoriesElementId) {
    $('#' + minorSubCategoriesElementId).empty();
    let subCategoryId = document.getElementById(subCategoriesElementId).value;
    if (subCategoryId) {
        async function getMinorSubCategoriesByTradeCategoryId() {
            let response = await fetch(host + '/api/get/minor-sub-categories-by-sub-category-id/' + subCategoryId);
            let data = await response.json();
            return data;
        }

        getMinorSubCategoriesByTradeCategoryId().then((data) => {
            minorSubCategories.innerHTML =
                '<div class="filterByMinorSubCategoryClass text-md font-md text-white-900 dark:text-white-300 p-2 hover:bg-gray-50" data-el="">Any</div>';
            for (var i = 0; i < data.length; i++) {
                minorSubCategories.innerHTML +=
                    '<div class="filterByMinorSubCategoryClass text-md font-md text-white-900 dark:text-white-300 p-2 hover:bg-gray-50" data-el="' +
                    data[i]['id'] +
                    '">' +
                    data[i]['title'] +
                    '</div>';
            }
        });
    } else {
        displaySelectedMinorSubCategories.innerHTML = '';
    }
}

// consume api to get all languages
async function getLanguages() {
    let response = await fetch(host + '/api/get/languages');
    let data = await response.json();
    return data;
}

// display all languages in frontend select option
getLanguages().then((data) => {
    document.getElementById('language').selectedIndex = 0;

    document.getElementById('language').innerHTML =
        '<div class="filterByLanguageClass text-md font-md text-white-900 dark:text-white-300 p-2 hover:bg-gray-50" data-el="">Any</div>';
    for (var i = 0; i < data.length; i++) {
        document.getElementById('language').innerHTML =
            document.getElementById('language').innerHTML +
            '<div class="filterByLanguageClass text-md font-md text-white-900 dark:text-white-300 p-2 hover:bg-gray-50" data-el="' +
            data[i]['code'] +
            '">' +
            data[i]['name'] +
            '</div>';
    }
});

function getCompaniesRelatedToCurrentUser() {
    $.ajax({
        url: '/api/get/get-companies-related-to-current-user',
        type: 'POST',
        async: false,
        success: function (data) {
            if (data.length > 0) {
                companyDetailsJsonObj2.push(data);
                dataForDisplaySearchParameter.push(data[0]);
                companiesProfilePicture.innerHTML = '';
                // for (var i = 0; i < data.length; i++) {
                for (var i = data.length - 1; i > -1; i--) {
                    let bannerTitle = getCompaniesProfilePicture(data[i]['id'], data[i]['uuid']);
                    let bannerSrc = host + '/uploads/users_upload_files/' + bannerTitle[0].banner;

                    companiesProfilePicture.innerHTML =
                        companiesProfilePicture.innerHTML +
                        '<li>' +
                        '<img src="' +
                        bannerSrc +
                        '" class="companyBannerPreview" id="companyBannerPreview" alt="" uk-cover>' +
                        '</li>';
                }
                displaySearchParameter();
            } else {
                const data = {
                    message: 'empty',
                };
                companyDetailsJsonObj2.push(data);
            }
        },
    });
}

document.getElementById('product_service_input').style.display = 'block';
document.getElementById('company_name_input').style.display = 'none';

document.getElementById('searchByProductOrCompanyName').onchange = function () {
    let searchByProductOrCompanyNameValue = this.value;

    if (searchByProductOrCompanyNameValue === 'product_service') {
        document.getElementById('product_service_input').style.display = 'block';
        document.getElementById('company_name_input').style.display = 'none';
    }
    if (searchByProductOrCompanyNameValue === 'company_name') {
        document.getElementById('product_service_input').style.display = 'none';
        document.getElementById('company_name_input').style.display = 'block';
    }
};

function getTradeCategoriesTitleById(id) {
    let value;

    if (id) {
        $.ajax({
            url: host + '/api/get/trade-category-title-by-id/' + id,
            async: false,
            success: function (data) {
                value = data[0].title;
            },
        });
        return value;
    } else {
        return 'N/A';
    }
}

function getSubCategoriesTitleById(id) {
    let value;
    $.ajax({
        url: host + '/api/get/sub-category-title-by-id/' + id,
        async: false,
        success: function (data) {
            value = data[0].title;
        },
    });
    return value;
}

function getMinorSubCategoriesTitleById(id) {
    let value;
    $.ajax({
        url: host + '/api/get/minor-sub-categories-by-id/' + id,
        async: false,
        success: function (data) {
            value = data[0].title;
        },
    });
    return value;
}

function getBusinessScaleTitle(id) {
    let value;

    switch (id) {
        case 1:
            value = 'Small Scale';
            break;
        case 2:
            value = 'Medium Scale';
            break;
        case 3:
            value = 'Large Scale';
            break;
        case '':
            value = 'Any';
            break;
        default:
            value = 'N/A';
    }

    return value;
}

function formattingBusinessTags(string) {
    if (string) {
        let data = string.split(',');
        for (var i = 0; i < data.length; i++) {
            document.getElementById('selection-business-industry-belong').innerHTML =
                document.getElementById('selection-business-industry-belong').innerHTML +
                '<a href="#" class="bg-gray-200 py-1.5 px-4 rounded-full">' +
                data[i] +
                '</a>';
        }
    } else {
        document.getElementById('selection-business-industry-belong').innerHTML = 'N/A';
    }
}

function formattingLanguageName(string) {
    let data = string.split(',');
    for (var i = 0; i < data.length; i++) {
        document.getElementById('selection-business-language-of-communication').innerHTML =
            document.getElementById('selection-business-language-of-communication').innerHTML +
            '<a href="#" class="bg-gray-200 py-1.5 px-4 rounded-full">' +
            getLanguageNameByCode(data[i]) +
            '</a>';
    }
}

function getLanguageNameByCode(code) {
    let value;
    $.ajax({
        url: host + '/api/get/language-name-by-code/' + code,
        async: false,
        success: function (data) {
            value = data[0].name;
        },
    });
    return value;
}

function displayTopCompanyDetails(companyName) {
    $('#selection-business-industry-belong').empty();
    $('#selection-business-language-of-communication').empty();

    let leng = companyDetailsJsonObj2[0].length;

    for (let i = 0; i < leng; i++) {
        if (companyDetailsJsonObj2[0][i].business_name === companyName) {
            document.getElementById('selection-company-name').innerHTML = companyDetailsJsonObj2[0][i].business_name;
            if (companyDetailsJsonObj2[0][i].business_tagline) {
                document.getElementById('selection-company-tagline').innerHTML =
                    companyDetailsJsonObj2[0][i].business_tagline;
            }

            if (companyDetailsJsonObj2[0][i].business_language_of_communication) {
                formattingLanguageName(companyDetailsJsonObj2[0][i].business_language_of_communication);
            }
            if (companyDetailsJsonObj2[0][i].business_major_category) {
                document.getElementById('selection-business-major-category').innerHTML = getTradeCategoriesTitleById(
                    companyDetailsJsonObj2[0][i].business_major_category,
                );
            }
            if (companyDetailsJsonObj2[0][i].business_sub_category) {
                document.getElementById('selection-business-sub-category').innerHTML = getSubCategoriesTitleById(
                    companyDetailsJsonObj2[0][i].business_sub_category,
                );
            }
            if (companyDetailsJsonObj2[0][i].business_minor_sub_category) {
                document.getElementById('selection-business-minor-sub-category').innerHTML =
                    getMinorSubCategoriesTitleById(companyDetailsJsonObj2[0][i].business_minor_sub_category);
            }
            if (companyDetailsJsonObj2[0][i].business_scale) {
                document.getElementById('selection-business-scale').innerHTML = getBusinessScaleTitle(
                    companyDetailsJsonObj2[0][i].business_scale,
                );
            }
            if (companyDetailsJsonObj2[0][i].business_industry_belong_to) {
                formattingBusinessTags(companyDetailsJsonObj2[0][i].business_industry_belong_to);
            }
            getCountryNameUsingCode(
                companyDetailsJsonObj2[0][i].country_of_operation,
                'selection-company-country-of-operations',
            );
            getStatesNameToBeDisplayUsingCode(
                companyDetailsJsonObj2[0][i].states_of_operation,
                'selection-company-state-of-operations',
            );
            getCityNameToBeDisplayUsingCode(
                companyDetailsJsonObj2[0][i].city_of_operation,
                'selection-company-city-of-operations',
            );

            if (companyDetailsJsonObj2[0][i].region_of_operation) {
                document.getElementById('selection-company-region-of-operations').innerHTML =
                    companyDetailsJsonObj2[0][i].region_of_operation;
            } else {
                document.getElementById('selection-company-region-of-operations').innerHTML = 'N/A';
            }

            $('#companiesProfilePicture').empty();
            let bannerTitle = getCompaniesProfilePicture(
                companyDetailsJsonObj2[0][i].id,
                companyDetailsJsonObj2[0][i].uuid,
            );

            companiesProfilePicture.innerHTML =
                companiesProfilePicture.innerHTML +
                '<li>' +
                '<img src="' +
                host +
                '/uploads/users_upload_files/' +
                bannerTitle[0].banner +
                '" alt="" uk-cover>' +
                '</li>';
        }
    }
}

document.getElementById('product_service_input').addEventListener('change', function () {
    selectionSearchParameter();
});

document.getElementById('company_name_input').addEventListener('change', function () {
    selectionSearchParameter();
});

document.getElementById('trade-categories').addEventListener('change', function () {
    selectionSearchParameter();
});

function selectionSearchParameter() {
    let regionOfOperationCode = document.getElementById('selectedRegionOfOperation').value;
    let countryCode = document.getElementById('selectedCountry').value;
    let selectionState = document.getElementById('selectedState').value;
    let selectionCity = document.getElementById('selectedCity').value;
    let language = document.getElementById('selectedLanguage').value;
    let business_scale = document.getElementById('selectedBusinessScale').value;
    let trade_categories = document.getElementById('selectedTradeCategories').value;
    let sub_categories = document.getElementById('selectedSubCategories').value;
    let minor_sub_categories = document.getElementById('selectedMinorSubCategories').value;
    let product_service_input = document.getElementById('product_service_input').value;
    let company_name_input = document.getElementById('company_name_input').value;

    console.log('selectionSearchParameter countryCode', countryCode);
    $.ajax({
        url: '/api/post/selection-search-parameter',
        type: 'POST',
        data: {
            regionOfOperationCode: regionOfOperationCode,
            countryCode: countryCode,
            selectionState: selectionState,
            selectionCity: selectionCity,
            language: language,
            business_scale: business_scale,
            trade_categories: trade_categories,
            sub_categories: sub_categories,
            minor_sub_categories: minor_sub_categories,
            product_service_input: product_service_input,
            company_name_input: company_name_input,
        },
        success: function (data) {
            if (data.length == 0) {
                replaceDashCompanyDetailsDiv();
            } else {
                emptyCompanyDetailsDiv();
                while (companyDetailsJsonObj2.length > 0) {
                    companyDetailsJsonObj2.pop();
                }
                companyDetailsJsonObj2.push(data);

                companiesProfilePicture.innerHTML = '';
                // for (var i = 0; i < data.length; i++) {
                for (var i = data.length - 1; i > -1; i--) {
                    let bannerTitle = getCompaniesProfilePicture(data[i]['id'], data[i]['uuid']);

                    companiesProfilePicture.innerHTML =
                        companiesProfilePicture.innerHTML +
                        '<li>' +
                        '<img src="' +
                        host +
                        '/uploads/users_upload_files/' +
                        bannerTitle[0].banner +
                        '" alt="" uk-cover>' +
                        '</li>';
                }
                displayFirstCompanyDetails();
                displayTopCompany();
                // displaySearchParameter();
            }

            while (dataForDisplaySearchParameter.length > 0) {
                dataForDisplaySearchParameter.pop();
            }
            const dataSearchParameter = {
                business_major_category: trade_categories,
                business_sub_category: sub_categories,
                business_minor_sub_category: minor_sub_categories,
                region_of_operation: regionOfOperationCode,
                country_of_operation: countryCode,
                states_of_operation: selectionState,
            };
            dataForDisplaySearchParameter.push(dataSearchParameter);
            displaySearchParameter();
        },
    });
}

// function replaceDashCompanyDetailsDiv() {
//     // $('#companiesProfilePicture').empty();
//     $('#top-selection-results').empty();
//     $('#selections-next-slide, #selections-prev-slide').hide();

//     const elementIds = [
//         'selection-company-name',
//         'selection-company-tagline',
//         'selection-business-language-of-communication',
//         'selection-business-major-category',
//         'selection-business-sub-category',
//         'selection-business-minor-sub-category',
//         'selection-business-industry-belong',
//         'selection-company-country-of-operations',
//         'selection-company-state-of-operations',
//         'selection-company-city-of-operations',
//         'selection-company-region-of-operations',
//         'selection-business-scale',
//         'local-operating-time'
//     ];
//     elementIds.forEach(elementId => document.getElementById(elementId).innerHTML = '-');

//     noRecordFoundImageSrc();
//     showRandomChoices();
// }


function replaceDashCompanyDetailsDiv() {
    // $('#companiesProfilePicture').empty();
    $('#top-selection-results').empty();
    $('#selections-next-slide').hide();
    $('#selections-prev-slide').hide();

    document.getElementById('selection-company-name').innerHTML = '-';
    document.getElementById('selection-company-tagline').innerHTML = '-';
    document.getElementById('selection-business-language-of-communication').innerHTML = '-';
    document.getElementById('selection-business-major-category').innerHTML = '-';
    document.getElementById('selection-business-sub-category').innerHTML = '-';
    document.getElementById('selection-business-minor-sub-category').innerHTML = '-';
    document.getElementById('selection-business-industry-belong').innerHTML = '-';
    document.getElementById('selection-company-name').innerHTML = '-';
    document.getElementById('selection-company-country-of-operations').innerHTML = '-';
    document.getElementById('selection-company-state-of-operations').innerHTML = '-';
    document.getElementById('selection-company-city-of-operations').innerHTML = '-';
    document.getElementById('selection-company-region-of-operations').innerHTML = '-';
    document.getElementById('selection-business-scale').innerHTML = '-';
    document.getElementById('local-operating-time').innerHTML = '-';

    noRecordFoundImageSrc();
    showRandomChoices();
}

function replaceNACompanyDetailsDiv() {
    const ids = [
      'selection-company-name',
      'selection-company-tagline',
      'selection-business-language-of-communication',
      'selection-business-major-category',
      'selection-business-sub-category',
      'selection-business-minor-sub-category',
      'selection-business-industry-belong',
      'selection-company-country-of-operations',
      'selection-company-state-of-operations',
      'selection-company-city-of-operations',
      'selection-company-region-of-operations',
      'selection-business-scale',
      'local-operating-time'
    ];
  
    ids.forEach(id => {
      document.getElementById(id).innerHTML = '';
    });
  }

function noRecordFoundImageSrc() {
    let noRecordFoundImageSrc = host + '/uploads/placeholder/no-record-found.jpg';

    companiesProfilePicture.innerHTML =
        '<li>' + '<img src="' + noRecordFoundImageSrc + '" id="companyBannerPreview" alt="" uk-cover>' + '</li>';

    Swal.fire('Info', 'No record found related to your personal data. Allow us to give you random choices.', 'info');
}

function showRandomChoices() {
    setTimeout(function () {
        $.ajax({
            url: '/api/get/get-random-companies',
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.length > 0) {
                    emptyCompanyDetailsDiv();
                    while (companyDetailsJsonObj2.length > 0) {
                        companyDetailsJsonObj2.pop();
                    }
                    companyDetailsJsonObj2.push(data);
                    companiesProfilePicture.innerHTML = '';
                    for (var i = data.length - 1; i > -1; i--) {
                        let bannerTitle = getCompaniesProfilePicture(data[i]['id'], data[i]['uuid']);

                        companiesProfilePicture.innerHTML =
                            companiesProfilePicture.innerHTML +
                            '<li>' +
                            '<img src="' +
                            host +
                            '/uploads/users_upload_files/' +
                            bannerTitle[0].banner +
                            '"  id="companyBannerPreview" alt="" uk-cover>' +
                            '</li>';
                    }
                    displayFirstCompanyDetails();
                    displayTopCompany();
                }
            },
        });
    }, 3 * 1000);
}

function emptyCompanyDetailsDiv() {
    $('#companiesProfilePicture').empty();
    $('#top-selection-results').empty();
    $('#selections-next-slide').show();
    $('#selections-prev-slide').show();

    $('#selection-company-name').empty();
    $('#selection-company-tagline').empty();
    $('#selection-business-language-of-communication').empty();
    $('#selection-business-major-category').empty();
    $('#selection-business-sub-category').empty();
    $('#selection-business-minor-sub-category').empty();
    $('#selection-business-industry-belong').empty();
    $('#selection-company-country-of-operations').empty();
    $('#selection-company-state-of-operations').empty();
    $('#selection-company-city-of-operations').empty();
    $('#selection-company-region-of-operations').empty();
    $('#selection-business-scale').empty();
    $('#local-operating-time').empty();
}

// $('.uk-active uk-transition-active')[0].click(function() {
//     alert('hohoho');
//   });

$('#companiesProfilePicture').click(function () {
    // get the active parent div to get the active image
    activeDivOfCarousel = getEcN('uk-active uk-transition-active')[0];
    // console.log("getEcN('uk-active uk-transition-active')[0]: ", activeDivOfCarousel);
    // get the active image inside parent div
    activeImageOfCarousel = activeDivOfCarousel.getElementsByTagName('img')[0];
    // get the image src
    imageSrcOfActiveImageInCarousel = activeImageOfCarousel.getAttribute('src');
    // remove "uploads/" part of image src name
    imageNameOfActiveImageInCarousel = imageSrcOfActiveImageInCarousel.split('/').pop();
    // exclude extension from filename
    //fileNameOfActiveImageInCarousel = imageNameOfActiveImageInCarousel.split('.').slice(0, -1).join('.');

    openCommunicator(imageNameOfActiveImageInCarousel);
});

function openCommunicator(filename) {
    let leng = companyDetailsJsonObj2[0].length;
    let companyName;
    let communicator_link;

    for (let i = 0; i < leng; i++) {
        if (companyDetailsJsonObj2[0][i].banner === filename) {
            companyName = companyDetailsJsonObj2[0][i].business_name;
            communicator_link = companyDetailsJsonObj2[0][i].communicator;
            trader_uuid = companyDetailsJsonObj2[0][i].uuid;
        }
    }

    Swal.fire({
        title: '',
        text: `How do you want to engage with ${companyName}  ?`,
        icon: 'info',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Contact Directly',
        denyButtonText: 'Download Details',
        denyButtonColor: 'blue',
        customClass: {
            actions: 'my-actions',
            cancelButton: 'order-1 right-gap',
            confirmButton: 'order-2',
            denyButton: 'order-3',
        },
    }).then((result) => {
        if (result.isConfirmed) {
            recordTheMeetingOfVisitorAndTrader(trader_uuid, communicator_link);
        } else if (result.isDenied) {
            downloadCurrentTraderData(trader_uuid);
        }
    });
}

function recordTheMeetingOfVisitorAndTrader(trader_uuid, communicator_link) {
    console.log('trader_uuid', trader_uuid);
    console.log('communicator_link', communicator_link);

    $.ajax({
        url: '/api/post/record-the-meeting-of-visitor-and-trader',
        type: 'POST',
        data: { trader_uuid: trader_uuid },
        async: true,
        success: function (res) {
            console.log('trader_uuid', trader_uuid);
            console.log('communicator_link', communicator_link);
            console.log('res.id ', res.id);

            if (res.id > 0) {
                // const domainLink = 'https://meet.allworldtrade.com/groupcall/'; old
                const domainLink = 'https://meet.allworldtrade.com/join/'; //new
                window.open(domainLink + communicator_link, '_blank');
                console.log('domain link', domainLink + communicator_link);
            } else {
            }
        },
        error: function (error) {
            // handle the error
            console.error(error);
        },
    });
}

function downloadCurrentTraderData(trader_uuid) {
    $.ajax({
        url: '/api/post/get-current-trader',
        type: 'POST',
        data: { trader_uuid: trader_uuid },
        success: function (res) {
            window.location = host + '/download-current-trader-data';
        },
    });
}

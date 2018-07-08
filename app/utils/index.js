import _ from 'lodash';
import $ from "jquery";


export function highlightComponents(validations) {

    clearValidationHighlights();

    for (var i in validations) {

        if (document.getElementsByName(i).length > 0) {

            if (_.find(document.getElementsByName(i)[0].parentNode.classList, (c) => { return c == "Select" })) {

                document.getElementsByName(i)[0].parentNode.childNodes[1].classList.add('error-input');

            } else {

                document.getElementsByName(i)[0].classList.add('error-input');
            }
        }
    }
}

export function clearValidationHighlights() {

    $(".error-input").removeClass("error-input")
    $(".Select-control").removeClass("error-input")
}

export function showDialog(message, confirmFunc) {

    mscConfirm(message, function () {
        confirmFunc();
    });
}

export function enableSubmitCheck(enableCreate, enableUpdate, id) {
    
    if (enableCreate && enableUpdate) {

        return true;
    }

    if (enableCreate && !id) {

        return true;
    }

    if (enableUpdate && id > 0) {

        return true;
    }

    return false;
}

export function formatDate(dateToFormat, format, returnMomentObject) {

    if (!dateToFormat)
        return null;

    if (typeof (dateToFormat) == "string") {

        let date = moment(dateToFormat, format ? format : "DD/MM/YYYY");

        if (returnMomentObject) {

            return date;
        }
        
        return date.format("YYYY/MM/DD T HH:mm:ss")
    } else {

        return dateToFormat.format(format ? format : "YYYY/MM/DD T HH:mm:ss")
    }
}

export function getAge(DOB) {

    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - Number(DOB.split("/")[0]);
    let m = today.getMonth() - Number(DOB.split("/")[1]);

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {

        age--;
    }    

    return age;
}

export function logMessage(msg) {

    console.log(msg)
}

export function showValidations(msg, validations) {

    highlightComponents(validations);
}

function highlightComponents(validations) {

    for (var i in validations) {

        if (document.getElementsByName(i).length > 0) {

            if (_.find(document.getElementsByName(i)[0].parentNode.classList, (c) => { return c == "Select" })) {

                document.getElementsByName(i)[0].parentNode.childNodes[1].classList.add('input-error');

            } else {
                
                document.getElementsByName(i)[0].classList.add('input-error');
            }
        }
    }
}

export function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toastWarinig(msg) {

    alert(msg ? msg: "Error while processing the request, Please contact administrator")
}


export function toastSuccess(msg) {

    alert(msg)
}

export function showLoader() {

    $("#loader").css({ 'display': 'block' });
}


export function hideLoader() {

  $("#loader").css({ 'display': 'none' });
}


export function clearValidation() {
    $(".input-error").removeClass("input-error")
    $(".Select-control").removeClass("input-error")
}
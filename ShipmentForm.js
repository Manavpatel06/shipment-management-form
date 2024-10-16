const jpdbBaseURL = "http://api.login2explore.com:5577";
const jpdbIRL = "/api/irl";
const jpdbIML = "/api/iml";
const dbName = "DELIVERY-DB";
const relationName = "SHIPMENT-TABLE";
const connToken = "90934490|-31949222947628280|90962801";
$("#shipId").focus();
// Function to reset form
function resetForm() {
    $("#shipId").val("").prop("disabled", false);
    $("#desc, #source, #dest, #sdate, #ddate").val("").prop("disabled", true);
    $("#btnSave, #btnChange, #btnReset").prop("disabled", true);
    $("#shipId").focus();
}
function saverec2ls(jsonObj) {
    var ldata = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", ldata.rec_no);
}
// Function to validate form data
function validateForm() {
    var sid = $("#shipId").val();
    var sdesc = $("#desc").val();
    var ssrc = $("#source").val();
    var sdest = $("#dest").val();
    var ssdate = $("#sdate").val();
    var sddate = $("#ddate").val();

    if (sid === "") {
        alert("Ship No is required");
        $("#shipId").focus();
        return "";
    }
    if (sdesc === "") {
        alert("Description is required");
        $("#desc").focus();
        return "";
    }
    if (ssrc === "") {
        alert("Source is required");
        $("#source").focus();
        return "";
    }
    if (sdest === "") {
        alert("Destination is required");
        $("#dest").focus();
        return "";
    }
    if (ssdate === "") {
        alert("Shipment-Date is required");
        $("#sdate").focus();
        return "";
    }
    if (sddate === "") {
        alert("Expected-Delivery-Date is required");
        $("#ddate").focus();
        return "";
    }
    var jasonStrObj = {
        No: sid,
        description: sdesc,
        source: ssrc,
        destination: sdest,
        shipmentdate: ssdate,
        deliverydate: sddate
    };
    return JSON.stringify(jasonStrObj);
}

// Function to fetch employee data from the database
function getShipData() {
    var shipId = $("#shipId").val();
    if (shipId === "") {
        alert("Shipment No is required");
        $("#shipId").focus();
        return "";
    }

    var jsonStr = {
        No: shipId
    };
    var getReqStr = createGET_BY_KEYRequest(connToken, dbName, relationName, JSON.stringify(jsonStr));
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(getReqStr, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});

    if (resultObj.status === 400) {
        enableFormForSave();
    } else {
        populateFormWithData(resultObj);
        enableFormForChange();
    }
}

// Function to enable form for saving new data
function enableFormForSave() {
    $("#desc, #source, #dest, #sdate, #ddate").prop("disabled", false);
    $("#btnSave, #btnReset").prop("disabled", false);
    $("#shipId").prop("disabled", true);
    $("#desc").focus();
}

// Function to populate form with existing data for editing
function populateFormWithData(resultObj) {
    saverec2ls(resultObj);
    var data = JSON.parse(resultObj.data).record;
    $("#desc").val(data.description);
    $("#source").val(data.source);
    $("#dest").val(data.destination);
    $("#sdate").val(data.shipmentdate);
    $("#ddate").val(data.deliverydate);
}

// Function to enable form for editing existing data
function enableFormForChange() {
    $("#desc, #source, #dest, #sdate, #ddate").prop("disabled", false);
    $("#btnChange, #btnReset").prop("disabled", false);
    $("#btnSave").prop("disabled", true);
    $("#shipId").prop("disabled", true);
    $("#desc").focus();
}

// Function to save new employee data
function saveShip() {

    var jsonStr = validateForm();
    if (jsonStr === "") {
        return "";
    }
    var putReqStr = createPUTRequest(connToken, jsonStr , dbName, relationName);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    alert(JSON.stringify(resultObj));
    resetForm();
    $("#shipid").focus();
}

// Function to update existing employee data
function changeShip() {
    jsonChg = validateForm();
    var updateReqStr = createUPDATERecordRequest(connToken, jsonChg, dbName, relationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(updateReqStr, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    alert(JSON.stringify(resultObj));
    resetForm();
    $("#shipId").focus();
}

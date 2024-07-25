//Gets the browser specific XmlHttpRequest Object 
function getXmlHttpRequestObject() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest(); //Mozilla, Safari ...
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP"); //IE
    } else {
        //Display our error message
        alert("Your browser doesn't support the XmlHttpRequest object.");
    }
}

//Our XmlHttpRequest object
var receiveReq = getXmlHttpRequestObject();

//Initiate the AJAX request
function makeRequest(url, param) {
    //If our readystate is either not started or finished, initiate a new request
    if (receiveReq.readyState == 4 || receiveReq.readyState == 0) {
        receiveReq.open("POST", url, true);
        //Set the function that will be called when the XmlHttpRequest objects state changes
        receiveReq.onreadystatechange = updatePage;
        receiveReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        receiveReq.setRequestHeader("Content-length", param.length);
        receiveReq.setRequestHeader("Connection", "close");
        //Make the request

        /*if( optUseVal=='Yes') 
         { 
         document.getElementById('optYes').innerHTML="Your Request is processing.............";
         
         }
         else 
         { 
          document.getElementById('optNo').innerHTML="Your Request is processing.............";
        }
           */

        document.getElementById('result').innerHTML = "<img src='https://www.keralatourism.org/images/processing.gif'   style='width: 200px' />";


        receiveReq.send(param);
    }
}

//Called every time our XmlHttpRequest objects state changes
function updatePage() {

    //Check if our response is ready
    if (receiveReq.readyState == 4) {
        //Set the content of the DIV element with the response text
        document.getElementById('result').innerHTML = receiveReq.responseText;
        //Get a reference to CAPTCHA image
    }
}

//Called every time when form is perfomed
function getParam(theForm, pageURL, bsurl) {
    //Set the URL
    var url = bsurl + 'informationuseful/index';

    if (document.frmComments.optUse[0].checked == true) {
        if (document.frmComments.name1.value == "") {
            alert("Please enter your name");
            document.frmComments.name1.focus();
            return;

        }
        if (document.frmComments.email1.value == "") {
            alert("Please enter your email id");
            document.frmComments.email1.focus();
            return;

        }
        if (document.frmComments.email1.value != "") {
            error = validateEmail(document.frmComments.email1.value);
            if (error == true) {
                alert("Please enter a valid email id");
                document.frmComments.email1.focus();
                return;
            }
        }


        if (document.getElementById('user_sbmt_code1').value == '') {
            alert('Please enter the code shown');
            document.getElementById('user_sbmt_code1').focus();
            return;
        }
        if (document.getElementById('user_sbmt_code1').value != frmComments.captcha_word1.value) {
            alert('Entered code is wrong');
            document.getElementById('user_sbmt_code1').focus();
            return;
        }


        if (document.frmComments.comments.value == "") {
            alert("Please enter your comment");
            document.frmComments.comments.focus();
            return;
        }

    } else {
        if (document.frmComments.name.value == "") {
            alert("Please enter your name");
            document.frmComments.name.focus();
            return;

        }
        if (document.frmComments.email.value == "") {
            alert("Please enter your email id");
            document.frmComments.email.focus();
            return;

        }
        if (document.frmComments.email.value != "") {
            error = validateEmail(document.frmComments.email.value);
            if (error == true) {
                alert("Please enter a valid email id");
                document.frmComments.email.focus();
                return;
            }
        }

        if (document.getElementById('user_sbmt_code').value == '') {
            alert('Please enter the code shown');
            document.getElementById('user_sbmt_code').focus();
            return;
        }
        if (document.getElementById('user_sbmt_code').value != frmComments.captcha_word.value) {
            alert('Entered code is wrong');
            document.getElementById('user_sbmt_code').focus();
            return;
        }
    }



    // var url = 'http://server/keralatourism.org/content/information-useful-post.php';
    var optUseVal;
    var email;
    var csrf_token = document.getElementById('csrf_token').name;
    var csrf_val = document.getElementById('csrf_token').value;
    if (theForm.optUse[0].checked == true) {
        optUseVal = 'Yes';
        name = theForm.name1.value;
        email = theForm.email1.value;


    } else {
        optUseVal = 'No';
        name = theForm.name.value;
        email = theForm.email.value;

    }

    //Set up the parameters of our AJAX call
    var postStr = "optUse=" + encodeURIComponent(optUseVal) + "&comments=" + encodeURIComponent(theForm.comments.value) + "&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&pageURL=" + encodeURIComponent(pageURL) + "&" + csrf_token + "=" + encodeURIComponent(csrf_val);
    //Call the function that initiate the AJAX request
    //alert(postStr);
    makeRequest(url, postStr);
}

function validateEmail(address) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //var address = document.frmComments.email.value;
    if (reg.test(address) == false) {
        return true;
    } else
        return false;
}
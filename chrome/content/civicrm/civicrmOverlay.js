// This is our javascript, which will pop up the email address
// in an alert box.
var abAddressCollector = null;

function add_contact_to_civicrm(emailAddressNode) {
  if (emailAddressNode)
  {
     var email = emailAddressNode.getAttribute("emailAddress");
     if (!abAddressCollector)
       abAddressCollector = Components.classes[abAddressCollectorContractID].getService(Components.interfaces.nsIAbAddressCollecter);

     var card = abAddressCollector.getCardFromAttribute("PrimaryEmail", email);

     if (card)
     {
	alert(card.firstName + " " + card.lastName);
	alert(card.displayName);
	alert(card.primaryEmail);
     }
     else
     {
        alert(emailAddressNode.getAttribute("displayName") + " " + email);
     }
  }

}

/* 
Addressbook cards have the following data associated with them (copied from abCardOverlays in mozilla-thunderbird):

    doc.getElementById('FirstName').value = cardproperty.firstName;
    doc.getElementById('LastName').value = cardproperty.lastName;
    doc.getElementById('DisplayName').value = cardproperty.displayName;
    doc.getElementById('NickName').value = cardproperty.nickName;

    doc.getElementById('PrimaryEmail').value = cardproperty.primaryEmail;
    doc.getElementById('SecondEmail').value = cardproperty.secondEmail;
    doc.getElementById('ScreenName').value = cardproperty.aimScreenName;

    var popup = document.getElementById('PreferMailFormatPopup');
    if ( popup )
      popup.value = cardproperty.preferMailFormat;

    doc.getElementById('WorkPhone').value = cardproperty.workPhone;
    doc.getElementById('HomePhone').value = cardproperty.homePhone;
    doc.getElementById('FaxNumber').value = cardproperty.faxNumber;
    doc.getElementById('PagerNumber').value = cardproperty.pagerNumber;
    doc.getElementById('CellularNumber').value = cardproperty.cellularNumber;

    doc.getElementById('HomeAddress').value = cardproperty.homeAddress;
    doc.getElementById('HomeAddress2').value = cardproperty.homeAddress2;
    doc.getElementById('HomeCity').value = cardproperty.homeCity;
    doc.getElementById('HomeState').value = cardproperty.homeState;
    doc.getElementById('HomeZipCode').value = cardproperty.homeZipCode;
    doc.getElementById('HomeCountry').value = cardproperty.homeCountry;
    doc.getElementById('WebPage2').value = cardproperty.webPage2;

    doc.getElementById('JobTitle').value = cardproperty.jobTitle;
    doc.getElementById('Department').value = cardproperty.department;
    doc.getElementById('Company').value = cardproperty.company;
    doc.getElementById('WorkAddress').value = cardproperty.workAddress;
    doc.getElementById('WorkAddress2').value = cardproperty.workAddress2;
    doc.getElementById('WorkCity').value = cardproperty.workCity;
    doc.getElementById('WorkState').value = cardproperty.workState;
    doc.getElementById('WorkZipCode').value = cardproperty.workZipCode;
    doc.getElementById('WorkCountry').value = cardproperty.workCountry;
    doc.getElementById('WebPage1').value = cardproperty.webPage1;

    doc.getElementById('Custom1').value = cardproperty.custom1;
    doc.getElementById('Custom2').value = cardproperty.custom2;
    doc.getElementById('Custom3').value = cardproperty.custom3;
    doc.getElementById('Custom4').value = cardproperty.custom4;
    doc.getElementById('Notes').value = cardproperty.notes;

    // get phonetic fields if exist
    try {
      doc.getElementById('PhoneticFirstName').value = cardproperty.phoneticFirstName;
      doc.getElementById('PhoneticLastName').value = cardproperty.phoneticLastName;
    }
*/

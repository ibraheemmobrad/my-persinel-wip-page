function addNewz(newz_head, newz_details) {
  var newzHead = document.createElement("h3");
  var newzHeadText = document.createTextNode(newzHead);
  newzHead.appendChild(newzHeadText);
  var newzDetails = document.createElement("p");
  var newzDetailsText = document.createTextNode(newzHead);
  newzDetails.appendChild(newzDetailsText);
  document.body.appendChild(newzHead, newzDetails);
};
addNewz ("hi","this is a test newz")
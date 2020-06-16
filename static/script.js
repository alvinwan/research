function selectTree(leaf) {
  document.querySelectorAll(".decision-tree-image").forEach(function(img) {
    img.style.display = "none";
  });
  document.querySelector('#decision-tree-' + leaf).style.display = "inline-block";
}

function selectGalleryImage(id) {
  document.querySelectorAll(".gallery-image").forEach(function(img) {
    img.classList.remove("s");
  });

  var image = document.querySelector('#' + id);
  if (image) {
    image.classList.add("s");
  }
}

function setDecisions(decisions) {
  // justification is a list of justifications.
  var html = '';
  var i = 0;
  decisions.forEach(function(decision) {
    i++;
    label = 'Decision ' + i;
    if (i == decisions.length - 1) {
      label = 'Prediction'
    }
    html += '<div class="decision"><h3><span>' + label + '</span></h3>';
    html += '<p class="decision-name"><b>'+ decision.final.label + '</b></p>';
    html += '<p><span>' + decision.final.probability + '% prob</span></p></div>';
  })
  console.log(html);
  document.querySelector('.decisions').innerHTML = html;
}

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function setDecision(prediction) {
  // document.querySelector('.decision-note').style.display = prediction == 'horse' ? 'block' : 'none';
  // document.querySelector('.decision-prediction').innerHTML = capitalize(prediction);
}

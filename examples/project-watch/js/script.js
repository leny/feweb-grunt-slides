(function() {
  var fKikoo;

  fKikoo = function(sTarget) {
    if (sTarget == null) {
      sTarget = "World";
    }
    return alert("Hello, " + sTarget + "!");
  };

  fKikoo();

}).call(this);

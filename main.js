$(document).on('ready', function() {
  var outerShell = $("<div class='outer-shell'>");
  var innerShell = $("<div class='inner-shell'>");
  var autoLabels = $("<div class='auto-labels'>");
  var clockScreen = $("<div class='clock-screen'>");
  var clockIndicator = $("<div class='clock-indicator'>");
  var bottomAmFrequencies = $("<div class='bottom-am'>");
  var bottomFmFrequencies = $("<div class='bottom-fm'>");

  outerShell.append(innerShell);
  $('body').append(outerShell);
  outerShell.append(clockScreen);
  innerShell.append(autoLabels);

  var labels = $('<p>PM</p><p>AUTO</p>').css({
  	marginTop: '45px',
  	marginLeft: '4px',
  	fontWeight: '100',
  	fontSize: '14px'
  	});
  innerShell.append(labels);

  var time = $('<p>12:00</p>').css({
  	fontSize: '80px',
  	marginTop: '10px',
  	textAlign: 'center',
  	fontWeight: '100'
  	});
  clockScreen.append(time);

  var frequencies= $("<p>AM 53 60 70 90 104 140 170</p>").css({
  	marginTop: '10px',
  	fontWeight: '100',
  	marginLeft: '70px',
  	fontSize: '14px',
  	wordSpacing: '15px'
  	});
  clockScreen.append(frequencies);

  var bottomFrequencies = $('<p>FM 89 92 96 98 112 141 321</p>').css({
  	marginTop: '10px',
  	fontWeight: '100',
  	wordSpacing: '15px'
  	});
  frequencies.append(bottomFrequencies);

  // var clockTime = function (){
  // 	increment 
  // });

  var clockTime = function(time) {
    
  }

});
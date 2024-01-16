$(document).ready(function() {
  $('slide:not(.backdrop):not(.title-slide)').append('<div class=\"footer-right\">');
  var presenters = SLIDE_CONFIG.presenters;
  var author = presenters[0];
  var author_name = author.name;
  var author_email = author.email;
  if (author_email != '') author_name += ' | ' + author_email;
  $('slide:not(.backdrop):not(.title-slide)').children('div.footer-right').html(author_name);
});

$(document).ready(function() {
  $('slide:not(.backdrop):not(.title-slide)').append('<div class=\"footer-left\">');
  var date = SLIDE_CONFIG.settings.date;
  var event = SLIDE_CONFIG.settings.event;
  if (event != '') date += ', ' + event; 
  $('slide:not(.backdrop):not(.title-slide)').children('div.footer-left').html(date);
});

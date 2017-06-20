$(document).ready(function(){
  $('#addBox').on('click', function(){
  $(".tools").find('.boxes').append('<div class="box"></div>');
});

$('#column').on('click', function(){
  $(".tools").find('.boxes').css('flex-direction','column');
});

$('#row').on('click', function(){
  $(".tools").find('.boxes').css('flex-direction','row');
});

$('#nowrap').on('click', function(){
  $(".tools").find('.boxes').css('flex-wrap','nowrap');
});

$('#wrap').on('click', function(){
  $(".tools").find('.boxes').css('flex-wrap','wrap');
});

$('#jc-start').on('click', function(){
  $(".tools").find('.boxes').css('justify-content','flex-start');
});

$('#jc-end').on('click', function(){
  $(".tools").find('.boxes').css('justify-content','flex-end');
});

$('#jc-center').on('click', function(){
  $(".tools").find('.boxes').css('justify-content','center');
});

$('#jc-around').on('click', function(){
  $(".tools").find('.boxes').css('justify-content','space-around');
});

$('#jc-between').on('click', function(){
  $(".tools").find('.boxes').css('justify-content','space-between');
});

$('#ai-start').on('click', function(){
  $(".tools").find('.boxes').css('align-items','flex-start');
});

$('#ai-center').on('click', function(){
  $(".tools").find('.boxes').css('align-items','center');
});

$('#ai-end').on('click', function(){
  $(".tools").find('.boxes').css('align-items','flex-end');
});

});

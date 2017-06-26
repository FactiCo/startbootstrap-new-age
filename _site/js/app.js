$(document).foundation()

const $java = $('#java')

$java.find('li').click(() => {
  $java.foundation('close');
})


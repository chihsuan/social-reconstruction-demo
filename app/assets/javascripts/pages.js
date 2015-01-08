$(document).ready(function() {
  $('#fullpage').fullpage({
		verticalCentered: true,
    'css3': true,
    slidesNavigation: true,
    controlArrows: true,
    'sectionsColor': ['#fff', '#fff', '#fff', '#fff'],
    anchors: ['', 'intro', 'approach', 'demo',
    ],
    menu: '#menu',
    scrollingSpeed: 500,
	  navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['First page', 'Second page', 'Third page', 'last page'],
    afterRender: function () {
      $('video').get(0).play();
    }
  });
});

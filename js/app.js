init();


function init() {
	var toolTimeline = new TimelineMax({repeat: -1, repeatDelay: 10}),
		sceneTwoDelay = 6.7,
		sceneThreeDelay = 12;
	
	toolTimeline
	// scene 1
		.to('.books__top', 4, {delay: 0, x: 18, y: 8, rotation: 2, ease: Linear.easeOut}, 0)
		.to('.books__top', 2, {delay: 4, x: 28, y: 12, rotation: 6, ease: Linear.easeOut}, 0)
		.to('.books__top', .6, {delay: 6, x: 40, y: 20, rotation: 8, ease: Linear.easeIn}, 0)
		.to('.books__top', .3, {delay: 6.6, x: 50, y: 25, rotation: 10, ease: Linear.easeIn}, 0)
		.to('.books__top', .7, {delay: 6.9, x: 86, y: 61, rotation: 10, ease: Linear.easeIn}, 0)
		
		.to('.books__top-top', .5, {delay: 5.8, x: 12, y: 5, ease: Linear.easeOut}, 0)
		.to('.books__top-top', .5, {delay: 6.3, x: 50, y: 30, rotation: 10, ease: Linear.easeOut}, 0)
		.to('.scene_1', .2, {delay: 6.5, opacity: 0, ease: Linear.easeOut}, .1);
	
	// scene 2
	toolTimeline
		.fromTo('.scene_2', .2, {delay: sceneTwoDelay, opacity: 0}, {opacity: 1})
		.from('.scene_2 .scene__head', 1.5, {delay: sceneTwoDelay + .5, opacity: 0, ease: Linear.easeOut}, .7)
		.from('.item', 1.5, {delay: sceneTwoDelay + .5, x: -180, ease: Linear.easeOut}, .1)
		.to('.scene_2', .2, {delay: sceneTwoDelay + 5.2, opacity: 0, ease: Linear.easeOut}, .7);
	
	// scene 3
	toolTimeline
		.fromTo('.scene_3', .2, {delay: sceneThreeDelay, opacity: 0}, {opacity: 1})
		.from('.scene_3 .scene__head', 1, {delay: sceneThreeDelay, x: -200, ease: Linear.easeOut}, 1);
	
}
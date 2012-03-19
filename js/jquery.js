$(document).ready(function () {

	var $circle = $('#circle');
	var $colour = $('#colour');
	var $property = $('#property');

	$('form').on('submit', function (ev) {
		var colour = $colour.val();
		ev.preventDefault();

		if (colour) {
		$circle.css($property.val(), colour);
		}
	});	
});
$(document).ready(function() {

	$('form').on("submit",function(e){
		e.preventDefault();

		var content = $('input').val();


		$('.items').append(`
			<li>
			    <article>
			        <button class='check'></button>
			        <p>${content}</p>
			        <input type='text' class='edit-todo' value='learn html'>
			        <button class='delete'>X</button>
			    </article>
			</li>
		`)
	})

});


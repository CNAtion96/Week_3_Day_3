$(document).ready(function() {

	var tdList = [];

	function listItem(name){
		this.name = name;
		this.complete = false;
	}

	$('form').on("submit",function(e){
		e.preventDefault();

		var content = $('input').val();

		tdList.push(listItem(content));

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
	
	$('body').on('click','.delete', function(){
			$(this).parent().parent().remove();
	})
	$('body').on('click', '.check', function(){
		$(this).status = true;
		console.log(this.status);
	})
});


$(document).ready(function() {

	var tdList = [];
	function listItem(name){
		this.name = name,
		this.complete = false,
		this.id = Date.now()
	}
	function showAll(i,e){
		i.forEach(function(a){
			$('.items').append(`
			<li>
				<article>
					<button data-id="${a.id}" class='check'></button>
					<p>${a.name}</p>
					<input type='text' class='edit-todo' value='learn html'>
					<button data-id="${a.id}" class='delete'>X</button>
				</article>
			</li>
			`)
		})
		e.forEach(function(a){
			$('.items').append(`
			<li>
				<article class="completed">
					<button data-id="${a.id}" class='check'></button>
					<p>${a.name}</p>
					<input type='text' class='edit-todo' value='learn html'>
					<button data-id="${a.id}" class='delete'>X</button>
				</article>
			</li>
			`)
		})
	}
	function showActive(i){
		i.forEach(function(a){
			$('.items').append(`
			<li>
			    <article>
			        <button data-id="${a.id}" class='check'></button>
			        <p>${a.name}</p>
			        <input type='text' class='edit-todo' value='learn html'>
			        <button data-id="${a.id}" class='delete'>X</button>
			    </article>
			</li>
		`)
		})
	}
	function showComplete(i){
		$(".items").innerHTML = "";
		i.forEach(function(a){
			$('.items').append(`
			<li>
			    <article class="completed">
			        <button data-id="${a.id}" class='check'></button>
			        <p>${a.name}</p>
			        <input type='text' class='edit-todo' value='learn html'>
			        <button data-id="${a.id}" class='delete'>X</button>
			    </article>
			</li>
		`)
		})
	}

	$('form').on("submit",function(e){
		e.preventDefault();

		var content = $('input').val();
		
		var tdL = new listItem(content);

		tdList.push(tdL);

		$('.items').append(`
			<li>
			    <article>
			        <button data-id="${tdL.id}" class='check'></button>
			        <p>${content}</p>
			        <input type='text' class='edit-todo' value='learn html'>
			        <button data-id="${tdL.id}" class='delete'>X</button>
			    </article>
			</li>
		`)
	})
	//delete item
	$('body').on('click','.delete', function(){
		let id = $(this).data("id");
		tdList.forEach( function(i){
			if(i.id === id){
				tdList.splice(tdList[i], 1);
			}
		})
		$(this).parent().parent().remove();
	})
	//mark item as complete
	$('body').on('click', '.check', function(){
		let id = $(this).data("id");
		var _this = this;
		tdList.forEach( function(i){
			if(i.id === id){
				if(i.complete === false){
					i.complete = true;
					$(_this).parent().addClass("completed");
				} else {
					i.complete = false;
					$(_this).parent().removeClass("completed");
				}
			}
		})
	})

	$('.show-active').click(function(){
		$('.items').html('');
		var activeList = tdList.filter(function(i){
			if(i.complete === false){
				return i;
			}
		})
		showActive(activeList);
	})

	$('.show-completed').click(function(){
		$(".items").html('');
		var completeList = tdList.filter(function(i){
			if(i.complete === true){
				return i;
			}
		})
		showComplete(completeList);
	})
	$('.show-all').click(function(){
		$(".items").html('');
		var activeList = tdList.filter(function(i){
			if(i.complete === false){
				return i;
			}
		})
		var completeList = tdList.filter(function(i){
			if(i.complete === true){
				return i;
			}
		})
		showAll(activeList, completeList);
	})
});


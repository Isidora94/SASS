window.addEventListener('load', () => {

	// var check = document.querySelector('#defaultUnchecked');
	// console.log(check.checked);
	// var check = document.querySelector('#Unchecked');
	// console.log(check.checked);
	
	var form = document.querySelector('form');
	console.log(form);	
	


	validateForm(form);
});


function validateForm(form_el){
	var inputs = form_el.querySelectorAll('input:not([type="submit"])');
	console.log(inputs);

	inputs.forEach(input => {

		input.addEventListener('blur', () => {
			
			var i_value = input.value.trim();
			var i_id = input.id;
			// console.log(i_value);
			// console.log(i_id);

			switch(i_id) {
				case 'first_name':
					if (i_value.length > 0) {
						circularProgressBar();
					}
					break;
				case 'last_name':
					if (i_value.length > 0) {
						circularProgressBar();
					}
					break;

				case 'email_control':
					if (i_value.length > 0) {
						circularProgressBar();
					}
					break;

				case 'defaultUnchecked':
						if (input.checked) {
							circularProgressBar();

						}
					break;

				case 'Unchecked':
						if (input.checked) {
							circularProgressBar();

						}
					break;

			} 
	});

});

	
}

function circularProgressBar(){

	var existing = document.querySelector('.chart');
	var dataset = existing.dataset;

	if (dataset['percent'] == 0) {
		var first_canvas = document.querySelector('canvas');
		first_canvas.style = "display : none";	 

			var chart = new EasyPieChart(existing, {
			        lineWidth: '6',
			        barColor: '#fff',
			        trackColor: 'rgba(255, 255, 255, 0.5)',
			        scaleColor: false,
			        onStep: function(from, to, currentValue) {
					    this.el.querySelector('.number').innerText = `${Math.round(currentValue)}%`;
					  },

			        
		    });
			chart.update(25);

			existing.setAttribute("data-percent", "25");
			console.log(existing);

		} else if(dataset['percent'] == 25) {
			var canvas = document.querySelectorAll('canvas');
			canvas[1].style = "display : none";	 

				var chart = new EasyPieChart(existing, {
				        lineWidth: '6',
				        barColor: '#fff',
				        trackColor: 'rgba(255, 255, 255, 0.5)',
				        scaleColor: false,
				        onStep: function(from, to, currentValue) {
						    this.el.querySelector('.number').innerText = `${Math.round(currentValue)}%`;
						  },


				        
			    });
				chart.update(50);

				existing.setAttribute("data-percent", "50");
		} else if(dataset['percent'] == 50) {
			var canvas = document.querySelectorAll('canvas');
			console.log(canvas);
			canvas[2].style = "display : none"; 

				var chart = new EasyPieChart(existing, {
				        lineWidth: '6',
				        barColor: '#fff',
				        trackColor: 'rgba(255, 255, 255, 0.5)',
				        scaleColor: false,
				        onStep: function(from, to, currentValue) {
						    this.el.querySelector('.number').innerText = `${Math.round(currentValue)}%`;
						  },

				        
			    });
				chart.update(75);

				existing.setAttribute("data-percent", "75");
		} else if(dataset['percent'] == 75) {
			var canvas = document.querySelectorAll('canvas');
			console.log(canvas);
			canvas[3].style = "display : none"; 

				var chart = new EasyPieChart(existing, {
				        lineWidth: '6',
				        barColor: '#fff',
				        trackColor: 'rgba(255, 255, 255, 0.5)',
				        scaleColor: false,
					    onStep: function(from, to, currentValue) {
						    this.el.querySelector('.number').innerText = `${Math.round(currentValue)}%`;
						},
						onStop(from, to) {
							this.el.querySelector('.number').innerHTML = `<span>&#10004;</span>`;
							},
				        
			    });
				chart.update(100);

				existing.setAttribute("data-percent", "100");
		} 

}

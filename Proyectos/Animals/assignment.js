// put your javascript code here

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled 
// templates many times
var categories_template, animals_template, description_template

// variables to store the current displayed album and photo
var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#categories-template").html();
	categories_template = Handlebars.compile(source);

	var source   = $("#animals-template").html();
	animals_template = Handlebars.compile(source);

	var source   = $("#description-template").html();
	description_template = Handlebars.compile(source);


	$("#categories-tab").click(function () {


    	$(".nav-pills .active").removeClass("active");
		$("#categories-tab").addClass("active");
		$("#categories-tab").tab('show');
		
        showTemplate(categories_template,animals_data);
    	   $(".category-thumbnail").click(function (){
													
      		  $(".nav-pills .active").removeClass("active");
              $("#animals-tab").addClass("active");
			  $("#animals-tab").tab("show"); 
			
			var index = $(this).data("id");

            current_category = animals_data.category[index];
			showTemplate(animals_template,current_category);
			$(".animal-thumbnail").click(function (){
												   
					var index = $(this).data("id");

					current_animal = current_category.animals[index];
					$("#description-tab").click();
			});


		});

 
   });

	$("#animals-tab").click(function () {
		
		 showTemplate(animals_template,current_category);

		$(".nav-pills .active").removeClass("active");
		$("#animals-tab").addClass("active");
        $("#animals-tab").tab('show');
		
			$(".animal-thumbnail").click(function (){
				var index = $(this).data("id");

				current_animal = current_category.animals[index];
				$("#description-tab").click();
			});
	});

	$("#description-tab").click(function () {
		
		$(".nav-pills .active").removeClass("active");

		$("#description-tab").addClass("active");
		
		$("#description-tab").tab("show");
		
        showTemplate(description_template, current_animal);
	});


  $("#categories-tab").click();	
});
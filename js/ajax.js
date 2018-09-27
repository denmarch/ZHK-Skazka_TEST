// 1 form order
$(document).ready(function() {				
      $('#feedback-valid').validate({
        rules:{
			"name":{ required:true },
			"tel":{ required:true }
		},
		messages:{
			"name":{ required:"Введите своё имя" },
			"tel":{ required:"Введите телефон" }
		},
					
		submitHandler: function(form){
			$(form).ajaxSubmit({					
				success: function(data) { 
					if (data == "true")
					{			
						$('form input[type="text"]').val('');
						$('form input[type="tel"]').val('');
						$('form input[type="checkbox"]').val('');
						window.location.href = "thanks.html";
					}else
					{
						$(".message-feedback").attr("id","message-feedback-error").html(data).slideDown(300);
					}
				}  
			}); 
		}
	});
});


// 2 form call
$(document).ready(function() {				
      $('#feedback-valid2').validate({
        rules:{
			"name":{ required:true },
			"tel":{ required:true }
		},
		messages:{
			"name":{ required:"Введите своё имя" },
			"tel":{ required:"Введите телефон" }
		},
					
		submitHandler: function(form){
			$(form).ajaxSubmit({					
				success: function(data) { 
					if (data == "true")
					{			
						$('form input[type="text"]').val('');
						$('form input[type="tel"]').val('');
						$('form input[type="checkbox"]').val('');
						window.location.href = "thanks.html";
					}else
					{
						$(".message-feedback2").attr("id","message-feedback-error").html(data).slideDown(300);
					}
				}  
			}); 
		}
	});
});


// 3 form plan
$(document).ready(function() {				
      $('#feedback-valid3').validate({
        rules:{
			"name":{ required:true },
			"tel":{ required:true }
		},
		messages:{
			"name":{ required:"Введите своё имя" },
			"tel":{ required:"Введите телефон" }
		},
					
		submitHandler: function(form){
			$(form).ajaxSubmit({					
				success: function(data) { 
					if (data == "true")
					{			
						$('form input[type="text"]').val('');
						$('form input[type="tel"]').val('');
						$('form input[type="checkbox"]').val('');
						window.location.href = "thanks2.html";
					}else
					{
						$(".message-feedback3").attr("id","message-feedback-error").html(data).slideDown(300);
					}
				}  
			}); 
		}
	});
});


// 4 form discount (sale)
$(document).ready(function() {				
      $('#feedback-valid4').validate({
        rules:{
			"name":{ required:true },
			"tel":{ required:true }
		},
		messages:{
			"name":{ required:"Введите своё имя" },
			"tel":{ required:"Введите телефон" }
		},
					
		submitHandler: function(form){
			$(form).ajaxSubmit({					
				success: function(data) { 
					if (data == "true")
					{			
						$('form input[type="text"]').val('');
						$('form input[type="tel"]').val('');
						$('form input[type="checkbox"]').val('');
						window.location.href = "thanks.html";
					}else
					{
						$(".message-feedback4").attr("id","message-feedback-error").html(data).slideDown(300);
					}
				}  
			}); 
		}
	});
});


// 5 form ipoteka
$(document).ready(function() {				
      $('#feedback-valid5').validate({
        rules:{
			"name":{ required:true },
			"tel":{ required:true }
		},
		messages:{
			"name":{ required:"Введите своё имя" },
			"tel":{ required:"Введите телефон" }
		},
					
		submitHandler: function(form){
			$(form).ajaxSubmit({					
				success: function(data) { 
					if (data == "true")
					{			
						$('form input[type="text"]').val('');
						$('form input[type="tel"]').val('');
						$('form input[type="checkbox"]').val('');
						window.location.href = "thanks.html";
					}else
					{
						$(".message-feedback5").attr("id","message-feedback-error").html(data).slideDown(300);
					}
				}  
			}); 
		}
	});
});


// 6 form presentation
$(document).ready(function() {				
      $('#feedback-valid6').validate({
        rules:{
			"name":{ required:true },
			"tel":{ required:true }
		},
		messages:{
			"name":{ required:"Введите своё имя" },
			"tel":{ required:"Введите телефон" }
		},
					
		submitHandler: function(form){
			$(form).ajaxSubmit({					
				success: function(data) { 
					if (data == "true")
					{			
						$('form input[type="text"]').val('');
						$('form input[type="tel"]').val('');
						$('form input[type="checkbox"]').val('');
						window.location.href = "thanks.html";
					}else
					{
						$(".message-feedback6").attr("id","message-feedback-error").html(data).slideDown(300);
					}
				}  
			}); 
		}
	});
});


// 7 form ekskursia
$(document).ready(function() {				
      $('#feedback-valid7').validate({
        rules:{
			"name":{ required:true },
			"tel":{ required:true }
		},
		messages:{
			"name":{ required:"Введите своё имя" },
			"tel":{ required:"Введите телефон" }
		},
					
		submitHandler: function(form){
			$(form).ajaxSubmit({					
				success: function(data) { 
					if (data == "true")
					{			
						$('form input[type="text"]').val('');
						$('form input[type="tel"]').val('');
						$('form input[type="checkbox"]').val('');
						window.location.href = "thanks.html";
					}else
					{
						$(".message-feedback7").attr("id","message-feedback-error").html(data).slideDown(300);
					}
				}  
			}); 
		}
	});
});
$(document).ready(function(){
	function api(){return "http://adin.site/api/";}
	function ads(){
		$.ajax({
			type:'POST',
			url:api(),
			data:'request=adView',
			dataType:'HTML',
			success:function(data){
				
			},
			complete:function(){}
		});
	}ads();
});
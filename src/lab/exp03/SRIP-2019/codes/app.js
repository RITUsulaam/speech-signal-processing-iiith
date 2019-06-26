document.getElementById("custom_select").addEventListener('change',function(){
	var fr= new FileReader();
	fr.onload=function(e){
	    document.getElementById("filecontents").textContent=e.target.result;
	}
	fr.readAsText(this.files[0]);
});
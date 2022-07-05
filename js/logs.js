var selectBox = document.getElementById("selectBox").value;
var perPage = 5;
let currentPage = 1;
let start = 0;
let end = perPage;



const devices = [
				{DeviceID :'101', Name :"TV", Action :"Turn On", Date :"124689"},
				{DeviceID :"102", Name :"Washer", Action :"Sleep", Date :"124533"},
				{DeviceID :"103", Name :"Selling Fan", Action :"Turn Off", Date :"12518"},
				{DeviceID :"104", Name :"TV", Action :"Turn On", Date :"124689"},
				{DeviceID :"105", Name :"Washer", Action :"Sleep",Date :"124533"},
				{DeviceID :"106", Name :"Selling Fan", Action :"Turn Off", Date :"12518"},
				{DeviceID :"107", Name :"TV", Action :"Turn On", Date :"124689"},
				{DeviceID :"108", Name :"Washer", Action :"Sleep", Date :"124533"},
				{DeviceID :"109", Name :"Selling Fan", Action :"Turn Off", Date :"12518"},
				{DeviceID :"110", Name :"TV", Action :"Turn On", Date :"124689"},
				{DeviceID :"111", Name :"Washer", Action :"Sleep",Date :"124533"},
				{DeviceID :"112", Name :"Selling Fan", Action :"Turn Off", Date :"12518"},
				{DeviceID :"113", Name :"TV", Action :"Turn On", Date :"124689"},
				{DeviceID :"114", Name :"Washer", Action :"Sleep", Date :"124533"},
				{DeviceID :"115", Name :"Selling Fan", Action :"Turn Off", Date :"12518"},
				{DeviceID :"116", Name :"TV", Action :"Turn On", Date :"124689"},
				{DeviceID :"117", Name :"Washer", Action :"Sleep",Date :"124533"},
				{DeviceID :"118", Name :"Selling Fan", Action :"Turn Off", Date :"12518"},
				{DeviceID :"119", Name :"TV", Action :"Turn On", Date :"124689"},
				{DeviceID :"120", Name :"Washer", Action :"Sleep", Date :"124533"},
				{DeviceID :"121", Name :"Selling Fan", Action :"Turn Off", Date :"12518"},
				{DeviceID :"122", Name :"TV", Action :"Turn On", Date :"124689"},
				{DeviceID :"123", Name :"Washer", Action :"Sleep",Date :"124533"},
				{DeviceID :"124", Name :"Selling Fan", Action :"Turn Off", Date :"12518"},
			]

const totalPages = Math.ceil(devices.length / perPage);
const btnNext = document.querySelector('.btn-next');
var numberOfPage = document.getElementById("number-page");
function showTotalPages(data){
	for (var i = 0; i < Math.ceil(data.length/perPage); i++){
      var soTrang = `
      					<li onclick = "changePageNumber(this.id)" id="trang${i+1}"> <a > ${i+1} </a> </li>
      				`
      numberOfPage.innerHTML += soTrang;
    }
}

showTotalPages(devices);



var idButton;
function changePageNumber(idButton){
	
	currentPage = idButton.replace(/[^0-9]/g, '');
	start = (currentPage-1) * perPage;
	end = currentPage * perPage;
	renderDevice();
	
}

function renderDevice() {
    html = '';
    const content = devices.map((item, index) => {
        if (index >= start && index < end) {
            html += '<tr>';
           
            html += '<td>' + item.DeviceID + '</td>';
            html += '<td>' + item.Name + '</td>';
            html += '<td>' + item.Action + '</td>';
            html += '<td>' + item.Date + '</td>';
            
            html += '</tr>';
            
            return html;
        }
    });
    html += '<tr>';
           
    html += '<td colspan = "3">Total</td>';
   
    html += '<td>' + devices.length + '</td>';
    
    html += '</tr>';
    document.getElementById('myTable').innerHTML = html;

    
}



function nextPage(){
	currentPage++;
	

	if(currentPage > totalPages){
		currentPage = totalPages;
	}
	
	start = (currentPage-1) * perPage;
	end = currentPage * perPage;



	renderDevice();
}

function perviousPage(){
	currentPage--;
	

	if(currentPage <= 1){
		currentPage = 1;
	}
	console.log(start,end);
	start = (currentPage-1) * perPage;
	end = currentPage * perPage;
	
	renderDevice();
}

function changeFunc() {
    /*var selectBox = document.getElementById("selectBox").value;
	
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    
    var perPage = selectedValue;*/


    document.getElementById("myTable").innerHTML = "";
}
	

    
function searchDevies(){
	
	
	var result =[];
	var name_device = document.getElementById("searchInput").value.toLowerCase();
	console.log(name_device);
	if(name_device == ''){
		alert("Please enter your name devide");
	}else{
		for(var i = 0; i < devices.length; i++){
			var name = devices[i].Name.toLowerCase();
			if(name.includes(name_device))
			{
			result.push(devices[i]);
			}
		}

	perPage = result.length;
	console.log(result.length);
	html = '';
    const content = result.map((item, index) => {
        
            html += '<tr>';
           
            html += '<td>' + item.DeviceID + '</td>';
            html += '<td>' + item.Name + '</td>';
            html += '<td>' + item.Action + '</td>';
            html += '<td>' + item.Date + '</td>';
            
            html += '</tr>';
            
            return html;
        
    	});

	    html += '<tr>';
	           
        html += '<td colspan = "3">Total</td>';
       
        html += '<td>' + result.length + '</td>';
        
        html += '</tr>';

	    document.getElementById('myTable').innerHTML = html;
	    numberOfPage.innerHTML = "";
	    showTotalPages(result);
	}

	
}
renderDevice();
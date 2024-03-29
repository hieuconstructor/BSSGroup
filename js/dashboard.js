//---------------------------------Hiển thị dữ liệu bảng-------------------------------//
var jsonDevices =  [
                      {name:'TV', address:'00:1B44:11:3A:B7', ip:'127.0.0.2', date:'2021-05-31', consumption:60},
                      {name:'Washer', address:'00:1B44:11:3A:B8', ip:'127.0.0.3', date:'2021-05-31', consumption:60},
                      {name:'Refriferator', address:'00:1B44:11:3A:B9', ip:'127.0.0.4', date:'2021-05-31', consumption:80},
                      {name:'Selling Fan', address:'00:1B44:11:3A:B2', ip:'127.0.0.5', date:'2021-05-31', consumption:100},
                    ]

buildTable(jsonDevices);
//Hàm xây dựng bảng dữ liệu
function buildTable(data){
  var table = document.getElementById('myTable');
    table.innerHTML=""
    for (var i = 0; i < data.length; i++){
      var row = ` <tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].address}</td>
                    <td>${data[i].ip}</td>
                    <td>${data[i].date}</td>
                    <td>${data[i].consumption}</td>
                  </tr>`
      table.innerHTML += row
    }
    //Tính tổng
    var total = 0;
    for (var i = 0; i < data.length; i++){
      var total = jsonDevices.map(jsonDevices => jsonDevices.consumption).reduce((acc, amount) => acc + amount);

    }

    var rowTotal = ` <tr>
                        <td colspan = "4">Total</td>
                        <td>${total}</td>
                     </tr>`
    table.innerHTML += rowTotal
}

//---------------------------------Vẽ biểu đồ-------------------------------//

var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",    
];

function showChart(){

  //Hiển thị chú thích tên của các màu
  var xValues = [];
  for (var i = 0; i < jsonDevices.length; i++){
      xValues.push(jsonDevices[i].name);
  }
  //Hiển thị cong suat
  var yValues = [];
  for (var i = 0; i < jsonDevices.length; i++){
      yValues.push(jsonDevices[i].consumption);
  }
  //Các màu của biểu đồ
  

  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Power Cumsumption"
      }
    }
  });
}

showChart();




//---------------------------------Thêm mới thiết bị-------------------------------//




function Device(name, address, ip, date, consumption) {
  this.name = name;
  this.address = address;
  this.ip = ip;
  this.date = date;
  this.consumption = consumption;
}

//Hàm thêm mới thiết bị
function createDevice(){
  
  
  
 	//Validate dữ liệu
  	var inputNameDevice = document.getElementById("name").value;
  	var inputIp = document.getElementById("ip").value;
    if(inputNameDevice == "") {
      	document.getElementById("error_namedevice").innerHTML = "Please enter namedevice";
  		setTimeout(function(){ document.getElementById("error_namedevice").style.display="none"; }, 2000);
  		return false;
    } 
    if(inputIp == "") {
      	document.getElementById("error_ip").innerHTML = "Please enter ip device";
  		setTimeout(function(){ document.getElementById("error_ip").style.display="none"; }, 2000);
	     return false;  	
    }
    

    var nameDevice = document.getElementById("name").value;
	  var ipDevice = document.getElementById("ip").value;
	  var today = new Date();
	  var addressDevice= ""; 
	  var dateDevice = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	  var consumptionDevice = Math.floor(Math.random() * 101);
	  //Rule IP
	  const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

	  document.getElementById("chartIF").innerHTML="";
	  document.getElementById("chartIF").innerHTML='<canvas id="myChart" style="width:100%;max-width:600px"></canvas>';
      var table = document.getElementById('myTable');
	  //Xóa trắng bảng dữ liệu
	  table.innerHTML=""
	  
	  

	  //Thêm thiết bị mới
	  jsonDevices.push(new Device(nameDevice,addressDevice, ipDevice, dateDevice, consumptionDevice ));
	  //load lại bảng dữ liệu mới
	  buildTable(jsonDevices);

	  //random mã màu mới
	  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	  //Thêm mã màu mới
	  barColors.push(randomColor);
	  // showChart();

	  //Hiển thị chú thích tên của các màu
	  var xValues = [];
	  for (var i = 0; i < jsonDevices.length; i++){
	      xValues.push(jsonDevices[i].name);
	  }
	  //Hiển thị cong suat
	  var yValues = [];
	  for (var i = 0; i < jsonDevices.length; i++){
	      yValues.push(jsonDevices[i].consumption);
	  }
	  //Các màu của biểu đồ
	  

	  new Chart("myChart", {
	    type: "doughnut",
	    data: {
	      labels: xValues,
	      datasets: [{
	        backgroundColor: barColors,
	        data: yValues
	      }]
	    },
	    options: {
	      title: {
	        display: true,
	        text: "Power Cumsumption"
		      }
		    }
		  });
	  


  
  
  
}

//Ham hien thi SideNav

function showSideNav() {
  let x = document.getElementById("sidebar");
  x.setAttribute('id', 'sidebar_toggle');
  if (x.style.display = "none"){
    x.style.display = "block";
  }
  console.log(x.id);
  
}
//Close Side
function closeSide(){
	 var w = Math.max(window.screen.width, window.innerWidth);
	 let y = document.getElementById("sidebar_toggle");
	 if(y == null){
	 	return false;
	 }else{
	 	y.setAttribute('id', 'sidebar');
	 	y.style.display = "none";
		if(w <= 414 ){
			y.style.display = "none";
		}
	 }
 
  
}



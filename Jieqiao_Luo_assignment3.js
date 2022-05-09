function funCall(){
const tableInfo = [
    {
    StudentName: 'John',
    Age: 19,
    Phone: '455 - 983 - 0903',
    Address: '123 Ave, San Francisco, CA, 94011',
    },
    {
    StudentName: 'Alex',
    Age: 21,
    Phone: '455 - 983 - 0912',
    Address: '456 Rd, San Francisco, CA, 94012',
    },
    {
    StudentName: 'Josh',
    Age: 22,
    Phone: '455 - 345 - 0912',
    Address: '789 Dr, Newark, CA, 94016',
    },
    {
        StudentName: 'Matt',
        Age: 23,
        Phone: '321 - 345 - 0912',
        Address: '223 Dr, Sunnyvale, CA, 94016',
        },
        ]
    //  tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
var html ="<table border = '1|1'>"
    
    setTimeout(() =>{
        html+='<thead>'
        html+='<tr>';
        html+='<td>'+'Student Name'+'</td>';
        html+='<td>'+'Age'+'</td>';
        html+='<td>'+'Phone'+'</td>';
        html+='<td>'+'Address'+'</td>';
        html+='</tr>'
        html+='</thead>'
    for (var i =0;i<tableInfo.length;i++){
        html+='<td>'+ tableInfo[i].StudentName+'</td>';
        html+='<td>'+ tableInfo[i].Age+'</td>';
        html+='<td>'+ tableInfo[i].Phone+'</td>';
        html+='<td>'+ tableInfo[i].Address+'</td>';
        html+='</tr>';
    }

    document.getElementById("table").innerHTML = html
},0);
}
    

    funCall()

    const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];
    
    var ol = document.getElementById("first-ol")

    var ul = document.getElementById("first-ul")

    var btn = 
    document.getElementById("btn")
    
    btn.addEventListener("click",
    function(){
        list.forEach(function(e) {
        var li = document.createElement('li');
    li.innerText = e;
    ul.append(li)
     }) 
    })

    btn.addEventListener("click",
    function(){
        list.forEach(function(e) {
        var li = document.createElement('li');
    li.innerText = e;
    ol.append(li)
     }) 
    })


    const dropDownList = [
        { value: 'newark', content: 'Newark' },
        { value: 'santaClara', content: 'Santa Clara' },
        { value: 'unionCity', content: 'Union City' },
        { value: 'albany', content: 'Albany' },
        { value: 'dalyCity', content: 'Daly City' },
        { value: 'sanJose', content: 'San Jose' },
        ];

    var option = "";

    for(var i=0;i<dropDownList.length;i++)
    {
        option += '<option value="'+ dropDownList[i].value +'">' + 
        dropDownList[i].value + " </option>"
    }

    document.getElementById("dropDownList").innerHTML =option


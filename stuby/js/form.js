//新增数据
function AddRow(){
    //获取对象
    var table = document.getElementById('table');
    // console.log(table);
    //获取行数
    var length = table.rows.length;
    // console.log(length);
    //插入节点
    var newrow = table.insertRow(length);
    // console.log(newrow);
    //插入节点
    var namecol = newrow.insertCell(0);
    var phoneCol = newrow.insertCell(1);
    var actionCol = newrow.insertCell(2);   
    //修改节点内容
    namecol.innerHTML = '未命名';
    phoneCol.innerHTML = '无联系方式';
    actionCol.innerHTML = '<button type="button" onclick="enditRow(this)">编辑</button><button type="button" onclick="deleteRow(this)">删除</button>';   
}

//删除当前行数据
function deleteRow(line){
    // console.log(line);
    var rows = line.parentNode.parentNode;
    // console.log(rows);
    rows.parentNode.removeChild(rows);
} 

//编辑数据
function enditRow(line){
    // console.log(line);
    var row = line.parentNode.parentNode;
    // console.log(rows);
    var name = row.cells[0];
    var phone = row.cells[1];

    var inputname = prompt("输入第一列");
    var inputphone = prompt("输入第二列");

    name.innerHTML = inputname;
    phone.innerHTML = inputphone;
}

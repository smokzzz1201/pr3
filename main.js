const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";
function getRow(firstRow, secondRow) {
   
    alert("Букв в первой строке = "+firstRow.replace(/[^а]/gi, "").length);
alert("Букв во второй строке = "+secondRow.replace(/[^а]/gi, "").length);
if ( firstRow.replace(/[^а]/gi, "").length > secondRow.replace(/[^а]/gi, "").length)
alert("Букв а больше в первой строке "+firstRow)
else  alert(secondRow)
}
console.log(getRow(firstRow, secondRow)); // мама мыла раму

function getCustomRow(firstRow, secondRow) { 

    var bykva = prompt("Введите букву: ")
    firstRow = prompt("Введите первую строку: "); 
    secondRow = prompt("Введите вторую строку: "); 

    var first = 0;
    var second = 0;
    for (var i = 0; i < firstRow.length; i++) {
        if (firstRow[i]==bykva) {
            first++;
        }
    }
    for (var i = 0; i < secondRow.length; i++) {
        if (secondRow[i]==bykva) {
            second++;
        }
    }

    alert("Количество букв в первой строке = "+first); 
    alert("Количество букв во второй строке = "+second); 
} 
console.log(getCustomRow(firstRow, secondRow));

function formattedPhone() { 
    var phone = prompt("Введите номер: "); 
    var lenPhone = phone.length;
    if (lenPhone == 12){
        var tt=phone.split('');
        tt.splice(2,"", " ("); 
        tt.splice(6,"", ") "); 
        tt.splice(10,"", "-"); 
        tt.splice(13,"", "-"); 
    }
    else if (lenPhone == 11)
    {
        var tt=phone.split('');
        if (tt[0] != 7) tt[0] = 7;
        tt.splice(0,"","+") 
        tt.splice(2,"", " ("); 
        tt.splice(6,"", ") "); 
        tt.splice(10,"", "-"); 
        tt.splice(13,"", "-"); 
    }
    else if (lenPhone == 10)
    {
        var tt=phone.split('');
        tt.splice(0,"",7) 
        tt.splice(0,"","+") 
        tt.splice(2,"", " ("); 
        tt.splice(6,"", ") "); 
        tt.splice(10,"", "-"); 
        tt.splice(13,"", "-"); 
    }
    else {alert("Попробуйте ещё раз")}
    alert(tt.join(''))
     
    } 
console.log(formattedPhone()); // +7 (123) 456-78-90






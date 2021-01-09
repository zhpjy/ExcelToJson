function setExcelTextAreaOnChange(){
    let excelTextArea = document.getElementById("excelTextArea");
    let jsonTextArea = document.getElementById("jsonTextArea");

    excelTextArea.onchange=()=>{
        jsonTextArea.value=excelStringToJsonStr(excelTextArea.value);
    }
    excelTextArea.value="首先在这里输入"
    jsonTextArea.value="然后点这里就可以复制结果";
}

setExcelTextAreaOnChange();
console.log("run")
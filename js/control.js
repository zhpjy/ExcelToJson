function setExcelTextAreaOnChange() {
    let excelTextArea = document.getElementById("excelTextArea");
    let jsonTextArea = document.getElementById("jsonTextArea");

    excelTextArea.onchange = () => {
        jsonTextArea.value = excelStringToJsonStr(excelTextArea.value);
    }
    excelTextArea.value = "首先在这里粘贴Excel"
    jsonTextArea.value = "然后点这里就会自动生成JSON并复制结果";
}

function setAutoSelect() {
    let excelTextArea = document.getElementById("excelTextArea");
    let jsonTextArea = document.getElementById("jsonTextArea");

    excelTextArea.onclick = () => {
        excelTextArea.select();
    }
    jsonTextArea.onclick = () => {
        jsonTextArea.select();
        document.execCommand('copy');
    }
}

setAutoSelect();
setExcelTextAreaOnChange();
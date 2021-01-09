let hasHeaderSelect = document.getElementById("hasHeaderSelect");
let headerDirectionSelect = document.getElementById("headerDirectionSelect");
let headerDirectionDiv = document.getElementById("headerDirectionDiv");
let excelTextArea = document.getElementById("excelTextArea");
let jsonTextArea = document.getElementById("jsonTextArea");

let hasChangedTextArea = false;
let hasHeader = true;
let direction = "horizontal";

function setExcelTextAreaOnChange() {
    excelTextArea.onchange = () => {
        jsonTextArea.value = excelStringToJsonStr(excelTextArea.value);
        hasChangedTextArea = true;
    }
    excelTextArea.value = "首先在这里粘贴Excel"
    jsonTextArea.value = "然后点这里就会生成JSON并自动复制结果";
}

function setAutoSelect() {
    excelTextArea.onclick = () => {
        excelTextArea.select();
    }
    jsonTextArea.onclick = () => {
        jsonTextArea.select();
        document.execCommand('copy');
    }
}

function setSelectOnChange() {
    hasHeaderSelect.onchange = () => {
        console.log(hasHeaderSelect.value)
        if (hasHeaderSelect.value === "true") {
            hasHeader = true;
            headerDirectionDiv.style.display = "block";
        } else {
            hasHeader = false;
            headerDirectionDiv.style.display = "none";
        }
        if (hasChangedTextArea) {
            jsonTextArea.value = excelStringToJsonStr(excelTextArea.value);
        }
    }

    headerDirectionSelect.onchange = () => {
        if (hasChangedTextArea) {
            direction = headerDirectionSelect.value;
            jsonTextArea.value = excelStringToJsonStr(excelTextArea.value);
        }
    }
}

setSelectOnChange();
setAutoSelect();
setExcelTextAreaOnChange();
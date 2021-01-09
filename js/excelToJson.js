function excelStringToJsonStr(excelString) {
    let result = {};
    let rows = excelString.split("\n");
    rows.forEach(element => {
        if (element.trim().length == 0) {
            return;
        }
        cols = element.split("\t");
        if (cols.length < 1) {
            return;
        }
        if (isNaN(cols[0])) {
            //如果第一列不是数字
            values = cols.slice(1);
            values = values.map(autoConvert)
            result[cols[0]] = values
        } else {
            values = cols;
            values = values.map(autoConvert);
            if (!("data" in result)) {
                result.data = [];
            }
            console.log(result.data)
            result.data.push(values);
        }
    });
    return JSON.stringify(result, null, 4);
}

function autoConvert(str) {
    str = str.trim();

    if (str === "true") {
        return true;
    }

    if (str === "false") {
        return false;
    }

    if (!isNaN(str)) {
        return parseInt(str);
    }

    return str;
}
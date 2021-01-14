function excelStringToJsonStr(excelString) {
    excelString = excelString.trim();
    let rows = excelString.split("\n");
    let result;
    if (hasHeader === false) {
        result = toNoHeaderTableResult(rows);
    } else if (hasHeader === true && direction === "horizontal") {
        result = toHorizontalTableResult(rows);
    } else if (hasHeader === true && direction === "vertical") {
        result = toVerticalTableResult(rows);
    }
    return JSON.stringify(result, null, 4);
}

function toNoHeaderTableResult(rows) {
    let result = [];
    rows.forEach(element => {
        cols = element.split("\t");
        cols = cols.map(autoConvert);
        result.push(cols);
    });
    return result;
}

function toVerticalTableResult(rows) {
    let result = {};
    rows.forEach(element => {
        cols = element.split("\t");
        values = cols.slice(1);
        values = values.map(autoConvert);
        result[cols[0]] = values;
    });
    return result;
}

function toHorizontalTableResult(rows) {
    let result = {};
    let headers = rows.shift().trim().split("\t");

    headers.forEach(element => {
        result[element] = [];
    });

    for (let i = 0; i < rows.length; i++) {
        cols = rows[i].split("\t");
        for (let j = 0; j < cols.length; j++) {
            console.log(headers[j])
            if (headers[j] == null) {
                continue;
            }
            result[headers[j]].push(cols[j]);
        }
    }
    return result;
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
        return Number(str);
    }

    return str;
}

function getColumnData(columnIndex,teamName) {
    var table = $('h4:contains('+teamName+')').parent().parent().parent().parent()[1].children[1];
    var rows = table.rows;
    var columnData = [];

    for (var i = 1; i < rows.length-1; i++) { // Start from 1 to skip the header row
        var cells = rows[i].cells;
        if (cells.length > columnIndex) {
            var cellText = cells[columnIndex].textContent.trim().replace(" ","-");
            columnData.push(cellText);
        }
    }

    // Join the elements in the array with spaces as separators
    var joinedData = columnData.join(' ');

    console.log( "!bestFormation \""+joinedData+"\"");
}

getColumnData(1,"FC Inter")

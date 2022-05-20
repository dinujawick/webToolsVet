// When the user clicks on the button,toggle between hiding and showing the dropdown content
function toggleSearchList() {
    document.getElementById("seacrchList").classList.toggle("show");
    
}

function filterFunction() {

    if (!$('#seacrchList').hasClass("show")) {
        toggleSearchList();
    }

    var input, filter, ul, li, a, i;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("seacrchList");
    a = div.getElementsByTagName("a");

    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }

}

//Variable to store previous generic name
var prevAddedItem = "";

//Array to store selected medlist ATCs
var selectedMedList = new Array();

//Array to store selected medOjects
var selectedMedObjList = new Array();


$('#btnReset').on('click', function (event) {

    //Remove array allocation
    while (selectedMedList.length) {
        selectedMedList.pop();
    }
    
    //Remove array allocation
    while (selectedMedObjList.length) {
        selectedMedObjList.pop();
    }

    $('#tbody').remove();
    $('<tbody>').attr('id', 'tbody').appendTo($('#medTable'));

});

$('#btnPrint').on('click', function (event) {
    printPatHandOut();
});


$(document).ready(function () {

    //Create Empty Table
    $table = $('<table>').attr('id', 'medTable').addClass("table table-bordered").appendTo($('#divTable'));
    $tHead = $('<thead>').appendTo($table);

    $tHeaderRow = $('<tr>').appendTo($tHead);

    $('<th>').text("Medicine Name").attr('scope', 'col').attr('colspan', '2').appendTo($tHeaderRow);
    $('<th>').text("Contraindication or Interaction").attr('scope', 'col').appendTo($tHeaderRow);
    $('<th>').text("Effect on concentration").attr('scope', 'col').appendTo($tHeaderRow);
    $('<th>').text("Clinical Comments").attr('scope', 'col').appendTo($tHeaderRow);

    $tBody = $('<tbody>').attr('id', 'tbody').appendTo($table);

    //Read JSON and add the med generic values into dropdown.
    $.getJSON("fullATCTable.json", function (data) {

        $.each(data, function (index, item) {

            //For remove duplication on the generic names
            if (item.generic_name != prevAddedItem) {
                $med = $('<a>').attr('id', item.atc_level).text(item.generic_name).appendTo('#seacrchList');

                //Med Click Event
                $med.on('click', function (event) {
                    addMed(item);
                });

                prevAddedItem = item.generic_name;
            }
        })
    });
});

//Function to add medicines into the table
//@selectedMedDetails : selected med object from the search dropdown
function addMed(selectedMedDetails) {

    if (checkDuplicates(selectedMedDetails)) {

        //Add New med to the table
        $tableRow = $('<tr>').attr('id', 'tr' + selectedMedDetails.atc_level).appendTo($('#tbody'));
        $('<th>').attr('scope', 'row').text(selectedMedDetails.generic_name).appendTo($tableRow);
        $btnRemove = $('<td>').addClass('close').attr('style', 'padding:0.85rem;').appendTo($tableRow);
        $('<td>').text(selectedMedDetails.recommendation).appendTo($tableRow);

        if (selectedMedDetails.recode_effect_on_concentration_2 != "") {
            console.log(selectedMedDetails.recode_effect_on_concentration_2.split("|"));
            $('<td>').text(selectedMedDetails.recode_effect_on_concentration_1 + selectedMedDetails.recode_effect_on_concentration_2).appendTo($tableRow);
        } else {
            //$('<td>').text(selectedMedDetails.recode_effect_on_concentration_1).appendTo($tableRow);
            const temp = selectedMedDetails.recode_effect_on_concentration_1.split("|");
            switch (temp[0]) {
                case "<up>":
                    console.log(temp[0]);
                    //Add up arrow icon
                    $('<td>').append(
                        $('<p>').append(
                            $('<svg>')
                                .attr('xmlns', "http://www.w3.org/2000/svg")
                                .attr('width', "16")
                                .attr('height', "16")
                                .attr('fill', 'currentColor')
                                .attr('class', 'bi bi-arrow-up')
                                .attr('viewBox', "0 0 16 16").append(
                                    $('<path>')
                                        .attr('fill-rule', "evenodd")
                                        .attr('d', "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z")
                            )
                        ).text(temp[1])
                    ).appendTo($tableRow);
                    break;
                case "<down>": console.log(temp[0]); break;
                case "<up><down>": console.log(temp[0]); break;
                default: console.log(temp[0]);

            }
            //arrow-up
            //<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
            //    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
            //</svg>

            //arrow-up short
            //<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
            //    <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
            //</svg>
            
        }

        $('<td>').text(selectedMedDetails.clinical_comments).appendTo($tableRow);

        //Add selected med atc level into the array
        selectedMedList.push(selectedMedDetails.atc_level);

        //Add selected med object into the array
        selectedMedObjList.push(selectedMedDetails);

        //Remove med from the table when click the btnRemove
        $btnRemove.on('click', function (event) {
            //Remove the removed medicine's atc code from selectedMedList array
            const index = selectedMedList.indexOf(selectedMedDetails.atc_level);
            if (index > -1) {
                selectedMedList.splice(index, 1);
            }
            //Remove the table row
            $('#' + 'tr' + selectedMedDetails.atc_level).remove();
        });
    }

}

//Function to checkduplicates in the current datagrid
//@medItem : selected med object from the search dropdown
function checkDuplicates(medItem) {

    var isValid = false;
    var grid = document.getElementById("medTable");
    var rows = grid.getElementsByTagName("TR");


    if (rows.length == 1) {
        isValid = true;
        return isValid;
    } else {
        for (var i = 0; i < rows.length - 1; i++) {

            var cells = rows[i + 1].childNodes;

            var medName = cells[0].innerHTML;
            var icon = cells[2].innerHTML;
            var cliCom = cells[3].innerHTML;

            if (medItem.generic_name == medName && medItem.recommendation == icon && medItem.clinical_comments == cliCom) {
                return false;
            } else {
                isValid = true;
            }
        }
    }
    return isValid;
}

//Function to create new html document for print as a patien handout
function printPatHandOut() {

    var doc = $('<html>');

    $head = $('<head>').appendTo(doc);

    $head.append(
        $('<link>').attr('href', "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css")
            .attr('rel', "stylesheet")
            .attr('integrity', "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3")
            .attr('crossorigin', "anonymous"),
        $('<script>').attr('src', "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js")
    );

    $body = $('<body>').appendTo(doc);

    $('<h1>').text("Patient Information Handout").appendTo($body);
    $('<p>').text("I have prescribed nirmatrelvir in comibination with ritonavir (Paxlovid) to treat your COVID infection").appendTo($body);
    $('<p>').text("The dosage is").appendTo($body);
    $('<p>').text("Some of your other medicines need adjustment while you are taking nirmatrelvir in combination with ritonavir (Paxlovid)").appendTo($body);

    $table = $('<table>').addClass("table table-bordered").appendTo($body);

    $tHead = $('<thead>').appendTo($table);

    $tHeaderRow = $('<tr>').appendTo($tHead);

    $('<th>').text("Medicine Name").attr('scope', 'col').appendTo($tHeaderRow);
    $('<th>').text("Action to take while taking nirmatrelvir in combination with ritonavir (Paxlovid)").attr('scope', 'col').appendTo($tHeaderRow);


    $tblBody= $('<tbody>').appendTo($table);

    $.each(selectedMedObjList, function (index, item) {
        $('<tr>').append(
                        $('<th>').text(item.generic_name),
            $('<td>').text(item.clinical_comments)
        ).appendTo($tblBody);
    })


    var newWin = window.open('', 'Print-Window');

    newWin.document.open();
    newWin.document.write(doc[0].outerHTML);
    setTimeout(function () { newWin.print(); }, 5);
    newWin.document.close();
    setTimeout(function () { newWin.close(); }, 10);

}
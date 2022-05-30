//Variable to store previous generic name
var prevAddedItem = "";

//Array to store selected medlist ATC levels
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

    //Card Deck Reset
    $('#mainDeck').remove();
    $('<div>').attr('id', 'mainDeck').addClass('row row-cols-1 row-cols-md-2 g-4').appendTo($('#divMedCon'));

});

$('#btnPrint').on('click', function (event) {
    printPatHandOut();
});

//Page On Load Function
$(document).ready(function () {

    //QueryString standard : ?paramName=value1,value2,value3
    var queryStringValues = null;

    //Check only one '?' and no ';' in query string to prevent X-Site Scripting.
    if (window.location.href.match(/[?]/g) != null && window.location.href.match(/[;]/g) == null) {  
        if (window.location.href.match(/[?]/g).length == 1 && window.location.href.slice(window.location.href.indexOf('?') + 1) != "")
        queryStringValues = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1].split(',');
     }
    
    //***************************************************Card Way******************************************************
    //Create Card Deck
    $('<div>').attr('id', 'mainDeck').addClass('row row-cols-1 row-cols-md-2 g-4').appendTo($('#divMedCon'));
    //*****************************************************************************************************************

    //Read JSON and add the med generic values into dropdown.
    $.getJSON("fullATCTable.json", function (data) {

        $.each(data, function (index, item) {

            ////Add med with query string
            if (queryStringValues != null) {
                for (var i = 0; i < queryStringValues.length; i++) {
                    if (queryStringValues[i] == item.atc_level) {
                        addMed(item);
                    }
                }
            }
            

            //For remove duplication on the generic names
            if (item.generic_name != prevAddedItem) {
                $med = $('<a>').attr('id', item.atc_level).text(item.generic_name).appendTo('#searchList');

                
                //Med Click Event
                $med.on('click', function (event) {
                    addMed(item);
                });

                prevAddedItem = item.generic_name;
            }
        })
    });
});



//Function to return interaction icon
//@arrowType : stripped arrow type
//return: span with a arrow
function getInteractionIcon(contraType) {

    switch (contraType) {
        case "contra-indicated":
            //Add up arrow icon
            var intIcon = $('<span>').append(
                $('<img>').attr('src', 'Images/Icarus/contraindicated.svg').addClass('h-45')
                )
            return intIcon;
            break;
        case "attention":
            //Add down arrow icon
            var intIcon = $('<span>').append(
                $('<img>').attr('src', 'Images/Icarus/cease-temporarily.svg').addClass('h-45')
                )
            return intIcon;
            break;
        case "resistance inducing":
            //Add up-down arrow icon
            var intIcon = $('<span>').append(
                $('<img>').attr('src', 'Images/Icarus/reduce-dose.svg').addClass('h-45')
                )
            return intIcon;
            break;
        case "<double-arrow>":
            //Add left-right arrow icon
            var intIcon = $('<span>').append(
                $('<img>').attr('src', 'Images/Icarus/monitor.svg').addClass('h-45')
                        )
            return intIcon;
            break;
        default: return ($('<span>'));
    }

}


//Function to return arrows
//@arrowType : stripped arrow type
//return: span with a arrow
function getArrow(arrowType) {

 
    switch (arrowType) {
        case "<up>":
            //Add up arrow icon
            var arrow = $('<span>').attr('id', 'upArrow').append(
                $('<img>').attr('src', 'Images/Icarus/arrow-up.svg').addClass('h-45')
            )
            return arrow;
            break;
        case "<down>":
            //Add down arrow icon
            var arrow = $('<span>').attr('id', 'downArrow').append(
                $('<img>').attr('src', 'Images/Icarus/arrow-down.svg').addClass('h-45')
            )
            return arrow;
            break;
        case "<up><down>":
            //Add up-down arrow icon
            var arrow = $('<span>').attr('id', 'updownArrow').append(
                $('<img>').attr('src', 'Images/Icarus/up_down.svg').addClass('h-45')
            )
            return arrow;
            break;
        case "<double-arrow>":
            //Add left-right arrow icon
            var arrow = $('<span>').attr('id', 'doubleArrow').append(
                $('<img>').attr('src', 'Images/Icarus/left_right.svg').addClass('h-45')
            )
            return arrow;
            break;
        default:
    }

}

//Function to created a card according to selectedmed
//@selectedMedDetails : selected med object from the search dropdown vstack gap-2 mx-auto
function createCardLayout(atcLevel) {

    $col = $('<div>').attr('id', atcLevel + 'cardCol').addClass('col').appendTo('#mainDeck');
    $card = $('<div>').attr('id', atcLevel + 'card').addClass('card shadow h-100').appendTo($col);
    $('<div>').attr('id', atcLevel + 'cardHead').addClass('card-header').appendTo($card);
    $('<div>').attr('id', atcLevel + 'cardBody').addClass('card-body').append(
        $('<div>').attr('id', atcLevel + 'iconLayer').addClass('row').append(
            $('<div>').addClass('col-6').attr('style', 'text-align:center;').append(
                $('<div>').attr('id', atcLevel + 'vstackEffect').addClass('col').append(
                    $('<h6>').text('EFFECT ON CONCENTRATION')
                )
            ),
            $('<div>').addClass('col-6').attr('style', 'text-align:center;').append(
                $('<div>').attr('id', atcLevel + 'vstackContra').addClass('col').append(
                    $('<h6>').text('ACTION').attr('style','margin-bottom:1.5rem;')
                )
            )
        ),
        $('<div>').attr('id', atcLevel + 'commentsLayer').addClass('row')
    ).appendTo($card);
    $('<div>').attr('id', atcLevel + 'cardFoot').addClass('card-footer').attr('style','text-align:right;').appendTo($card);

    return { 'colID': atcLevel + 'cardCol', 'cardID': atcLevel + 'card', 'headerID': atcLevel + 'cardHead', 'bodyID': atcLevel + 'cardBody', 'footerID': atcLevel + 'cardFoot', 'vstackIntID': atcLevel + 'vstackContra', 'vstackActionID': atcLevel + 'vstackEffect', 'comments': atcLevel + 'commentsLayer' }

}

//Function to generate a card using med object
//@selectedMedObject
function createCard(selectedMedObject) {
    //***************************************************Card Way******************************************************
    if (checkDuplicatesOnCard(selectedMedObject.atc_level)) {

        var currentMed = createCardLayout(selectedMedObject.atc_level);

        $('#' + currentMed.headerID).append(
            $('<h4>').text(toTitleCase(selectedMedObject.generic_name))
        );

        $('#' + currentMed.footerID).append(
            $btnRemove = $('<a>').attr('id', selectedMedObject.atc_level + 'btnRemove').addClass('btn medCardRemoveBtn').text('Remove')
        );

        //Two recode effect on concentration
        if (selectedMedObject.recode_effect_on_concentration_2 != "") {

            //split the REOC1
            const firstREOC = selectedMedObject.recode_effect_on_concentration_1.split("|");
            //split the REOC2
            const secondREOC = selectedMedObject.recode_effect_on_concentration_2.split("|");

            $('#' + currentMed.vstackActionID).append(
                $('<div>').addClass('row').append(

                    $('<div>').addClass('col-6').append(
                        getArrow(firstREOC[0]),
                        $('<p>').text(firstREOC[1])

                    ),
                    $('<div>').addClass('col-6').append(
                        getArrow(secondREOC[0]),
                        $('<p>').text(secondREOC[1])

                    )
                )

            );



        }
        //One recode effect on concentration
        else {

            //split the REOC
            const firstREOC = selectedMedObject.recode_effect_on_concentration_1.split("|");

            //Action:
            $('#' + currentMed.vstackActionID).append(
                getArrow(firstREOC[0]),
                $('<p>').text(firstREOC[1])
            );

        }

        $('#' + currentMed.vstackIntID).append(
            getInteractionIcon(selectedMedObject.recommendation.toLowerCase()),
            $('<p>').text(selectedMedObject.recommendation.toLowerCase()).attr('style','margin-top:0.05rem;')
          )

        $('#' + currentMed.comments).append(
            $('<p>').text(selectedMedObject.clinical_comments)
        );

        //Add selected med atc level into the array
        selectedMedList.push(selectedMedObject.atc_level);

        //Add selected med object into the array
        selectedMedObjList.push(selectedMedObject);

        //Remove med card from the card deck when click the btnRemove
        $btnRemove.on('click', function (event) {
            //Remove the removed medicine's atc code from selectedMedList array
            const index = selectedMedList.indexOf(selectedMedObject.atc_level);
            if (index > -1) {
                selectedMedList.splice(index, 1);
            }
            const index2 = selectedMedObjList.indexOf(selectedMedObject);
            if (index > -1) {
                selectedMedObjList.splice(index, 1);
            }

            //Remove the table row
            $('#' + currentMed.colID).remove();

        });


    }
    //*****************************************************************************************************************
}

//Function to generate a gridrow using med object
//@selectedMedObject
function createGridRow(selectedMedObject) {

    //***************************************************Table Way*****************************************************
    if (checkDuplicates(selectedMedObject)) {

        //Add New med to the table
        $tableRow = $('<tr>').attr('id', 'tr' + selectedMedObject.atc_level).appendTo($('#tbody'));
        $tableComments = $('<tr>').attr('id', 'tr' + selectedMedObject.atc_level + 'clinical_com').appendTo($('#tbody'));

        $('<th>').attr('scope', 'row').text(selectedMedObject.generic_name)
            //.append(
            //    $('<img>').attr('src', 'Images/delete.png')
            //)
            .appendTo($tableRow);

        $btnRemove = $('<td>').addClass('close').attr('style', 'padding:0.85rem;').appendTo($tableRow);
        $('<td>').text(selectedMedObject.recommendation).appendTo($tableRow);

        //Two recode effect on concentration
        if (selectedMedObject.recode_effect_on_concentration_2 != "") {

            /*$('<td>').text(selectedMedDetails.recode_effect_on_concentration_1 + selectedMedDetails.recode_effect_on_concentration_2).appendTo($tableRow);*/

            //split the REOC1
            const firstREOC = selectedMedObject.recode_effect_on_concentration_1.split("|");
            //split the REOC2
            const secondREOC = selectedMedObject.recode_effect_on_concentration_2.split("|");

            var div1 = getArrow(firstREOC[0], firstREOC[1]);
            var div2 = getArrow(secondREOC[0], secondREOC[1]);

            $('<td>').attr('style','width:19rem;').append(div1, div2).appendTo($tableRow);

        }
        //One recode effect on concentration
        else {

            //split the REOC1
            const firstREOC = selectedMedObject.recode_effect_on_concentration_1.split("|");

            //Get the arrow with med name by passing the type of arrow and med name; append that to table cell.
            $('<td>').attr('style', 'width:19rem;').append(getArrow(firstREOC[0], firstREOC[1])).appendTo($tableRow);

        }

        $('<th>').text('Clinical Comments').appendTo($tableComments);
        $('<td>').attr('colspan', '3').text(selectedMedObject.clinical_comments).appendTo($tableComments);

        //Add selected med atc level into the array
        selectedMedList.push(selectedMedDetails.atc_level);

        //Add selected med object into the array
        selectedMedObjList.push(selectedMedDetails);

        //Remove med from the table when click the btnRemove
        $btnRemove.on('click', function (event) {
            //Remove the removed medicine's atc code from selectedMedList array
            const index = selectedMedList.indexOf(selectedMedObject.atc_level);
            if (index > -1) {
                selectedMedList.splice(index, 1);
            }
            const index2 = selectedMedObjList.indexOf(selectedMedObject);
            if (index > -1) {
                selectedMedObjList.splice(index, 1);
            }

            //Remove the table row
            $('#' + 'tr' + selectedMedObject.atc_level).remove();
            $('#' + 'tr' + selectedMedObject.atc_level + 'clinical_com').remove();

        });
    }
    //******************************************************************************************************************

}

//Function to add medicines into the table
//@selectedMedObject : selected med object from the search dropdown
function addMed(selectedMedObject) {


    //Create card using med
    createCard(selectedMedObject);

    //Create table row 
    //createGridRow(selectedMedObject);


}

//Function to checkduplicates in the current card deck
//@atc_level : selected med atc_level from the search dropdown
function checkDuplicatesOnCard(atc_level) {

    var isValid = false;

    //Get all the card IDs into const cardIDs variable.
    const cardIDs = $.map($('#mainDeck > .col'), card => card.id);

    
    if (cardIDs.length == 0) {
        isValid = true;
        return isValid;
    } else {

        for (var i = 0; i < cardIDs.length; i++) {

            if (cardIDs[i] == (atc_level + 'cardCol')) {
                return false;
            } else {
                isValid = true;
            }
        }      
    }
    return isValid;
    
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

            if (medItem.generic_name == medName) {
                return false;
            } else {
                isValid = true;
            }
        }
    }
    return isValid;
}

//Function to create new html document for print as a patient handout
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

//Function to when the user clicks on the button,toggle between hiding and showing the dropdown content
function toggleSearchList() {
    document.getElementById("searchList").classList.toggle("show");

}

//Functon to filter the search dropdown according to input text
function filterFunction() {

    if (!$('#seacrchList').hasClass("show")) {
        toggleSearchList();
    }

    var input, filter, ul, li, a, i;

    input = document.getElementById("searchTxt");
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

//Fucntion to convert normal lover case into capitelize each word.
//@str : the string need to convert
function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
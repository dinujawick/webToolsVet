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

    //Parm standard : ?paramName=value1,value2,value3
    var queryStringValues = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1].split(',');


    console.log(queryStringValues);

    //function GetParameterValues(param) {
    //    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    //    console.log(url);
    //    for (var i = 0; i < url.length; i++) {
    //        var urlparam = url[i].split('=');
    //        if (urlparam[0] == param) {
    //            return urlparam[1];
    //        }
    //    }
    //}

    //***************************************************Card Way******************************************************
    //Create Card Deck
    $cardDeck = $('<div>').attr('id', 'mainDeck').addClass('row row-cols-1 row-cols-md-2 g-4').appendTo($('#divMedCon'));
    //*****************************************************************************************************************


    //***************************************************Table Way*****************************************************

    // //Create Empty Table
    // $table = $('<table>').attr('id', 'medTable').addClass("table table-bordered").appendTo($('#divTable'));
    // $tHead = $('<thead>').appendTo($table);

    // $tHeaderRow = $('<tr>').appendTo($tHead);

    // $('<th>').text("Medicine Name").attr('scope', 'col').attr('colspan', '2').appendTo($tHeaderRow);
    // $('<th>').text("Contraindication or Interaction").attr('scope', 'col').appendTo($tHeaderRow);
    // $('<th>').text("Effect on concentration").attr('scope', 'col').appendTo($tHeaderRow);
    ///* $('<th>').text("Clinical Comments").attr('scope', 'col').appendTo($tHeaderRow);*/

    /*$tBody = $('<tbody>').attr('id', 'tbody').appendTo($table);*/

    //******************************************************************************************************************

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


//Function to return arrows
//@arrowType : stripped arrow type
//@medName : stripped med name
//return: div with a arrow
function getArrow(arrowType,medName) {

    switch (arrowType) {
        case "<up>":
            //Add up arrow icon
            var div = $('<div>').append(
                $('<span>').attr('id', 'upArrow').append(
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
                ),
                $('<span>').text(medName)
            );
            return div;
            break;
        case "<down>":
            //Add down arrow icon
            var div = $('<div>').append(
                $('<span>').attr('id', 'downArrow').append(
                    $('<svg>')
                        .attr('xmlns', "http://www.w3.org/2000/svg")
                        .attr('width', "16")
                        .attr('height', "16")
                        .attr('fill', 'currentColor')
                        .attr('class', 'bi bi-arrow-down')
                        .attr('viewBox', "0 0 16 16").append(
                            $('<path>')
                                .attr('fill-rule', "evenodd")
                                .attr('d', "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z")
                        )
                ),
                $('<span>').text(medName)
            );
            return div;
            break;
        case "<up><down>":
            //Add up-down arrow icon
            var div = $('<div>').append(
                $('<span>').attr('id', 'updownArrow').append(
                    $('<svg>')
                        .attr('xmlns', "http://www.w3.org/2000/svg")
                        .attr('width', "16")
                        .attr('height', "16")
                        .attr('fill', 'currentColor')
                        .attr('class', 'bi bi-arrow-down-up')
                        .attr('viewBox', "0 0 16 16").append(
                            $('<path>')
                                .attr('fill-rule', "evenodd")
                                .attr('d', "M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z")
                        )
                ),
                $('<span>').text(medName)
            );
            return div;
            break;
        case "<double-arrow>":
            //Add left-right arrow icon
            var div = $('<div>').append(
                $('<span>').attr('id', 'doubleArrow').append(
                    $('<svg>')
                        .attr('xmlns', "http://www.w3.org/2000/svg")
                        .attr('width', "16")
                        .attr('height', "16")
                        .attr('fill', 'currentColor')
                        .attr('class', 'bi bi-arrow-left-right')
                        .attr('viewBox', "0 0 16 16").append(
                            $('<path>')
                                .attr('fill-rule', "evenodd")
                                .attr('d', "M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z")
                        )
                ),
                $('<span>').text(medName)
            );
            return div;
            break;
        default:
    }

}

//Function to return interaction icon
//@arrowType : stripped arrow type
//return: span with a arrow
function getInteractionIcon(contraType) {

    switch (contraType) {
        case "contra-indicated":
            //Add up arrow icon
            var intIcon = $('<span>').attr('id', 'ci').append(
                    $('<svg>')
                        .attr('xmlns', "http://www.w3.org/2000/svg")
                        .attr('width', "48")
                        .attr('height', "48")
                        .attr('fill', 'none')
                    .attr('viewBox', "0 0 48 48").append(
                            $('<path>')
                                .attr('d', "M30 25.1409V12.5C30 11.6716 29.3285 11 28.5 11C27.6716 11 27 11.6716 27 12.5V23H25V9.5C25 8.67157 24.3285 8 23.5 8C22.6716 8 22 8.67157 22 9.5V23H20V12.5C20 11.6716 19.3285 11 18.5 11C17.6716 11 17 11.6716 17 12.5V25H15V16.5C15 15.6716 14.3285 15 13.5 15C12.6716 15 12 15.6716 12 16.5V29.7375C12 35.4053 16.5947 40 22.2625 40C26.0571 40 29.542 37.9061 31.3236 34.5557L37.2298 23.4485C37.667 22.6263 37.4098 21.6065 36.635 21.09C35.7542 20.5028 34.5598 20.7924 34.0458 21.7177L31.8742 25.6265C31.3731 26.5285 30 26.1727 30 25.1409Z")
                                .attr('fill', "#8B0E04"),
                            $('<path>')
                                .attr('fill-rule', "evenodd")
                                .attr('clip-rule',"evenodd")
                                .attr('d', "M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM42.0952 24C42.0952 14.0063 33.9937 5.90476 24 5.90476C14.0063 5.90476 5.90476 14.0063 5.90476 24C5.90476 33.9937 14.0063 42.0952 24 42.0952C33.9937 42.0952 42.0952 33.9937 42.0952 24Z")
                                .attr('fill', "#8B0E04")
                        )
                )
            return intIcon;
            break;
        case "attention":
            //Add down arrow icon
            var intIcon = $('<span>').attr('id', 'downArrow').append(
                    $('<svg>')
                        .attr('xmlns', "http://www.w3.org/2000/svg")
                        .attr('width', "16")
                        .attr('height', "16")
                        .attr('fill', 'currentColor')
                        .attr('class', 'bi bi-arrow-down arrow-back')
                        .attr('viewBox', "0 0 16 16").append(
                            $('<path>')
                                .attr('fill-rule', "evenodd")
                                .attr('d', "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z")
                        )
                    )
            return intIcon;
            break;
        case "resistance inducing":
            //Add up-down arrow icon
            var intIcon = $('<span>').attr('id', 'updownArrow').append(
                    $('<svg>')
                        .attr('xmlns', "http://www.w3.org/2000/svg")
                        .attr('width', "16")
                        .attr('height', "16")
                        .attr('fill', 'currentColor')
                        .attr('class', 'bi bi-arrow-down-up arrow-back')
                        .attr('viewBox', "0 0 16 16").append(
                            $('<path>')
                                .attr('fill-rule', "evenodd")
                                .attr('d', "M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z")
                        )
                )
            return intIcon;
            break;
        case "<double-arrow>":
            //Add left-right arrow icon
            var intIcon = $('<span>').attr('id', 'doubleArrow').append(
                            $('<svg>')
                                .attr('xmlns', "http://www.w3.org/2000/svg")
                                .attr('width', "16")
                                .attr('height', "16")
                                .attr('fill', 'currentColor')
                                .attr('class', 'bi bi-arrow-left-right arrow-back')
                                .attr('viewBox', "0 0 16 16").append(
                                $('<path>')
                                    .attr('fill-rule', "evenodd")
                                    .attr('d', "M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z")
                            )
                        )
            return intIcon;
            break;
        default:
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
                $('<svg>')
                    .attr('xmlns', "http://www.w3.org/2000/svg")
                    .attr('width', "16")
                    .attr('height', "16")
                    .attr('fill', 'currentColor')
                    .attr('class', 'bi bi-arrow-up arrow-back')
                    .attr('viewBox', "0 0 16 16").append(
                        $('<path>')
                            .attr('fill-rule', "evenodd")
                            .attr('d', "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z")
                    )
            )
            return arrow;
            break;
        case "<down>":
            //Add down arrow icon
            var arrow = $('<span>').attr('id', 'downArrow').append(
                $('<svg>')
                    .attr('xmlns', "http://www.w3.org/2000/svg")
                    .attr('width', "16")
                    .attr('height', "16")
                    .attr('fill', 'currentColor')
                    .attr('class', 'bi bi-arrow-down arrow-back')
                    .attr('viewBox', "0 0 16 16").append(
                        $('<path>')
                            .attr('fill-rule', "evenodd")
                            .attr('d', "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z")
                    )
            )
            return arrow;
            break;
        case "<up><down>":
            //Add up-down arrow icon
            var arrow = $('<span>').attr('id', 'updownArrow').append(
                $('<svg>')
                    .attr('xmlns', "http://www.w3.org/2000/svg")
                    .attr('width', "16")
                    .attr('height', "16")
                    .attr('fill', 'currentColor')
                    .attr('class', 'bi bi-arrow-down-up arrow-back')
                    .attr('viewBox', "0 0 16 16").append(
                        $('<path>')
                            .attr('fill-rule', "evenodd")
                            .attr('d', "M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z")
                    )
            )
            return arrow;
            break;
        case "<double-arrow>":
            //Add left-right arrow icon
            var arrow = $('<span>').attr('id', 'doubleArrow').append(
                $('<svg>')
                    .attr('xmlns', "http://www.w3.org/2000/svg")
                    .attr('width', "16")
                    .attr('height', "16")
                    .attr('fill', 'currentColor')
                    .attr('class', 'bi bi-arrow-left-right arrow-back')
                    .attr('viewBox', "0 0 16 16").append(
                        $('<path>')
                            .attr('fill-rule', "evenodd")
                            .attr('d', "M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z")
                    )
            )
            return arrow;
            break;
        default:
    }

}


//Function to created a card according to selectedmed
//@selectedMedDetails : selected med object from the search dropdown
function createCard(atcLevel) {

    $col = $('<div>').attr('id', atcLevel + 'cardCol').addClass('col').appendTo('#mainDeck');
    $card = $('<div>').attr('id', atcLevel + 'card').addClass('card h-100').appendTo($col);
    $('<div>').attr('id', atcLevel + 'cardHead').addClass('card-header').appendTo($card);
    $('<div>').attr('id', atcLevel + 'cardBody').addClass('card-body').append(
        $('<div>').attr('id', atcLevel + 'iconLayer').addClass('row').append(
            $('<div>').addClass('col-6').attr('style','text-align:center;').append(
                $('<div>').attr('id', atcLevel + 'vstackContra').addClass('vstack gap-2 mx-auto').append(
                    $('<h6>').text('Interaction')
                )
            ),
            $('<div>').addClass('col-6').attr('style', 'text-align:center;').append(
                $('<div>').attr('id', atcLevel + 'vstackEffect').addClass('vstack gap-2 mx-auto').append(
                    $('<h6>').text('Action')
                )
            )
        ),
        $('<div>').attr('id', atcLevel + 'commentsLayer').addClass('row')
    ).appendTo($card);
    $('<div>').attr('id', atcLevel + 'cardFoot').addClass('card-footer').attr('style','text-align:right;').appendTo($card);

    return { 'colID': atcLevel + 'cardCol', 'cardID': atcLevel + 'card', 'headerID': atcLevel + 'cardHead', 'bodyID': atcLevel + 'cardBody', 'footerID': atcLevel + 'cardFoot', 'vstackIntID': atcLevel + 'vstackContra', 'vstackActionID': atcLevel + 'vstackEffect', 'comments': atcLevel + 'commentsLayer' }

}


//Function to add medicines into the table
//@selectedMedDetails : selected med object from the search dropdown
function addMed(selectedMedDetails) {


    //***************************************************Card Way******************************************************
    if (checkDuplicatesOnCard(selectedMedDetails.atc_level)) {

        var currentMed = createCard(selectedMedDetails.atc_level);

        $('#' + currentMed.headerID).append(
            $('<h4>').text(selectedMedDetails.generic_name)
        );

        $('#' + currentMed.footerID).append(
            $btnRemove = $('<a>').attr('id', selectedMedDetails.atc_level + 'btnRemove').addClass('btn medCardRemoveBtn').text('Remove')
        );

        //Two recode effect on concentration
        if (selectedMedDetails.recode_effect_on_concentration_2 != "") {

            //split the REOC1
            const firstREOC = selectedMedDetails.recode_effect_on_concentration_1.split("|");
            //split the REOC2
            const secondREOC = selectedMedDetails.recode_effect_on_concentration_2.split("|");

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
            const firstREOC = selectedMedDetails.recode_effect_on_concentration_1.split("|");

            //Action:
            $('#' + currentMed.vstackActionID).append(
                getArrow(firstREOC[0]),
                $('<p>').text(firstREOC[1])
            );

        }

        $('#' + currentMed.comments).append(
            $('<p>').text(selectedMedDetails.clinical_comments)
        );

        //Add selected med atc level into the array
        selectedMedList.push(selectedMedDetails.atc_level);

        //Add selected med object into the array
        selectedMedObjList.push(selectedMedDetails);

        //Remove med card from the card deck when click the btnRemove
        $btnRemove.on('click', function (event) {
            //Remove the removed medicine's atc code from selectedMedList array
            const index = selectedMedList.indexOf(selectedMedDetails.atc_level);
            if (index > -1) {
                selectedMedList.splice(index, 1);
            }
            const index2 = selectedMedObjList.indexOf(selectedMedDetails);
            if (index > -1) {
                selectedMedObjList.splice(index, 1);
            }

            //Remove the table row
            $('#' + currentMed.colID).remove();

        });


    }
    //*****************************************************************************************************************


    //***************************************************Table Way*****************************************************
    //if (checkDuplicates(selectedMedDetails)) {

    //    //Add New med to the table
    //    $tableRow = $('<tr>').attr('id', 'tr' + selectedMedDetails.atc_level).appendTo($('#tbody'));
    //    $tableComments = $('<tr>').attr('id', 'tr' + selectedMedDetails.atc_level + 'clinical_com').appendTo($('#tbody'));

    //    $('<th>').attr('scope', 'row').text(selectedMedDetails.generic_name)
    //        //.append(
    //        //    $('<img>').attr('src', 'Images/delete.png')
    //        //)
    //        .appendTo($tableRow);

    //    $btnRemove = $('<td>').addClass('close').attr('style', 'padding:0.85rem;').appendTo($tableRow);
    //    $('<td>').text(selectedMedDetails.recommendation).appendTo($tableRow);

    //    //Two recode effect on concentration
    //    if (selectedMedDetails.recode_effect_on_concentration_2 != "") {

    //        /*$('<td>').text(selectedMedDetails.recode_effect_on_concentration_1 + selectedMedDetails.recode_effect_on_concentration_2).appendTo($tableRow);*/

    //        //split the REOC1
    //        const firstREOC = selectedMedDetails.recode_effect_on_concentration_1.split("|");
    //        //split the REOC2
    //        const secondREOC = selectedMedDetails.recode_effect_on_concentration_2.split("|");

    //        var div1 = getArrow(firstREOC[0], firstREOC[1]);
    //        var div2 = getArrow(secondREOC[0], secondREOC[1]);

    //        $('<td>').attr('style','width:19rem;').append(div1, div2).appendTo($tableRow);

    //    }
    //    //One recode effect on concentration
    //    else {

    //        //split the REOC1
    //        const firstREOC = selectedMedDetails.recode_effect_on_concentration_1.split("|");

    //        //Get the arrow with med name by passing the type of arrow and med name; append that to table cell.
    //        $('<td>').attr('style', 'width:19rem;').append(getArrow(firstREOC[0], firstREOC[1])).appendTo($tableRow);

    //    }

    //    $('<th>').text('Clinical Comments').appendTo($tableComments);
    //    $('<td>').attr('colspan','3').text(selectedMedDetails.clinical_comments).appendTo($tableComments);

    //    //Add selected med atc level into the array
    //    selectedMedList.push(selectedMedDetails.atc_level);

    //    //Add selected med object into the array
    //    selectedMedObjList.push(selectedMedDetails);

    //    //Remove med from the table when click the btnRemove
    //    $btnRemove.on('click', function (event) {
    //        //Remove the removed medicine's atc code from selectedMedList array
    //        const index = selectedMedList.indexOf(selectedMedDetails.atc_level);
    //        if (index > -1) {
    //            selectedMedList.splice(index, 1);
    //        }
    //        const index2 = selectedMedObjList.indexOf(selectedMedDetails);
    //        if (index > -1) {
    //            selectedMedObjList.splice(index, 1);
    //        }

    //        //Remove the table row
    //        $('#' + 'tr' + selectedMedDetails.atc_level).remove();
    //        $('#' + 'tr' + selectedMedDetails.atc_level + 'clinical_com').remove();

    //    });
    //}
    //******************************************************************************************************************

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
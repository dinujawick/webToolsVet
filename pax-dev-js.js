//Variable to store previous generic name
var prevAddedItem = "";

//Array to store selected medlist ATC levels
var selectedMedList = new Array();

//Array to store selected medOjects
var selectedMedObjList = new Array();

//Variable to store current card div index
var currnetCardIndex = 0;

//Array to store CI cards indexs
var listCICardIndexes = new Array();

//Array to store AR cards indexs
var listARCardIndexes = new Array();

//Array to store FU cards indexs
var listFUCardIndexes = new Array();


$('#btnReset').on('click', function (event) {

    //Remove array allocation
    while (selectedMedList.length) {
        selectedMedList.pop();
    }

    //Remove array allocation
    while (selectedMedObjList.length) {
        selectedMedObjList.pop();
    }

    //Remove listCICardIndexes
    while (listCICardIndexes.length) {
        listCICardIndexes.pop();
    }

    //Remove listARCardIndexes
    while (listARCardIndexes.length) {
        listARCardIndexes.pop();
    }

    //Remove listFUCardIndexes
    while (listFUCardIndexes.length) {
        listFUCardIndexes.pop();
    }

    //Card Deck Reset
    $('#mainDeck').remove();
    $('<div>').attr('id', 'mainDeck').addClass('row row-cols-1 row-cols-md-2 g-4').appendTo($('#divMedCon'));

    //Remove .clicked class

    //Get all the med IDs into const medIDs variable.
    const medIDs = $.map($('#searchList > .clicked'), med => med.id);

    for (var i = 0; i < medIDs.length; i++) {

        $('#' + medIDs[i]).removeClass('clicked');
    }

});

$('#btnPrint').on('click', function (event) {
    printPatHandOut($('#dosages :selected').text());
});

$('#btnModal').on('click', function (event) {
    setDataOnModal();
});

//Page On Load Function
$(document).ready(function () {

    //initialize all tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    
    //console.log($.grep([{ "name": "Lenovo Thinkpad 41A4298", "website": "google" }, { "name": "Lenovo Thinkpad 41A2222", "website": "google" }], function (n, i) {
    //    return n.filter(item => item.website.toLowerCase().indexOf("go") > -1);
    //}));


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
    $.getJSON("nirmatrelvir_ritonavir_interaction_checker.json", function (data) {

        $.each(data, function (index, item) {

            
            //For remove duplication on the generic names
            if (item.generic_name != prevAddedItem) {
                $med = $('<a>').attr('id', item.atc_level).text(item.generic_name).addClass('wordbr').appendTo('#searchList');


                //Med Click Event
                $med.on('click', function (event) {
                    addMed(item);
                });

                prevAddedItem = item.generic_name;
            }
            //Add med with query string
            if (queryStringValues != null) {
                for (var i = 0; i < queryStringValues.length; i++) {
                    if (queryStringValues[i] == item.atc_level) {
                        addMed(item);
                    }
                }
            }
        });
    });
});


//Function to return interaction icon
//@arrowType : stripped arrow type
//@action_alt : action type
//return: span with an icon
function getInteractionIcon(contraType, action_alt) {

    //consider alternative covid-19 treatment
    const conAltCovid19T = "For these medicines, there is a risk of serious side effects or reduced treatment efficacy, and withholding medicines is not an effective or feasible strategy."
    //withhold if clinically appropriate
    const withClinApp = "For these medicines, there is a risk of serious adverse events. Only start nirmatrelvir plus ritonavir if the medicine can be safely stopped. The medicine can be resumed 3 days after treatment completion. Some medicines may need to be withheld for longer if the patient is elderly or the medication has a long half-life."
    //seek specialist advice
    const seekSpecAdvi = "Concomitant treatment with nirmatrelvir plus ritonavir may affect therapeutic efficacy. Seek specialist advice about possibility of withholding current treatment and consult product information for further details.";
    //dose adjustment may be needed
    const doseAdj = "If medicine cannot be safely stopped or replaced, adjust the dose and monitor for potential side effects. Information about individual dosing can be found at the Liverpool COVID-19 Drug Interactions website.";
    //educate and monitor
    const eduAndMoni = "A priori dose adjustment is not required, but may be considered or needed. Educate your patient about potential effects and to contact GP as required.";
    //swtich medicine
    const swtichMed = "There is a small potential for interaction and there are alternative medicines that can be prescribed for similar indications. Consider switching this medicine during nirmatrelvir plus ritonavir treatment.";
    //review risk
    const reviewRisk = "The clinical evaluation is dependent on particular patient events or conditions. Please refer to the clinical comments for further information.";




    switch (contraType) {
        case "contra-indicated":
            switch (action_alt) {
                case "consider alternative covid-19 treatment":
                    //Red Alert
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/alert-red.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', conAltCovid19T)
                    )
                    return intIcon;
                    break;
                case "withhold if clinically appropriate":
                    //Red Stop
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/stop_red.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', withClinApp)
                    )
                    return intIcon;
                    break;
                case "seek specialist advice":
                    //Red Specialist
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/specialist-advice-red.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', seekSpecAdvi)
                    )
                    return intIcon;
                    break;
                case "review risk":
                    //Red Stop
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/stop_red.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', reviewRisk)
                    )
                    return intIcon;
                    break;
                default: return ($('<span>'));
            }
            break;
        case "attention required":
            switch (action_alt) {
                case "monitor therapeutic concentration":
                    //Orange Magnifying glass
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/glass_orange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', eduAndMoni)
                    )
                    return intIcon;
                    break;
                case "review risk":
                    //Orange Stop
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/stop_orange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', reviewRisk)
                    )
                    return intIcon;
                    break;
                case "consider alternative covid-19 treatment":
                    //Orange Alert
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/alert-yellow.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', conAltCovid19T)
                    )
                    return intIcon;
                    break;
                case "withhold if clinically appropriate":
                    //Orange Stop
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/stop_orange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', withClinApp)
                    )
                    return intIcon;
                    break;
                case "combination product, see clinical comment":
                    //Orange Stop
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/stop_orange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', reviewRisk)
                    )
                    return intIcon;
                    break;
                case "consider additional contraceptive":
                    //Orange Switch
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/exchange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', swtichMed)
                    )
                    return intIcon;
                    break;
                case "consider alternative antibiotic":
                    //Orange Switch
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/exchange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', swtichMed)
                    )
                    return intIcon;
                    break;
                case "monitor":
                    //Orange Magnifying glass
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/glass_orange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', eduAndMoni)
                    )
                    return intIcon;
                    break;
                case "review dose":
                    //Orange Medicines
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/medicines_orange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', doseAdj)
                    )
                    return intIcon;
                    break;
                case "seek specialist advice":
                    //Orange Specialist
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/specialist-advice-yellow.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', seekSpecAdvi)
                    )
                    return intIcon;
                    break;
                case "monitor clinical response":
                    //Orange Magnifying glass
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/glass_orange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', eduAndMoni)
                    )
                    return intIcon;
                    break;
                case "monitor side effects":
                    //Orange Magnifying glass
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/glass_orange.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', eduAndMoni)
                    )
                    return intIcon;
                    break;
                default: return ($('<span>'));
            }
            break;
        case "follow up":
            switch (action_alt) {
                case "monitor side effects":
                    //Grey Magnifying glass
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/glass_grey.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', eduAndMoni)
                    )
                    return intIcon;
                    break;
                case "monitor clinical response":
                    //Grey Magnifying glass
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/glass_grey.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', eduAndMoni)
                    )
                    return intIcon;
                    break;
                case "monitor":
                    //Grey Magnifying glass
                    var intIcon = $('<span>').append(
                        $('<img>').attr('src', 'Images/Icarus/glass_grey.svg').addClass('h-45')
                            .attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top')
                            .attr('title', eduAndMoni)
                    )
                    return intIcon;
                    break;
                default: return ($('<span>'));
            }
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

                )
            )
        ),
        $('<div>').attr('id', atcLevel + 'commentsLayer').addClass('row')
    ).appendTo($card);
    $('<div>').attr('id', atcLevel + 'cardFoot').addClass('card-footer').attr('style', 'text-align:right;').appendTo($card);

    return { 'colID': atcLevel + 'cardCol', 'cardID': atcLevel + 'card', 'headerID': atcLevel + 'cardHead', 'bodyID': atcLevel + 'cardBody', 'footerID': atcLevel + 'cardFoot', 'vstackIntID': atcLevel + 'vstackContra', 'vstackActionID': atcLevel + 'vstackEffect', 'comments': atcLevel + 'commentsLayer', 'col': $col }

}

//Function to generate a card using med object
//@selectedMedObject
function createCard(selectedMedObject) {
    //***************************************************Card Way******************************************************
    if (checkDuplicatesOnCard(selectedMedObject.atc_level)) {

        $('#alertBoxForNewMed').attr('style', 'display:');

        setTimeout(function () { $('#alertBoxForNewMed').fadeOut(1000); }, 1000);

        $('#' + selectedMedObject.atc_level).addClass('clicked');

        var currentMed = createCardLayout(selectedMedObject.atc_level);

        currnetCardIndex = currentMed.col.index();

        if (selectedMedObject.evaluation_alt.toLowerCase() == "contra-indicated") {
            if (listCICardIndexes.length != 0) {


                //Get last index of CI card indexes list
                var lastIndexOfCI = listCICardIndexes.sort(function (a, b) { return a - b })[listCICardIndexes.length-1];
                $('#mainDeck').children().eq(lastIndexOfCI).after($('#mainDeck').children().eq(currnetCardIndex));
                listCICardIndexes.push(currentMed.col.index());

                if (listARCardIndexes.length != 0) {
                    for (i = 0; i < listARCardIndexes.length; i++) {
                        listARCardIndexes[i]++;
                    }
                }
                if (listFUCardIndexes.length != 0) {
                    for (i = 0; i < listFUCardIndexes.length; i++) {
                        listFUCardIndexes[i]++;
                    }
                }

            }
            else {

                var firstIndex = 0;

                if (listARCardIndexes.length != 0) {
                    firstIndex = listARCardIndexes.sort(function (a, b) { return a - b })[0];
                    
                }
                else if (listFUCardIndexes.length != 0) {
                    firstIndex = listFUCardIndexes.sort(function (a, b) { return a - b })[0];
                   
                }

                if (listARCardIndexes.length != 0) {
                    for (i = 0; i < listARCardIndexes.length; i++) {
                        listARCardIndexes[i]++;
                    }
                }
                if (listFUCardIndexes.length != 0) {
                    for (i = 0; i < listFUCardIndexes.length; i++) {
                        listFUCardIndexes[i]++;
                    }
                }


                $('#mainDeck').children().eq(firstIndex).before($('#mainDeck').children().eq(currnetCardIndex));
                listCICardIndexes.push(currentMed.col.index());
            }
            
        }
        else if (selectedMedObject.evaluation_alt.toLowerCase() == "attention required") {

            if (listARCardIndexes.length != 0) {

                var lastIndexOfARList = listARCardIndexes.sort(function (a, b) { return a - b })[listARCardIndexes.length - 1];
                $('#mainDeck').children().eq(lastIndexOfARList).after($('#mainDeck').children().eq(currnetCardIndex));

                listARCardIndexes.push(currentMed.col.index());
                if(listFUCardIndexes.length != 0) {
                    for (i = 0; i < listFUCardIndexes.length; i++) {
                        listFUCardIndexes[i]++;
                    }
                }

            } 
            else {

                var lastIndex = 0;

                if (listCICardIndexes.length != 0) {
                    lastIndex = listCICardIndexes.sort(function (a, b) { return a - b })[listCICardIndexes.length - 1];
                    $('#mainDeck').children().eq(lastIndex).after($('#mainDeck').children().eq(currnetCardIndex));
                } else if (listFUCardIndexes.length != 0) {
                    lastIndex = listFUCardIndexes.sort(function (a, b) { return a - b })[0];
                    $('#mainDeck').children().eq(lastIndex).before($('#mainDeck').children().eq(currnetCardIndex));
                    for (i = 0; i < listFUCardIndexes.length; i++) {
                        listFUCardIndexes[i]++;
                    }
                } else {
                    $('#mainDeck').children().eq(lastIndex).before($('#mainDeck').children().eq(currnetCardIndex));
                }

                listARCardIndexes.push(currentMed.col.index());
            }    
            
        }
        else if (selectedMedObject.evaluation_alt.toLowerCase() == "follow up") {

            if (listFUCardIndexes.length != 0) {

                var lastIndexOfFUList = listFUCardIndexes.sort(function (a, b) { return a - b })[listFUCardIndexes.length - 1];
                $('#mainDeck').children().eq(lastIndexOfFUList).after($('#mainDeck').children().eq(currnetCardIndex));
                listFUCardIndexes.push(currentMed.col.index());

            }
            else {

                var lastIndex = 0;

                if (listARCardIndexes.length != 0) {
                    lastIndex = listARCardIndexes.sort(function (a, b) { return a - b })[listARCardIndexes.length - 1];
                }
                else if (listCICardIndexes.length != 0) {
                    lasIndex = listCICardIndexes.sort(function (a, b) { return a - b })[listCICardIndexes.length - 1];
                } 

                $('#mainDeck').children().eq(lastIndex).after($('#mainDeck').children().eq(currnetCardIndex));
                listFUCardIndexes.push(currentMed.col.index());
            }
        }

        $('#' + currentMed.headerID).append(
            $('<h4>').text(selectedMedObject.generic_name)
        );

        $('#' + currentMed.footerID).append(
            $btnRemove = $('<a>').attr('id', selectedMedObject.atc_level + 'btnRemove').addClass('btn medCardRemoveBtn').text('Remove')
        );

        //Two recode effect on concentration
        if (selectedMedObject.effect_on_concentration_2 != "") {

            //split the REOC1
            const firstREOC = selectedMedObject.effect_on_concentration_1.split("|");
            //split the REOC2
            const secondREOC = selectedMedObject.effect_on_concentration_2.split("|");

            $('#' + currentMed.vstackActionID).append(
                $('<div>').addClass('row').append(

                    $('<div>').addClass('col-6').append(
                        getArrow(firstREOC[0]),
                        $('<p>').text(toTitleCase(firstREOC[1]))

                    ),
                    $('<div>').addClass('col-6').append(
                        getArrow(secondREOC[0]),
                        $('<p>').text(toTitleCase(secondREOC[1]))

                    )
                )

            );

        }
        //One recode effect on concentration
        else {

            //split the REOC
            const firstREOC = selectedMedObject.effect_on_concentration_1.split("|");

            //Action:
            $('#' + currentMed.vstackActionID).append(
                getArrow(firstREOC[0]),
                $('<p>').text(toTitleCase(firstREOC[1]))
            );

        }

        $('#' + currentMed.vstackIntID).append(
            $('<h6>').text(selectedMedObject.evaluation_alt).attr('style', 'margin-bottom:1.5rem;'),
            getInteractionIcon(selectedMedObject.evaluation_alt.toLowerCase(), selectedMedObject.action_alt.toLowerCase()),
            $('<p>').text(selectedMedObject.action_alt).attr('style', 'margin-top:0.05rem;')
        );

        $('#' + currentMed.comments).append(
            $('<p>').text(selectedMedObject.clinical_comment)
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

            //Remove the sorting index array
            if (selectedMedObject.evaluation_alt.toLowerCase() == "contra-indicated") {
                const index = listCICardIndexes.indexOf(currentMed.col.index());
                if (index > -1) {
                    listCICardIndexes.splice(index, 1);
                    for (i = index; i < listCICardIndexes.length; i++) {
                        listCICardIndexes[i]--;
                    }

                    if (listARCardIndexes.length != 0) {
                        for (i = 0; i < listARCardIndexes.length; i++) {
                            listARCardIndexes[i]--;
                        }
                    }
                    if (listFUCardIndexes.length != 0) {
                        for (i = 0; i < listFUCardIndexes.length; i++) {
                            listFUCardIndexes[i]--;
                        }
                    }
                }
                
                
            }
            else if (selectedMedObject.evaluation_alt.toLowerCase() == "attention required") {

                const index = listARCardIndexes.indexOf(currentMed.col.index());
                if (index > -1) {
                    listARCardIndexes.splice(index, 1);
                    if (listARCardIndexes.length != 0) {
                        for (i = index; i < listARCardIndexes.length; i++) {
                            listARCardIndexes[i]--;
                        }
                    }
                    if (listFUCardIndexes.length != 0) {
                        for (i = 0; i < listFUCardIndexes.length; i++) {
                            listFUCardIndexes[i]--;
                        }
                    }
                }

            }
            else if (selectedMedObject.evaluation_alt.toLowerCase() == "follow up") {

                const index = listFUCardIndexes.indexOf(currentMed.col.index());
                if (index > -1) {
                    listFUCardIndexes.splice(index, 1);
                    if (listFUCardIndexes.length != 0) {
                        for (i = index; i < listFUCardIndexes.length; i++) {
                            listFUCardIndexes[i]--;
                        }
                    }
                }
            }

            //Remove clicked font color from the list
            $('#' + selectedMedObject.atc_level).removeClass('clicked');

            //Remove the card
            $('#' + currentMed.colID).remove();

        });


    }
    //*****************************************************************************************************************
}


//Function to add medicines into the table
//@selectedMedObject : selected med object from the search dropdown
function addMed(selectedMedObject) {

    
    //Create card using med
    createCard(selectedMedObject);

    //initialize all tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

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



function setDataOnModal() {

    $('#modalBodyRow').empty();
    $div = $('<div>').addClass('col-12').appendTo($('#modalBodyRow'));
    $('<h1>').attr('id','phi_header').text("Patient Information Handout").appendTo($div);
    $('<p>').attr('id', 'phi_firstPara').text("I have prescribed nirmatrelvir in comibination with ritonavir (Paxlovid) to treat your COVID infection").appendTo($div);
    
    $('<label>').text("The dosage is").attr('for', 'dosages').appendTo($div);
    $('<select>').attr('id', 'dosages').attr('style','padding-bottom:0rem; padding-top:0rem;').addClass('form-select').append(
            $('<option>').text("Select the dose"),
            $('<option>').text("Take TWO 150mg (pink) tablets of nirmatrelvir with one 100mg (white) tablet of ritonavir TWICE a day for FIVE days"),
            $('<option>').text("Take ONE 150mg (pink) tablets of nirmatrelvir with one 100mg (white) tablet of ritonavir TWICE a day for FIVE days")
    ).appendTo($div);

    $('<p>').attr('id', 'phi_thirdPara').attr('style','margin-top:1rem;').text("Some of your other medicines need adjustment while you are taking nirmatrelvir in combination with ritonavir (Paxlovid)").appendTo($div);

    
    $table = $('<table>').attr('id', 'phi_table').addClass("table table-bordered").appendTo($div);

    $tHead = $('<thead>').appendTo($table);

    $tHeaderRow = $('<tr>').appendTo($tHead);

    $('<th>').text("Medicine Name").attr('scope', 'col').appendTo($tHeaderRow);
    $('<th>').text("Action to take while taking nirmatrelvir in combination with ritonavir (Paxlovid)").attr('scope', 'col').appendTo($tHeaderRow);


    $tblBody = $('<tbody>').appendTo($table);

    $.each(selectedMedObjList, function (index, item) {
        $('<tr>').append(
            $('<th>').text(item.generic_name),
            $('<td>').attr('id', item.atc_level+'_phi_td').attr('contenteditable', 'true').addClass('placeholderForTable').text("Please fill your recommendation..").on('click', function (event) {
                
                if (this.innerText == "Please fill your recommendation..") {
                    this.innerText = "";
                    $('#' + item.atc_level + '_phi_td').removeClass('placeholderForTable');
                }
            })
        ).appendTo($tblBody);
    });
}


//Function to create new html document for print as a patient handout
function printPatHandOut(selectedDosage) {

    var doc = $('<html>');
    $head = $('<head>').appendTo(doc);

    $head.append(
        $('<link>').attr('href', "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css")
            .attr('rel', "stylesheet")
            .attr('integrity', "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3")
            .attr('crossorigin', "anonymous")
    );

    $body = $('<body>').appendTo(doc);

    $body.append(
        $('#phi_header').clone(),
        $('#phi_header').clone(),
        $('<p>').text('The dosage is' + selectedDosage),
        $('phi_thirdPara').clone(),
        $('phi_table').clone()
    );



    //var selects = $('#modalBody').find('select');
    //$(selects).each(function (i) {
    //    var select = this;
    //    $(clone).find('select').eq(i).val($(select).val());
    //});

    clone.appendTo($body);

    var newWin = window.open('', 'Print-Window');

    newWin.document.open();
    newWin.document.write(doc[0].outerHTML);
    newWin.document.close(); // necessary for IE >= 10
    newWin.focus(); // necessary for IE >= 10*/

    setTimeout(function () { newWin.print(); }, 500);

    setTimeout(function () { newWin.close(); }, 10000);

}

//Function to when the user clicks on the button,toggle between hiding and showing the dropdown content
function toggleSearchList() {
    document.getElementById("searchList").classList.toggle("show");

}

//Functon to filter the search dropdown according to input text
function filterFunction() {

    if (!$('#searchList').hasClass("show")) {
        toggleSearchList();
    }

    var input, filter, a, i;

    input = document.getElementById("searchTxt");
    filter = input.value.toUpperCase();
    div = document.getElementById("searchList");
    a = div.getElementsByTagName("a");

    array = [
        {
            "atc_level": "L01EC02",
            "brand_name": "Tafinlar",
            "generic_name": "Dabrafenib"
        },
        {
            "atc_level": "C09DX03",
            "brand_name": "Sevikar HCT",
            "generic_name": "Olmesartan/Amlodipine/Hydrochlorothiazide"
        },
        {
            "atc_level": "C09DX03",
            "brand_name": "Olmekar HCT",
            "generic_name": "Olmesartan/Amlodipine/Hydrochlorothiazide"
        },
        {
            "atc_level": "C09DX03",
            "brand_name": "APO-Olmesartan/Amlodipine/HCTZ",
            "generic_name": "Olmesartan/Amlodipine/Hydrochlorothiazide"
        },
        {
            "atc_level": "C01EB17",
            "brand_name": "Coralan",
            "generic_name": "Ivabradine"
        },
        {
            "atc_level": "A07EA06",
            "brand_name": "Budenofalk",
            "generic_name": "Budesonide (systemic)"
        },
        {
            "atc_level": "A07EA06",
            "brand_name": "Entocort",
            "generic_name": "Budesonide (systemic)"
        },
        {
            "atc_level": "A07EA06",
            "brand_name": "Jorveza",
            "generic_name": "Budesonide (systemic)"
        },
        {
            "atc_level": "L01EG02",
            "brand_name": "Afinitor",
            "generic_name": "Everolimus"
        },
        {
            "atc_level": "J02AC03",
            "brand_name": "Vfend",
            "generic_name": "Voriconazole"
        },
        {
            "atc_level": "J02AC03",
            "brand_name": "Vttack",
            "generic_name": "Voriconazole"
        },
        {
            "atc_level": "J02AC03",
            "brand_name": "Vzole",
            "generic_name": "Voriconazole"
        },
        {
            "atc_level": "B01AC04",
            "brand_name": "Plidogrel",
            "generic_name": "Clopidogrel"
        },
        {
            "atc_level": "B01AC04",
            "brand_name": "Piax",
            "generic_name": "Clopidogrel"
        },
        {
            "atc_level": "B01AC04",
            "brand_name": "Iscover",
            "generic_name": "Clopidogrel"
        },
        {
            "atc_level": "B01AC04",
            "brand_name": "Plavicor",
            "generic_name": "Clopidogrel"
        },
        {
            "atc_level": "B01AC04",
            "brand_name": "Clovix",
            "generic_name": "Clopidogrel"
        },
        {
            "atc_level": "L02BB04",
            "brand_name": "Xtandi",
            "generic_name": "Enzalutamide"
        },
        {
            "atc_level": "N05CD08",
            "brand_name": "Pfizer Australia Pty Ltd",
            "generic_name": "Midazolam (parenteral) "
        },
        {
            "atc_level": "C10BA06",
            "brand_name": "Ezalo Composite Pack",
            "generic_name": "Rosuvastatin/Ezetimibe"
        },
        {
            "atc_level": "C10BA06",
            "brand_name": "Rosuzet Composite Pack",
            "generic_name": "Rosuvastatin/Ezetimibe"
        },
        {
            "atc_level": "J05AF01",
            "brand_name": "Retrovir",
            "generic_name": "Zidovudine"
        },
        {
            "atc_level": "J05AR01",
            "brand_name": "Lamivudine",
            "generic_name": "Lamivudine/Zidovudine"
        },
        {
            "atc_level": "J05AR01",
            "brand_name": "Combivir",
            "generic_name": "Lamivudine/Zidovudine"
        },
        {
            "atc_level": "J05AJ01",
            "brand_name": "Isentress",
            "generic_name": "Raltegravir"
        },
        {
            "atc_level": "N05AH02",
            "brand_name": "Clopine",
            "generic_name": "Clozapine"
        },
        {
            "atc_level": "N05AH02",
            "brand_name": "Clozaril",
            "generic_name": "Clozapine"
        },
        {
            "atc_level": "N05AH02",
            "brand_name": "Versacloz",
            "generic_name": "Clozapine"
        },
        {
            "atc_level": "J05AG01",
            "brand_name": "Viramune XR",
            "generic_name": "Nevirapine"
        },
        {
            "atc_level": "J05AR04",
            "brand_name": "Trizivir",
            "generic_name": "Abacavir/Lamivudine/Zidovudine"
        },
        {
            "atc_level": "J05AX09",
            "brand_name": "Celsentri",
            "generic_name": "Maraviroc"
        },
        {
            "atc_level": "J05AE08",
            "brand_name": "Reyataz",
            "generic_name": "Atazanavir"
        },
        {
            "atc_level": "J05AE10",
            "brand_name": "Prezista",
            "generic_name": "Darunavir"
        },
        {
            "atc_level": "J05AE01",
            "brand_name": "Invirase",
            "generic_name": "Saquinavir"
        },
        {
            "atc_level": "J05AG03",
            "brand_name": "Stocrin",
            "generic_name": "Efavirenz"
        },
        {
            "atc_level": "J05AE07",
            "brand_name": "Telzir",
            "generic_name": "Fosamprenavir"
        },
        {
            "atc_level": "C10BA05",
            "brand_name": "Atozet",
            "generic_name": "Atorvastatin/Ezetimibe"
        },
        {
            "atc_level": "C10BA05",
            "brand_name": "Ezetimibe/Atorvastatin GH",
            "generic_name": "Atorvastatin/Ezetimibe"
        },
        {
            "atc_level": "C10BA05",
            "brand_name": "Ezetast",
            "generic_name": "Atorvastatin/Ezetimibe"
        },
        {
            "atc_level": "B01AF02",
            "brand_name": "Eliquis",
            "generic_name": "Apixaban"
        },
        {
            "atc_level": "N05AE05",
            "brand_name": "Latuda",
            "generic_name": "Lurasidone"
        },
        {
            "atc_level": "N02AB03",
            "brand_name": "Abstral",
            "generic_name": "Fentanyl"
        },
        {
            "atc_level": "N02AB03",
            "brand_name": "Fentora",
            "generic_name": "Fentanyl"
        },
        {
            "atc_level": "N02AB03",
            "brand_name": "Durogesic",
            "generic_name": "Fentanyl"
        },
        {
            "atc_level": "N02AB03",
            "brand_name": "Fenpatch",
            "generic_name": "Fentanyl"
        },
        {
            "atc_level": "N02AB03",
            "brand_name": "Denpax",
            "generic_name": "Fentanyl"
        },
        {
            "atc_level": "N02AB03",
            "brand_name": "Actiq",
            "generic_name": "Fentanyl"
        },
        {
            "atc_level": "J02AC02",
            "brand_name": "Lozanoc",
            "generic_name": "Itraconazole"
        },
        {
            "atc_level": "J02AC02",
            "brand_name": "Itracap",
            "generic_name": "Itraconazole"
        },
        {
            "atc_level": "J02AC02",
            "brand_name": "Sporanox",
            "generic_name": "Itraconazole"
        },
        {
            "atc_level": "J02AC02",
            "brand_name": "ITRANOX",
            "generic_name": "Itraconazole"
        },
        {
            "atc_level": "J01FA01",
            "brand_name": "Eryc",
            "generic_name": "Erythromycin"
        },
        {
            "atc_level": "J01FA01",
            "brand_name": "E-Mycin",
            "generic_name": "Erythromycin"
        },
        {
            "atc_level": "C01BC04",
            "brand_name": "Flecatab",
            "generic_name": "Flecainide"
        },
        {
            "atc_level": "C01BC04",
            "brand_name": "Tambocor",
            "generic_name": "Flecainide"
        },
        {
            "atc_level": "J05AR14",
            "brand_name": "Prezcobix",
            "generic_name": "Darunavir/Cobicistat"
        },
        {
            "atc_level": "C02KX05",
            "brand_name": "Adempas",
            "generic_name": "Riociguat"
        },
        {
            "atc_level": "L01ED02",
            "brand_name": "Zykadia",
            "generic_name": "Ceritinib "
        },
        {
            "atc_level": "N05BA12",
            "brand_name": "Kalma",
            "generic_name": "Alprazolam "
        },
        {
            "atc_level": "N05BA12",
            "brand_name": "Alprax",
            "generic_name": "Alprazolam "
        },
        {
            "atc_level": "L01EL01",
            "brand_name": "Imbruvica",
            "generic_name": "Ibrutinib"
        },
        {
            "atc_level": "L01XJ02",
            "brand_name": "Odomzo",
            "generic_name": "Sonidegib "
        },
        {
            "atc_level": "L01EB03",
            "brand_name": "Giotrif",
            "generic_name": "Afatinib"
        },
        {
            "atc_level": "J05AP57",
            "brand_name": "Maviret",
            "generic_name": "Glecaprevir/Pibrentasvir"
        },
        {
            "atc_level": "N03AE01",
            "brand_name": "Rivotril",
            "generic_name": "Clonazepam "
        },
        {
            "atc_level": "N03AE01",
            "brand_name": "Paxam",
            "generic_name": "Clonazepam "
        },
        {
            "atc_level": "L01XX52",
            "brand_name": "Venclexta",
            "generic_name": "Venetoclax"
        },
        {
            "atc_level": "B01AF01",
            "brand_name": "Xarelto",
            "generic_name": "Rivaroxaban"
        },
        {
            "atc_level": "J05AR20",
            "brand_name": "Biktarvy",
            "generic_name": "Bictegravir/Emtricitabine/Tenofovir"
        },
        {
            "atc_level": "J05AP56",
            "brand_name": "Vosevi",
            "generic_name": "Sofosbuvir/Velpatasvir/Voxilaprevir"
        },
        {
            "atc_level": "H02AB04",
            "brand_name": "Solu-Medrol",
            "generic_name": "Methylprednisolone"
        },
        {
            "atc_level": "H02AB04",
            "brand_name": "Depo-Nisolone",
            "generic_name": "Methylprednisolone"
        },
        {
            "atc_level": "H02AB04",
            "brand_name": "Depo-Medrol",
            "generic_name": "Methylprednisolone"
        },
        {
            "atc_level": "H02AB04",
            "brand_name": "Methylpred",
            "generic_name": "Methylprednisolone"
        },
        {
            "atc_level": "N02AA01",
            "brand_name": "Kapanol",
            "generic_name": "Morphine"
        },
        {
            "atc_level": "N02AA01",
            "brand_name": "Anamorph",
            "generic_name": "Morphine"
        },
        {
            "atc_level": "N02AA01",
            "brand_name": "MS Contin Suspension",
            "generic_name": "Morphine"
        },
        {
            "atc_level": "N02AA01",
            "brand_name": "Ordine",
            "generic_name": "Morphine"
        },
        {
            "atc_level": "N02AA01",
            "brand_name": "MS Mono",
            "generic_name": "Morphine"
        },
        {
            "atc_level": "N02AA01",
            "brand_name": "Sevredol",
            "generic_name": "Morphine"
        },
        {
            "atc_level": "G04BE10",
            "brand_name": "Spedra",
            "generic_name": "Avanafil"
        },
        {
            "atc_level": "L01EF03",
            "brand_name": "Verzenio",
            "generic_name": "Abemaciclib"
        },
        {
            "atc_level": "N05AX08",
            "brand_name": "Rixadone",
            "generic_name": "Risperidone"
        },
        {
            "atc_level": "N05AX08",
            "brand_name": "Ozidal",
            "generic_name": "Risperidone"
        },
        {
            "atc_level": "N05AX08",
            "brand_name": "Rispa",
            "generic_name": "Risperidone"
        },
        {
            "atc_level": "N05AX08",
            "brand_name": "Rispernia",
            "generic_name": "Risperidone"
        },
        {
            "atc_level": "L04AD02",
            "brand_name": "ADVAGRAF XL",
            "generic_name": "Tacrolimus"
        },
        {
            "atc_level": "L04AD02",
            "brand_name": "Pacrolim",
            "generic_name": "Tacrolimus"
        },
        {
            "atc_level": "L04AD02",
            "brand_name": "Prograf",
            "generic_name": "Tacrolimus"
        },
        {
            "atc_level": "L04AD02",
            "brand_name": "Tacrograf",
            "generic_name": "Tacrolimus"
        },
        {
            "atc_level": "L01EC03",
            "brand_name": "Braftovi",
            "generic_name": "Encorafenib"
        },
        {
            "atc_level": "J05AR22",
            "brand_name": "Symtuza",
            "generic_name": "Darunavir/Cobicistat/Emtricitabine/Tenofovir alafenamide"
        },
        {
            "atc_level": "N02AX02",
            "brand_name": "Tramedo",
            "generic_name": "Tramadol"
        },
        {
            "atc_level": "N02AX02",
            "brand_name": "Tramal",
            "generic_name": "Tramadol"
        },
        {
            "atc_level": "N02AX02",
            "brand_name": "Zydol",
            "generic_name": "Tramadol"
        },
        {
            "atc_level": "N02AX02",
            "brand_name": "Zydol SR",
            "generic_name": "Tramadol"
        },
        {
            "atc_level": "N02AA05",
            "brand_name": "Endone",
            "generic_name": "Oxycodone"
        },
        {
            "atc_level": "N02AA05",
            "brand_name": "Oxyndone",
            "generic_name": "Oxycodone"
        },
        {
            "atc_level": "N02AA05",
            "brand_name": "OxyNorm",
            "generic_name": "Oxycodone"
        },
        {
            "atc_level": "N02AA05",
            "brand_name": "Novacodone",
            "generic_name": "Oxycodone"
        },
        {
            "atc_level": "N02AA05",
            "brand_name": "OxyContin",
            "generic_name": "Oxycodone"
        },
        {
            "atc_level": "N02AA05",
            "brand_name": "Proladone",
            "generic_name": "Oxycodone"
        },
        {
            "atc_level": "L01ED05",
            "brand_name": "Lorviqua",
            "generic_name": "Lorlatinib "
        },
        {
            "atc_level": "C02KX01",
            "brand_name": "Tracleer",
            "generic_name": "Bosentan"
        },
        {
            "atc_level": "C02KX01",
            "brand_name": "BOSLEER",
            "generic_name": "Bosentan"
        },
        {
            "atc_level": "J04AB02",
            "brand_name": "Rimycin",
            "generic_name": "Rifampicin "
        },
        {
            "atc_level": "N03AB02",
            "brand_name": "Dilantin Infatabs",
            "generic_name": "Phenytoin "
        },
        {
            "atc_level": "N05AD01",
            "brand_name": "Serenace",
            "generic_name": "Haloperidol"
        },
        {
            "atc_level": "N05AD01",
            "brand_name": "Haldol decanoate",
            "generic_name": "Haloperidol"
        },
        {
            "atc_level": "L01EA02",
            "brand_name": "Sprycel",
            "generic_name": "Dasatinib"
        },
        {
            "atc_level": "L01EA03",
            "brand_name": "Tasigna",
            "generic_name": "Nilotinib"
        },
        {
            "atc_level": "H02AB02",
            "brand_name": "Dexmethsone",
            "generic_name": "Dexamethasone "
        },
        {
            "atc_level": "L02BB05",
            "brand_name": "Eryland",
            "generic_name": "Apalutamide"
        },
        {
            "atc_level": "C08DB01",
            "brand_name": "Vasocardol CD",
            "generic_name": "Diltiazem "
        },
        {
            "atc_level": "C08DB01",
            "brand_name": "Cardizem CD",
            "generic_name": "Diltiazem "
        },
        {
            "atc_level": "C01AA05",
            "brand_name": "Lanoxin",
            "generic_name": "Digoxin "
        },
        {
            "atc_level": "C01AA05",
            "brand_name": "Sigmaxin",
            "generic_name": "Digoxin "
        },
        {
            "atc_level": "A03FA03",
            "brand_name": "Motilium",
            "generic_name": "Domperidone"
        },
        {
            "atc_level": "G03AB03",
            "brand_name": "Triquilar ED",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AB03",
            "brand_name": "Trifeme",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AB03",
            "brand_name": "Triphasil",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AB03",
            "brand_name": "Logynon ED",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AA07",
            "brand_name": "Femme-Tab ED",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AA07",
            "brand_name": "Lenest",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AA07",
            "brand_name": "Eleanor",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AA07",
            "brand_name": "Evelyn",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AA07",
            "brand_name": "Levlen ED",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AA07",
            "brand_name": "Micronelle",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "G03AA07",
            "brand_name": "Microgynon",
            "generic_name": "Levonorgestrel/Ethinylestradiol"
        },
        {
            "atc_level": "B01AC24",
            "brand_name": "Brilinta",
            "generic_name": "Ticagrelor"
        },
        {
            "atc_level": "N06AB03",
            "brand_name": "Zactin",
            "generic_name": "Fluoxetine"
        },
        {
            "atc_level": "N06AB03",
            "brand_name": "Lovan",
            "generic_name": "Fluoxetine"
        },
        {
            "atc_level": "N06AB03",
            "brand_name": "Prozac",
            "generic_name": "Fluoxetine"
        },
        {
            "atc_level": "N06AB03",
            "brand_name": "FLUOTEX",
            "generic_name": "Fluoxetine"
        },
        {
            "atc_level": "N06AB03",
            "brand_name": "Lovan",
            "generic_name": "Fluoxetine"
        },
        {
            "atc_level": "C08CA05",
            "brand_name": "Adefin",
            "generic_name": "Nifedipine"
        },
        {
            "atc_level": "C08CA05",
            "brand_name": "Addos XR",
            "generic_name": "Nifedipine"
        },
        {
            "atc_level": "N03AF01",
            "brand_name": "Tegretol",
            "generic_name": "Carbamazepine"
        },
        {
            "atc_level": "N03AA02",
            "brand_name": "Phenobarb",
            "generic_name": "Phenobarbital"
        },
        {
            "atc_level": "M01AC01",
            "brand_name": "Mobilis D-",
            "generic_name": "Piroxicam"
        },
        {
            "atc_level": "M01AC01",
            "brand_name": "Feldene-D",
            "generic_name": "Piroxicam"
        },
        {
            "atc_level": "H02AB06",
            "brand_name": "Panafcortelone",
            "generic_name": "Prednisolone"
        },
        {
            "atc_level": "H02AB06",
            "brand_name": "Solone",
            "generic_name": "Prednisolone"
        },
        {
            "atc_level": "H02AB06",
            "brand_name": "Redipred",
            "generic_name": "Prednisolone"
        },
        {
            "atc_level": "H02AB06",
            "brand_name": "PredMix",
            "generic_name": "Prednisolone"
        },
        {
            "atc_level": "H02AB07",
            "brand_name": "Sone",
            "generic_name": "Prednisone"
        },
        {
            "atc_level": "N03AA03",
            "brand_name": "Mysoline",
            "generic_name": "Primidone"
        },
        {
            "atc_level": "C10AA01",
            "brand_name": "Zimstat",
            "generic_name": "Simvastatin"
        },
        {
            "atc_level": "C10AA01",
            "brand_name": "Simvar",
            "generic_name": "Simvastatin"
        },
        {
            "atc_level": "C10AA01",
            "brand_name": "Lipex",
            "generic_name": "Simvastatin"
        },
        {
            "atc_level": "C10AA01",
            "brand_name": "Zocor",
            "generic_name": "Simvastatin"
        },
        {
            "atc_level": "B01AA03",
            "brand_name": "Coumadin",
            "generic_name": "Warfarin "
        },
        {
            "atc_level": "B01AA03",
            "brand_name": "Marevan",
            "generic_name": "Warfarin "
        },
        {
            "atc_level": "N06AB06",
            "brand_name": "Eleva",
            "generic_name": "Sertraline"
        },
        {
            "atc_level": "N06AB06",
            "brand_name": "Setrona",
            "generic_name": "Sertraline"
        },
        {
            "atc_level": "N06AB06",
            "brand_name": "Sertra",
            "generic_name": "Sertraline"
        },
        {
            "atc_level": "N06AB06",
            "brand_name": "Zoloft",
            "generic_name": "Sertraline"
        },
        {
            "atc_level": "N06AB05",
            "brand_name": "Paxtine",
            "generic_name": "Paroxetine"
        },
        {
            "atc_level": "N06AB05",
            "brand_name": "Aropax",
            "generic_name": "Paroxetine"
        },
        {
            "atc_level": "N06AB05",
            "brand_name": "Extine",
            "generic_name": "Paroxetine"
        },
        {
            "atc_level": "C01BD01",
            "brand_name": "Aratac",
            "generic_name": "Amiodarone"
        },
        {
            "atc_level": "C01BD01",
            "brand_name": "Rithmik",
            "generic_name": "Amiodarone"
        },
        {
            "atc_level": "C01BD01",
            "brand_name": "Cordarone X",
            "generic_name": "Amiodarone"
        },
        {
            "atc_level": "C01BD01",
            "brand_name": "Amdarone",
            "generic_name": "Amiodarone"
        },
        {
            "atc_level": "C08CA02",
            "brand_name": "Fendex ER",
            "generic_name": "Felodipine"
        },
        {
            "atc_level": "C08CA02",
            "brand_name": "Plendil ER",
            "generic_name": "Felodipine"
        },
        {
            "atc_level": "C08CA02",
            "brand_name": "Felodur ER",
            "generic_name": "Felodipine"
        },
        {
            "atc_level": "C08CA02",
            "brand_name": "Felodil XR",
            "generic_name": "Felodipine"
        },
        {
            "atc_level": "N06AA09",
            "brand_name": "Endep",
            "generic_name": "Amitriptyline"
        },
        {
            "atc_level": "N06AA09",
            "brand_name": "ENTRIP",
            "generic_name": "Amitriptyline"
        },
        {
            "atc_level": "N06AA02",
            "brand_name": "Tofranil",
            "generic_name": "Imipramine"
        },
        {
            "atc_level": "N06AA10",
            "brand_name": "NortriTABS",
            "generic_name": "Nortriptyline"
        },
        {
            "atc_level": "N06AA10",
            "brand_name": "Allegron",
            "generic_name": "Nortriptyline"
        },
        {
            "atc_level": "C10AA07",
            "brand_name": "Cavstat",
            "generic_name": "Rosuvastatin "
        },
        {
            "atc_level": "C10AA07",
            "brand_name": "Crestor",
            "generic_name": "Rosuvastatin "
        },
        {
            "atc_level": "C10AA07",
            "brand_name": "Crosuva",
            "generic_name": "Rosuvastatin "
        },
        {
            "atc_level": "H02AB01",
            "brand_name": "Celestone Chronodose",
            "generic_name": "Bethametasone (systemic)"
        },
        {
            "atc_level": "C08CA01",
            "brand_name": "Nordip",
            "generic_name": "Amlodipine"
        },
        {
            "atc_level": "C08CA01",
            "brand_name": "Norvasc",
            "generic_name": "Amlodipine"
        },
        {
            "atc_level": "C08CA01",
            "brand_name": "Norvapine",
            "generic_name": "Amlodipine"
        },
        {
            "atc_level": "C08CA01",
            "brand_name": "Amlo",
            "generic_name": "Amlodipine"
        },
        {
            "atc_level": "B01AE07",
            "brand_name": "Pradaxa",
            "generic_name": "Dabigatran"
        },
        {
            "atc_level": "G03AA05",
            "brand_name": "Norimin",
            "generic_name": "Norethisterone/Ethinylestradiol"
        },
        {
            "atc_level": "G03AA05",
            "brand_name": "Brevinor-",
            "generic_name": "Norethisterone/Ethinylestradiol"
        },
        {
            "atc_level": "G03AA05",
            "brand_name": "Norinyl-",
            "generic_name": "Norethisterone/Ethinylestradiol"
        },
        {
            "atc_level": "N03AX09",
            "brand_name": "Logem",
            "generic_name": "Lamotrigine "
        },
        {
            "atc_level": "N03AX09",
            "brand_name": "Lamictal",
            "generic_name": "Lamotrigine "
        },
        {
            "atc_level": "N03AX09",
            "brand_name": "LAMITAN",
            "generic_name": "Lamotrigine "
        },
        {
            "atc_level": "N03AX09",
            "brand_name": "Reedos",
            "generic_name": "Lamotrigine "
        },
        {
            "atc_level": "C01BB01",
            "brand_name": "Xylocard",
            "generic_name": "Lidocaine (systemic)"
        },
        {
            "atc_level": "C01BA03",
            "brand_name": "Rythmodan",
            "generic_name": "Disopyramide"
        },
        {
            "atc_level": "N05BA01",
            "brand_name": "Antenex",
            "generic_name": "Diazepam"
        },
        {
            "atc_level": "N05BA01",
            "brand_name": "Valpam",
            "generic_name": "Diazepam"
        },
        {
            "atc_level": "N05BA01",
            "brand_name": "Valium",
            "generic_name": "Diazepam"
        },
        {
            "atc_level": "M04AC01",
            "brand_name": "Colgout",
            "generic_name": "Colchicine"
        },
        {
            "atc_level": "M04AC01",
            "brand_name": "Colcine",
            "generic_name": "Colchicine"
        },
        {
            "atc_level": "M04AC01",
            "brand_name": "Lengout",
            "generic_name": "Colchicine"
        },
        {
            "atc_level": "G04CA01",
            "brand_name": "Xatral SR",
            "generic_name": "Alfuzosin"
        },
        {
            "atc_level": "G04BE09",
            "brand_name": "Levitra",
            "generic_name": "Vardenafil"
        },
        {
            "atc_level": "R06AX13",
            "brand_name": "Allereze",
            "generic_name": "Loratadine"
        },
        {
            "atc_level": "R06AX13",
            "brand_name": "Claratyne",
            "generic_name": "Loratadine"
        },
        {
            "atc_level": "R06AX13",
            "brand_name": "Lorano",
            "generic_name": "Loratadine"
        },
        {
            "atc_level": "G04BE03",
            "brand_name": "Vedafil",
            "generic_name": "Sildenafil"
        },
        {
            "atc_level": "G04BE03",
            "brand_name": "Vasafil",
            "generic_name": "Sildenafil"
        },
        {
            "atc_level": "G04BE03",
            "brand_name": "Viagra",
            "generic_name": "Sildenafil"
        },
        {
            "atc_level": "G04BE08",
            "brand_name": "Cialis",
            "generic_name": "Tadalafil"
        },
        {
            "atc_level": "G04BE08",
            "brand_name": "Cidala",
            "generic_name": "Tadalafil"
        },
        {
            "atc_level": "G04BE08",
            "brand_name": "Tadalaccord",
            "generic_name": "Tadalafil"
        },
        {
            "atc_level": "C09DX01",
            "brand_name": "Valsartan/Amlodipine/HCT Novartis",
            "generic_name": "Amlodipine/Valsartan/Hydrochlorothiazide"
        },
        {
            "atc_level": "C09DX01",
            "brand_name": "Exforge HCT",
            "generic_name": "Amlodipine/Valsartan/Hydrochlorothiazide"
        },
        {
            "atc_level": "N05AH04",
            "brand_name": "Seroquel XR",
            "generic_name": "Quetiapine "
        },
        {
            "atc_level": "N05AH04",
            "brand_name": "Quetia XR",
            "generic_name": "Quetiapine "
        },
        {
            "atc_level": "N05AH04",
            "brand_name": "Tevatiapine XR",
            "generic_name": "Quetiapine "
        },
        {
            "atc_level": "N05AH04",
            "brand_name": "Syquet",
            "generic_name": "Quetiapine "
        },
        {
            "atc_level": "N05AH04",
            "brand_name": "Kaptan",
            "generic_name": "Quetiapine "
        },
        {
            "atc_level": "L04AD01",
            "brand_name": "Sandimmun",
            "generic_name": "Ciclosporin"
        },
        {
            "atc_level": "L04AD01",
            "brand_name": "Neoral",
            "generic_name": "Ciclosporin"
        },
        {
            "atc_level": "L04AD01",
            "brand_name": "Cyclosporin Sandoz",
            "generic_name": "Ciclosporin"
        },
        {
            "atc_level": "L04AA18",
            "brand_name": "Everocan",
            "generic_name": "Everolimus"
        },
        {
            "atc_level": "L04AA18",
            "brand_name": "Certican",
            "generic_name": "Everolimus"
        },
        {
            "atc_level": "N07BC02",
            "brand_name": "Biodone Forte",
            "generic_name": "Methadone"
        },
        {
            "atc_level": "J04AB04",
            "brand_name": "Mycobutin",
            "generic_name": "Rifabutin "
        },
        {
            "atc_level": "L04AA10",
            "brand_name": "Rapamune",
            "generic_name": "Sirolimus"
        },
        {
            "atc_level": "R03AC12",
            "brand_name": "Serevent Accuhaler",
            "generic_name": "Salmeterol "
        },
        {
            "atc_level": "C10AA05",
            "brand_name": "Lorstat",
            "generic_name": "Atorvastatin "
        },
        {
            "atc_level": "C10AA05",
            "brand_name": "Lipitor",
            "generic_name": "Atorvastatin "
        },
        {
            "atc_level": "C10AA05",
            "brand_name": "ATOMED",
            "generic_name": "Atorvastatin "
        },
        {
            "atc_level": "C10AA05",
            "brand_name": "Trovas",
            "generic_name": "Atorvastatin "
        },
        {
            "atc_level": "C10AA05",
            "brand_name": "Atorvachol",
            "generic_name": "Atorvastatin "
        },
        {
            "atc_level": "C10AA05",
            "brand_name": "Torvastat",
            "generic_name": "Atorvastatin "
        },
        {
            "atc_level": "P01AX06",
            "brand_name": "Wellvone",
            "generic_name": "Atovaquone"
        },
        {
            "atc_level": "J01FA09",
            "brand_name": "Kalixocin",
            "generic_name": "Clarithromycin "
        },
        {
            "atc_level": "J01FA09",
            "brand_name": "Klacid",
            "generic_name": "Clarithromycin "
        },
        {
            "atc_level": "J01FA09",
            "brand_name": "Clarithro",
            "generic_name": "Clarithromycin "
        },
        {
            "atc_level": "R03AK06",
            "brand_name": "PAVTIDE ACCUHALER",
            "generic_name": "Fluticasone/Salmeterol"
        },
        {
            "atc_level": "R03AK06",
            "brand_name": "Seretide Accuhaler",
            "generic_name": "Fluticasone/Salmeterol"
        },
        {
            "atc_level": "R03AK06",
            "brand_name": "Evocair MDI",
            "generic_name": "Fluticasone/Salmeterol"
        },
        {
            "atc_level": "R03AK06",
            "brand_name": "SalplusF Inhaler",
            "generic_name": "Fluticasone/Salmeterol"
        },
        {
            "atc_level": "R03AK06",
            "brand_name": "Seroflo",
            "generic_name": "Fluticasone/Salmeterol"
        },
        {
            "atc_level": "C03DA04",
            "brand_name": "Inpler",
            "generic_name": "Eplerenone"
        },
        {
            "atc_level": "C03DA04",
            "brand_name": "ESPLER",
            "generic_name": "Eplerenone"
        },
        {
            "atc_level": "C03DA04",
            "brand_name": "Inspra",
            "generic_name": "Eplerenone"
        },
        {
            "atc_level": "C10BA02",
            "brand_name": "Zeklen",
            "generic_name": "Simvastatin/Ezetimibe"
        },
        {
            "atc_level": "C10BA02",
            "brand_name": "Vytorin",
            "generic_name": "Simvastatin/Ezetimibe"
        },
        {
            "atc_level": "C10BA02",
            "brand_name": "EzSimva GH",
            "generic_name": "Simvastatin/Ezetimibe"
        },
        {
            "atc_level": "C10BA02",
            "brand_name": "EZEVYT",
            "generic_name": "Simvastatin/Ezetimibe"
        },
        {
            "atc_level": "C10BA02",
            "brand_name": "EZETORIN",
            "generic_name": "Simvastatin/Ezetimibe"
        },
        {
            "atc_level": "C10BA02",
            "brand_name": "EZESIM",
            "generic_name": "Simvastatin/Ezetimibe"
        },
        {
            "atc_level": "C10BA02",
            "brand_name": "APO-Ezetimibe/Simvastatin",
            "generic_name": "Simvastatin/Ezetimibe"
        },
        {
            "atc_level": "C09DB04",
            "brand_name": "Twynsta",
            "generic_name": "Telmisartan/Amlodipine"
        },
        {
            "atc_level": "C09DB04",
            "brand_name": "Pritor/Amlodipine",
            "generic_name": "Telmisartan/Amlodipine"
        },
        {
            "atc_level": "C10BX03",
            "brand_name": "Cadivast",
            "generic_name": "Amlodipine/Atorvastatin"
        },
        {
            "atc_level": "C10BX03",
            "brand_name": "Caduet",
            "generic_name": "Amlodipine/Atorvastatin"
        },
        {
            "atc_level": "C09BB04",
            "brand_name": "Reaptan",
            "generic_name": "Perindopril/Amlodipine"
        },
        {
            "atc_level": "C09BB04",
            "brand_name": "Coveram",
            "generic_name": "Perindopril/Amlodipine"
        }
    ];


    /*array = JSON.parse(jsonData);*/
    var result = array.filter((x) => x.brand_name.toLowerCase().indexOf(input.value.toLowerCase()) > -1);

    if (result.length == 0) {
        for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
        }
    }

    for (j = 0; j < result.length; j++) {
        
        for (i = 0; i < a.length; i++) {

            txtValue = a[i].textContent || a[i].innerText;
            
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
                
            }
            else if (txtValue.toLowerCase() == result[j].generic_name.toLowerCase()) {
                a[i].style.display = "";
            }
            else {
                a[i].style.display = "none";
            }

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

//Fucntion to sort card according to priority
function sortCards() {
    /*jQuery($(itemlist).children().eq(selected - 1)).before(jQuery($(itemlist).children().eq(selected)));*/

}


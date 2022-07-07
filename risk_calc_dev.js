//Variable to store previous generic name
var prevAddedItem = "";

var selectedMedClass = new Map();

var medClassColorMap = [];

var selectedMedList = new Array();

var colorCodes = new Array();

var totalRisk = {
    "falls_fracture": 0,
    "constipation": 0,
    "urinary_retention": 0,
    "CNS_depression": 0,
    "bleeding": 0,
    "heart_failure": 0,
    "bradycardia": 0,
    "hypoglycaemia": 0,
    "renal_injury": 0,
    "hypokalemia": 0,
    "hyperkalemia": 0,
    "serotonin_syndrome": 0,
    "angle_closure_glaucoma": 0
}

var colorMap = [
    {
        "medicines_class": "Anticoag_antiplt",
        "falls_fractures": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 1,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#970b13"
    },
    {
        "medicines_class": "NSAIDs",
        "falls_fractures": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 1,
        "heart_failure": 1,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#bb151a"
    },
    {
        "medicines_class": "SelectiveAlphaBlockers",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#feba4a"
    },
    {
        "medicines_class": "UrinaryAntispasm",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 1,
        "color_hexcode": "#fb992c"
    },
    {
        "medicines_class": "Antimicrobials (renal)",
        "falls_fractures": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#d08ac2"
    },
    {
        "medicines_class": "H2Blockers",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#73c378"
    },
    {
        "medicines_class": "Laxatives",
        "falls_fractures": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#97d494"
    },
    {
        "medicines_class": "Loperamide",
        "falls_fractures": 0,
        "constipation": 0,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#4daf62"
    },
    {
        "medicines_class": "Strong GI anticholinergics",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 1,
        "color_hexcode": "#036429"
    },
    {
        "medicines_class": "Metoclopramide",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#157f3b"
    },
    {
        "medicines_class": "PPI",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#2f984f"
    },
    {
        "medicines_class": "ACE_ARB",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 1,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#fee8d3"
    },
    {
        "medicines_class": "Amiodarone",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#7f2704"
    },
    {
        "medicines_class": "Betablockers",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#fdc28c"
    },
    {
        "medicines_class": "CCB_dihydropyridine",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#fda762"
    },
    {
        "medicines_class": "CCB_dv",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#fb8d3d"
    },
    {
        "medicines_class": "Digoxin",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#f2701d"
    },
    {
        "medicines_class": "Loop",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#9f3303"
    },
    {
        "medicines_class": "Thiazide",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#c44103"
    },
    {
        "medicines_class": "Nitrates_nicorandil",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#fdd8b3"
    },
    {
        "medicines_class": "Spironolactone",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 1,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#e25609"
    },
    {
        "medicines_class": "Steroid",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 1,
        "heart_failure": 1,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 1,
        "color_hexcode": "#ef4533"
    },
    {
        "medicines_class": "Theophylline",
        "falls_fractures": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#f9694c"
    },
    {
        "medicines_class": "Benzodiazepines",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#61409b"
    },
    {
        "medicines_class": "Opioid",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 1,
        "glaucoma": 0,
        "color_hexcode": "#8782bc"
    },
    {
        "medicines_class": "Sedating antihistamines (AMH)",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 1,
        "color_hexcode": "#f1eff6"
    },
    {
        "medicines_class": "Anticholinergics antipsychotics",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#cecee5"
    },
    {
        "medicines_class": "Antiepileptic (excl gabapentinoid)",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#9e9bc9"
    },
    {
        "medicines_class": "H1Blockers",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#e2e1ef"
    },
    {
        "medicines_class": "Gabapentinoid",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#b6b5d8"
    },
    {
        "medicines_class": "SSRI_SNRI",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 1,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 1,
        "glaucoma": 0,
        "color_hexcode": "#7363ac"
    },
    {
        "medicines_class": "TCA",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 1,
        "glaucoma": 1,
        "color_hexcode": "#501f8c"
    },
    {
        "medicines_class": "MAO inhibitors",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 1,
        "glaucoma": 1,
        "color_hexcode": "#3f007d"
    },
    {
        "medicines_class": "Sulfonylurea_gliptins",
        "falls_fractures": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#e33890"
    },
    {
        "medicines_class": "Pioglitazone",
        "falls_fractures": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "glaucoma": 0,
        "color_hexcode": "#d71c6c"
    }
]


$(document).ready(function () {

    //Get Empty Graph
     createCSV("", "EMPTY");

    ////Read JSON and intialize medClassColorMap.
    //$.getJSON("risk_calc_medClassMap_dev.json", function (data) {
    //    $.each(data, function (i, row) { medClassColorMap.push(row) })
    //});

    //console.log(medClassColorMap);
 

    //Read JSON and add the med generic values into dropdown.
    $.getJSON("risk_calc_data.json", function (data) {

        $.each(data, function (index, item) {
           
            //For remove duplication on the generic names
            if (item.itm_gen_nme != prevAddedItem) {

                if (item.Combination != 1) {
                    $med = $('<a>').attr('id', "a" + item.prmy_atc_cde).text(item.itm_gen_nme).addClass('wordbr').appendTo('#searchList');
                    $med.on('click', function (event) {

                        var colorCode = "";

                        $.each(colorMap, function (ind, itm) {
                           
                            if (itm.medicines_class == item.Medicines_class) {
                                colorCode = itm.color_hexcode;
                            }
                         });
                        addMed(item, colorCode);
                       
                    });
                }
                prevAddedItem = item.itm_gen_nme;
            }
        });
        
    });
    
});


//Function to when the user clicks on the button,toggle between hiding and showing the dropdown content
function toggleSearchList() {
    document.getElementById("searchList").classList.toggle("show");

}

//Functon to filter the search dropdown according to input text
function filterFunction() {

    if (!$('#searchList').hasClass("show")) {
        toggleSearchList();
    }

    var input, filter, ul, li, a, i;

    input = document.getElementById("searchTxt");
    filter = input.value.toUpperCase();
    div = document.getElementById("searchList");
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


function addMed(med,colorCode) {

    var medAddedStatus = false;
    if (selectedMedList == null) {
        selectedMedList.push(med.itm_gen_nme);
        medAddedStatus = true;
    }
    else {
        $.each(selectedMedList, function (i, value) {
            if (value == med.itm_gen_nme) {
                medAddedStatus = true;
            }
        })
        if (medAddedStatus == false)
            selectedMedList.push(med.itm_gen_nme);
    }


    //There is no any med class on the page
    if ($('#medGroup').has('.accordion-item').length == 0) {
        selectedMedClass.set(med.Medicines_class,med);
        createAccordionItem(med.Medicines_class, colorCode);
        if (medAddedStatus == false) {

            createAcordionContent(med.Medicines_class, med.itm_gen_nme, med.prmy_atc_cde, colorCode);
            //Calculate Total risk for first med group
            calculateTotalRisk(med.Medicines_class);

            //Generate dynamic graph
            createCSV(med, "ADD");

        }

    } else {

        var elementAddedStatus = false;
        //Get all the accordion-item Ids into const liIDs variable.
        const accordionIDs = $.map($('#medGroup > .accordion-item'), acordionItem => acordionItem.id);
        //console.log(accordionIDs)
        $(accordionIDs).each(function (index, id) {
            if (id == med.Medicines_class + 'accordion') {
                elementAddedStatus = true;
            }
        });
        if (elementAddedStatus != true) {
            selectedMedClass.set(med.Medicines_class, med);
            createAccordionItem(med.Medicines_class, colorCode);
            //Calculate Total risk for created med group
            calculateTotalRisk(med.Medicines_class);

            //Generate dynamic graph
            createCSV(med, "ADD");

            if (medAddedStatus != true)
                createAcordionContent(med.Medicines_class, med.itm_gen_nme, med.prmy_atc_cde, colorCode);
        }
        else {
            if (medAddedStatus != true)
                createAcordionContent(med.Medicines_class, med.itm_gen_nme, med.prmy_atc_cde, colorCode);
        }
    }

}




//CSV Header and pre-defined first cell value
var header = ["Risk"];


//CSV Rows and pre-defined first cell value
var fallsRisk = ["Falls Fracture"];
var constRisk = ["Constipation"];
var uretentRisk = ["Urinary Retention"];
var cnsdeprRisk = ["CNS Depression"];
var bleedRisk = ["Bleeding"];
var heartRisk = ["Heart Failure"];
var bradyRisk = ["Bradycardia"];
var hypoglycRisk = ["Hypoglycaemia"];
var renalRisk = ["Renal Injury"];
var hypoKRisk = ["Hypokalemia"];
var hyperKRisk = ["Hyperkalemia"];
var serosynRisk = ["Serotonin Syndrome"];
var acglaucRisk = ["Glaucoma"];



function createCSV(med, process) {


    var tempCSV = [];

    if (process == "EMPTY") {
        header = ["Risk"];
        
    }
    else if (process == "REMOVE") {
        /*header = $.merge(header, med.Medicines_class);*/
    }
    else if (process == "ADD") {
        header.push(med.Medicines_class);
    }

    if (med != "") {

        fallsRisk.push(med.falls_fractures);
        constRisk.push(med.constipation);
        uretentRisk.push(med.urinary_retention);
        cnsdeprRisk.push(med.CNS_depression);
        bleedRisk.push(med.bleeding);
        heartRisk.push(med.heart_failure);
        bradyRisk.push(med.bradycardia);
        hypoglycRisk.push(med.hypoglycaemia);
        renalRisk.push(med.renal_injury);
        hypoKRisk.push(med.hypokalemia);
        hyperKRisk.push(med.hyperkalemia);
        serosynRisk.push(med.serotonin_syndrome);
        acglaucRisk.push(med.glaucoma);
    }
 

    tempCSV.push(header, fallsRisk, constRisk, uretentRisk, cnsdeprRisk, bleedRisk,
        heartRisk, hypoglycRisk, renalRisk, hypoKRisk, hyperKRisk, serosynRisk, acglaucRisk);

    //console.log(tempCSV);

    //create a csv file
    let csvContent = "data:text/csv;charset=utf-8,"
        + tempCSV.map(e => e.join(",")).join("\n");

    d3.csv(csvContent).then(d => initialization(d));



}
function calculateTotalRisk(med) {

    //$.each(riskMap, function (i, value) {

    //    if (i == identifiedMedGroup) {

    //        $.each(value, function (i, value) {
    //            if (value == 1) {
    //                totalRisk[i] = totalRisk[i] + 1;
    //            }

    //        })
    //        //console.log(totalRisk);

    //    }
    //})

}
function createAccordionItem(medGroup,colorCode) {

    //Push that colorCode to Array
    colorCodes.push(colorCode);
    //console.log(colorCodes);
    
    $accordion = $('<div>')
        .attr('id', medGroup.replace(/[-_)(]/g, '') + 'accordion')
        .addClass('accordion-item')
        .appendTo($('#medGroup'));

    $accordionHeader = $('<h2>')
        .attr('title', 'Click to view medicines group details')
        .attr('id', medGroup.replace(/[-_)(]/g, '') + 'header')
        .addClass('accordion-header')
        .append(
            $('<button>')
                .attr('type', 'button')
                .attr('data-bs-toggle', 'collapse')
                .attr('data-bs-target', '#' + medGroup.replace(/[-_)(]/g, '') + 'div')
                .attr('aria-expanded', 'true')
                .attr('aria-controls', medGroup.replace(/[-_)(]/g, '') + 'div')
                .addClass('accordion-button')
                .append(
                    $('<span>').addClass('medGroupColor').attr('style', "background-color:" + colorCode),
                    $('<span>').text(medGroup + ' Class')
                )
        )
        .appendTo($accordion);

    $accordionBodyHeader = $('<div>')
        .attr('id', medGroup.replace(/[-_)(]/g, '') + 'div')
        .addClass('accordion-collapse collapse show')
        .attr('aria-labelledby', medGroup.replace(/[-_)(]/g, '') + 'aria')
        .attr('data-bs-parent', '#medGroup')
        .appendTo($accordion);

   
    $accordionContent = $('<ul>')
        .attr('id', medGroup.replace(/[-_)(]/g, '') + 'ul')
        .addClass('list-group')
        .appendTo($accordionBodyHeader);
}
function createAcordionContent(medGroup, atcDescr, atcLevel, colorCode) {

    $('<li>')
        .attr('id', medGroup.replace(/[-_)(]/g, '') + atcLevel + 'li')
        .addClass('list-group-item')
        .addClass('acordionContent')
        .text(atcDescr +" "+ '[' + atcLevel + ']')
        .append(
            $('<span>')
                .attr('id', medGroup.replace(/[-_)(]/g, '') + atcLevel + 'span')
                .addClass('close')
                .on('click', function (event) {

                    const index = selectedMedList.indexOf(atcDescr);
                    if (index > -1) {
                        selectedMedList.splice(index, 1);
                    }
                    //console.log(selectedMedList);

                    $('#' + medGroup.replace(/[-_)(]/g, '') + atcLevel + 'li').remove();
                    const liIDs = $.map($('#' + medGroup.replace(/[-_)(]/g, '') + 'ul' + '> li'), li => li.id);
                    if (liIDs.length == 0) {

                        //Remove Med Classes
                        const ind = colorCodes.indexOf(colorCode);
                        if (ind > -1) {
                            colorCodes.splice(ind, 1);
                        }
                        //console.log(colorCodes);

                        //const index = selectedMedGroupList.indexOf(medGroup);
                        //if (index > -1) {
                        //    selectedMedGroupList.splice(index, 1);
                        //    //create graph again with deleted list.
                        //    createCSV(selectedMedGroupList, "REMOVE");
                        //}
                        $('#' + medGroup.replace(/[-_)(]/g, '') + 'accordion').remove();



                    }

                })
        )
        .appendTo($('#' + medGroup.replace(/[-_)(]/g, '') + 'ul'));
}

//***********************************************************Graph******************************************************************



//d3.csv("test.csv").then(d => initialization(d));

function initialization(data) {

    keys = data.columns.slice(1)

    data.forEach(function (d) {
        d.total = d3.sum(keys, k => +d[k])
        return d
    })

    riskmedGroups = keys.flatMap(medGroup => data.map(d => ({ risk: d.Risk, medGroup, status: d[medGroup] }))) // pivot

    /*$('#legend').empty();*/
    $('#chart').empty();

    //Horizontal Stacked Bar Chart
        chart = StackedBarChartHorizontal(riskmedGroups, {
            x: d => d.status,
            y: d => d.risk,
            z: d => d.medGroup,
            xLabel: "Med Class Risk Count →",
            xDomain: [0, getRange(d3.max(data, d => d.total))]
                               /* xDomain: [0, d3.max(data, d => d.total) + 2]*/,
            yDomain: data.map(d => d.Risk), //d3.groupSort(stateages, D => d3.sum(D, d => d.population), d => d.state), // sort y by x
            zDomain: keys,
            colors: colorCodes
        })

        
        /*key = Legend(chart.scales.color, { title: "Med Groups" })*/
        //$('#legend').append(key);
        
        $('#chart').append(chart);



    //if ($('#chartType').is(':checked')) {

    //    //Vertical Stacked Bar Chart
    //    chart = StackedBarChartVertical(riskmedGroups, {
    //        x: d => d.risk,
    //        y: d => d.status,
    //        z: d => d.medGroup,
    //        xDomain: data.map(d => d.Risk),
    //        yDomain: [0, getRange(d3.max(data, d => d.total))],
    //        /* yDomain: [0, d3.max(data, d => d.total) + 2]*/
    //        yLabel: "↑ Med Class Risk Count",
    //        zDomain: keys,
    //        colors: d3.schemeSpectral[keys.length],
    //        width: 900,
    //        height: 500
    //    })

    //    key = Legend(chart.scales.color, { title: "Med Groups" })
    //    $('#legend').append(key);
    //    $('#chart').append(chart);

    //}
    //else {
    //    //Horizontal Stacked Bar Chart
    //    chart = StackedBarChartHorizontal(riskmedGroups, {
    //        x: d => d.status,
    //        y: d => d.risk,
    //        z: d => d.medGroup,
    //        xLabel: "Med Class Risk Count →",
    //        xDomain: [0, getRange(d3.max(data, d => d.total))]
    //                           /* xDomain: [0, d3.max(data, d => d.total) + 2]*/,
    //        yDomain: data.map(d => d.Risk), //d3.groupSort(stateages, D => d3.sum(D, d => d.population), d => d.state), // sort y by x
    //        zDomain: keys,
    //        colors: d3.schemeSpectral[keys.length],
    //        width: 900
    //    })
    //    key = Legend(chart.scales.color, { title: "Med Groups" })
    //    $('#legend').append(key);
    //    $('#chart').append(chart);
    //}

    ////Toggle Vertical
    //$('#chartType').on('click', function (e) {

    //    if ($('#chartType').is(':checked')) {
    //        $('#legend').empty();
    //        $('#chart').empty();

    //        //Vertical Stacked Bar Chart
    //        chart = StackedBarChartVertical(riskmedGroups, {
    //            x: d => d.risk,
    //            y: d => d.status,
    //            z: d => d.medGroup,
    //            xDomain: data.map(d => d.Risk),
    //            yDomain: [0, getRange(d3.max(data, d => d.total))],
    //            /* yDomain: [0, d3.max(data, d => d.total) + 2]*/
    //            yLabel: "↑ Med Class Risk Count",
    //            zDomain: keys,
    //            colors: d3.schemeSpectral[keys.length],
    //            width: 900,
    //            height: 500
    //        })

    //        key = Legend(chart.scales.color, { title: "Med Groups" })
    //        $('#legend').append(key);
    //        $('#chart').append(chart);
    //    }
    //    else {
    //        $('#legendFieledSet').empty();
    //        $('#chart').empty();
    //        //Horizontal Stacked Bar Chart
    //        chart = StackedBarChartHorizontal(riskmedGroups, {
    //            x: d => d.status,
    //            y: d => d.risk,
    //            z: d => d.medGroup,
    //            xLabel: "Med Class Risk Count →",
    //            xDomain: [0, getRange(d3.max(data, d => d.total))]
    //                           /* xDomain: [0, d3.max(data, d => d.total) + 2]*/,
    //            yDomain: data.map(d => d.Risk), //d3.groupSort(stateages, D => d3.sum(D, d => d.population), d => d.state), // sort y by x
    //            zDomain: keys,
    //            colors: d3.schemeSpectral[keys.length],
    //            width:900
    //        })
    //        key = Legend(chart.scales.color, { title: "Med Groups" })
    //        $('#legend').append(key);
    //        $('#chart').append(chart);
    //    }

    //});
}


function getRange(total) {
    if (total < 10)
        return 10
    else
        return total + 2
}

//Vertical Stacked Bar Chart
// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/stacked-bar-chart
function StackedBarChartVertical(data, {
    x = (d, i) => i, // given d in data, returns the (ordinal) x-value
    y = d => d, // given d in data, returns the (quantitative) y-value
    z = () => 1, // given d in data, returns the (categorical) z-value
    title, // given d in data, returns the title text
    marginTop = 30, // top margin, in pixels
    marginRight = 80, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xDomain, // array of x-values
    xRange = [marginLeft, width - marginRight], // [left, right]
    xPadding = 0.75, // amount of x-range to reserve to separate bars
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    zDomain, // array of z-values
    offset = d3.stackOffsetDiverging, // stack offset method
    order = d3.stackOrderNone, // stack order method
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    colors = d3.schemePaired, // array of colors
} = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const Z = d3.map(data, z);

    // Compute default x- and z-domains, and unique them.
    if (xDomain === undefined) xDomain = X;
    if (zDomain === undefined) zDomain = Z;
    xDomain = new d3.InternSet(xDomain);
    zDomain = new d3.InternSet(zDomain);

    // Omit any data not present in the x- and z-domains.
    const I = d3.range(X.length).filter(i => xDomain.has(X[i]) && zDomain.has(Z[i]));

    // Compute a nested array of series where each series is [[y1, y2], [y1, y2],
    // [y1, y2], …] representing the y-extent of each stacked rect. In addition,
    // each tuple has an i (index) property so that we can refer back to the
    // original data point (data[i]). This code assumes that there is only one
    // data point for a given unique x- and z-value.
    const series = d3.stack()
        .keys(zDomain)
        .value(([x, I], z) => Y[I.get(z)])
        .order(order)
        .offset(offset)
        (d3.rollup(I, ([i]) => i, i => X[i], i => Z[i]))
        .map(s => s.map(d => Object.assign(d, { i: d.data[1].get(s.key) })));

    // Compute the default y-domain. Note: diverging stacks can be negative.
    if (yDomain === undefined) yDomain = d3.extent(series.flat(2));

    // Construct scales, axes, and formats.
    const xScale = d3.scaleBand(xDomain, xRange).paddingInner(xPadding);
    const yScale = yType(yDomain, yRange);
    const color = d3.scaleOrdinal(zDomain, colors);
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

    // Compute titles.
    if (title === undefined) {
        const formatValue = yScale.tickFormat(100, yFormat);
        title = i => `${X[i]}\n${Z[i]}\n${formatValue(Y[i])}`;
    } else {
        const O = d3.map(data, d => d);
        const T = title;
        title = i => T(O[i], i, data);
    }

    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "height: auto; height: intrinsic;");

    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(yLabel));

    const bar = svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", ([{ i }]) => color(Z[i]))
        .selectAll("rect")
        .data(d => d)
        .join("rect")
        .attr("x", ({ i }) => xScale(X[i]))
        .attr("y", ([y1, y2]) => Math.min(yScale(y1), yScale(y2)))
        .attr("height", ([y1, y2]) => Math.abs(yScale(y1) - yScale(y2)))
        .attr("width", xScale.bandwidth());


    if (title) bar.append("title")
        .text(({ i }) => title(i))
        .attr('data-bs-toggle', 'tooltip')
        .attr('data-bs-placement', 'right');


    svg.append("g")
        .attr("transform", `translate(0,${yScale(0)})`)
        .call(xAxis);



    return Object.assign(svg.node(), { scales: { color } });
}

//Horizontal Stacked Bar Chart
// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/stacked-horizontal-bar-chart
function StackedBarChartHorizontal(data, {
    x = d => d, // given d in data, returns the (quantitative) x-value
    y = (d, i) => i, // given d in data, returns the (ordinal) y-value
    z = () => 1, // given d in data, returns the (categorical) z-value
    title, // given d in data, returns the title text
    marginTop = 40, // top margin, in pixels
    marginRight = 80, // right margin, in pixels
    marginBottom = 40, // bottom margin, in pixels
    marginLeft = 200, // left margin, in pixels
    width = 600, // outer width, in pixels
    height = 500, // outer height, in pixels
    xType = d3.scaleLinear, // type of x-scale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yDomain, // array of y-values
    yRange, // [bottom, top]
    yPadding = 0.5, // amount of y-range to reserve to separate bars
    zDomain, // array of z-values
    offset = d3.stackOffsetDiverging, // stack offset method
    order = d3.stackOrderNone, // stack order method
    xFormat, // a format specifier string for the x-axis
    xLabel, // a label for the x-axis
    colors = d3.schemePaired, // array of colors
} = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const Z = d3.map(data, z);

    // Compute default y- and z-domains, and unique them.
    if (yDomain === undefined) yDomain = Y;
    if (zDomain === undefined) zDomain = Z;
    yDomain = new d3.InternSet(yDomain);
    zDomain = new d3.InternSet(zDomain);

    // Omit any data not present in the y- and z-domains.
    const I = d3.range(X.length).filter(i => yDomain.has(Y[i]) && zDomain.has(Z[i]));

    // If the height is not specified, derive it from the y-domain.
    if (height === undefined) height = yDomain.size * 25 + marginTop + marginBottom;
    if (yRange === undefined) yRange = [height - marginBottom, marginTop];

    // Compute a nested array of series where each series is [[x1, x2], [x1, x2],
    // [x1, x2], …] representing the x-extent of each stacked rect. In addition,
    // each tuple has an i (index) property so that we can refer back to the
    // original data point (data[i]). This code assumes that there is only one
    // data point for a given unique y- and z-value.
    const series = d3.stack()
        .keys(zDomain)
        .value(([, I], z) => X[I.get(z)])
        .order(order)
        .offset(offset)
        (d3.rollup(I, ([i]) => i, i => Y[i], i => Z[i]))
        .map(s => s.map(d => Object.assign(d, { i: d.data[1].get(s.key) })));

    // Compute the default x-domain. Note: diverging stacks can be negative.
    if (xDomain === undefined) xDomain = d3.extent(series.flat(2));

    // Construct scales, axes, and formats.
    const xScale = xType(xDomain, xRange);
    const yScale = d3.scaleBand(yDomain, yRange).paddingInner(yPadding);
    const color = d3.scaleOrdinal(zDomain, colors);
    const xAxis = d3.axisTop(xScale).ticks(width / 80, xFormat);
    const yAxis = d3.axisLeft(yScale).tickSizeOuter(0);



    // Compute titles.
    if (title === undefined) {
        const formatValue = xScale.tickFormat(100, xFormat);
        title = i => `${Y[i]}\n${Z[i]}\n${formatValue(X[i])}`;
    } else {
        const O = d3.map(data, d => d);
        const T = title;
        title = i => T(O[i], i, data);
    }

    const svg = d3.create("svg")
        .attr('id','horizontalChart')
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [60, 0, width, height])
        .attr("style", "height:auto; height:intrinsic;");

    svg.append("g")
        .attr("style", "font-size:smaller;")
        .attr("transform", `translate(0,${marginTop})`)
        .call(xAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("y2", height - marginTop - marginBottom)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", width - marginRight)
            .attr("y", -22)
            .attr("fill", "currentColor")
            .attr("text-anchor", "end")
            .text(xLabel));

    const bar = svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", ([{ i }]) => color(Z[i]))
        .selectAll("rect")
        .data(d => d)
        .join("rect")
        .attr("x", ([x1, x2]) => Math.min(xScale(x1), xScale(x2)))
        .attr("y", ({ i }) => yScale(Y[i]))
        .attr("width", ([x1, x2]) => Math.abs(xScale(x1) - xScale(x2)))
        .attr("height", yScale.bandwidth());

    if (title) bar.append("title")
        .text(({ i }) => title(i));

    svg.append("g")
        .attr("style","font-size:smaller;")
        .attr("transform", `translate(${xScale(0)},0)`)
        .call(yAxis);

   

    return Object.assign(svg.node(), { scales: { color } });
}

// Copyright 2021, Observable Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/color-legend
function Legend(color, {
    title,
    tickSize = 6,
    width = 200,
    height = 900,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0 + tickSize,
    marginLeft = 0,
    ticks = height / 64,
    tickFormat,
    tickValues
} = {}) {



    function ramp(color, n = 256) {
        const canvas = document.createElement("canvas");
        canvas.width = n;
        canvas.height = 1;
        const context = canvas.getContext("2d");
        for (let i = 0; i < n; ++i) {
            context.fillStyle = color(i / (n - 1));
            context.fillRect(i, 0, 1, 1);
        }
        return canvas;
    }

    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .style("overflow", "visible")
        .style("display", "block");

    let tickAdjust = g => g.selectAll(".tick line").attr("y1", marginTop + marginBottom - height);
    let x;

    // Continuous
    if (color.interpolate) {
        const n = Math.min(color.domain().length, color.range().length);

        x = color.copy().rangeRound(d3.quantize(d3.interpolate(marginLeft, width - marginRight), n));

        svg.append("image")
            .attr("x", marginLeft)
            .attr("y", marginTop)
            .attr("width", width - marginLeft - marginRight)
            .attr("height", height - marginTop - marginBottom)
            .attr("preserveAspectRatio", "none")
            .attr("xlink:href", ramp(color.copy().domain(d3.quantize(d3.interpolate(0, 1), n))).toDataURL());
    }

    // Sequential
    else if (color.interpolator) {
        x = Object.assign(color.copy()
            .interpolator(d3.interpolateRound(marginLeft, width - marginRight)),
            { range() { return [marginLeft, width - marginRight]; } });

        svg.append("image")
            .attr("x", marginLeft)
            .attr("y", marginTop)
            .attr("width", width - marginLeft - marginRight)
            .attr("height", height - marginTop - marginBottom)
            .attr("preserveAspectRatio", "none")
            .attr("xlink:href", ramp(color.interpolator()).toDataURL());

        // scaleSequentialQuantile doesn’t implement ticks or tickFormat.
        if (!x.ticks) {
            if (tickValues === undefined) {
                const n = Math.round(ticks + 1);
                tickValues = d3.range(n).map(i => d3.quantile(color.domain(), i / (n - 1)));
            }
            if (typeof tickFormat !== "function") {
                tickFormat = d3.format(tickFormat === undefined ? ",f" : tickFormat);
            }
        }
    }

    // Threshold
    else if (color.invertExtent) {
        const thresholds
            = color.thresholds ? color.thresholds() // scaleQuantize
                : color.quantiles ? color.quantiles() // scaleQuantile
                    : color.domain(); // scaleThreshold

        const thresholdFormat
            = tickFormat === undefined ? d => d
                : typeof tickFormat === "string" ? d3.format(tickFormat)
                    : tickFormat;

        x = d3.scaleLinear()
            .domain([-1, color.range().length - 1])
            .rangeRound([marginLeft, width - marginRight]);

        svg.append("g")
            .selectAll("rect")
            .data(color.range())
            .join("rect")
            .attr("x", (d, i) => x(i - 1))
            .attr("y", marginTop)
            .attr("width", (d, i) => x(i) - x(i - 1))
            .attr("height", height - marginTop - marginBottom)
            .attr("fill", d => d);

        tickValues = d3.range(thresholds.length);
        tickFormat = i => thresholdFormat(thresholds[i], i);
    }

    // Ordinal
    else {

        // Add one dot in the legend for each name.
        var size = 10;
        svg.selectAll("mydots")
            .data(color.domain())
            .enter()
            .append("rect")
            .attr("x", 10)
            .attr("y", function (d, i) { return 10 + i * (size + 5) }) // 100 is where the first dot appears. 25 is the distance between dots
            .attr("width", size)
            .attr("height", size)
            .style("fill", function (d) { return color(d) })

        // Add one dot in the legend for each name.
        svg.selectAll("mylabels")
            .data(keys)
            .enter()
            .append("text")
            .attr("x", 10 + size * 1.2)
            .attr("y", function (d, i) { return 10 + i * (size + 5) + (size / 2) }) // 100 is where the first dot appears. 25 is the distance between dots
            .style("fill", '#000')
            .text(function (d) { return d })
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")

        tickAdjust = () => { };
    }

    //svg.append("g")
    //    .attr("transform", `translate(0,${height - marginBottom})`)
    //    .call(d3.axisBottom(x)
    //        .ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined)
    //        .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
    //        .tickSize(tickSize)
    //        .tickValues(tickValues))
    //    .call(tickAdjust)
    //    .call(g => g.select(".domain").remove())
    //    .call(g => g.append("text")
    //        .attr("x", marginLeft)
    //        .attr("y", marginTop + marginBottom - height - 6)
    //        .attr("fill", "currentColor")
    //        .attr("text-anchor", "start")
    //        .attr("font-weight", "bold")
    //        .attr("class", "title")
    //        .text(title));

    return svg.node();
}




//***********************************************************End Graph******************************************************************
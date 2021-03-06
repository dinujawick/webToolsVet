//Variable to store previous generic name
var prevAddedItem = "";
var selectedMedClass = new Map();
var medClassColorMap = [];
var selectedMedList = new Array();
var colorCodes = new Array();



$(document).ready(function () {


    //initialize all tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    //Get Empty Graph
    createPivot("");

    //Read JSON and intialize medClassColorMap.
    $.getJSON("risk_calc_medClassMap_dev.json", function (data) {
        $.each(data, function (i, row) { medClassColorMap.push(row) })
    });

    
    //Read JSON and add the med generic values into dropdown.
    $.getJSON("risk_calc_data.json", function (data) {

        $.each(data, function (index, item) {
           
            //For remove duplication on the generic names
            if (item.itm_gen_nme != prevAddedItem) {

                if (item.Combination != 1) {
                    $med = $('<a>').attr('id', "a" + item.prmy_atc_cde).text(item.itm_gen_nme).addClass('wordbr').appendTo('#searchList');
                    $med.on('click', function (event) {

                       
                        var medClass = "";
                       
                        $.each(medClassColorMap, function (ind, itm) {
                           
                            if (itm.medicines_class == item.Medicines_class) {
                                medClass = itm;
                               
                            }
                         });
                        addMed(item, medClass);

                        //initialize all tooltips on the graph
                        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                            return new bootstrap.Tooltip(tooltipTriggerEl)
                        });
                       
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


function addMed(med,medClass) {

    $('#' + "a" + med.prmy_atc_cde).addClass('clicked');

    var medAddedStatus = false;

    if (selectedMedList.length == 0) {
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
        selectedMedClass.set(medClass.medsclass_graphic, medClass);
        createAccordionItem(med.Medicines_class, medClass.color_hexcode, medClass.medsclass_graphic, medClass.medsclass_tooltip);
        
        createAcordionContent(med.Medicines_class, med.itm_gen_nme, med.prmy_atc_cde, medClass.color_hexcode, medClass.medsclass_graphic);
       

        //Generate dynamic graph
        createPivot(selectedMedClass);

    } else {

        var elementAddedStatus = false;
        //Get all the accordion-item Ids into const liIDs variable.
        const accordionIDs = $.map($('#medGroup > .accordion-item'), acordionItem => acordionItem.id);
        //console.log(accordionIDs)
        $(accordionIDs).each(function (index, id) {
            if (id == med.Medicines_class.replace(/[-_ )(]/g, '') + 'accordion') {
                elementAddedStatus = true;
            }
        });
        if (elementAddedStatus != true) {
            selectedMedClass.set(medClass.medsclass_graphic, medClass);
            createAccordionItem(med.Medicines_class, medClass.color_hexcode, medClass.medsclass_graphic, medClass.medsclass_tooltip);
            

            //Generate dynamic graph
            createPivot(selectedMedClass);

            if (medAddedStatus == false)
                createAcordionContent(med.Medicines_class, med.itm_gen_nme, med.prmy_atc_cde, medClass.color_hexcode, medClass.medsclass_graphic);
        }
        else {
            if (medAddedStatus == false)
                createAcordionContent(med.Medicines_class, med.itm_gen_nme, med.prmy_atc_cde, medClass.color_hexcode, medClass.medsclass_graphic);
        }
    }

    

}


function createPivot(medClass) {

    

    //destroy the objects
    delete dataStructure;
    delete fallsRisk;
    delete constRisk;
    delete uretentRisk;
    delete cnsdeprRisk;
    delete bleedRisk;
    delete heartRisk;
    delete bradyRisk;
    delete hypoglycRisk;
    delete renalRisk;
    delete hypoKRisk;
    delete hyperKRisk;
    delete serosynRisk;
    delete acglaucRisk;

    var dataStructure = [];


    //Objects for each risk classes
    var fallsRisk = { Risk: 'Falls and fracture' };
    var constRisk = { Risk: 'Constipation' };
    var uretentRisk = { Risk: 'Urinary retention' };
    var cnsdeprRisk = { Risk: 'CNS depression' };
    var bleedRisk = { Risk: 'Bleeding' };
    var heartRisk = { Risk: 'Heart failure' };
    var bradyRisk = { Risk: 'Bradycardia' };
    var hypoglycRisk = { Risk: 'Hypoglycaemia' };
    var renalRisk = { Risk: 'Renal injury' };
    var hypoKRisk = { Risk: 'Hypokalemia' };
    var hyperKRisk = { Risk: 'Hyperkalemia' };
    var serosynRisk = { Risk: 'Serotonin syndrome' };
    var acglaucRisk = { Risk: 'Glaucoma' };


    //CSV Header and pre-defined first cell value
    var header = ["Risk"];

    for (var [key, value] of medClass) {

        header.push(key);

        fallsRisk[key] = value.falls_fractures;
        constRisk[key] = value.constipation;
        uretentRisk[key] = value.urinary_retention;
        cnsdeprRisk[key] = value.CNS_depression;
        bleedRisk[key] = value.bleeding;
        heartRisk[key] = value.heart_failure;
        bradyRisk[key] = value.bradycardia;
        hypoglycRisk[key] = value.hypoglycaemia;
        renalRisk[key] = value.renal_injury;
        hypoKRisk[key] = value.hypokalemia;
        hyperKRisk[key] = value.hyperkalemia;
        serosynRisk[key] = value.serotonin_syndrome;
        acglaucRisk[key] = value.glaucoma;
       
    }

    dataStructure.push(acglaucRisk, hypoglycRisk, hypoKRisk, hyperKRisk, bradyRisk, serosynRisk, uretentRisk, constRisk, cnsdeprRisk, heartRisk, bleedRisk, renalRisk,fallsRisk);
    dataStructure['columns'] = header;


    initialization(dataStructure);

    //destroy the objects
    delete dataStructure;
    delete dataStructure;
    delete fallsRisk;
    delete constRisk;
    delete uretentRisk;
    delete cnsdeprRisk;
    delete bleedRisk;
    delete heartRisk;
    delete bradyRisk;
    delete hypoglycRisk;
    delete renalRisk;
    delete hypoKRisk;
    delete hyperKRisk;
    delete serosynRisk;
    delete acglaucRisk;
  

}


function createAccordionItem(medGroup,colorCode,accordionTitle,accordionTooltip) {

    //Push that colorCode to Array
    colorCodes.push(colorCode);
    //console.log(colorCodes);
    
    $accordion = $('<div>')
        .attr('id', medGroup.replace(/[-_ )(]/g, '') + 'accordion')
        .addClass('accordion-item shadow')
        .appendTo($('#medGroup'));

    $accordionHeader = $('<h2>')
        .attr('id', medGroup.replace(/[-_ )(]/g, '') + 'header')
        .addClass('accordion-header')
        .append(
            $('<button>')
                .attr('type', 'button')
                .attr('data-bs-toggle', 'collapse')
                .attr('data-bs-target', '#' + medGroup.replace(/[-_ )(]/g, '') + 'div')
                .attr('aria-expanded', 'true')
                .attr('aria-controls', medGroup.replace(/[-_ )(]/g, '') + 'div')
                .addClass('accordion-button')
                .append(
                    $('<span>').addClass('medGroupColor').attr('style', "background-color:" + colorCode),
                    $('<span>').attr('data-bs-toggle', 'tooltip')
                        .attr('data-bs-placement', 'right')
                        .attr("title", accordionTooltip).text(accordionTitle)
                )
        )
        .appendTo($accordion);

    $accordionBodyHeader = $('<div>')
        .attr('id', medGroup.replace(/[-_ )(]/g, '') + 'div')
        .addClass('accordion-collapse collapse show')
        .attr('aria-labelledby', medGroup.replace(/[-_ )(]/g, '') + 'aria')
        .attr('data-bs-parent', '#medGroup')
        .appendTo($accordion);

   
    $accordionContent = $('<ul>')
        .attr('id', medGroup.replace(/[-_ )(]/g, '') + 'ul')
        .addClass('list-group')
        .appendTo($accordionBodyHeader);
}
function createAcordionContent(medGroup, atcDescr, atcLevel, colorCode,medClassTitle) {

    $('<li>')
        .attr('id', medGroup.replace(/[-_ )(]/g, '') + atcLevel + 'li')
        .addClass('list-group-item')
        .addClass('acordionContent')
        .append(
            $('<div>').addClass('col-11').text(atcDescr + " " + '[' + atcLevel + ']'),
            $('<div>').addClass('col-1').append(
            $('<span>')
                .attr('id', medGroup.replace(/[-_ )(]/g, '') + atcLevel + 'span')
                .addClass('close')
                .on('click', function (event) {

                    const index = selectedMedList.indexOf(atcDescr);
                    if (index > -1) {
                        selectedMedList.splice(index, 1);
                    }
                    //console.log(selectedMedList);

                    //Remove clicked font color from the list
                    $('#' + "a" + atcLevel).removeClass('clicked');
                    
                    $('#' + medGroup.replace(/[-_ )(]/g, '') + atcLevel + 'li').remove();
                    const liIDs = $.map($('#' + medGroup.replace(/[-_ )(]/g, '') + 'ul' + '> li'), li => li.id);
                    if (liIDs.length == 0) {

                        //Remove Med Classes
                        const ind = colorCodes.indexOf(colorCode);
                        if (ind > -1) {
                            colorCodes.splice(ind, 1);
                        }
                        //console.log(colorCodes);

                        selectedMedClass.delete(medClassTitle);
                        createPivot(selectedMedClass);

                        //const index = selectedMedGroupList.indexOf(medGroup);
                        //if (index > -1) {
                        //    selectedMedGroupList.splice(index, 1);
                        //    //create graph again with deleted list.
                        //    createCSV(selectedMedGroupList, "REMOVE");
                        //}

                        

                        $('#' + medGroup.replace(/[-_ )(]/g, '') + 'accordion').remove();



                    }
                    //initialize all tooltips on the graph
                    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                        return new bootstrap.Tooltip(tooltipTriggerEl)
                    });

                })
        ))
        .appendTo($('#' + medGroup.replace(/[-_ )(]/g, '') + 'ul'));
}

//***********************************************************Graph******************************************************************





function initialization(data) {

    
    keys = data.columns.slice(1)

    data.forEach(function (d) {
        d.total = d3.sum(keys, k => +d[k])
        return d
    });

    

    riskmedGroups = keys.flatMap(medGroup => data.map(d => ({ risk: d.Risk, medGroup, status: d[medGroup] }))) // pivot


    var before = [];
    var after = [];

    var totFalls = 0;
    var totRenal = 0;
    var totBleed = 0;
    var totHeart = 0;
    var totCnsde = 0;
    var totConst = 0;
    var totUrina = 0;
    var totSerot = 0;
    var totBrady = 0;
    var totHyper = 0;
    var totHypok = 0;
    var totHypog = 0;
    var totGlauc = 0;

    
    riskmedGroups.forEach(function (d) {

        if (d.risk == 'Falls and fracture' && d.status == 1) totFalls++;
        if (d.risk == 'Renal injury' && d.status == 1) totRenal++;
        if (d.risk == 'Bleeding' && d.status == 1) totBleed++;
        if (d.risk == 'Heart failure' && d.status == 1) totHeart++;
        if (d.risk == 'CNS depression' && d.status == 1) totCnsde++;
        if (d.risk == 'Constipation' && d.status == 1) totConst++;
        if (d.risk == 'Urinary retention' && d.status == 1) totUrina++;
        if (d.risk == 'Serotonin syndrome' && d.status == 1) totSerot++;
        if (d.risk == 'Bradycardia' && d.status == 1) totBrady++;
        if (d.risk == 'Hyperkalemia' && d.status == 1) totHyper++;
        if (d.risk == 'Hypokalemia' && d.status == 1) totHypok++;
        if (d.risk == 'Hypoglycaemia' && d.status == 1) totHypog++;
        if (d.risk == 'Glaucoma' && d.status == 1) totGlauc++;

        if (totGlauc <= 5 && d.risk == 'Glaucoma') before.push(d);
        if (totHypog <= 5 && d.risk == 'Hypoglycaemia') before.push(d);
        if (totHypok <= 5 && d.risk == 'Hypokalemia') before.push(d);
        if (totHyper <= 5 && d.risk == 'Hyperkalemia') before.push(d);
        if (totBrady <= 5 && d.risk == 'Bradycardia') before.push(d);
        if (totSerot <= 5 && d.risk == 'Serotonin syndrome') before.push(d);
        if (totUrina <= 5 && d.risk == 'Urinary retention') before.push(d);
        if (totConst <= 5 && d.risk == 'Constipation') before.push(d);
        if (totCnsde <= 5 && d.risk == 'CNS depression') before.push(d);
        if (totHeart <= 5 && d.risk == 'Heart failure') before.push(d);
        if (totBleed <= 5 && d.risk == 'Bleeding') before.push(d);
        if (totRenal <= 5 && d.risk == 'Renal injury') before.push(d);
        if (totFalls <= 5 && d.risk == 'Falls and fracture') before.push(d);

        if (totGlauc > 5 && d.risk == 'Glaucoma') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totHypog > 5 && d.risk == 'Hypoglycaemia') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totHypok > 5 && d.risk == 'Hypokalemia') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totHyper > 5 && d.risk == 'Hyperkalemia') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totBrady > 5 && d.risk == 'Bradycardia') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totSerot > 5 && d.risk == 'Serotonin syndrome') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totUrina > 5 && d.risk == 'Urinary retention') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totConst > 5 && d.risk == 'Constipation') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totCnsde > 5 && d.risk == 'CNS depression') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totHeart > 5 && d.risk == 'Heart failure') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totBleed > 5 && d.risk == 'Bleeding') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totRenal > 5 && d.risk == 'Renal injury') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }
        if (totFalls > 5 && d.risk == 'Falls and fracture') { after.push(d); before.push({ risk: d.risk, medGroup: d.medGroup, status: 0 }); }

        

    });
   
    $('#chart').empty();

    //Horizontal Stacked Bar Chart
    chart = StackedBarChartHorizontal(before, after, {
            x: d => d.status,
            y: d => d.risk,
            z: d => d.medGroup,
            xLabel: "Medicine class risk count →",
            xDomain: [0, 5]
                               /* xDomain: [0, d3.max(data, d => d.total) + 2]*/,
            yDomain: data.map(d => d.Risk), //d3.groupSort(stateages, D => d3.sum(D, d => d.population), d => d.state), // sort y by x
            zDomain: keys,
            colors: colorCodes,
            /*xFormat: '.0f'*/
        })

    $('#chart').append(chart);

    
   
}



function getTooltipTitle(array) {

    var html = "<p>";
    var cont = "";

    for (i = 0; i < array.length; i++) {

        cont = cont + '[ '+ array[i] + ' ]' + '<br>';
    }

    var res = html + cont + '</p>';

    return res;
}


//Horizontal Stacked Bar Chart
function StackedBarChartHorizontal(data,after, {
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
    const xAxis = d3.axisTop(xScale).ticks(5);
    /*const xAxis = d3.axisTop(xScale).ticks(width / 80, xFormat);*/
    const yAxis = d3.axisLeft(yScale).tickSizeOuter(0);



    // Compute titles.
    if (title === undefined) {
        const formatValue = xScale.tickFormat(100, xFormat);
        
        title = i => `${Z[i]}\n${formatValue(X[i])}`;
    } else {
        const O = d3.map(data, d => d);
        const T = title;
        title = i => T(O[i], i, data);
    }

    const svg = d3.create("svg")
        .attr('id','horizontalChart')
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [30, -20, width, height])
        .attr("style", "height:auto; height:intrinsic;");

    svg.append("g")
        .attr('id', 'xAxisMainG')
        .attr("transform", `translate(0,${marginTop})`)
        .call(xAxis)
        .attr('font-size', "16")
        .attr('font-family', "'Roboto Condensed',sans-serif;")
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("y2", height - marginTop - marginBottom)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", (width - marginRight) - 40)
            .attr("y", -40)
            .attr("fill", "currentColor")
            .attr("text-anchor", "end")
            .attr('style','font-weight: bold;')
            .text(xLabel));


    const bar = svg.append("g").attr('id','mainBarG')
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
        

    if (title) bar.attr('data-bs-toggle', 'tooltip').attr('data-bs-placement','top').attr("title", ({ i }) => title(i));


    if (after.length != 0) {

        var ffCount = 0;
        var riCount = 0;
        var blCount = 0;
        var hfCount = 0;
        var cnsCount = 0;
        var consCount = 0;
        var uriCount = 0;
        var seroCount = 0;
        var bradCount = 0;
        var hyperkCount = 0;
        var hypokCount = 0;
        var hypogCount = 0;
        var glauCount = 0;


        var ffMedGroups = [];
        var riMedGroups = [];
        var blMedGroups = [];
        var hfMedGroups = [];
        var cnsMedGroups = [];
        var consMedGroups = [];
        var uriMedGroups = [];
        var seroMedGroups = [];
        var bradMedGroups = [];
        var hyperkMedGroups = [];
        var hypokMedGroups = [];
        var hypogMedGroups = [];
        var glauMedGroups = [];

        after.forEach(function (d) {

            if (d.risk == 'Falls and fracture' && d.status == 1) { ffCount++; ffMedGroups.push(d.medGroup); }
            if (d.risk == 'Renal injury' && d.status == 1) { riCount++; riMedGroups.push(d.medGroup); }
            if (d.risk == 'Bleeding' && d.status == 1) { blCount++; blMedGroups.push(d.medGroup); }
            if (d.risk == 'Heart failure' && d.status == 1) { hfCount++; hfMedGroups.push(d.medGroup); }
            if (d.risk == 'CNS depression' && d.status == 1) { cnsCount++; cnsMedGroups.push(d.medGroup); }
            if (d.risk == 'Constipation' && d.status == 1) { consCount++; consMedGroups.push(d.medGroup); }
            if (d.risk == 'Urinary retention' && d.status == 1) { uriCount++; uriMedGroups.push(d.medGroup); }
            if (d.risk == 'Serotonin syndrome' && d.status == 1) { seroCount++; seroMedGroups.push(d.medGroup); }
            if (d.risk == 'Bradycardia' && d.status == 1) { bradCount++; bradMedGroups.push(d.medGroup); }
            if (d.risk == 'Hyperkalemia' && d.status == 1) { hyperkCount++; hyperkMedGroups.push(d.medGroup); }
            if (d.risk == 'Hypokalemia' && d.status == 1) { hypokCount++; hypokMedGroups.push(d.medGroup); }
            if (d.risk == 'Hypoglycaemia' && d.status == 1) { hypogCount++; hypogMedGroups.push(d.medGroup); }
            if (d.risk == 'Glaucoma' && d.status == 1) { glauCount++; glauMedGroups.push(d.medGroup); }

        });






        const cappedBar = svg.append('g').attr('id', 'cappedBars');

        const caXScale = 530;

        if (ffCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '53').text('+' + ffCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(ffMedGroups)); 
        }
        if (riCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '86.6').text('+' + riCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(riMedGroups));
        }
        if (blCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '120.2').text('+' + blCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(blMedGroups));
        }
        if (hfCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '153.8').text('+' + hfCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(hfMedGroups));
        }
        if (cnsCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '187.4').text('+' + cnsCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(cnsMedGroups));
        }
        if (consCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '221').text('+' + consCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(consMedGroups));
        }
        if (uriCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '254.60000000000002').text('+' + uriCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(uriMedGroups));
        }
        if (seroCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '288.20000000000005').text('+' + seroCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(seroMedGroups));
        }
        if (bradCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '321.8').text('+' + bradCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(bradMedGroups));
        }
        if (hyperkCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '355.40000000000003').text('+' + hyperkCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(hyperkMedGroups));
        }
        if (hypokCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '389').text('+' + hypokCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(hypokMedGroups));
        }
        if (hypogCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '422.6').text('+' + hypogCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(hypogMedGroups));
        }
        if (glauCount > 0) {
            cappedBar.append('text').attr('fill', 'currentColor').attr('x', caXScale).attr('y', '456.20000000000005').text('+' + glauCount).attr('data-bs-toggle', 'tooltip').attr('data-bs-html', 'true').attr('data-bs-placement', 'right').attr("title", getTooltipTitle(glauMedGroups));
        }

    }



    svg.append("g")
        .attr('id', 'yAxisMainG')
        .attr("transform", `translate(${xScale(0)},0)`)
        .call(yAxis)
        .attr('font-size', "16")
        .attr('font-family', "'Roboto Condensed',sans-serif;")
        .call(g => g.selectAll(".tick").selectAll('text').attr('x', '-20'));
        

    return Object.assign(svg.node(), { scales: { color } });
}


//***********************************************************End Graph******************************************************************
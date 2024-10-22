"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
	
	// get user entries;
	$("#calculate").addEventListener("click", () => {
        const subtotal = parseFloat($("#subtotal").value);
        const tax_rate = parseFloat($("#tax_rate").value);


    // if-elseif-else to validate inputs, calculate, and display results
        if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000 || isNaN(tax_rate) || tax_rate <= 0 || tax_rate >= 12) {
			alert("Subtotal must be > 0 and < 10000 and the Tax Rate must be > 0 and < 12");

        } else {
			let sales_tax = parseFloat((tax_rate / 100) * subtotal);
			let total_value = parseFloat(subtotal + sales_tax);

            $("#total").value = total_value.toFixed(2);  
			$("#sales_tax").value = sales_tax.toFixed(2); 
        } 
    });    
    
	$("#subtotal").focus();// move focus
};


//  clear functions
var clearEntries = () => {
	// call clear functions
	// clear all text boxes
	$("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
	$("#total").value = "";
    $("#subtotal").focus();// move focus
};


document.addEventListener("DOMContentLoaded", () => {
	
	// add event handlers
	$("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
	
	$("#subtotal").focus();// move focus

});


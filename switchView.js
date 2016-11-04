/* switchView.js 
 * Author: Neil Dunn
 * ID: 2790816
 * Project: EECS 448 Calculator (Prototype)
 * Description: This files allows switching between various modes/views of the calculator.
 */

/**
 * Switches to the programming view on moues click.  This is where the hex, decimal, octal, and binary conversions * occur.
 * @param None.
 */
function goConverterProgrammer()
{
    /* This function is explained at the bottom of
     * this document. 
     */
    clearText();
    
    /* Displays the bases as labels on the bottom of the calculator. */
    document.getElementById("hex").innerHTML = "Hex:";
    document.getElementById("decimal").innerHTML = "Decimal:";
    document.getElementById("binary").innerHTML = "Binary:";
    document.getElementById("octal").innerHTML = "Octal:";
    
    
    /* Hides the screen, for now. I may display the screen for the final project. */
    document.getElementById("calcDisplay").style.display = "none";

    /* Shows the operator buttons if they happen to be invisible */
    var x = document.getElementsByClassName("btn btn-primary");
    for(var i = 0; i < x.length; i++)
    {
         x[i].style.visibility = "visible";
    }

    /* Shoves all the numberic buttons (0-9) in this array*/
    var y = document.getElementsByClassName("btn btn-default");

    /* Next 4 functions allow a user to input a value in the base that is selected and will       
     * convert that value to the other bases automatically. 
     */
    
    /* If the user clicks on "hex", the hex label turns a dark blue color,
     * Values A-F will be enabled for the user to input (will be there in final project)
     */
    document.getElementById("hex").onclick = function()
    {
        document.getElementById("hex").style.color = "#6363F2";
        document.getElementById("decimal").style.color = "snow";
        document.getElementById("octal").style.color = "snow";
        document.getElementById("binary").style.color = "snow";

        for(i = 0; i < y.length ; i++)
        {
            if(y[i].value != "0" && y[i].value != "1")
            {
                y[i].disabled = false;
            }
        }
    }
    
    /* If the user clicks on "binary", the binary label turns a dark blue color,
     * All numeric buttons will be disabled except 0 and 1, since the only values 0
     * and 1 exist in binary.
     * 
     */    
    document.getElementById("binary").onclick = function()
    {
        document.getElementById("hex").style.color = "snow";
        document.getElementById("decimal").style.color = "snow";
        document.getElementById("octal").style.color = "snow";
        document.getElementById("binary").style.color = "#6363F2";

        for(i = 2; i < y.length ; i++)
        {
            if(y[i].value != "0" && y[i].value != "1")
            {
                y[i].disabled = true;
            }
        }

    }
    
    /* If the user clicks on "octal", the octal label turns a dark blue color,
     * Since the values 8 and 9 do not show up in octal, we disable buttons 8 and 9.
     */ 
    document.getElementById("octal").onclick = function()
    {
        document.getElementById("hex").style.color = "snow";
        document.getElementById("decimal").style.color = "snow";
        document.getElementById("octal").style.color = "#6363F2";
        document.getElementById("binary").style.color = "snow";

        for(i = 0; i < y.length ; i++)
        {
            if(y[i].value == "9" || y[i].value == "8")
            {
                y[i].disabled = true;
            }
            else
            {
                y[i].disabled = false;
            }
        }
    }
    
    /* Decimal will be the default option. Decimal label will be dark blue if selected.  
     * Values A-F are diabled. 
     */    
    document.getElementById("decimal").onclick = function()
    {
        document.getElementById("hex").style.color = "snow";
        document.getElementById("decimal").style.color = "#6363F2";
        document.getElementById("octal").style.color = "snow";
        document.getElementById("binary").style.color = "snow";

        for(i = 0; i < y.length ; i++)
        {
            y[i].disabled = false;
        }
    }
}

/**
 * Switches to the temperature view on moues click.  This is where the celsius, fahrenheit, and kelvin conversions * occur.
 * @param None.
 */
function goConverterTemperature()
{
    /* This function is explained at the bottom of
     * this document. 
     */    
    clearText();
    
    /*Displays the Celsius, Fahrenheit, and Kelvin lables onto the calculator. */
    document.getElementById("celsius").innerHTML = "Celsius: ";
    document.getElementById("fahrenheit").innerHTML = "Fahrenheit: ";
    document.getElementById("kelvin").innerHTML = "Kelvin: ";

    /* Hides all operator buttons, since they are not really needed in this view. */
    var x = document.getElementsByClassName("btn btn-primary");
    for(var i = 0; i < x.length; i++)
    {
         x[i].style.visibility = "hidden";
    }

    /* Next 3 functions below describe what happens when a user clicks on a temperature label.
     * The process is nearly identical to the programming view above, except we do not
     * disable any buttons. 
     */
    document.getElementById("celsius").onclick = function()
    {
        document.getElementById("celsius").style.color = "#6363F2";
        document.getElementById("fahrenheit").style.color = "snow";
        document.getElementById("kelvin").style.color = "snow";
    }
    document.getElementById("fahrenheit").onclick = function()
    {
        document.getElementById("celsius").style.color = "snow";
        document.getElementById("fahrenheit").style.color = "#6363F2";
        document.getElementById("kelvin").style.color = "snow";
    }
    document.getElementById("kelvin").onclick = function()
    {
        document.getElementById("celsius").style.color = "snow";
        document.getElementById("fahrenheit").style.color = "snow";
        document.getElementById("kelvin").style.color = "#6363F2";
    }
}

/**
 * Switches to the distance view on moues click.  This is where the miles and kilometer conversions will occur.
 * @param None.
 */
function goConverterDistance()
{
    /* This function is explained at the bottom of
     * this document. */    
    clearText();
    /* Operator buttons are hidden, since they are really not needed here */
    var x = document.getElementsByClassName("btn btn-primary");
    for(var i = 0; i < x.length; i++)
    {
         x[i].style.visibility = "hidden";
    }
    

    
    /*Displays the miles and kilometer lables onto the calculator. */
    document.getElementById("miles").innerHTML = "Miles: ";
    document.getElementById("kilometers").innerHTML = "Kilometers: ";
    
    /* Next 2 functions below describe what happens when a user clicks on a distance label.
     * The process is nearly identical to the programming view above, except we do not
     * disable any buttons. 
     */
    document.getElementById("miles").onclick = function()
    {
        document.getElementById("miles").style.color = "#6363F2";
        document.getElementById("kilometers").style.color = "snow";
    }
    document.getElementById("kilometers").onclick = function()
    {
        document.getElementById("miles").style.color = "snow";
        document.getElementById("kilometers").style.color = "#6363F2";
    }
}

/**
 * Launches the basic view of the calcuator, which is the default view for this calculator.  
 * Here we can do basic arithmetic such as add, subtract, multiply, and divide.
 * We can also do more slighly complicated functions such as squaring, inversing, or taking a square root.
 * Values and operations can be input via key presses or mouse clicks, and once the user presses the
 * equals button, the result is displayed on the screen above.
 * @param None.
 */
function goBasic()
{
    /* This function is explained at the bottom of
     * this document. */    
    clearText();

    /* Re-displays the screen if the screen was hidden beforehand. */
    document.getElementById("calcDisplay").style.display = "flex";

    /* Re-displays the operator buttons if they were hidden beforehand */
    var x = document.getElementsByClassName("btn btn-primary");
    for(var i = 0; i < x.length; i++)
    {
        x[i].style.visibility = "visible";
    }


}

/* Advanced mode.  Our goal here is to be able to take derivatives, integrals,
 * graph functions, and other advanced calculations.  Most (if not all) of this
 * will be done with Wolfram Alpha API calls 
 */
function goAdvanced()
{
    /* This function is explained at the bottom of
     * this document. 
     */      
    clearText();
    
    /*Just a placeholder when we implement the API in the final project */
    document.getElementById("wolframAPI").innerHTML = "Wolfram API stuff goes in this mode";

    /* Re-displays the operator buttons if they were hidden beforehand */
    var x = document.getElementsByClassName("btn btn-primary");
    for(var i = 0; i < x.length; i++)
    {
        x[i].style.visibility = "visible";
    }


}

/* Allows all the functions above to be called via mouseclick. */
document.addEventListener('DOMContentLoaded', function()
    {
        document.getElementById("convProgram").addEventListener('click', goConverterProgrammer);
        document.getElementById("basic").addEventListener('click', goBasic);
        document.getElementById("advanced").addEventListener('click', goAdvanced);
        document.getElementById("convTemperature").addEventListener('click', goConverterTemperature);
        document.getElementById("convDist").addEventListener('click', goConverterDistance);
    }
)


/* Clears all labels that were displayed on the calculator beforehand.
 * Useful for switching between various views of the calculator 
 * @param None. 
 */
function clearText()
{
    document.getElementById("hex").innerHTML = "";
    document.getElementById("binary").innerHTML = "";
    document.getElementById("decimal").innerHTML = "";
    document.getElementById("octal").innerHTML = "";
    document.getElementById("wolframAPI").innerHTML = "";
    document.getElementById("celsius").innerHTML = "";
    document.getElementById("fahrenheit").innerHTML = "";
    document.getElementById("kelvin").innerHTML = "";
    document.getElementById("miles").innerHTML = "";
    document.getElementById("kilometers").innerHTML = "";
}

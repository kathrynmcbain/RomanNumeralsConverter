/**
 * Created by KathrynMcBain on 02/08/2019.
 */
function toRoman() {
    let input = parseInt(document.getElementById("decimal_input").value, 10); //get number input to be converted

    let current = ''; //string numeral result

    let numeralCount; //used in counting occurrences of specific numerals. eg. X for 30 = 3

    const numerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']; //significant numerals up to 1000
    const arabic  =  [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //corresponding arabic equivalents

    //Loop will run through arabic array comparing the input value to the arabic value.
    for (let i = 0; i < arabic.length; i++) {

        if (input < arabic[i]) { //if input is less than current arabic value, move to next value in array
            i = i + 1;
        }

        if (input >= arabic[i]) {
            numeralCount = Math.floor(input / arabic[i]);//how many of this arabic value can go into the input with no remainder. eg.how many times can 10 go into 32? 3.

            for (let x = 0; x < numeralCount; x++) {
                current = current.concat(numerals[i]); //concatenate answer with number of numeral required. eg. XXX for 32.
            }
            input = input % (arabic[i]); //set the input to the remaining value. eg. 2 so we can loop through again.
        }
    }
    document.getElementById("roman_output").value = current; //display the final answer
}

document.getElementById("decimal_input").addEventListener("change", toRoman); //when the input is changed, call the conversion function again

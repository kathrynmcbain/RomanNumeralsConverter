# RomanNumeralsConverter
Simple web app that converts numbers into roman numerals using simple JS, CSS, HTML.

Simple web app that converts numbers into roman numerals using simple JS, CSS, HTML.

Roman numerals are easy enough to get your head around. Just a combination of I, V, X etc to make up any number. If you don't already understand how they are used, have a quick google and come back!

At first glance, it seems you just keep adding on I or V or X or whatever until you get the number you're looking for. This is true of most numbers.

5 is V

8 is VIII

20 is XX

22 is XXII

Easy enough for a computer to do, right? 

The problem comes when we have to deal with numbers like 4 and 9 because they follow a slightly different format.

4 is IV not IIII

9 is IX not VIIII

So we have to write code that allows for this. 

The app makes use of two different arrays. One containing arabic numbers (1,4,5 etc) and the other, the equivalent in Roman Numerals. The arrays don't contain every possible eqivalent. That would defeat the purpose of having the computer work out these conversions for us! The arrays only contain the special cases mentioned above.

<table>
  <tr>
    <td>Numerals</td>
      <td>100</td>
      <td>90</td>
      <td>50</td>
      <td>40</td>
      <td>10</td>
      <td>9</td>
      <td>5</td>
      <td>4</td>
      <td>1</td>
  </tr>
    <tr>
    <td>Arabic</td>
      <td>C</td>
      <td>XC</td>
      <td>L</td>
      <td>XL</td>
      <td>X</td>
      <td>IX</td>
      <td>V</td>
      <td>IV</td>
      <td>I</td>
  </tr>
  
  So now because we have the special cases, we can now make number like 44, because the computer now understands that 40 is a special case and so is 4, so we end up with XLIV.
  
  To be continued...

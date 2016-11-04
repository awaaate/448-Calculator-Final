/* popOut.js 
 * Author: Neil Dunn
 * ID: 2790816
 * Project: EECS 448 Calculator
 * Description: All this does is allow a window to popout of a pre-defined size when the app launches.
 */

chrome.app.runtime.onLaunched.addListener(function()
{
    chrome.app.window.create('window.html',
    {

      'outerBounds' :
      {
        'width' : 500,
        'height' : 800
      },
      //'resizable': false,



    });

});

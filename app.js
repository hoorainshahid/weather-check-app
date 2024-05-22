var weather = prompt(" Please Enter your area weather....")

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<first weather>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
if (weather == 'hot') {
    document.write('<div class="card">' +
        '<img src="./images/hot.jpeg" alt="Hot Weather">' +
        '<div class="card-body">' +
        '<h1>It\'s ' + weather + ' today</h1>' +
        '<div class="caption"> Hot days like this should be banned!</div>' +
        '</div>' +
        '</div>');
}



//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<SEC weather>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>?.
else if (weather == 'cloudy') {
    document.write('<div class="card">' +
        '<img src="./images/cloudy weather.jpeg" alt="Cloudy Weather">' +
        '<div class="card-body">' +
        '<h1>It\'s ' + weather + ' today</h1>' +
        '<div class="reaction"> Without the clouds, the sunset would have faded away. </div>' +
        '</div>' +
        '</div>');
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<THIRD weather>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

else if (weather == 'sunny') {
    document.write('<div class="card">' +
        '<img src="./images/suuny.jpeg" alt="Sunny Weather">' +
        '<div class="card-body">' +
        '<h1>It\'s ' + weather + ' today</h1>' +
        '<div class="reaction">I was made for sunny days</div>' +
        '</div>' +
        '</div>');
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<four weather>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
else if (weather == 'rainy') {
    document.write('<div class="card">' +
        '<img src="images/rainy.jpeg" alt="Rainy Weather">' +
        '<div class="card-body">' +
        '<h1>It\'s ' + weather + ' today</h1>' +
        '<div class="reaction">Coffee, books, and rain.</div>' +
        '</div>' +
        '</div>');
}



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<fiVE weather>>>>>>>>>>>>>>>>>>>>>>>
else if (weather == 'cold') {
    document.write('<div class="card">' +
        '<img src="./images/cold.jpg" alt="Cold Weather">' +
        '<div class="card-body">' +
        '<h1>It\'s ' + weather + ' today</h1>' +
        '<div class="caption">Be like snow: beautiful but cold.</div>' +
        '</div>' +
        '</div>');
}




//<<<<<<<<<<<<<<<<<<<<<<<< SIX weather>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
else if (weather == 'snow') {
    document.write('<div class="card">' +
        '<img src="./images/snow.jpeg" alt="Snowy Weather">' +
        '<div class="card-body">' +
        '<h1>It\'s ' + weather + ' today</h1>' +
        '<div class="caption">A snow day is my favorite kind of day!</div>' +
        '</div>' +
        '</div>');
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ERROR CARD>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
else {
    document.write('<div class="card">' +
        '<div class="card-body">' +
        '<h1>ERROR</h1>' +
        '<div class="caption">please enter your weather condition.</div>' +
        '</div>' +
        '</div>');
}


export const command = "whoami";

// the refresh frequency in milliseconds
export const refreshFrequency = 300;
var folder = "Persona_5_Theme/Calendar_Assets/";
var key = '' //openweather key
var the_location = 'United States of America, US';
var theme = 0; // 0 - Normal Style / 1 - New Semester Style

// the CSS style for this widget, written using Emotion
// https://emotion.sh/
export const className =`
  top: 0px;
  right: 0px;
  left: 35px;
  Opacity: 80%;
  
.Month{
  position: absolute;
  transform: rotate(0deg);
	}

.MonthWhite{
  position: absolute;
  transform: rotate(0deg);
	}

.MonthBlack{
  position: absolute;
  transform: rotate(0deg);
	}

.Digit1{
  position: absolute;
  transform: rotate(0deg);
	}

.Digit1_boxwhite{
  position: absolute;
  transform: rotate(0deg);

	}

.Digit1_boxblack{
  position: absolute;
  transform: rotate(0deg);

	}

.Digit2{
  position: absolute;
  transform: rotate(3deg);

	}

.Digit2_boxwhite{
  position: absolute;
  transform: rotate(3deg);

	}

.Digit2_boxblack{
  position: absolute;
  transform: rotate(3deg);

	}

.Filler{
  position: absolute;
       }

.DayName{
  position: absolute;
  transform: rotate(-10deg);
	}

.DayNameWhite{
  position: absolute;
  transform: rotate(-10deg);
	}

.DayNameBlack{
  position: absolute;
  transform: rotate(-10deg);
	}

.TimeName{
  position: absolute;
  transform: rotate(-20deg) scale(0.8);
	}

.WeatherWhite{
  position: absolute;
	}

.Weather{
  position: absolute;
	}

.Alert{
  position: absolute;
	}

`
var month;
var oldmonth = -1;
var month_x = 0;
var month_y = 25; 
var date;
var olddate = -1;
var digit1_x = 68;
var digit1_y = 20;
var digit2_x = 120;
var digit2_y = 5;
var digit2_r = 3;
var d1;
var r = 0;
var d2;
var weekday;
var oldweekday = -1;
const weekday_x = 80;
const weekday_y = 35;
const weekday_offsetx = 0;
const weekday_offsety = 0;
const weekday_displayoffsetx = 0;
const weekday_displayoffsety = 0;
var _weekday_x;
var _weekday_y;
var _weekday_offsetx;
var _weekday_offsety;
var _weekday_displayoffsetx;
var _weekday_displayoffsety;
var hours;
var oldhours = -1;
var TimeName = "None!";
var oldTimeName = "none";
var TimeName_x = -65 + 8;
var TimeName_y = 130;
var _Weather = "Cloudy";
var _alert = "none";
var weather_x = 195;
var weather_y = 3;
var frame = 0;
var flag = 0;
var respuesta;
var imgcache ='http://127.0.0.1:41416/Persona_5_Theme/Calendar_Assets/Weather/Cloudy_0.png';
var counter = 0;
var seconds = 0;
var icon;
var wthr;
var temperature;
var description;
const timer_seconds = 3; //300 * 3 = 900 ~1 second 

     // <p>Seconds: {seconds}</p>
     // <p>Counter: {counter}</p>
export const render = (output) => {
  return (
    <div>
    <a id = "wref">
    <img className="MonthWhite" id="white_month"></img>
	<img className="Digit1_boxwhite" id="white_digit1"></img>
	<img className="Digit2_boxwhite" id="white_digit2"></img>
	<img className="WeatherWhite" id="white_weather"></img>
	<img className="DayNameWhite" id="DayName_white"></img>
	<img className="MonthBlack" id="black_month"></img>
	<img className="Digit1_boxblack" id="black_digit1"></img>
	<img className="Digit2_boxblack" id="black_digit2"></img>
	<img className="DayNameBlack" id="DayName_black"></img>
	<img className="Filler" id="filler"></img>
	<img className="Month" id="monthf"></img>
	<img className="Digit1" id="digit1"></img>
	<img className="Digit2" id="digit2"></img>
	<img className="DayName" id="dayname"></img>
	<img className="TimeName" id="timename"></img>
	<img className="Weather" id="weather"></img>
	<img className="Alert" id="alert"></img>
	</a>
    </div>
  );
}
export const updateState = (event, previousState) => {
counter++;
try{
 if(counter == timer_seconds) //if counter = 3 aprx 1 second
 {
  seconds++;
  counter = 0;
  month = new Date().getMonth()+1;
  date =  new Date().getDate();
  weekday = new Date().getDay();
 _weekday_x = weekday_x;
 _weekday_y = weekday_y + 15;
 _weekday_offsetx = weekday_offsetx;
 _weekday_offsety = weekday_offsety;
 _weekday_displayoffsetx = weekday_displayoffsetx;
 _weekday_displayoffsety = weekday_displayoffsety;
 hours = new Date().getHours();

////////////////////////////////Month///////////////////////////////////////////////////////////

if(month != oldmonth)
{
document.getElementById('white_month').src = folder + 'Month/' + 'BaseWhite_' + month + '.png';
document.getElementById('white_month').style.left = month_x + "px";
document.getElementById('white_month').style.top = month_y + "px";
if(theme == 0)
document.getElementById('white_month').style.filter = 'invert(0)';
else
document.getElementById('white_month').style.filter = 'invert(1)';


document.getElementById('black_month').src = folder + 'Month/' + 'BaseBlack_' + month + '.png';
document.getElementById('black_month').style.left = month_x + "px";
document.getElementById('black_month').style.top = month_y + "px";
if(theme == 0)
document.getElementById('black_month').style.filter = 'invert(0)';
else
document.getElementById('black_month').style.filter = 'invert(1)';
 
document.getElementById('monthf').src = folder + 'Month/' + month + '.png';
document.getElementById('monthf').style.left = month_x + "px";
document.getElementById('monthf').style.top = month_y + "px";
if(theme == 0)  
document.getElementById('monthf').style.filter = 'invert(0)';
else
document.getElementById('monthf').style.filter = 'invert(1)';
oldmonth = month;
}

 if(date != olddate)
 {
if(date < 10)
{
d1 = date;
d2 = 0;
document.getElementById('white_digit2').style.display = "none";
document.getElementById('black_digit2').style.display = "none";
document.getElementById('filler').style.display = "none";
document.getElementById('digit2').style.display = "none";


}
else
{
d1 = parseInt(date/10);
d2 = parseInt(date%10);
document.getElementById('white_digit2').style.display = "inline";
document.getElementById('black_digit2').style.display = "inline";
document.getElementById('filler').style.display = "inline";
document.getElementById('digit2').style.display = "inline";

}

////////////////////////////////DIGIT ONE////////////////////////////////////////////////

document.getElementById('white_digit1').src = folder + 'Day/' + 'BaseWhite_' + d1 + '.png'; 
document.getElementById('white_digit1').style.left = digit1_x + "px";
document.getElementById('white_digit1').style.top = digit1_y + "px";
document.getElementById('white_digit1').style.transform = 'rotate(5deg)';
if(theme == 0)  
document.getElementById('white_digit1').style.filter = 'invert(0)';
else
document.getElementById('white_digit1').style.filter = 'invert(1)';


document.getElementById('black_digit1').src = folder + 'Day/' + 'BaseBlack_' + d1 + '.png'; 
document.getElementById('black_digit1').style.left = digit1_x + 4 + "px";
document.getElementById('black_digit1').style.top = digit1_y + 5 + "px";
document.getElementById('black_digit1').style.transform = 'rotate(5deg)';
if(theme == 0)  
document.getElementById('black_digit1').style.filter = 'invert(0)';
else
document.getElementById('black_digit1').style.filter = 'invert(1)';


document.getElementById('digit1').src = folder + 'Day/' + d1 + '.png'; 
document.getElementById('digit1').style.left = digit1_x + 20 + "px";
document.getElementById('digit1').style.top = digit1_y + 15 + "px";
document.getElementById('digit1').style.transform = 'rotate(5deg)';
if(theme == 0)  
document.getElementById('digit1').style.filter = 'invert(0)';
else
document.getElementById('digit1').style.filter = 'invert(1)';


////////////////////////////////DIGIT TWO////////////////////////////////////////////////
document.getElementById('white_digit2').src = folder + 'Day/' + 'BaseWhite_' + d2 + '.png'; 
document.getElementById('white_digit2').style.left = digit2_x + "px";
document.getElementById('white_digit2').style.top = digit2_y + "px";
if(theme == 0)  
document.getElementById('white_digit2').style.filter = 'invert(0)';
else
document.getElementById('white_digit2').style.filter = 'invert(1)';

document.getElementById('black_digit2').src = folder + 'Day/' + 'BaseBlack_' + d2 + '.png'; 
document.getElementById('black_digit2').style.left = digit2_x + 4 + "px";
document.getElementById('black_digit2').style.top = digit2_y + 5 + "px";
if(theme == 0)  
document.getElementById('black_digit2').style.filter = 'invert(0)';
else
document.getElementById('black_digit2').style.filter = 'invert(1)';

document.getElementById('filler').src = folder + 'Day/' + 'Filler' + '.png'; 
document.getElementById('filler').style.left = digit2_x + "px";
document.getElementById('filler').style.top = digit2_y + 40 + "px";
if(theme == 0)  
document.getElementById('filler').style.filter = 'invert(0)';
else
document.getElementById('filler').style.filter = 'invert(1)';

document.getElementById('digit2').src = folder + 'Day/' + d2 + '.png'; 
document.getElementById('digit2').style.left = digit2_x + 20 + "px";
document.getElementById('digit2').style.top = digit2_y + 15 + "px";
if(theme == 0)  
document.getElementById('digit2').style.filter = 'invert(0)';
else
document.getElementById('digit2').style.filter = 'invert(1)';
olddate = date;
}

////////////////////////////////WEEKDAY/////////////////////////////////////////////////////
if(weekday != oldweekday)
{
switch(weekday){
case 0:
weekday = "Sunday";

document.getElementById('DayName_white').src = folder + 'DayName/' + 'BaseWhite_Sunday' + '.png'; 
document.getElementById('DayName_black').src = folder + 'DayName/' + 'BaseBlack_Sunday' + '.png';
document.getElementById('dayname').src = folder + 'DayName/' + 'Sunday' + '.png'; 
 
_weekday_offsetx = weekday_x + 9;
_weekday_offsety = weekday_y + 23 + 15;
_weekday_displayoffsetx = weekday_x + 13;
_weekday_displayoffsety = weekday_y + 29 + 15;

document.getElementById('DayName_white').style.left = _weekday_x + "px";
document.getElementById('DayName_white').style.top = _weekday_y + "px";

document.getElementById('DayName_black').style.left = _weekday_offsetx + "px";
document.getElementById('DayName_black').style.top = _weekday_offsety + "px";

document.getElementById('dayname').style.left = _weekday_displayoffsetx + "px";
document.getElementById('dayname').style.top = _weekday_displayoffsety + "px";
weekday = 0;

break;

case 1:
weekday = "Monday";

document.getElementById('DayName_white').src = folder + 'DayName/' + 'BaseWhite_Monday' + '.png'; 
document.getElementById('DayName_black').src = folder + 'DayName/' + 'BaseBlack_Monday' + '.png';
document.getElementById('dayname').src = folder + 'DayName/' + 'Monday' + '.png'; 
 
_weekday_offsetx = weekday_x + 10;
_weekday_offsety = weekday_y + 23 + 15;
_weekday_displayoffsetx = weekday_x + 16;
_weekday_displayoffsety = weekday_y + 27 + 15;

document.getElementById('DayName_white').style.left = _weekday_x + "px";
document.getElementById('DayName_white').style.top = _weekday_y + "px";

document.getElementById('DayName_black').style.left = _weekday_offsetx + "px";
document.getElementById('DayName_black').style.top = _weekday_offsety + "px";

document.getElementById('dayname').style.left = _weekday_displayoffsetx + "px";
document.getElementById('dayname').style.top = _weekday_displayoffsety + "px";
weekday = 1;


break;

case 2:
weekday = "Tuesday";

document.getElementById('DayName_white').src = folder + 'DayName/' + 'BaseWhite_Tuesday' + '.png'; 
document.getElementById('DayName_black').src = folder + 'DayName/' + 'BaseBlack_Tuesday' + '.png';
document.getElementById('dayname').src = folder + 'DayName/' + 'Tuesday' + '.png'; 
 
_weekday_offsetx = weekday_x + 10;
_weekday_offsety = weekday_y + 23 + 15;
_weekday_displayoffsetx = weekday_x + 15;
_weekday_displayoffsety = weekday_y + 26 + 15;

document.getElementById('DayName_white').style.left = _weekday_x + "px";
document.getElementById('DayName_white').style.top = _weekday_y + "px";

document.getElementById('DayName_black').style.left = _weekday_offsetx + "px";
document.getElementById('DayName_black').style.top = _weekday_offsety + "px";

document.getElementById('dayname').style.left = _weekday_displayoffsetx + "px";
document.getElementById('dayname').style.top = _weekday_displayoffsety + "px";
weekday = 2;

break;

case 3:
weekday = "Wednesday";

document.getElementById('DayName_white').src = folder + 'DayName/' + 'BaseWhite_Wednesday' + '.png'; 
document.getElementById('DayName_black').src = folder + 'DayName/' + 'BaseBlack_Wednesday' + '.png';
document.getElementById('dayname').src = folder + 'DayName/' + 'Wednesday' + '.png'; 
 
_weekday_offsetx = weekday_x + 10;
_weekday_offsety = weekday_y + 23 + 15;
_weekday_displayoffsetx = weekday_x + 17;
_weekday_displayoffsety = weekday_y + 28 + 15;

document.getElementById('DayName_white').style.left = _weekday_x + "px";
document.getElementById('DayName_white').style.top = _weekday_y + "px";

document.getElementById('DayName_black').style.left = _weekday_offsetx + "px";
document.getElementById('DayName_black').style.top = _weekday_offsety + "px";

document.getElementById('dayname').style.left = _weekday_displayoffsetx + "px";
document.getElementById('dayname').style.top = _weekday_displayoffsety + "px";
weekday = 3;

break;
case 4:
weekday = "Thursday";

document.getElementById('DayName_white').src = folder + 'DayName/' + 'BaseWhite_Thursday' + '.png'; 
document.getElementById('DayName_black').src = folder + 'DayName/' + 'BaseBlack_Thursday' + '.png';
document.getElementById('dayname').src = folder + 'DayName/' + 'Thursday' + '.png'; 
 
_weekday_offsetx = weekday_x + 13;
_weekday_offsety = weekday_y + 23 + 15;
_weekday_displayoffsetx = weekday_x + 20;
_weekday_displayoffsety = weekday_y + 27 + 15;

document.getElementById('DayName_white').style.left = _weekday_x + "px";
document.getElementById('DayName_white').style.top = _weekday_y + "px";

document.getElementById('DayName_black').style.left = _weekday_offsetx + "px";
document.getElementById('DayName_black').style.top = _weekday_offsety + "px";

document.getElementById('dayname').style.left = _weekday_displayoffsetx + "px";
document.getElementById('dayname').style.top = _weekday_displayoffsety + "px";
weekday = 4;

break;
case 5:
weekday = "Friday";

document.getElementById('DayName_white').src = folder + 'DayName/' + 'BaseWhite_Friday' + '.png'; 
document.getElementById('DayName_black').src = folder + 'DayName/' + 'BaseBlack_Friday' + '.png';
document.getElementById('dayname').src = folder + 'DayName/' + 'Friday' + '.png'; 
 
_weekday_offsetx = weekday_x + 13;
_weekday_offsety = weekday_y + 22 + 15;
_weekday_displayoffsetx = weekday_x + 22;
_weekday_displayoffsety = weekday_y + 25 + 15;

document.getElementById('DayName_white').style.left = _weekday_x + "px";
document.getElementById('DayName_white').style.top = _weekday_y + "px";

document.getElementById('DayName_black').style.left = _weekday_offsetx + "px";
document.getElementById('DayName_black').style.top = _weekday_offsety + "px";

document.getElementById('dayname').style.left = _weekday_displayoffsetx + "px";
document.getElementById('dayname').style.top = _weekday_displayoffsety + "px";
weekday = 5;

break;
case 6:
weekday = "Saturday";

document.getElementById('DayName_white').src = folder + 'DayName/' + 'BaseWhite_Saturday' + '.png'; 
document.getElementById('DayName_black').src = folder + 'DayName/' + 'BaseBlack_Saturday' + '.png';
document.getElementById('dayname').src = folder + 'DayName/' + 'Saturday' + '.png'; 
 
_weekday_offsetx = weekday_x + 10;
_weekday_offsety = weekday_y + 23 + 15;
_weekday_displayoffsetx = weekday_x + 16;
_weekday_displayoffsety = weekday_y + 28 + 15;

document.getElementById('DayName_white').style.left = _weekday_x + "px";
document.getElementById('DayName_white').style.top = _weekday_y + "px";

document.getElementById('DayName_black').style.left = _weekday_offsetx + "px";
document.getElementById('DayName_black').style.top = _weekday_offsety + "px";

document.getElementById('dayname').style.left = _weekday_displayoffsetx + "px";
document.getElementById('dayname').style.top = _weekday_displayoffsety + "px";
weekday = 6;

break;
default:
weekday = "Sunday";

document.getElementById('DayName_white').src = folder + 'DayName/' + 'BaseWhite_Sunday' + '.png'; 
document.getElementById('DayName_black').src = folder + 'DayName/' + 'BaseBlack_Sunday' + '.png';
document.getElementById('dayname').src = folder + 'DayName/' + 'Sunday' + '.png'; 
 
_weekday_offsetx = weekday_x + 9;
_weekday_offsety = weekday_y + 23;
_weekday_displayoffsetx = weekday_x + 13;
_weekday_displayoffsety = weekday_y + 29;

document.getElementById('DayName_white').style.left = weekday_x + "px";
document.getElementById('DayName_white').style.top = weekday_y + "px";

document.getElementById('DayName_black').style.left = _weekday_offsetx + "px";
document.getElementById('DayName_black').style.top = _weekday_offsety + "px";

document.getElementById('dayname').style.left = _weekday_displayoffsetx + "px";
document.getElementById('dayname').style.top = _weekday_displayoffsety + "px";
weekday = 0;
break;
}

if(theme == 0)
{
document.getElementById('DayName_white').style.filter = 'invert(0)';
document.getElementById('DayName_black').style.filter = 'invert(0)';
document.getElementById('dayname').style.filter = 'invert(0)';
}
else
{
document.getElementById('DayName_white').style.filter = 'invert(1)';
document.getElementById('DayName_black').style.filter = 'invert(1)';
if(weekday != "Saturday" && weekday != "Sunday")
document.getElementById('dayname').style.filter = 'invert(1)';
else
document.getElementById('dayname').style.filter = 'invert(0)';
}
oldweekday = weekday;
}
////////////////////////////////TimeName/////////////////////////////////////////////////////
if(hours != oldhours)
{
if(hours >= 4 && hours <= 7) //Early Morning
{
	TimeName = "Early Morning";
	if(TimeName != oldTimeName)
	{
document.getElementById('timename').src = folder + 'TimeName/' + 'EarlyMorning' + '.png'; 
document.getElementById('timename').style.left = TimeName_x + "px";
document.getElementById('timename').style.top = TimeName_y + "px";
     oldTimeName = TimeName;
	}
}
if(hours >= 8 && hours <= 11) //Morning
{
	TimeName = "Morning";
	if(TimeName != oldTimeName)
	{
document.getElementById('timename').src = folder + 'TimeName/' + 'Morning' + '.png'; 
document.getElementById('timename').style.left = TimeName_x + "px";
document.getElementById('timename').style.top = TimeName_y + "px";
	oldTimeName = TimeName;
	}
}
if(hours >= 12 && hours <= 14) //Afternoon
{
	TimeName = "Afternoon";
	if(TimeName != oldTimeName)
	{
document.getElementById('timename').src = folder + 'TimeName/' + 'Afternoon' + '.png'; 
document.getElementById('timename').style.left = TimeName_x + "px";
document.getElementById('timename').style.top = TimeName_y + "px";
	oldTimeName = TimeName;
	}
}
if(hours >= 15 && hours <= 17) //Daytime
{
	TimeName = "Daytime";
	if(TimeName != oldTimeName)
	{
document.getElementById('timename').src = folder + 'TimeName/' + 'Daytime' + '.png'; 
document.getElementById('timename').style.left = TimeName_x + "px";
document.getElementById('timename').style.top = TimeName_y + "px";
	oldTimeName = TimeName;
	}
}
if(hours >= 18 && hours <= 23 || hours >= 0 && hours <= 3) //Evening
{
	TimeName = "Evening";
	if(TimeName != oldTimeName)
	{
document.getElementById('timename').src = folder + 'TimeName/' + 'Evening' + '.png'; 
document.getElementById('timename').style.left = TimeName_x + "px";
document.getElementById('timename').style.top = TimeName_y + "px";
	oldTimeName = TimeName;
	}
}

    if(theme == 0)
    {
    document.getElementById('timename').style.filter = 'invert(0)';
    }
     else
    {
    document.getElementById('timename').style.filter = 'invert(1)';
    }
    
 oldhours = hours;   
}   

 }//seconds == 1
 if(seconds == 300 || flag == 0) //if counter = 3 aprx 1 second
 {
try{	 
if(key != "" && key != null && key != 'none')
{
GetWeather();
animation(_Weather,frame);
seconds = 0;
flag = 1;
}
}
catch{
	document.getElementById("weather").style.display = "none";
	document.getElementById("alert").style.display = "none";
}
}
animation(_Weather,frame);
frame++;
if(frame > 2)
frame = 0;

}
catch
{
	location.reload();
};


return(event);

}//update

function animation (icon, f)
{
	document.getElementById("weather").style.display = "inline";
	document.getElementById("alert").style.display = "inline";
   if(date > 9)
   {
   document.getElementById("white_weather").src = folder + "Weather/" + "Weather_Base_White" + ".png"; 
   document.getElementById('white_weather').style.left = weather_x + "px";
   document.getElementById('white_weather').style.top = weather_y + "px"; 

   document.getElementById("weather").src = folder + "Weather/" + icon + "_" + f + ".png";
   document.getElementById('weather').style.left = weather_x + 15 + "px";
   document.getElementById('weather').style.top = weather_y + 12  + "px";
   }

   if(date < 10)
   {
   document.getElementById("white_weather").src = folder + "Weather/" + "Weather_Base_White" + ".png"; 
   document.getElementById('white_weather').style.left = weather_x -47 + "px";
   document.getElementById('white_weather').style.top = weather_y + 4 + "px"; 

   document.getElementById("weather").src = folder + "Weather/" + icon + "_" + f + ".png";
   document.getElementById('weather').style.left = weather_x + 15 - 47 + "px";
   document.getElementById('weather').style.top = weather_y + 12 + 4 + "px";
   }
    try{
    if(theme == 0)
    {
    document.getElementById('white_weather').style.filter = 'invert(0)';
    document.getElementById('weather').style.filter = 'invert(0)';
    }
     else
    {
    document.getElementById('white_weather').style.filter = 'invert(1)';
    document.getElementById('weather').style.filter = 'invert(1)';
    }
	    }
	    catch{}

	if(_alert != "none")
	  {
		  document.getElementById("alert").style.display = "inline";
	    document.getElementById("alert").src = folder + "Weather/" + _alert + ".png";
            document.getElementById('alert').style.left = weather_x + 15 - 47 + "px";
            document.getElementById('alert').style.top = weather_y + 107 + 14 + "px";
	  }
	else
	{
         document.getElementById("alert").style.display = "none";
	}

}

function GetWeather() {
  weatherBalloon( the_location );
}

function weatherBalloon( cityID ) {
var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityID}&appid=${key}&units=metric`;
  var FeelsLike;
  var MainTemp;
  var Description;
  var Main;
  var IconID;
  var ID;
  fetch(url).then(res=>res.json())
.then(data=>{
//	console.log(data);
	FeelsLike = (data.main.feels_like);
	MainTemp = (data.main.temp);
	Description = (data.weather[0].description);
	Main = (data.weather[0].main);
	IconID = (data.weather[0].icon);
	drawWeather(Main,MainTemp,Description,IconID,FeelsLike);
	ID = data.id;
	document.getElementById("wref").href = `https://openweathermap.org/city/${ID}`;
})

}


function drawWeather(weath,temp,desc,iconid,feelslike) {
	var flag2 = 0;
	var Celcius = Math.round(parseFloat(temp));
	var Fahrenheit = Math.round((Celcius * 1.8)+ 32);
	month = new Date().getMonth()+1;
	hours = 	new Date().getHours();
  
		if(weath.includes("Clear"))
		{
			icon = "Sunny";
			if(icon != _Weather)
			{
			  _Weather = icon;
			  frame = 0;
			}
		}
  
  
  

		if(weath.includes("Thunderstorm") || weath.includes("Drizzle") || weath.includes("Rain"))
		{
			icon = "Rainy";
			if(icon != _Weather)
			{
			  _Weather = icon;
			  frame = 0;
			}
			
		}

		if(weath.includes("Clouds")||weath.includes("Mist") || weath.includes("Smoke")||weath.includes("Haze")||weath.includes("Dust")||weath.includes("Fog")||weath.includes("Sand")||weath.includes("Dust")|| weath.includes("Ash")||weath.includes("Squall")||weath.includes("Tornado"))
		{
			icon = "Cloudy";
			if(icon != _Weather)
			{
			  _Weather = icon;
			  frame = 0;
			}
		}

		if(weath.includes("Snow"))
		{
			icon = "Snow";
			if(icon != _Weather)
			{
			  _Weather = icon;
			  frame = 0;
			}
		}
		
		
//////////////////////Warnings//////////////////////////////////////////////////////////
		if(weath.includes("Tornado") && flag2 == 0)
		{ 
			_alert = "TyphoonWarning";
			flag2 = 1;
		} //tornado?

		 if((weath.includes("Thunderstorm") || weath.includes("Drizzle") || 			         weath.includes("Rain")) && flag2 == 0)
		  {
                    if((desc.includes("heavy") || desc.includes("extreme")) && flag2 == 0)
		     {
			_alert = "TorrentialRain";
			flag2 = 1;

		     }
	
	         } //heavyrain?

                 if((month == 1 || month == 2 || month == 10 || month == 11 || month == 12) && flag2 == 0)
		{
			_alert = "FluSeason";
			flag2 = 1;
		}

		 if((month == 3 || month == 4) && flag2 == 0)
		{
			_alert = "PollenWarning";
			flag2 = 1;
		}
		
		 if(temp >= 30 && iconid.includes("d") && flag2 == 0)
		{
			_alert = "HeatWave";
			flag2 = 1;

		}
		 if(temp >= 30 && iconid.includes("n") && flag2 == 0)
		{
			_alert = "HotNight";
			flag2 = 1;

		}

		if(flag2 == 0)
		{
			_alert = "none";
			flag2 = 1;

		}
		    
}//weather




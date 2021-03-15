export const command = "pmset -g batt"; //check if powersupply is connect + charge level
 const DIR_NAME = 'Persona_5_Theme';
 const Vidsrc = (fileName) => `${DIR_NAME}/Video_Assets/${fileName}`
var change_video = 1; //Change video every x minutes
var rv = 0;
var orv;
var flag = 0;
var status = 'playing';
export const refreshFrequency = 1000; // the refresh frequency in milliseconds
var t = (refreshFrequency/1000) * change_video * 60;
var seconds = 0;
var videos = ['Joker.mp4','Mona.mp4','Skull.mp4','Panther.mp4','Fox.mp4','Queen.mp4','Oracle.mp4','Oracle2.mp4','Noir.mp4','Crow.mp4','Violet.mp4','Twins.mp4','Lavenza.mp4','Maruki.mp4'];

export const className =`
    position: absolute;
    top: 0px; 
    right: 0px; 
    bottom: 0px; 
    left: 0px;
    overflow: hidden;
    box-sizing: border-box;

.twp-video-background video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    box-sizing: border-box;
    object-fit: cover; 
}

.twp-video-foreground{
    padding-bottom: 56.25%;
    box-sizing: border-box; 
}

.twp-video-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    box-sizing: border-box; 
}
`
export const render = ({output}) => {
  return (
<div className = "twp-video-background">
	<div className = "twp-video-foreground">
          <video id="vid" autoPlay loop>
       <source src= {Vidsrc(0)} type="video/mp4"/>
          </video>
       </div>
       <div>
       <p id ="test"></p>
       </div>
</div>
  );
}

export const updateState = (event, previousState) => {
try{ 
   if (event.error) {
          console.error('ERROR: ', event.error)
          return previousState
        }
        const power_source = event.output.split(' ')[3].replace("'", "");
        var rv = getRandomIntInclusive(0,videos.length-1);
        var l = videos.length-1;
        var randomnumber = rv;
        if(randomnumber == orv || randomnumber > l || randomnumber < 0)
        {
            while(randomnumber == orv || randomnumber > l || randomnumber < 0)
            {
             rv = getRandomIntInclusive(0,l);
             randomnumber = rv;
            }
        }
    
    if(seconds == t || flag == 0)
    {    
    document.getElementById('vid').src = Vidsrc(videos[rv]);
    orv = rv;
    seconds = 0;
    flag = 1;
    }
    if(power_source == 'Battery')
    {
    document.getElementById('vid').pause();
    status = 'pause';
    }
    else
    {
    document.getElementById('vid').play();
    status = 'playing'
    }
    
        if(status == 'playing')
        seconds++;
}
catch
{
    location.reload();
}
    return(event);

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

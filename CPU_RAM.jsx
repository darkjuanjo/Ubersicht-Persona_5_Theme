export const refreshFrequency = 1000; // the refresh frequency in milliseconds
const DIR_NAME = 'Persona_5_Theme'; 
const Img = (fileName) => `${DIR_NAME}/Stat_Assets/${fileName}`;
export const command = `sh ${DIR_NAME}/Scripts/CPU_RAM.sh`
var top = 0;
export const className =`
    position: absolute;
    top: 450px;  //250
    right: 0px; 
    bottom: 0px; 
    left: 1130px; //0
    width:190px;
    height:200px;
    Opacity: 80%;
    overflow: hidden;
    box-sizing: border-box;
    
    .GD_1{
        position: absolute;
        top: 88px; //90
        left: 25px;
        bottom: 0px;
        height:20px;
        font-family: "Tahoma", serif;
    }
    
    .GD_2{
        position: absolute;
        top: 88px; 
        left: 37px;
        bottom: 0px;
        height:20px;
        font-family: "Tahoma", serif;
    }
    
    .GD_3{
        position: absolute;
        top: 88px; 
        left: 48px;
        bottom: 0px;
        height:20px;
        font-family: "Tahoma", serif;
    }
    
    .PD_1{
        position: absolute;
        top: 84px; 
        left: 72px;
        bottom: 0px;
        height:20px;
        font-family: "Tahoma", serif;    
    }  
    
    .PD_2{
          position: absolute;
          top: 84px; 
          left: 85px;
          bottom: 0px;
          height:20px;
          font-family: "Tahoma", serif;     
      }   
      
      .PD_3{
          position: absolute;
          top: 84px; 
          left: 96px;
          bottom: 0px;
          height:20px;
          font-family: "Tahoma", serif;      
      } 
            
      .green_rectangle{
          position: absolute;
          top: 112px; 
          left: 27px;
          height:4px;
          stroke-width: 2px;
          transform: rotate(-7.1deg);//-7.1 
      }
                        
      .pink_rectangle{
          position: absolute;
          top: 118px; 
          left: 43px;
          height:4px;
          stroke-width: 2px;
          transform: rotate(-6.8deg);
          
          .test{
            color:green;
          }
`
export const render = ({output}) => {
  return (
    <div>
       <img id="player"></img>
       <span className = "GD_1" id="GD1"><b><i></i></b></span>
       <span className = "GD_2" id="GD2"><b><i></i></b></span>
       <span className = "GD_3" id="GD3"><b><i></i></b></span>
       <span className = "PD_1" id="PD1"><b><i></i></b></span>
       <span className = "PD_2" id="PD2"><b><i></i></b></span>
       <span className = "PD_3" id="PD3"><b><i></i></b></span>
       <div></div>
       <div></div> 
       <div className = "green_rectangle" id = "grn_rectangle"></div>  
       <div className = "pink_rectangle" id = "pnk_rectangle"></div>  
    </div>
  );
}

export const updateState = (event, previousState) => {

   if (event.error) {
          console.error('ERROR: ', event.error)
          return previousState
        }
    let imgsrc;
    let g_on = "#67ffdb"; 
    let g_off = "#214d42";
    let g; //value for green
    let gn; //px value for green
    let p; 
    let pn; 
    let g1;
    let g2;
    let g3;
    let p1; 
    let p2; 
    let p3; 
    let p_on = "#ff64e8";
    let p_off = "#66285d";
    imgsrc = Img('Joker.png');
    let data = event.output.split('\n');;
    let raw_cpu;
    let cores;
    let cpu;
   try{

     if(top == 0)
     {
    raw_cpu = data[1].split(' ')[2];
    cores = parseInt(data[2].split(' ')[2]);
    cpu = Math.floor(raw_cpu/cores);
    }
    else
    {
        raw_cpu = parseFloat(data[8].split(' ')[3]) + parseFloat(data[8].split(' ')[4]);
        cores = parseInt(data[2].split(' ')[2]);
        cpu = Math.floor(raw_cpu/cores); 
    }
    if(cpu < 100)
    {
      g = '0' + cpu;
    }
    else 
    g = cpu;
    gn = Math.ceil((g * 80)/100) + "px"; //(value * 80px)/100 to get px conversion
let gn2 = parseInt(gn);
    g1 = parseInt(g/100);
    g2 = parseInt((g/10)%10);
    g3 = parseInt(g%10);
    
    /////////////////Image///////////////////
   document.getElementById('player').src = Img('Joker.png');
   document.getElementById('player').style.width = "150px";
   ///////////////////////////////////////////////
   
   //CPU Digits//////////////////////////////////////////////////////////////
   document.getElementById('GD1').innerHTML = g1;
   document.getElementById('GD2').innerHTML = g2;
   document.getElementById('GD3').innerHTML = g3;      
   if(g1 != 0)
   {
   document.getElementById('GD1').style.color = g_on;
   document.getElementById('GD1').style.font = "italic bold 20px arial,serif";
   }
   else
   {
   document.getElementById('GD1').style.color = g_off;
   document.getElementById('GD1').style.font = "italic bold 19.5px arial,serif";
   }
   
   if(g >= 100 || g < 100 && g2 != 0)
   {
   document.getElementById('GD2').style.color = g_on;
   document.getElementById('GD2').style.font = "italic bold 20px arial,serif";
   }
   else
   {
   document.getElementById('GD2').style.color = g_off;
   document.getElementById('GD2').style.font = "italic bold 19.5px arial,serif";
   }
   
   if(g >= 10 || g < 10 && g3 != 0)
   {
   document.getElementById('GD3').style.color = g_on;
   document.getElementById('GD3').style.font = "italic bold 20px arial,serif";
   }
   else
   {
   document.getElementById('GD3').style.color = g_off;
   document.getElementById('GD3').style.font = "italic bold 19.5px arial,serif";
   }
   //////////////////////////////////////////////////////////////////////////
   //////////////create Greenbar/////////////////////////////////////////
   
   if(gn2 <= 10)
   {
   document.getElementById('grn_rectangle').style.width = gn;
   document.getElementById('grn_rectangle').style.background = g_on;
   document.getElementById('grn_rectangle').style.top = '114px';
   document.getElementById('grn_rectangle').style.left = '27px';  
   document.getElementById('grn_rectangle').style.height = '4px';
   document.getElementById('grn_rectangle').style.transform = 'rotate(-7.4deg) skewX(-20deg)';     
   }
   
   if(gn2 > 10 && gn2 <= 13)
   {
   document.getElementById('grn_rectangle').style.width = gn;
   document.getElementById('grn_rectangle').style.background = g_on;
   document.getElementById('grn_rectangle').style.top = '113px';
   document.getElementById('grn_rectangle').style.left = '27px';  
   document.getElementById('grn_rectangle').style.height = '4px';
   document.getElementById('grn_rectangle').style.transform = 'rotate(-7.4deg) skewX(-20deg)';     
   }
   
   
   if(gn2 > 13 && gn2 <= 23)
   {
   document.getElementById('grn_rectangle').style.width = gn;
   document.getElementById('grn_rectangle').style.background = g_on;
   document.getElementById('grn_rectangle').style.top = '113px';
   document.getElementById('grn_rectangle').style.left = '27px';  
   document.getElementById('grn_rectangle').style.height = '4px';
   document.getElementById('grn_rectangle').style.transform = 'rotate(-7.1deg) skewX(-20deg)';     
   }
   if(gn2 > 23 && gn2 <= 30)
   {
   document.getElementById('grn_rectangle').style.width = gn;
   document.getElementById('grn_rectangle').style.background = g_on;
   document.getElementById('grn_rectangle').style.top = '111.5px';
   document.getElementById('grn_rectangle').style.left = '27px';  
   document.getElementById('grn_rectangle').style.height = '4px';
   document.getElementById('grn_rectangle').style.transform = 'rotate(-8.3deg) skewX(-20deg)';     
   }
   
   if(gn2 > 30 && gn2 <= 40)
   {
   document.getElementById('grn_rectangle').style.width = gn;
   document.getElementById('grn_rectangle').style.background = g_on;
   document.getElementById('grn_rectangle').style.top = '111.5px';
   document.getElementById('grn_rectangle').style.left = '27px';  
   document.getElementById('grn_rectangle').style.height = '4px';
   document.getElementById('grn_rectangle').style.transform = 'rotate(-8.3deg) skewX(-20deg)';     
   }
   
   if(gn2 > 40 && gn2 <= 50)
   {
   document.getElementById('grn_rectangle').style.width = gn;
   document.getElementById('grn_rectangle').style.background = g_on;
   document.getElementById('grn_rectangle').style.top = '110px';
   document.getElementById('grn_rectangle').style.left = '27px';  
   document.getElementById('grn_rectangle').style.height = '4px';
   document.getElementById('grn_rectangle').style.transform = 'rotate(-8.5deg) skewX(-20deg)';     
   }
   
   if(gn2 > 50 && gn2 <= 60)
   {
   document.getElementById('grn_rectangle').style.width = gn;
   document.getElementById('grn_rectangle').style.background = g_on;
   document.getElementById('grn_rectangle').style.top = '110px';
   document.getElementById('grn_rectangle').style.left = '27px';  
   document.getElementById('grn_rectangle').style.height = '4px';
   document.getElementById('grn_rectangle').style.transform = 'rotate(-8.1deg) skewX(-20deg)';     
   }
   
   if(gn2 > 60 && gn2 <= 80)
   {
   document.getElementById('grn_rectangle').style.width = gn;
   document.getElementById('grn_rectangle').style.background = g_on;
   document.getElementById('grn_rectangle').style.top = '110px';
   document.getElementById('grn_rectangle').style.left = '27px';  
   document.getElementById('grn_rectangle').style.height = '4px';
   document.getElementById('grn_rectangle').style.transform = 'rotate(-8.1deg) skewX(-20deg)';    
   }
    
   //////////////////////////////////////////////////////////////////////
    let used_mem = parseInt(data[10].split(' ')[1]);
    let wired_mem = parseInt(data[10].split(' ')[3].replace("(",""));
    let total_mem = parseInt(data[3].split(' ')[2]);
    let mem = Math.floor(((used_mem - wired_mem)/total_mem)*100);
    if(used_mem < 100)
    {
    p = '0' + mem;
    }
    p = mem;
    pn = Math.ceil((p * 72)/100) + "px"; //(value * 80px)/100 to get px conversion
    let pn2 = parseInt(pn);
    p1 = parseInt(p/100);
    p2 = parseInt((p/10)%10);
    p3 = parseInt(p%10);
         
   //Pink Digits/////////////////////////////////////
   document.getElementById('PD1').innerHTML = p1;
   document.getElementById('PD2').innerHTML = p2;
   document.getElementById('PD3').innerHTML = p3;
      
   if(p1 != 0)
   {
   document.getElementById('PD1').style.color = p_on;
   document.getElementById('PD1').style.font = "italic bold 20px arial,serif";
   }
   else
   {
   document.getElementById('PD1').style.color = p_off;
   document.getElementById('PD1').style.font = "italic bold 19.5px arial,serif";
   }
   
   if(p >= 100 || p < 100 && p2 != 0)
   {
   document.getElementById('PD2').style.color = p_on;
   document.getElementById('PD2').style.font = "italic bold 20px arial,serif";
   }
   else
   {
   document.getElementById('PD2').style.color = p_off;
   document.getElementById('PD2').style.font = "italic bold 19.5px arial,serif";
   }
   
   if(p >= 10 || p < 10 && p3 != 0)
   {
   document.getElementById('PD3').style.color = p_on;
   document.getElementById('PD3').style.font = "italic bold 20px arial,serif";
   }
   else
   {
   document.getElementById('PD3').style.color = p_off;
   document.getElementById('PD3').style.font = "italic bold 19.5px arial,serif";
   }           
    ///////////////////////////////////////////////////////////////////////
    
    //////////////Create Pinkbar/////////////////////////////////////////
        
    if(pn2 <= 4)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '123.5px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-11deg) skewX(-20deg)';     
    }
    
    if(pn2 > 4 && pn2 <= 7)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '123px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-11deg) skewX(-20deg)';     
    }
    
    if(pn2 > 7 && pn2 <= 12)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '122.5px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-11deg) skewX(-20deg)';     
    }
    
    if(pn2 > 12 && pn2 <= 17)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '122px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-11deg) skewX(-20deg)';     
    }
    
    if(pn2 > 17 && pn2 <= 23)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '121.5px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-11deg) skewX(-20deg)';     
    }
    
    if(pn2 > 23 && pn2 <= 27)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '121px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-11deg) skewX(-20deg)';     
    }
    
    
    if(pn2 > 27 && pn2 <= 35)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '120.5px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-11.3deg) skewX(-20deg)';     
    }
    
    if(pn2 > 35 && pn2 <= 43)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '119.5px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-10.5deg) skewX(-20deg)';     
    }
    
    if(pn2 > 43 && pn2 <= 54)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '119px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-12deg) skewX(-20deg)';     
    }
    
    if(pn2 > 54 && pn2 <= 60)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '118px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-11.5deg) skewX(-20deg)';     
    }
    
    if(pn2 > 60 && pn2 <= 65)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '117px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-11.5deg) skewX(-20deg)';     
    }
    
    
    if(pn2 > 65 && pn2 <= 72)
    {
    document.getElementById('pnk_rectangle').style.width = pn;
    document.getElementById('pnk_rectangle').style.background = p_on;
    document.getElementById('pnk_rectangle').style.top = '117px';
    document.getElementById('pnk_rectangle').style.left = '40px';  
    document.getElementById('pnk_rectangle').style.height = '4px';
    document.getElementById('pnk_rectangle').style.transform = 'rotate(-12deg) skewX(-20deg)';     
    }
    ////////////////////////////////////////////////////////////////////
    
     }
     catch
     {
      location.reload;   
     } 
    return(event);

}

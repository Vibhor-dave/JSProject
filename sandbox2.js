import data from './data.json' assert {type: 'json'};

/*var cards = document.getElementsByClassName('card');
console.log(cards[0].getElementsByClassName("content").innerHTML);


for(var i = 0;i < cards.length;i++){

    var divs = cards[i].getElementsByClassName("content");
            console.log(divs[0]);

            divs[0].innerHTML = "Ride Id :" +data['Ride Id'] + "<br>"
            + "Origin Station :" + data['Origin Station'] + "<br>"
            + "station_path :" + data['station_path'] + "<br>"
            + "Date :" + data['Date'] + "<br>"
            + "Distance :" + data['Distance'] ;
        
}*/

let cards = document.getElementById('main2').getElementsByClassName("card");
//console.log(cards);
let mainfunc=document.getElementById("main3");
let cards2=mainfunc.getElementsByClassName("card");
let htmlstring='<div class ="map"></div><div class = "content"></div><div class ="cs"> <p class="sqc">City Name</p> <p class ="sqc">State Name</p></div>';
let present='15:00';

let i=0;
let k=0;
for(let j=0 ; j<data.length ; j++)
{
    
    console.log(present<data[j]['time']);
    //console.log(data[j]['id']);
    //console.log(cards[i].getElementsByClassName("content").innerHTML);
    if(present<data[j]['time']){
        console.log(data[j]['id'] + " in loop 1");
        let divs=cards[i].getElementsByClassName("content");
        divs[0].innerHTML="Ride Id :" +data[j]['id'] + "<br>"
        + "Origin Station :" + data[j]['original_station_code'] + "<br>"
        + "station_path :" + data[j]['station_path'] + "<br>"
        + "Date :" + data[j]['date'] + "th " + data[j]['month'] + " " + data[j]['time'] + "<br>"
        + "destination_station_code :" + data[j]['destination_station_code'] ;
        i++;
        //console.log(cards[i-1].getElementsByClassName("content").innerHTML);
        //console.log(cards[i-1]);
    }
    else{
        console.log(data[j]['id']);
        let divs2=cards2[k].getElementsByClassName("content");
        divs2[0].innerHTML="Ride Id :" +data[j]['id'] + "<br>"+ "Origin Station :" + data[j]['original_station_code'] + "<br>"+ "station_path :" + data[j]['station_path'] + "<br>"+ "Date :" + data[j]['date'] + "th " + data[j]['month'] + " " + data[j]['time'] + "<br>"+ "destination_station_code :" + data[j]['destination_station_code'] ;
        k++;
    } 
}

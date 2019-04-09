const player1="john"
const player2="jake"
var p1=0
var p2=0
var weapons = ["Rock", "Paper", "Scissors"];
var rounds=0

while (p1<3 && p2<3){
    var p1choice=Math.floor(Math.random() * weapons.length);
    var p2choice=Math.floor(Math.random() * weapons.length);
    console.log(player1, " plays ", p1choice)
    console.log(player2, " plays ", p2choice)

    rounds++;
    console.log("Round " + rounds);

    //R=0 P=1 S=2
    if((p1choice === 0 && p2choice === 2)||(p1choice === 1 && p2choice === 0) || (p1choice === 2 && p2choice === 1) ){
        p1++;
        console.log(player1 +"wins");
        console.log(player1 + " has " +p1+ " points");

    }else if(p1choice === p2choice){
            console.log('Tie');
            
    }else{
        p2++;
        console.log(player2 +"wins");
        console.log(player2 + " has " +p2+ " points");
    }

}













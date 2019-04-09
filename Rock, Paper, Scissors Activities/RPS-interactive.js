//const player1="john"
//const player2="jake"
const player1= prompt('Please enter your name')
const player2= 'Computer'
var p1=0
var p2=0
var weapons = ["Rock", "Paper", "Scissors"];
var weaponOfChoice = weapons[Math.floor(Math.random() * weapons.length)];
var rounds=0

while (p1<3 && p2<3){
    //var p1choice=[Math.floor(Math.random() * weapons.length)];
    var p1choice= prompt('Enter:Rock, Paper, or Scissors')
    var p2choice=weapons[Math.floor(Math.random() * weapons.length)];

    alert(player1+ " plays "+ p1choice)
    alert(player2+ " plays "+ p2choice)

    rounds++;
    alert("Round " + rounds);

    //R=0 P=1 S=2
    if((p1choice == 'Rock' && p2choice == 'Scissors')||(p1choice == 'Paper' && p2choice=='Rock') || (p1choice == 'Scissors' && p2choice== 'Paper') ){
        p1++;
        alert(player1 +"wins")
        alert(player1 + " has " +p1+ " points")
    }else if(p1choice == p2choice){
            alert('Tie')
            
    }else{
        p2++;
        alert(player2 +"wins")
        alert(player2 + " has " +p2+ " points")
    }

    if( p1 == 3){
        document.write(player1 + " is the Champion")
    }else if(p2 == 3){
       document.write(player2 + " is the Champion")
    }

}













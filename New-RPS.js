// R,P,S using Functions, objects, and properties




//Defined a hands array
var hand = ['Rock', 'Paper', 'Scissors'];
// Define function getHand() that returns a hand from array using parseInt
function getHand(){
    return hand[parseInt(Math.random()*10)%3]
}
// define 4 objects and 4 players w/ name, weapon, and wins
var player1 = {
    name: 'John',
    weapon: getHand,
    win: 0
}

var player2 = {
    name: 'Jake',
    weapon: getHand,
    win: 0
}
var player3 = {
    name: 'Joe',
    weapon: getHand,
    win: 0
}

var player4 = {
    name: 'Jane',
    weapon: getHand,
    win: 0
}

/*Define a function called playRound() that
        Takes two player objects as arguments
        Gets hands from each
        Determines the winner
        Logs the hands played and name of the winner.
        If its a tie, log the hands played and "it's a tie".
        Returns the winner object (null if no winner)
*/

function playRound(player1, player2){
    
    var p1choice  = player1.weapon();
    var p2choice = player2.weapon();
    console.log(player1.name, " plays ", p1choice)
    console.log(player2.name, " plays ", p2choice)
// 0-R 1- p 2 = S
    if((p1choice === 'Rock' && p2choice=== 'Scissors')||(p1choice == 'Paper' && p2choice=='Rock') || (p1choice == 'Scissors' && p2choice=='Paper') ){
        player1.win++;
        console.log(player1.name +"wins")
        console.log(player1.name + " has " +player1.win+ " points")
    }else if(p1choice == p2choice){
            console.log('Tie')
            
    }else{
        player2.win++;
        console.log(player2.name +"wins")
        console.log(player2.name + " has " +player2.win+ " points")
    }
        
}

/* Define a function called playGame() that takes 
arguments player1, player2, and playUntil.
*/
function playGame(player1, player2, playUntil){

    // Play rounds until one of the players wins playUntil hands
    while( player1.win < playUntil && player2.win < playUntil){
        playRound(player1, player2);
    }
}

/*Define a function caled playTournament()
Take 4 players and playUntil as arguments
*/
function playTournament(player1, player2, player3, player4, playUntil){
    playGame(player1, player2,5)
    playGame(player3, player4, 5)
    
    if (player1.win == playUntil){
      var  game1winner = player1
    }else if(player2.win== playUntil)  {
        var game1winner = player2
    }

   // console.log(game1winner)
   
    if (player3.win == playUntil){
        var  game2winner = player3
      }else if( player4.win == playUntil) {
           var game2winner = player4
      }
      
    //console.log(game2winner)
    
        //resets wins for the tournament
        game1winner.win = 0
        game2winner.win = 0

    playGame( game1winner,game2winner, playUntil)
        
       
    if( game1winner.win == playUntil){
        console.log(game1winner.name + " is the world Champion")
    }else if(game2winner.win == playUntil){
        console.log(game2winner.name + " is the world Champion")
    }

}
playTournament(player1, player2, player3, player4, 5)


//playGame(player1, player2, 5);
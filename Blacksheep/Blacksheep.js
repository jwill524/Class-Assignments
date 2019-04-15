var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1
    },
      {
      'down the lane': 1
    }
  ];
   
  
  var haveYouAnyWool = function() {
      for (var i = 0; i < woolOwners.length-1; i++) {
      var totalBags = totalBags + i;
      }
      return (i);
  };
  
  var bags = haveYouAnyWool();
  
  function baabaaBlackSheep() {
      console.log("BaaBaa BlackSheep have you any wool?");
      if (bags > 0) {
          console.log("yes sir, yes sir " + bags + " bags full");
    }
  }
  
  
  function oneForMy() {
    for (var i = 0; i < woolOwners.length - 2; i++) { //debugger
        people = Object.keys(woolOwners[i])
       person = people.toString();
       console.log('One for my ' + person);
   
   }
  }
  
  baabaaBlackSheep();
  oneForMy();
  
  var boy = Object.keys(woolOwners[2]);
  var littleBoy = boy.toString();
  
  var loc = Object.keys(woolOwners[3])
  var whereHeLives = loc;
  console.log("And one for the " + littleBoy + " that lives " + whereHeLives);
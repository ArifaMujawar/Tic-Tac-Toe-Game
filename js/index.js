var winningArray=[ [1,2,3],
                   [4,5,6],
                   [7,8,9],
                   [1,4,7],
                   [2,5,8],
                   [3,6,9],
                   [3,5,7],
                   [1,5,9] ];
var flag=0,start=0,stop=0;
var computerChoice = [];
 var  userChoice = [];
 var  usedNumbers = [];
 var possibleAns = [];


function secondMove(){
  var second_move = possibleAnswers(computerChoice[0]);
  console.log("The second computer move is: " + second_move)
  AddData(second_move,1); 
}

function thirdMove(){
  console.log("USER ARRAY IS:"+userChoice);
 
   var doesCompWin = checkWinningArray(computerChoice[0], computerChoice[1])
    console.log("type: "+ typeof doesCompWin );
    console.log("User choice array in third move: " + userChoice);
    for (index in userChoice)
      console.log(typeof userChoice[index]);
    console.log("First condition: " + userChoice.indexOf(doesCompWin));
    console.log("Second condition: " + doesCompWin);
   if(userChoice.indexOf(doesCompWin) === -1 &&  doesCompWin !==-1){
           
    console.log("Computer winning move is: " + doesCompWin)
    console.log("Comp array is: "+computerChoice);
    AddData(doesCompWin,1);                                 //3rd move of comp
     console.log("Computer move added"+doesCompWin);
     
         //Check if computer won???
    var WON=whoWon(computerChoice);
    if(WON===1){
       console.log("COMPUTER WON!!!");
      callModal(1);
      stop=1;
      return;
       }
                              
 
     }else{
      var doesUserWin = checkWinningArray(userChoice[0], userChoice[1])
       if(userChoice.indexOf(doesUserWin)==-1 && doesUserWin !== -1 ){
            console.log("User winning move is: " + doesUserWin)
            console.log("user array is: "+userChoice);
           
                
             AddData(doesUserWin,1);            //3rd move of comp
             console.log("Computer's move is: "+doesUserWin);
          
          
      } else{
        console.log("Finding new move");
      var third_move = possibleAnswers(computerChoice[1]);
        console.log("The third computer move is: " + third_move)
         AddData(third_move,1);                            //3rd move of comp
     }
     }
  
}

function fourthMove(){
 var doesCompWin = CheckIfWin(computerChoice)
   
   if(userChoice.indexOf(doesCompWin)==-1 && doesCompWin !==-1){
       
    console.log("Computer winning move is: " + doesCompWin)
    console.log("Comp array is: "+computerChoice);
    AddData(doesCompWin,1);                                 //4th move of comp
     console.log("Computer move added:"+doesCompWin);
           //Check if computer won???
        var WON=whoWon(computerChoice);
        if(WON===1){
        console.log("COMPUTER WON!!!");
        callModal(1);
          stop=1;
      return;
       }
                              
   
     }else{
  
 
 var doesUserWin = CheckIfWin(userChoice);
   if(userChoice.indexOf(doesUserWin)==-1 &&  doesUserWin !==-1){
  AddData(doesUserWin,1);                      //4th move of comp
  console.log("Computer's move is: "+doesUserWin);
   }else{
     //find some other num to input
     console.log("Finding new move");
      var fourth_move = possibleAnswers(computerChoice[1]);
        console.log("The fourth computer move is: " + fourth_move)
         AddData(fourth_move,1);      
   }
     }
}

function fifthMove(){
 // var doesUserWin = CheckIfWin(userChoice);
//   if(userChoice.indexOf(doesUserWin)==-1 &&  doesUserWin !==-1){
//  AddData(doesUserWin,1);                                       //5th move of comp
 // console.log("Computer's move is: "+doesUserWin);
  // }else{
     for(var i=1;i<=9;i++){
       if(usedNumbers.indexOf(i)===-1){
          console.log("last move of computer: "+i);
          AddData(i,1);
          }
     }
     callModal(0);
     stop=1;
     console.log("Match was a tie");
   //}
}

function callModal(value){
  // if 0 tie ,1 comp, 2 user
  console.log("In modal()");
  var modal = document.getElementById('myModal');
  var close = document.getElementsByClassName("close")[0];
  //modal.style.display = "block";
  if(value===0){
    modal.style.display = "block";
    $(".modal-content #res").html("Match is tie!!");
     console.log("Showing its a Tie");
     }else if(value === 1){
       modal.style.display = "block";
        $(".modal-content #res").html("Computer Won the Match!!");
         console.log("Showing Computer Won");
      }else if(value === 2){
        modal.style.display = "block";
         $(".modal-content #res").html("User Won the Match!!");
         console.log("Showing User Won");
              }
  close.onclick = function() {
    modal.style.display = "none";
     window.location.reload(true);
    }
  
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
       window.location.reload(true);
         }
    }
 
}


$('#startBtn').click(function(){
  start=1;
  console.log("Making first move");
  var randNum=Math.floor((Math.random() * 9) + 1);

  if(randNum % 2 == 0){
    randNum += 1; 
  }

  console.log("Computer's choice: " + randNum);
  AddData(randNum,1); 
});


// What you function takes as arguments and what it returns.
function possibleAnswers(fChoice){
  console.log("Possible values of "+ fChoice);
  
  for(var q=0;q<winningArray.length;q++){
    for(var w=0;w<3;w++){
      if(winningArray[q][w]==fChoice){
        possibleAns.push(winningArray[q]);
      }
    }
  }
  
  // for each of the possible answers in a array, output if that number is free, used by user or computer.
  possible_next_move = []
  for (var items in possibleAns) {
    for (var item in possibleAns[items]) {
      if (possibleAns[items][item] !== fChoice && usedNumbers.indexOf(possibleAns[items][item]) === -1) {
        // Store these items in an array here.
        possible_next_move.push(possibleAns[items][item])
      } 
    }
    
  }
  console.log("Printing the possible moves list "+possible_next_move)
 
  var ans=CheckMoves(fChoice,possible_next_move);
  if(ans=== undefined){
    ans=CheckMoves(fChoice,possible_next_move);
  }
  
  return ans
}



 function CheckMoves(fChoice,arr){
   var res=0;
  // var randMove=Math.floor((Math.random()*(arr.length-1)));
  //check if 3rd num used by user
 
   for(var p=0;p<arr.length;p++){
     
      res=checkWinningArray(fChoice,arr[p]);
           if(usedNumbers.indexOf(res)==-1 && res !== -1){
        
             console.log("Result is: "+res);
              return res;
              }else{
                console.log("Need to fix, checking only for one choice,check for whole comp choices");
               //create a random number from 1 to 9 which is not used
                var num=Math.floor((Math.random() * 9)+1);
                if(usedNumbers.indexOf(num)==-1){
                   return num;
                   }
              }
   }
 }

function CheckIfWin(Choice){
  
      for(var c=0;c<Choice.length-1;c++){
        for(var k=c+1;k<Choice.length;k++){
            //console.log(Choice[c]+" "+Choice[k]);
             doesUserWin = checkWinningArray(Choice[c], Choice[k])
                  if(doesUserWin!==-1 && usedNumbers.indexOf(doesUserWin)==-1){
                     // console.log("User winning move is: " + doesUserWin)
                        return doesUserWin;
                     }
        }
      }
  return -1;
}

 function checkWinningArray(num1,num2){
   var temp=0;
   if(num1>num2){
     temp=num1;
      num1=num2;
     num2=temp;
      }
  for(var c=0;c<winningArray.length;c++ ){
   if((winningArray[c][0]===num1 && winningArray[c][1] ===num2) || (winningArray[c][0]===num2 && winningArray[c][1] ===num1)){
       console.log("1 is: "+ winningArray[c][0]+"  "+winningArray[c][1]+"  "+num1 +" "+num2); 
          return winningArray[c][2];
    }else if((winningArray[c][1]===num1 && winningArray[c][2]===num2)|| (winningArray[c][1]===num2 && winningArray[c][2]===num1)){
      console.log("2 is: "+ winningArray[c][1]+"  "+winningArray[c][2]+"  "+num1 +" "+num2);   
          return winningArray[c][0];
    }else if((winningArray[c][2]===num1 && winningArray[c][0]===num2)||(winningArray[c][2]===num2 && winningArray[c][0]===num1)){
      console.log("3 is: "+winningArray[c][2]+"  "+winningArray[c][0]+"  "+num1 +" "+num2);   
          return winningArray[c][1];
    }

  }
   return -1;
}



function whoWon(array){
  array.sort();
  console.log("Sorted arr:"+array);
  for(var ele=0;ele<winningArray.length;ele++){
       
    // pass array to CheckIfWin and check if third num is in that array
    var Win;
    for(var c=0;c<array.length-1;c++){
        for(var k=c+1;k<array.length;k++){
          
             Win = checkWinningArray(array[c], array[k])
                  if(Win!==-1 && array.indexOf(Win)!==-1){
                     console.log("Won!!!"+"   "+Win+" "+array[c]+" "+array[k]);
                        return 1;
                     }
        }
      }
    
  }
  return 0;
}




function AddData ( num, flag1 ){
  num=Number(num);
  if(flag1==1){
     //it is Computer Move
     computerChoice.push(num);
     usedNumbers.push(num);
     $("#"+num).html('X').css({'color': '#0000cc','font-size': "70px"});
    //$('#'+num).css({'font-size': "70px"});
    
     }else{
       userChoice.push(num);
       usedNumbers.push(num);
       console.log("user choice: "+ userChoice);
        $("#"+num).html('0').css({'font-size': "70px"});
        }
}

$('span').click(function(e){
  if(start === 0 ||   stop===1){
     alert("Please click the start button!");
    return;
     }
var userNum = e.currentTarget.id;
  console.log("UserChoice is:"+userNum);
  if(userNum.length ===0){
    console.log("same prob");
     return;
     }
  
   
  AddData(userNum,2);     
    flag++;
       console.log("Flag is:"+flag);
  if(flag === 1){
     secondMove();
     }else if(flag=== 2){
              thirdMove();
       if(stop===1){
          return;
          }
      }else if(flag===3){
                var WON=whoWon(userChoice);
                if(WON===1){
                console.log("USER WON!!!");
                  callModal(2);
                return;
                          }
                  fourthMove();   
              if(stop===1){
               return;
                 }
       }else if(flag===4){
          var WON=whoWon(userChoice);
                if(WON===1){
                console.log("USER WON!!!");
                  callModal(2);
                return;
                          }
           fifthMove();
         return;
                       }else{
                         return;
                       }
 
});
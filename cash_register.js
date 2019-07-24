function checkCashRegister(price, cash, cid) {
  //local array
  let myCid = [...cid.reverse()];

  //regex vars
  let dollarsRegex = /[^.]+/
  let centsRegex = /[^.]+$/
  
  //instantiate return obj
  let returnObj = {
    status: "OPEN",
    change: []
  }

  //calculate the change due
  let changeDue = parseFloat(cash - price);

  //get dollars and cents  
  let dollars = changeDue.toString().match(dollarsRegex);
  let cents = "." + changeDue.toString().match(centsRegex);
  
  //check if register has exact change
  let regTotal = 0;
  for (let i = 0; i < cid.length; i++){
    regTotal = regTotal + cid[i][1]
  }
  if (changeDue == regTotal) {
    returnObj.status = "CLOSED"
    returnObj.change = cid.reverse()
    return returnObj
  }

  //loop through register to calculate change that is needed
  for (let moneyType in myCid) {
    let mod = 0;

    //handle each case for the different dollar amounts
    switch (myCid[moneyType][0]) {
      case "ONE HUNDRED":
        //set the var to see if the change can be divided by the dollar amount
        mod = 100
          
        //get divide times
        let divideTimes = (dollars / mod).toString().match(dollarsRegex);

        //if the change amount is more then the register amount just minus it
        if (dollars > myCid[moneyType][1]) {
          //reduce the amount due
          dollars = dollars - myCid[moneyType][1];
          //add to register output
          returnObj.change.push(["ONE HUNDRED", myCid[moneyType][1]])
        }  
        //if you can't just subtract it all, reduce it by it's division
        else {
          if (divideTimes >= 1) {
            //calculate the amount to subtract
            let tempMinus = mod * divideTimes;
            //reduce the amount due
            dollars = dollars - tempMinus;
            //add to register output
            returnObj.change.push(["ONE HUNDRED", tempMinus])
          }
        }
      break;
                                  
      case "TWENTY":
        //set the var to see if the change can be divided by the dollar amount
        mod = 20;

        //get divid times
        divideTimes = (dollars / mod).toString().match(dollarsRegex);
          
        //if the change amount is more then the register amount just minus it
        if (dollars > myCid[moneyType][1]) {
          //reduce the amount due
          dollars = dollars - myCid[moneyType][1];
          //add to register output
          returnObj.change.push(["TWENTY", myCid[moneyType][1]])
        }
          
        //if you can't just subtract it all, reduce it by it's division
        else {
          if (divideTimes >= 1) {
            //calculate the amount to subtract
            let tempMinus = mod * divideTimes;
            //reduce the amount due
            dollars = dollars - tempMinus;
            //add to register output
            returnObj.change.push(["TWENTY", tempMinus])
          }
        }
      break;            

      case "TEN":
        //set the var to see if the change can be divided by the dollar amount
        mod = 10;

        //get divid times
        divideTimes = (dollars / mod).toString().match(dollarsRegex);
          
        //if the change amount is more then the register amount just minus it
        if (dollars > myCid[moneyType][1]) {
          //reduce the amount due
          dollars = dollars - myCid[moneyType][1];
          //add to register output
          returnObj.change.push(["TEN", myCid[moneyType][1]])
        }
          
        //if you can't just subtract it all, reduce it by it's division
        else {
          if (divideTimes >= 1) {
            //calculate the amount to subtract
            let tempMinus = mod * divideTimes;
            //reduce the amount due
            dollars = dollars - tempMinus;
            //add to register output
            returnObj.change.push(["TEN", tempMinus])
          }
        }
      break;

      case "FIVE":
        //set the var to see if the change can be divided by the dollar amount
        mod = 5;

        //get divid times
        divideTimes = (dollars / mod).toString().match(dollarsRegex);
          
        //if the change amount is more then the register amount just minus it
        if (dollars > myCid[moneyType][1]) {
          //reduce the amount due
          dollars = dollars - myCid[moneyType][1];
          //add to register output
          returnObj.change.push(["FIVE", myCid[moneyType][1]])
        }
          
        //if you can't just subtract it all, reduce it by it's division
        else {
          if (divideTimes >= 1) {
            //calculate the amount to subtract
            let tempMinus = mod * divideTimes;
            //reduce the amount due
            dollars = dollars - tempMinus;
            //add to register output
            returnObj.change.push(["FIVE", tempMinus])
          }
        }
      break;
               
      case "ONE":
        //set the var to see if the change can be divided by the dollar amount
        mod = 1;

        //get divid times
        divideTimes = (dollars / mod).toString().match(dollarsRegex);
          
        //if the change amount is more then the register amount just minus it
        if (dollars > myCid[moneyType][1]) {
          //reduce the amount due
          dollars = dollars - myCid[moneyType][1];
          //add to register output
          returnObj.change.push(["ONE", myCid[moneyType][1]])
        }
          
        //if you can't just subtract it all, reduce it by it's division
        else {
          if (divideTimes >= 1) {
            //calculate the amount to subtract
            let tempMinus = mod * divideTimes;
            //reduce the amount due
            dollars = dollars - tempMinus;
            //add to register output
            returnObj.change.push(["ONE", tempMinus])
          }
        }
      break;


      case "QUARTER":
        //set the var to see if the change can be divided by the dollar amount
        mod = .25;

        //get divid times
        divideTimes = parseInt(cents / mod);
          
        //if the change amount is more then the register amount just minus it
        if (cents > myCid[moneyType][1]) {
          //reduce the amount due
          cents = cents - myCid[moneyType][1];
          //add to register output
          returnObj.change.push(["QUARTER", myCid[moneyType][1]])
        }
          
        //if you can't just subtract it all, reduce it by it's division
        else {
          if (divideTimes >= 1) {
            //calculate the amount to subtract
            let tempMinus = mod * divideTimes;
            //reduce the amount due
            cents = cents - tempMinus;
            //add to register output
            returnObj.change.push(["QUARTER", tempMinus])
          }
        }
      break;

      case "DIME":
        //set the var to see if the change can be divided by the dollar amount
        mod = .10;

        //get divid times
        divideTimes = parseInt(cents / mod);

        //if the change amount is more then the register amount just minus it
        if (cents > myCid[moneyType][1]) {
          //reduce the amount due
          cents = cents - myCid[moneyType][1];
          //add to register output
          returnObj.change.push(["DIME", myCid[moneyType][1]])
        }
          
        //if you can't just subtract it all, reduce it by it's division
        else {
          if (divideTimes >= 1) {
            //calculate the amount to subtract
            let tempMinus = mod * divideTimes;
            //reduce the amount due
            cents = cents - tempMinus;
            //add to register output
            returnObj.change.push(["DIME", tempMinus])
          }
        }
      break;

      case "PENNY":
        //set the var to see if the change can be divided by the dollar amount
        mod = .01;

        //get divid times
        divideTimes = (cents / mod).toFixed(2);
          
        //if the change amount is more then the register amount, return insufficient funds because this is the end of the tray
        if (cents > myCid[moneyType][1]) {
          returnObj.status = "INSUFFICIENT_FUNDS"
          returnObj.change = []
        }
          
        //if you can't just subtract it all, reduce it by it's division
        else {
          if (divideTimes >= 1) {
            //calculate the amount to subtract
            let tempMinus = mod * divideTimes;
            //reduce the amount due
            cents = (cents - tempMinus).toFixed(2);
            //add to register output
            returnObj.change.push(["PENNY", tempMinus])
            } 
        }
      break;
    }
  }
  return returnObj
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
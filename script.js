// Random data: No of cows && Average prod of milk/ltr
const CowData = {
    shadeA: {
      NoOfCows: 30,
      AvgProduction: 15,
    },
    shadeB: {
      NoOfCows: 19,
      AvgProduction: 14,
    },
    shadeC: {
      NoOfCows: 21,
      AvgProduction: 10,
    },
    shadeD: {
      NoOfCows: 39,
      AvgProduction: 23,
    } 
  // will display the CowData per shade
  };
  CowData.displayObject("cowData", CowData);
  console.log(CowData);
  
  var totalProdPerShade= function(c,b){
    return c*b;
  };
   let shadeA= totalProdPerShade(30,15);
   let shadeB= totalProdPerShade(19,14);
   let shadeC= totalProdPerShade(21,10);
   let shadeD= totalProdPerShade(39,23);
  // works out the total calculations of milk produced per shed
   
  console.log('Your production in Shed A' ,shadeA, 'litres per day');
  console.log('Your production in Shed B' ,shadeB, 'litres per day');
  console.log('Your production in Shed C' ,shadeC, 'litres per day');
  console.log('Your production in Shed D' ,shadeD, 'litres per day');
   
   
   let totalProduction = shadeA + shadeB + shadeC + shadeD;
  // works out the total milk produced in all the sheds per day
   
   
   console.log('The total production is',  totalProduction ,'litres per day');
   let selling_price = 'rate1';
   let rate1 = 45;
   let newRate = 49.60;
   
   
   let newIncome = totalProduction * newRate;
   let newIncomePerDay = totalProduction * rate1;
   
   console.log(newIncome, newIncomePerDay);
   
   let incomeOverTime = function(time){
     return newIncomePerDay *time; 
     
   };
   let incomeWeek  = incomeOverTime(7);
   let incomeYearly  = incomeOverTime(366);
   
  
   console.log('Your weekly income will be Ksh', incomeWeek);
   console.log('Your yearly income will be Ksh ',incomeYearly);
   let shades = [shadeA,shadeB,shadeC,shadeD];
   let shadeName = ['shadeA','shadeB','shadeC','shadeD'];
   
  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function getNumberOfDaysInMonth(month,year=2021){
    return new Date(year,month,0).getDate();
  }
  function incomeReport(selling_price=rate1){
    let i =``;
    monthName.map(
      function(element,index){
        i+=`Your income for ${element} is ${rate1*totalProduction*getNumberOfDaysInMonth(index+1)}
        `;
        // should work out the yearly income considering the first rate before increase of the selling_price
        i+=`Your income for ${element} is ${newRate*totalProduction*getNumberOfDaysInMonth(index+1)}
        `;
        // Compares the increase of the new price with the old selling_price
      }
      );
      return i;
  }
  ;console.log(incomeReport())
  
  
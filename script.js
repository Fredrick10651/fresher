class Dairy {
  constructor(params) {
      this._data = {
          shedA: {
              cows: 25,
              productionPerCow: 18
          },
          shedB: {
              cows: 20,
              productionPerCow: 15
          },
          shedC: {
              cows: 23,
              productionPerCow: 17
          },
          shedD: {
              cows: 39,
              productionPerCow: 25
          },
      };
      this._milkPrice = 45;
      this._monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  // Get the number of milk produced per shed
  milkProducedPerShed(sp = this._milkPrice) {
      let jsonReport = {};
      for (let [key, values] of Object.entries(this._data)) {
          const total = values.cows * values.productionPerCow * sp;
          jsonReport[key] = total;
      }
      return JSON.parse(JSON.stringify(jsonReport));
  }

  comprehensiveReport(sp = this._milkPrice) {
      let _data = '';
      for (let [key, value] of Object.entries(this.milkProducedPerShed(sp))) {
          _data += `Your production in ${key.charAt(0).toUpperCase() + key.slice(1, 4)} ${key.slice(4)}: ${value} litres per day
`;
      }
      _data += `The total production is ${this.totalProduction()} litres per day`;
      return _data;
  }
  //Total amount earned in a day
  totalProduction(sp = this._milkPrice) {
      let x = 0;
      for (let [key, values] of Object.entries(this.milkProducedPerShed(sp))) {
          x += values;
      }
      return x;
  }
  // Get the number of days in a month
  getDaysInMonth(month, year = 2020) { return (new Date(year, month, 0).getDate()); }
  //Weekly and yearly income
  incomeOverTime() {
      return `Your weekly income will be Ksh ${this.totalProduction() * 7}
Your yearly income will be Ksh ${this.totalProduction() * 366}`;
  }
  // monthly report
  comprehensiveIncomeOverTimeReport() {
      let report = '';
      this._monthNames.map((element, index) => {
          report += `Your income for ${element} is ${this.totalProduction() * this.getDaysInMonth(index + 1)}
`;
      });
      return report;
  }
  // compare the price with previous one when changed
  compareProfitOnPriceChange(amount) {
      let report = {};
      this._monthNames.map((element, index) => {
          const days = this.getDaysInMonth(index + 1);
          const previousRate = this.totalProduction() * days;
          const newRate = this.totalProduction(amount) * this.getDaysInMonth(index + 1);
          const difference = newRate - previousRate;
          const profitOrLoss = difference > 0 ? 'Profit' : 'Loss';
          report[element] = {
              previousRate,
              newRate,
              profitOrLoss
          };
      });
      return report;
  }
}
const bs = new Dairy();
console.log(bs.compareProfitOnPriceChange(49.6));
console.log(bs.comprehensiveIncomeOverTimeReport());
console.log(bs.incomeOverTime());
console.log(bs.totalProduction());
console.log(bs.comprehensiveReport());
console.log(bs.milkProducedPerShed());
//import * as mortgage from './mortgage';
//import { calculateAmortization } from './mortgage';  //export calculateAmortization
//import calculateAmortization from './mortgage';        //export default calculateAmortization
import Mortgage from './mortgage2';

document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;

    //object destructuring assignment
    //let { monthlyPayment, monthlyRate } = calculateMonthlyPayment(principal, years, rate);
    //let {monthlyPayment, monthlyRate, amortization} = calculateAmortization(principal, years, rate);
    //let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);

    //Mortgage 클래스로 부터 객체 생성
    let mortgage = new Mortgage(principal, years, rate);
    //Mortgage 클래스의 amortization() getter method 호출
    //mortgage.amortization.forEach(month => console.log(month));
    let html = "";
    mortgage.amortization.forEach((year, index) => html += `
       <tr>
           <td>${index + 1}</td>
           <td class="currency">${Math.round(year.principalY)}</td>
           <td class="stretch">
               <div class="flex">
                   <div class="bar principal"
                        style="flex:${year.principalY};-webkit-flex:${year.principalY}">
                   </div>
                   <div class="bar interest"
                        style="flex:${year.interestY};-webkit-flex:${year.interestY}">
                   </div>
               </div>
           </td>
           <td class="currency left">${Math.round(year.interestY)}</td>
           <td class="currency">${Math.round(year.balance)}</td>
       </tr>
   `);
    document.getElementById("amortization").innerHTML = html;

    //Mortgage 클래스의 monthlyPayment() getter method 호출
    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);//(monthlyRate * 100).toFixed(2);
});
//Promise 객체를 반환해주는 findAll() 호출
import * as service from './rate-service';
//import { findAll } from './rate-service-mock';
import '../css/styles.css';

service.findAll()  //Promise 객체
    .then(res => res.data) //Array
    .then(rates => {
        let html = '';
        rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
        document.getElementById("rates").innerHTML = html;
    })
    .catch(e => console.log(e));


/*  fetch() 사용
let url = "rates.json";

fetch(url) //Promise
    .then(response => response.json())
    .then(rates => {
        let html = '';
        rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
        document.getElementById("rates").innerHTML = html;
    })
    .catch(e => console.log(e));
*/
const {chromium} = require('playwright');
const fs = require('fs');
(async()=>{
 const browser = await chromium.launch({headless: false, slowMo:100});
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto("https://www.indeed.com/companies");
 await page.focus('//input[@class = "icl-TextInput-control icl-TextInput-control--whatWhere"]');
 await page.click('//input[@class = "icl-TextInput-control icl-TextInput-control--whatWhere"]');
 await page.fill('//input[@class = "icl-TextInput-control icl-TextInput-control--whatWhere"]','marcos');
 
 await page.focus('//*[@class = "icl-Button icl-Button--primary icl-Button--md icl-WhatWhere-button"]');
 await page.click('//*[@class = "icl-Button icl-Button--primary icl-Button--md icl-WhatWhere-button"]');
 
 await page.focus('//*[@class="cmp-CompanyWidget-details"]');
 await page.click('//*[@class="cmp-CompanyWidget-details"]');

 const companyName = await page.$eval('//*[@class = "cmp-CompactHeaderCompanyName"]', node => node.textContent)
 setTimeout(function() {
 //your code to be executed after 1 second
 }, 5000);
 console.log(companyName);
 await browser.close();
})();
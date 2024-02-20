import { expect } from '@wdio/globals';
import {browser} from '@wdio/globals';

import {Key} from 'webdriverio';
// import DemoTestPage from '../pageobjects/demoTestpage';

describe('Login into ResMan Dashboard', async ()=>{
    // let demoPageInstance;
    // beforeEach(()=>{
    //     demoPageInstance = new DemoTestPage()
    // })
    it('Logged In With Valid Credentials', async()=>{
      await browser.throttleCPU(2);
      await browser.setWindowSize(1920, 1080);
       await browser.url("https://qa.myresman.com");

       
       const userName = $("#Username");
       //wait to displayed
    //    await browser.waitUntil(async ()=>{
    //     userName.getAttribute('name')==='Username', {timeout: 5000,
    //     timeoutMsg: "Not Loaded Yet!"}
    //    })

      await userName.setValue("Adminrabi");

       const password = $("#Password");
    //    await browser.waitUntil(async ()=>{
    //     password.getAttribute('name')==='Password', {timeout: 5000,
    //     timeoutMsg: "Not Loaded Yet!"}
    //    })

       await password.setValue("tester1");

       const submitButton = $("//button[@type='submit']");
       await submitButton.click();

      const advisorClick = $("#CloseAdvisor");

      //await browser.setTimeout({timeout: 5000});
      await advisorClick.waitForDisplayed({timeout: 30000});

       if((await $(advisorClick)).isDisplayed){
         (await $(advisorClick)).click();
       }

   
       const adminBtn = $("#AdminMenu");

       //Actions
       await browser.touchAction({
         action: 'tap',
         element: adminBtn,
       });
       //await browser.elementHover(adminBtn);

       //keys
       await browser.keys([Key.Control, 'a']); //select all
       await browser.keys([Key.Control, 'c']); 
       await browser.keys([Key.Control, 'v']);

       await browser.keys([Key.Enter]);
       await $("//a[contains(text(),'Properties')]").click();
       await browser.pause(5000);
    })
})

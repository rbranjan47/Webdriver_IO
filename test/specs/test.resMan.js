import { expect } from '@wdio/globals';
import {browser} from '@wdio/globals';
// import DemoTestPage from '../pageobjects/demoTestpage';

describe('Login into ResMan Dashboard', ()=>{
    // let demoPageInstance;
    // beforeEach(()=>{
    //     demoPageInstance = new DemoTestPage()
    // })
    it('Logged In With Valid Credentials', async()=>{
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

       await browser.pause(5000);
    })
})

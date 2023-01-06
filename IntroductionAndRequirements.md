 # What is javascript?  
JavaScript is web-based programming language,that is used to:  
 * Add interactive behaviour to webpages.
 * build web and mobile app's.
 * create command line tools.
 * develope games.

### Javascript is not the java.  
  
  
To use and run javascript,you need:
 * Web Browser like Chrome or Mozila or Safari.
 * Text Editor like VScode or replit.com or notepad.
 
Download VScode from this link : [clickhere](https://code.visualstudio.com/)  
After installing it,go to extensions and download live server extension
 
 <img width="960" alt="live server VSCode Extension" src="https://user-images.githubusercontent.com/113935723/210755874-dc52d95f-70d8-476f-8f66-0f16e63ac6f5.PNG">
  
 It enables you to right-click an HTML document, and it runs a server for you and opens a browser window with the file in it.  
 
 Create new folder,let say i have created a new folder and renamed it to javascript.  
 Open that folder in VSCode,make a new html file, css file and js file .  
 In html file,type exclamation mark and press tab button to automatically write the skeleton code.  
 Link the css file with html file by using link tag in head tag of html file as following:
 
  <img width="956" alt="rel and href in link tag in html " src="https://user-images.githubusercontent.com/113935723/210759884-3f54c448-fa43-4fd7-93ec-2e4ca7166122.PNG">

  * Purpose of href attribute in link tag is to Specifies the location of the linked document.  
  * Purpose of rel attribute in link tag is to Specifies the relationship between the current document and the linked document.  

Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.So it is often called client-side javascript.  
Link the javascript file with html file by using script tag in body tag of html file as following:  

 <img width="954" alt="src in script tag in body of html file" src="https://user-images.githubusercontent.com/113935723/210760905-55ff90be-79f3-49e6-9b1f-d1d8cd67d8ae.PNG">

 
  * Script tag either contains scripting statements, or it points to an external script file through the src attribute.    
  
HREF is a HyperText Reference, while SRC is a Source Reference. src is used when you want to load resource for yourself,  href is used when you want to refer the resource for someone's else or others,  url tag is used when a script wants to use the url as variable.
 
   
 
 
   # To see the Result of html on live server there is a method but before all,you have to setup the following settings of live server extension:  
     
   ### Go to the extensions,find live server,open extension settings of live server and scroll down till the end  
   -> Check the live server show on status bar option.  
   -> Check the use local ip option.    
     
   ## Hence for the every next time to see the result of html file on live server,just follow this procedure:
  On the bottom bar,there is a go live button,Press it and copy the port number and write on the chrome url like localhost:portnumber and press Enter where portnumber will be like 5500 acording to your device port.  
    
    
 

    
# To see the console output ,perform the following steps:  
   ->Open html file on any browser.  
   ->Right click and select inspect option.  
   ->Go to console tab.
 
# To show anything on console output or any alert message on browser,You can use js file:  

 * You can use console.log(param) function where param can be any string in single or double quotation.  
 * You can give alert message by using window.alert(param) function and here also param can be any string in single or double quotation.  Purpose of this function is to instructs the browser to display a dialog with an optional message   and to wait until the user dismisses the dialog.  
 * Statements before alert message will be executed but any statement after the alert statement will not be executed till the ok button of alert dialog box is pressed. 

* For example
 <img width="957" alt="Capture" src="https://user-images.githubusercontent.com/113935723/211089785-1bf222ba-7d3e-4081-87e0-6dc24ace8507.PNG">
 
   Note:Any statement in js file can be ended with colon or not.
   
 

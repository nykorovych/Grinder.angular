import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumber = false;
  includeSymbols = false;
  length = 0;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm'; 
    const symbols = '!@#$%^&*()';
 

    let validChars = '';
    if (this.includeLetters) {validChars += letters};
    if (this.includeNumber) {validChars += numbers};
    if (this.includeSymbols) {validChars += symbols}

    let generatedPassword = '';
    for (let i =0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index]
      
      
     
    }
   this.password = generatedPassword;

    
    
    
    
  }
  onInput(inputClap:string) {
    const number = parseInt(inputClap)
      if(!isNaN(number))  {
        this.length = number
      }
  }
  

  onIncludeLetter () {

    this.includeLetters = !this.includeLetters;

    console.log (this.includeLetters)
  }

  onNumber () {

    this.includeNumber = !this.includeNumber;

    console.log (this.includeNumber)}
  
  onSymbol () {

      this.includeSymbols = !this.includeSymbols;
  
      console.log (this.includeSymbols)}
  

    
}

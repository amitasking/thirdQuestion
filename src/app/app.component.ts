import { Component ,OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

	constructor(private fb : FormBuilder){}
	
	myForm : FormGroup

	ngOnInit(){

		 this.myForm =  this.fb.group({
		 	phoneNo : [''],
		 	alternatePhoneNo : this.fb.array([])
		 })

	}





 get alternatePhoneNo(){
 	return this.myForm.get('alternatePhoneNo') as FormArray;
 }

 addalternatePhoneNo(){
 	this.alternatePhoneNo.push(this.fb.control(''))
 }

 onSubmit(){
 	console.log(this.myForm.value)
    console.log("phoneNumber1 :" + this.myForm.value.phoneNo);
    let count = 2;

    for(let i of this.myForm.value.alternatePhoneNo){
    	console.log(`phoneNumber ${count} : ` + i);
    	count++;
    }

    alert("check console for output")
 }


}

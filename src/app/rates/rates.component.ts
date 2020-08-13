import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  @Input() selectedGachapon: string; //Passed to us from gacha-UI 
  rateNameList: string[];

  constructor() { }

  ngOnInit(): void {
    axios.get("http://localhost:5000/gacha/" + this.selectedGachapon)
      .then(res => {
        console.log(res.data) //"rate" "name"
        this.rateNameList = this.combineToProperFormat(res.data);
      });
  }

  //Combine tha array from "rate","name" format to "rate name" format
  combineToProperFormat(resdata){
    let rateNameList = [];

    for(let i = 0; i<= resdata.length-2 ; i+=2){
      //Combine index two at a time
      rateNameList[i] = resdata[i] + "\t" + resdata[i+1];
    }

    return rateNameList;

  }

}



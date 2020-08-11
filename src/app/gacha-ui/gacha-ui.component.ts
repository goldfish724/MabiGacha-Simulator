import { Component, OnInit } from '@angular/core';

import {Gachapon} from './gachapon'

@Component({
  selector: 'app-gacha-ui',
  templateUrl: './gacha-ui.component.html',
  styleUrls: ['./gacha-ui.component.css']
})
export class GachaUIComponent implements OnInit {

  selectedGachapon: string;
  selectedImage: string;
  selectedList: string[]; //NEEDS TO COME FROM ".TXT" file

  selectedTxtFile: string; // Name of the .txt that holds the rates/item name
                           // Create method in gacha-logic.ts class that takes thsi file and then returns gachaList[] and gachaPool[]
                              /*
                               * gachaLogic g1 = new gachaLogic("text.txt");
                               * selectedList[] =  g1.getSelectedList();
                               * gachaPool[] = g1. getGachaPool
                               */
                            // GachaList[] needed STILL so that the dropdown menu for specific item still displays all the items
                            // GachaPool necessary to randomly pick item from it in gach(); below
                            // NOTE TO SELF: ENSURE that user typed entry is an item that exists in the list..
  

  gachas = [ 
    new Gachapon('Secret Garden Box', 'assets/img/mabinogi-secret-garden-box-webicon.png', ["item1", "item2", "item3"]),
    new Gachapon('Crow Feather Box', 'http://nxcache.nexon.net/cms/2020/q2/1894/mabinogi-crow-feather-box.png', ["item4", "item5", "item6"]),
    new Gachapon('Winter Fairy Box', 'assets/img/mabinogi-secret-garden-box-webicon.png', ["test1", "test2", "test3"]),
  ]

  constructor() {
    this.selectedGachapon = this.gachas[0].gachaName;
    this.selectedImage = this.gachas[0].gachaURL;
    this.selectedList = this.gachas[0].gachaList;
  }

  ngOnInit(): void {
  }

  /* Upon selection of new gachapon update all the properties*/
  selectedItem(gacha: Gachapon){
    this.selectedGachapon = gacha.gachaName;
    this.selectedImage = gacha.gachaURL;
    this.selectedList = gacha.gachaList;
  }

  /* Gach from the current gachapon, and send the gacha result to Console Component*/
  gach(){
    /* LOGIC HERE */
    
  }

}
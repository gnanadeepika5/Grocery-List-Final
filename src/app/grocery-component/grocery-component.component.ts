import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grocery-component',
  templateUrl: './grocery-component.component.html',
  styleUrls: ['./grocery-component.component.css']
})

export class GroceryComponentComponent {


  // item: string;
  item={name : '', id : 0};
  list = [];
  errorMsg:string;
  hideErrorMsg:boolean;

  duplicateMsg:string;
  hideduplicateMsg: boolean;

  validitemMsg: string;
  hidevaliditemMsg: boolean;

  deleteitemsuccessMsg:string;
  hidedeleteitemsuccessMsg:boolean;

  clearItemsMsg: string;
  hideClearItemsMsg: boolean;

  clearAllText: string;
  hideClearAllText: boolean;

  additemmsg:string;
  hideadditemmsg:false;

  strikeThroughMessage: string;
  hideStrikeThroughMsg: boolean;
  constructor() { }

  ngOnInit(): void {
    // seting the initial values of the 4 booleans
  }

  private firstmessagevalues()
  {
    this.hideErrorMsg = true;
    this.hideduplicateMsg=true;
    this.hidevaliditemMsg=true;
    this.hidedeleteitemsuccessMsg=true;
    this.hideClearItemsMsg = true;
    this.hideClearAllText = false;
    //messages
    this.clearAllText = 'Clear All';
    this.strikeThroughMessage = 'Click on the icon at the end of each item to enable/disable strikethrough.'

  }

  //invalid item error
  private enterValidItem(list){
    if(this.list.length == 0){
      this.hideStrikeThroughMsg = true;
    }
    this.hideStrikeThroughMsg = false;
  this.hideErrorMsg = false;
    this.hideClearAllText = true;
    this.errorMsg = 'Enter a valid item to be added to the list.';
  }
  //delete success
  private delSuccessMessages(item){
    this.hidedeleteitemsuccessMsg = false;
    this.deleteitemsuccessMsg = `The item "${item}" was successfully deleted.`;
  }
  //clear all clearItemsMsg
  private clearAllItemsMessages(){
    this.clearItemsMsg = 'All items have been successfully cleared!'
    this.hideClearAllText = true;
    this.hideStrikeThroughMsg = true;
  }
  // No Item in List settings
  private noItemInListSettings(){
    this.hideStrikeThroughMsg = true;
    this.hideClearAllText = true;
  }

  addItemToList()
  {this.firstmessagevalues();
    if(this.item.name.trim() != '')
    {

      // CHECK IF ITEM ALREADY EXISTS IN LIST -
      // when typed as is, typed in singular form or in plural form
      if(this.list.some(li =>
        (li.name.trim() === this.item.name || li.name.trim() === this.item.name+'s' ||
        // li.name.trim() === this.item.name.slice(0,-1) || li.name.trim() === this.item.name.slice(0,-2) ||
        li.name.trim() === this.item.name+'es') && (this.item.id == 0)))
        {
          this.hideduplicateMsg = false;
          this.duplicateMsg = `The entered item "${this.item.name}" already exists in list.`
        }
      else
      {
        if(this.item.id == 0)
        {
          this.hideduplicateMsg = true;
          this.list.push({name: this.item.name.trim(), id: new Date().getTime()});
          console.log(this.list);
          this.hideadditemmsg=false;
          this.additemmsg=`please click on cart button below to see newly/recently added item:"${this.item.name}"`;
        }
      }
      this.item =
      {
        name: '',
        id: 0
      }
    }
    else
    {
      this.enterValidItem(this.list);
      this.hideStrikeThroughMsg = true;
    }
  }// end of addListItem
  // EDIT an existing item
  // When the user clicks on 'pencil' icon, the item is displayed on the input text box to be edited.
  // The user types in the new value and is updated in the list.
  editListItem(item){
    this.firstmessagevalues();
    this.item = item;
  }

deleteItemFromList(item)
{
  this.firstmessagevalues();
     for(let i=0; i<this.list.length; i++)
       {
         if(item.id == this.list[i].id)
          {
            this.list.splice(i,1);
            this.delSuccessMessages(item.name);
           break;
          }
       }

if(this.list.length == 0){
  // this.hideStrikeThroughMsg = true;
  // this.hideClearAllText = true;
  this.noItemInListSettings();
}
}






  clearAllItemsFromList(){
    this.firstmessagevalues();
    this.hideClearItemsMsg = false;
    if(this.list.length > 0){
      for(let i=this.list.length; i>=0; i--){
        //console.log(this.list[i]);
        this.list.pop();
        this.clearAllItemsMessages();
      }
    }
 }
 // STRIKE/UNSTRIKE the list Item
  // Upon clicking the strikethrough icon at the end of each item,
  // the user is able to either enable or disable strikethrough for that respective item.
  strikeListItem(item){
    this.firstmessagevalues();
    for(let i=0; i<this.list.length; i++){
      if(item.id == this.list[i].id){
        if(this.list[i].strike){
          this.list[i].strike = false;
        }
        else{
          this.list[i].strike = true;
        }
        break;
      }
    }
  }

}

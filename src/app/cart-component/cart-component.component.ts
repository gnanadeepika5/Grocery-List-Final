import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {
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
}
// No Item in List settings
private noItemInListSettings(){
  this.hideClearAllText = true;
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
    //start of local storage
         let myitem = localStorage.getItem("itemName" );
      let myitemlist = JSON.parse(myitem);
      console.log(myitemlist);
         for(let i=0; i<=myitemlist.length;i++)
         {
           console.log(" came into for loop");
           console.log("item name"+item.name);
           console.log("i value"+i);
           console.log("myitemlist i name"+myitemlist[i].name);
          if(item.name == myitemlist[i].name)
         {
          console.log(" came into if loop");
          let deleteitem = myitemlist[i].name;

          myitemlist.splice(i,1);
          break;
         }
        //  console.log(myitemlist);
        }
        localStorage.setItem("itemName", JSON.stringify(myitemlist));
        let myitemafterdeletion = localStorage.getItem("itemName" );
        console.log("List after deletion"+myitemafterdeletion);
      let myitemlistafterdeletion = JSON.parse(myitemafterdeletion);
//end of local storage

      if(this.list.length == 0){
        // this.hideStrikeThroughMsg = true;
        // this.hideClearAllText = true;
        this.noItemInListSettings();
      }

  }//end of deleteItemFromList function

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
    localStorage.removeItem("itemName");
    //start of local storage
    // let myitemafterdeletion = localStorage.getItem("itemName" );//string
    //   let myitemlistafterdeletion = JSON.parse(myitem);//list
    //   console.log(myitemlistafterdeletion);
    //   if(myitemlistafterdeletion.length>0){
    //     for(let i=myitemlistafterdeletion.length;i>=0;i--)
    //     {
    //       console.log("came into clear all for loop");
    //     myitemlistafterdeletion.pop();
    //     }
    //   }
    //   localStorage.setItem("itemName", JSON.stringify(myitemlistafterdeletion));
    //  // localStorage.removeItem("itemName");
      //end of local storage
      // let myitemafterclearall = localStorage.getItem("itemName" );
      // console.log(myitemafterclearall);

      console.log("cleared localstorage");
      //let myitemlistafterclearallitems = JSON.parse(myitemafterclearall);

  }


  showdetailsoflist()
  {

//local storage
    let myitem = localStorage.getItem("itemName" );
      let myitemlist = JSON.parse(myitem);
      console.log("came to cart");
      console.log(myitemlist);
      for(let i=0;i<myitemlist.length;i++)
      {
        this.list.push({name: myitemlist[i].name, id: new Date().getTime()});
          console.log(this.list);
      }

  }
}

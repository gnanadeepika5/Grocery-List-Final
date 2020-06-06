import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-component',
  templateUrl: './grocery-component.component.html',
  styleUrls: ['./grocery-component.component.css']
})
export class GroceryComponentComponent implements OnInit {


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

  }

  addItemToList()
  {
    if(this.item.name.trim() != '')
    {
      this.firstmessagevalues();
      // CHECK IF ITEM ALREADY EXISTS IN LIST -
      // when typed as is, typed in singular form or in plural form
      if(this.list.some(li =>
        (li.name.trim() === this.item.name || li.name.trim() === this.item.name+'s' ||
        li.name.trim() === this.item.name.slice(0,-1) || li.name.trim() === this.item.name.slice(0,-2) || li.name.trim() === this.item.name+'es') && (this.item.id == 0)))
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
      this.hideErrorMsg = false;
      this.errorMsg = 'Enter a valid item.'
    }
    localStorage.setItem("itemName", JSON.stringify(this.list));
    let myitem = localStorage.getItem("itemName" )
      let myitemlist = JSON.parse(myitem);
  }// end of addListItem







  deleteItemFromList(item)
  {
    this.firstmessagevalues();
       for(let i=0; i<this.list.length; i++)
         {
           if(item.id == this.list[i].id)
            {
              this.list.splice(i,1);
              this.hidedeleteitemsuccessMsg=false;
              this.deleteitemsuccessMsg=`the item ${item.name} with id ${item.id}deleted successfully`;
             break;
            }
         }
    let myitem = localStorage.getItem("itemName" );
      let myitemlist = JSON.parse(myitem);
      console.log(myitemlist);

        //  let myitem = localStorage.getItem("itemName" );
         for(let i=0; i<=myitemlist.length;i++)
         {
           console.log(" came into for loop");
          if(item.name == myitemlist[i].name)
         {
          console.log(" came into if loop");
          let deleteitem = myitemlist[i].name;

          myitemlist.splice(i,1);
          break;
         }
        }
        console.log(myitemlist);
        localStorage.setItem("itemName", JSON.stringify(myitemlist));
        let myitemafterdeletion = localStorage.getItem("itemName" )
      let myitemlistafterdeletion = JSON.parse(myitemafterdeletion);

  }//end of deleteItemFromList function

}

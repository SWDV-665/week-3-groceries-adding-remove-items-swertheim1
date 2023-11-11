import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, AlertController, ToastController, IonAvatar, IonItem, IonLabel, IonList, 
          IonReorderGroup, IonItemSliding, IonItemOption, IonItemOptions, IonGrid, IonRow, IonCol, IonButton, IonToast, IonFab, IonIcon, 
          IonAlert} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { addIcons } from 'ionicons';
import { add, heart } from 'ionicons/icons';

@Component({
  selector: 'app-grocery',
  templateUrl: 'grocery.html',
  styleUrls: ['grocery.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonLabel, IonItem, IonReorderGroup, IonAvatar, IonItemSliding,  
            IonItemOption, IonItemOptions, IonGrid, IonRow, IonCol, NgFor, IonButton, IonToast, IonIcon, IonFab, IonFabButton, IonAlert]
  
})

// Grocery Items
export class Grocery {

  title = "Grocery"
  items = [
    {
      name: 'milk',
      quantity: 2
    },
    {
      name: 'bread',
      quantity: 1
    },
    {
      name: 'bananas',
      quantity: 3
    },
    {
      name: 'sugar',
      quantity: 1
    }
  ]
  isOpen!: boolean;
  
  // constructor
  constructor(private toastController: ToastController, private alertController: AlertController) {
    addIcons({ add });  
  }

  // function that logs a remove-item msg to the console when clicked
  async removeItem(item: any, index: number) {
    console.log("removing item - ", item.name, "index: ", index);

    // toast is supposed to popup when the button is clicked.   
    const toast = await this.toastController.create({ 
      message: 'Removing item number  ' +  Number(index + 1),
      duration: 3000
    });

    await toast.present();  
    this.items.splice(index, 1);

  }
  
    public alertButtons = 
    [
      
      {
        text: 'Cancel',
        handler: (data: any) => {
          console.log('Cancel Clicked')
        }
      }, 
      {
        text: 'Save',
        handler: (item: any) => {
          console.log('Save Clicked', item)
          this.items.push(item);
      }
    }]

    public alertInputs = 
    [
      {
        name: 'name',
        placeholder: 'Enter item name',
      },
      {
        name: 'quantity',
        placeholder: 'Enter quantity', 
      },

    ];

    async _alert() {
     const alert = await this.alertController.create({
        header: 'Alert Header',
        subHeader: 'Alert SubHeader',
        message: 'here is my alert'

      });
      await alert.present();

    }

}
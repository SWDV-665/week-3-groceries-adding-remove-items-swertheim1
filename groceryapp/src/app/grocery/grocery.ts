import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, AlertController } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonAvatar, IonItem, IonLabel, IonList, IonReorderGroup, IonItemSliding, IonItemOption, 
         IonItemOptions, IonGrid, IonRow, IonCol, IonButton, IonToast, IonFab, IonIcon, IonAlert} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { ToastController } from '@ionic/angular/standalone';
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
  
  // constructor
  constructor(private toastController: ToastController, private alertController: AlertController) {
    addIcons({ add, heart });  
  }

  // function that logs a remove-item msg to the console when clicked
  async removeItem(item: any) {
    console.log("removing item - ", item);

    // toast is supposed to popup when the button is clicked.   
    const toast = await this.toastController.create({ 
      message: 'removing item - ' + item.name,
      duration: 3000
    });

    await toast.present();  
  }

  // function to add items
  addItem() {
    console.log('Adding item');
  
  }

    public alertButtons = [
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

    public alertInputs = [
      {
        name: 'Item',
        placeholder: 'Enter Item',
      },
      {
        name: 'Quantity',
        placeholder: 'Enter Quantity', 
      },
    ];
  
}
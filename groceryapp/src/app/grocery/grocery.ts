import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonAvatar, IonItem, IonLabel, IonList, IonReorderGroup, IonItemSliding, IonItemOption, IonItemOptions, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-grocery',
  templateUrl: 'grocery.html',
  styleUrls: ['grocery.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonLabel, IonItem, IonReorderGroup, IonAvatar, IonItemSliding, IonItemOption, IonItemOptions, IonGrid, IonRow, IonCol]
  
})
export class Grocery {
  constructor() {}
}

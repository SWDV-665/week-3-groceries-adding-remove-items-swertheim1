import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonList, IonCardSubtitle, IonInput, IonItem, IonTextarea, IonButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonRippleEffect } from '@ionic/angular';
// import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonList, IonInput, IonItem, IonTextarea, IonButton ],
})
export class Contact {
  constructor() {}
}

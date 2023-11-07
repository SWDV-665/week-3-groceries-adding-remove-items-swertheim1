import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';



@Component({
  selector: 'app-about',
  templateUrl: 'about.html',
  styleUrls: ['about.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle]
})
export class About {

  constructor() {}

}

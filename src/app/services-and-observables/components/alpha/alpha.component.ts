import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../../services/data.service';
import { MessageService } from '../../services/message.service';
import { PeppaModel } from '../../interface/peppa.model';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss']
})
export class AlphaComponent implements OnInit {

  peppaList!: Array<PeppaModel>;
  dataSubscription?: Subscription;

  constructor(private dataService: DataService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  getPeppaPigs() {
    this.dataSubscription = this.dataService.getPeppaPigs().subscribe({
      next: (pigs: PeppaModel[]) => (this.peppaList =pigs)
    })
  }

  getPeppaGirls() {
    this.dataSubscription = this.dataService.getPeppaGirls().subscribe({
      next: (femalePigs: PeppaModel[]) => (this.peppaList = femalePigs)
    })
  }

  getPeppaBoys() {
    this.dataSubscription = this.dataService.getPeppaBoys().subscribe({
      next: (malePigs: PeppaModel[]) => (this.peppaList = malePigs)
    })
  }

  sendHelloService(): void {
    this.messageService.message$.next('Alpha says Hello!')
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }

}

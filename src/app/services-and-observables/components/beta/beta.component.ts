import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MessageService } from '../../services/message.service';
import { PeppaModel } from '../../interface/peppa.model';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.scss']
})
export class BetaComponent implements OnInit {

  peppaList?: Array<PeppaModel>

  constructor(private dataService: DataService, private messageService: MessageService) { }

  ngOnInit(): void {

  }

  sendHelloToService(): void{
    this.messageService.message$.next('Beta says Hello!')
  }

  getPeppaBoys() {
    this.dataService.getPeppaBoys().subscribe({
      next: (malePigs: PeppaModel[]) => this.peppaList = malePigs
    })
  }

}

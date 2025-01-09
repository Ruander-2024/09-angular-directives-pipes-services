import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { PeppaModel } from '../interface/peppa.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  message$: Subject<string> = new Subject<string>();

  constructor() {}

}

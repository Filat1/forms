import { Component, Input} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../accounts.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor( private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdate.emit(status);
  }
}




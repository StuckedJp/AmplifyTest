import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { AmplifyService } from 'aws-amplify-angular';
import { from } from 'rxjs';
import { Status } from '../../../models';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  // データ
  data = from(this.query());

  // 投稿
  fcStatus = new FormControl('');
  formGroup = new FormGroup({
    status: this.fcStatus,
  });

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  ngOnInit() {
    this.subscription();
  }

  isLoggedIn(): boolean {
    return this.amplifyService.auth().user !== null;
  }

  onSubmit() {
    DataStore.save(new Status({
      content: this.fcStatus.value,
      posted: new Date().toISOString(),
      poster: this.amplifyService.auth().user.attributes.email,
    }));
    this.fcStatus.setValue('');
  }

  doDelete(id: string) {
    DataStore.query(Status as any, id).then((status) => {
      return DataStore.delete(status);
      // this.list();
    }).catch((error) => {
      console.error(error);
    });
  }


  private async query() {
    const retVal = DataStore.query(Status, Predicates.ALL).then((statuses: Status[]) => {
      statuses.sort((l, r) => {
        if (l.posted > r.posted) {
          return -1;
        } else if (l.posted < r.posted) {
          return 1;
        } else {
          return 0;
        }
      });
      return statuses;
    });
    return retVal;
  }

  private subscription() {
    DataStore.observe(Status as any).subscribe((status) => {
      this.list();
      console.log(status);
    });
  }

  private list() {
    this.data = from(this.query());
  }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
// import {Issue} from '../models/issue';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';

  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) {}

  get data(): any[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllPosts(): void {
    this.httpClient.get<any[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addpost(issue: any): void {
    this.dialogData = issue;
    console.log('this.dialogData',this.dialogData);

  }

  updatePost(issue: any): void {
    this.dialogData = issue;
  }

  deletePost(id: number): void {
    console.log(id);
  }
}






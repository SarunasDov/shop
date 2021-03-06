import {Injectable} from '@angular/core';
import {Item, ItemWithoutId} from "../models/item";
import {HttpClient} from "@angular/common/http";
import {MessagesService} from "./messages.service";
import {NotificationType} from "../models/notification";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _items: Item[] = [];

  constructor(public http: HttpClient, private messageService: MessagesService) {
  }

  public addItem(item: ItemWithoutId): Observable<any> {
    const request = this.http.post("http://localhost:3001/api/product", item);

    return request;
  }

  public get items(): Item[] {
    return this._items;
  }

  public getChuckNorrisJoke(): void {
    const request = this.http.get("https://api.chucknorris.io/jokes/random");

    request.subscribe((response: any) => {
      console.log("Atėjo atsakymas!", response.value);

      this.messageService.postMessage({
        type: NotificationType.Success,
        message: response.value
      });
    });
  }

  public getItems(): void {
    const request = this.http.get("http://localhost:3001/api/product");

    request.subscribe((response: any) => {
      console.log("Get items response:", response);
      this._items = response;
    });
  }
}

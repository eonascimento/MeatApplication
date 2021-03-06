import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  {MEAT_API} from '../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from 'app/app.ErrorHandler';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) {

  }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
    .map(Response => Response.json())
    .catch(ErrorHandler.handleError);
  }

  restaurantsById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(Response => Response.json())
    .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(Response => Response.json())
    .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(Response => Response.json())
    .catch(ErrorHandler.handleError);
  }
}

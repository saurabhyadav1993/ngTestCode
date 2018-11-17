import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';
import { mapToExpression } from '../../node_modules/@angular/compiler/src/render3/view/util';
import { i18nMapping } from '../../node_modules/@angular/core/src/render3/i18n';
import { Observable } from '../../node_modules/rxjs';
import { filter, map } from 'rxjs/operators';
import { makeParamDecorator } from '../../node_modules/@angular/core/src/util/decorators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

constructor(private http:Http) { }

  getApiData(url:string):Observable<any>{
    return this.http.get(url).pipe(
      map((res)=>{
        return res.json()

      })
    )
  }
getChildData(id):Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
  .pipe(
    map((res)=>{
      return res.json()
    })
  )
  }
}

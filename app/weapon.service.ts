import { Injectable } from '@angular/core'
import { Weapon } from './weapon';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WeaponService{

  private weaponsUrl = 'app/weapons';  // URL to web api
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  getWeapons(): Promise<Weapon[]>{
    // return Promise.resolve(WEAPONS);  old way
    return this.http.get(this.weaponsUrl)
           .toPromise()
           .then(response => response.json().data as Weapon[])
           .catch(this.handleError);
  }
  getWeapon(id: number): Promise<Weapon> {
    return this.getWeapons()
           .then(weapons => weapons.find(weapon => weapon.id === id));
  }

  create(name: string, type: String[]): Promise<Weapon>{
    return this.http
      .post(this.weaponsUrl, JSON.stringify({name: name, type: type}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    let url = `${this.weaponsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  update(weapon: Weapon): Promise<Weapon> {
    // console.log(weapon)
    const url = `${this.weaponsUrl}/${weapon.id}`;
    return this.http
      .put(url, JSON.stringify(weapon), {headers: this.headers})
      .toPromise()
      .then(() => weapon)
      .catch(this.handleError);
}


}

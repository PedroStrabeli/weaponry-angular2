import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { WeaponSearchService } from './weapon-search.service';
import { Weapon } from './weapon';
@Component({
  selector: 'weapon-search',
  templateUrl: 'app/template/weapon-search.template.html',
  styleUrls:  ['app/template/weapon-search.style.css'],
  providers: [WeaponSearchService]
})
export class WeaponSearchComponent implements OnInit {
  weapons: Observable<Weapon[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private weaponSearchService: WeaponSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.weapons = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.weaponSearchService.search(term)
        // or the observable of empty weapons if no search term
        : Observable.of<Weapon[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Weapon[]>([]);
      });
  }
  gotoDetail(weapon: Weapon): void {
    let link = ['/detail', weapon.id];
    this.router.navigate(link);
  }
}

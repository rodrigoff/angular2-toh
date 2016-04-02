import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './/hero'
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service'

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/hero/templates/heroes.component.html',
    styleUrls: ['app/hero/styles/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    title = 'Tour of Heroes';
    heroes: Hero[] = [];

    constructor(
        private _router: Router,
        private _heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent} from './dashboard/dashboard.component'

import { HeroService } from './hero/hero.service';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

export class AppComponent {
    title = 'Tour of Heroes';
}

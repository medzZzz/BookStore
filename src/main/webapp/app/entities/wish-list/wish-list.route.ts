import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { WishListComponent } from './wish-list.component';
import { WishListDetailComponent } from './wish-list-detail.component';
import { WishListPopupComponent } from './wish-list-dialog.component';
import { WishListDeletePopupComponent } from './wish-list-delete-dialog.component';

@Injectable()
export class WishListResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const wishListRoute: Routes = [
    {
        path: 'wish-list',
        component: WishListComponent,
        resolve: {
            'pagingParams': WishListResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WishLists'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'wish-list/:id',
        component: WishListDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WishLists'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const wishListPopupRoute: Routes = [
    {
        path: 'wish-list-new',
        component: WishListPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WishLists'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'wish-list/:id/edit',
        component: WishListPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WishLists'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'wish-list/:id/delete',
        component: WishListDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WishLists'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];

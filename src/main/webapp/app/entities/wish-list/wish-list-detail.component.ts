import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { WishList } from './wish-list.model';
import { WishListService } from './wish-list.service';

@Component({
    selector: 'jhi-wish-list-detail',
    templateUrl: './wish-list-detail.component.html'
})
export class WishListDetailComponent implements OnInit, OnDestroy {

    wishList: WishList;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private wishListService: WishListService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInWishLists();
    }

    load(id) {
        this.wishListService.find(id)
            .subscribe((wishListResponse: HttpResponse<WishList>) => {
                this.wishList = wishListResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInWishLists() {
        this.eventSubscriber = this.eventManager.subscribe(
            'wishListListModification',
            (response) => this.load(this.wishList.id)
        );
    }
}

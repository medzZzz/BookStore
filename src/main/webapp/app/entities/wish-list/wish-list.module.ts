import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookStoreSharedModule } from '../../shared';
import { BookStoreAdminModule } from '../../admin/admin.module';
import {
    WishListService,
    WishListPopupService,
    WishListComponent,
    WishListDetailComponent,
    WishListDialogComponent,
    WishListPopupComponent,
    WishListDeletePopupComponent,
    WishListDeleteDialogComponent,
    wishListRoute,
    wishListPopupRoute,
    WishListResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...wishListRoute,
    ...wishListPopupRoute,
];

@NgModule({
    imports: [
        BookStoreSharedModule,
        BookStoreAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        WishListComponent,
        WishListDetailComponent,
        WishListDialogComponent,
        WishListDeleteDialogComponent,
        WishListPopupComponent,
        WishListDeletePopupComponent,
    ],
    entryComponents: [
        WishListComponent,
        WishListDialogComponent,
        WishListPopupComponent,
        WishListDeleteDialogComponent,
        WishListDeletePopupComponent,
    ],
    providers: [
        WishListService,
        WishListPopupService,
        WishListResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookStoreWishListModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BookStoreAuthorModule } from './author/author.module';
import { BookStoreBookModule } from './book/book.module';
import { BookStoreWishListModule } from './wish-list/wish-list.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BookStoreAuthorModule,
        BookStoreBookModule,
        BookStoreWishListModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookStoreEntityModule {}

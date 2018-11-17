import { BaseEntity, User } from './../../shared';

export class WishList implements BaseEntity {
    constructor(
        public id?: number,
        public dateOfCreate?: any,
        public users?: User[],
        public books?: BaseEntity[],
    ) {
    }
}

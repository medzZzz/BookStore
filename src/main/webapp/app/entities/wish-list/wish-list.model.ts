import { BaseEntity, User } from './../../shared';

export class WishList implements BaseEntity {
    constructor(
        public id?: number,
        public dateOfCreate?: any,
        public user?: User,
        public book?: BaseEntity,
    ) {
    }
}

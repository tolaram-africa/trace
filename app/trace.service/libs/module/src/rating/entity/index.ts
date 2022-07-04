export * from './rating.comment.entity';
export * from './rating.entity';
export * from './rating.type.entity';

import { Rating, RatingType, RatingComment } from './';

export const RatingModuleEntity = [Rating, RatingType, RatingComment];

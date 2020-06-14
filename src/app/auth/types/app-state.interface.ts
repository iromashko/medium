import { AuthStateInterface } from './auth-state.interface';
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feed-state.interface';
import { PopularTagsStateInterface } from 'src/app/shared/modules/popular-tags/types/popular-tags-state.interface';
import { ArticleStateInterface } from 'src/app/article/types/article-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
}

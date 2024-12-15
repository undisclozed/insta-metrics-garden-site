export type MetricType = 
  | 'views' 
  | 'likes' 
  | 'comments' 
  | 'shares' 
  | 'engagement' 
  | 'followers'
  | 'posts'
  | 'reached'
  | 'engaged'
  | 'growth'
  | 'saves';

export type Interval = '5min' | 'hourly' | 'daily' | 'weekly' | 'monthly';

export interface ChartData {
  date: string;
  value: number;
}

export interface LineChartProps {
  metric?: MetricType;
  interval?: Interval;
  showComparison?: boolean;
  currentCreator?: string;
  comparisonCreator?: string;
}

export const metricLabels: Record<MetricType, string> = {
  views: 'Views',
  likes: 'Likes',
  comments: 'Comments',
  shares: 'Shares',
  engagement: 'Engagement Rate',
  followers: 'Followers',
  posts: 'Posts',
  reached: 'Accounts Reached',
  engaged: 'Accounts Engaged',
  growth: 'Growth',
  saves: 'Saves'
};

export const metricTooltips: Record<MetricType, string> = {
  views: 'Total number of times your content has been viewed',
  likes: 'Total number of likes received on your content',
  comments: 'Total number of comments received on your content',
  shares: 'Number of times your content has been shared',
  engagement: 'Percentage of viewers who engaged with your content',
  followers: 'Total number of accounts following you',
  posts: 'Total number of posts published',
  reached: 'Number of unique accounts that saw your content',
  engaged: 'Number of unique accounts that engaged with your content',
  growth: 'Rate of follower growth over time',
  saves: 'Number of times your content has been saved'
};
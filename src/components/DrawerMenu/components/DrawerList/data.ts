import {
  DashboardIcon,
  FindNewIcon,
  ListsIcon,
  SequencesIcon,
  TemplateIcon,
  TaskIcon,
  InboxIcon,
  SalesIcon,
  AnalyticsIcon,
} from '../../../../assets/Icons/DrawerMenu/components';

export const navigationData = [
  {
    icon: DashboardIcon,
    text: 'Dashboard',
    link: '/',
  },
  {
    icon: FindNewIcon,
    text: 'Find New',
    link: '/find-new',
  },
  {
    icon: ListsIcon,
    text: 'Lists',
    link: '/lists',
  },
  {
    icon: SequencesIcon,
    text: 'Sequences',
    link: '/sequences',
  },
  {
    icon: TemplateIcon,
    text: 'Templates',
    link: '/templates',
  },
  {
    icon: TaskIcon,
    text: 'Tasks',
    link: '/tasks',
  },
  {
    icon: InboxIcon,
    text: 'Inbox',
    link: '/inbox',
    badge: 24,
  },
  {
    icon: SalesIcon,
    text: 'Sales',
    link: '/sales',
  },
  {
    icon: AnalyticsIcon,
    text: 'Analytics',
    link: '/analytics',
  },
];

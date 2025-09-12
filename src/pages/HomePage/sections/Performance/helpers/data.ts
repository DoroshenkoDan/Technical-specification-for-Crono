import React from 'react';

import {
  ContactsIcon,
  CompaniesIcon,
  ActivitiesIcon,
  MeetingsIcon,
  DealsIcon,
  PipelineIcon,
} from 'assets/Icons/HomePage';

export interface PerformanceData {
  id: string;
  title: string;
  currentNumber: number;
  maxNumber: number;
  toolTipInfo?: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
}

export const performanceData: PerformanceData[] = [
  {
    id: 'contacts',
    title: 'Contacts engaged',
    currentNumber: 130,
    maxNumber: 500,
    toolTipInfo: 'Number of contacts that have been engaged this month',
    icon: ContactsIcon,
    color: '#3B85E8',
  },
  {
    id: 'companies',
    title: 'Companies engaged',
    currentNumber: 270,
    maxNumber: 500,
    icon: CompaniesIcon,
    color: '#3B58DB',
  },
  {
    id: 'activities',
    title: 'Activities',
    currentNumber: 1300,
    maxNumber: 2000,
    icon: ActivitiesIcon,
    color: '#3B58DB',
  },
  {
    id: 'meetings',
    title: 'Meetings',
    currentNumber: 20,
    maxNumber: 30,
    icon: MeetingsIcon,
    color: '#E2AD13',
  },
  {
    id: 'deals',
    title: 'Deals',
    currentNumber: 100,
    maxNumber: 200,
    icon: DealsIcon,
    color: '#F376D8',
  },
  {
    id: 'pipeline',
    title: 'Pipeline',
    currentNumber: 50000,
    maxNumber: 100000,
    icon: PipelineIcon,
    color: '#1A9D6E',
  },
];

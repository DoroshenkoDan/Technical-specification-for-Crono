export interface OnBoardingItem {
  id: string;
  text: string;
  duration: string;
  iconPath: string;
}

export const onBoardingData: OnBoardingItem[] = [
  {
    id: 'integrations-setup',
    text: 'Integrations Setup',
    duration: '5 min',
    iconPath: '/icons/Icon_Extension.jpg',
  },
  {
    id: 'add-new-contact',
    text: 'Add new Contact',
    duration: '5 min',
    iconPath: '/icons/Icon_Add_new_contacts.jpg',
  },
  {
    id: 'create-first-sequence',
    text: 'Create your first sequence',
    duration: '10 min',
    iconPath: '/icons/target-goal.jpg',
  },
  {
    id: 'add-contacts-to-sequence',
    text: 'Add contacts to sequence',
    duration: '5 min',
    iconPath: '/icons/Icon_Add_to_Strategy.jpg',
  },
  {
    id: 'run-first-task',
    text: 'Run your first task',
    duration: '10 min',
    iconPath: '/icons/Icon_Run_task.jpg',
  },
];

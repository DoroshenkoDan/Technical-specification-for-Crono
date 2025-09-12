import { ActionType } from '../types';

export default function getActionText(actionType: ActionType): string {
  switch (actionType) {
    case 'roleChange':
      return 'Role change';
    case 'companyChange':
      return 'Company change';
    case 'websiteView':
      return 'Website view';
    default:
      return 'Notification';
  }
}

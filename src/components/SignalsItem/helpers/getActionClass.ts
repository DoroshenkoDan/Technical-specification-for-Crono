import { ActionType } from '../types';

import s from '../SignalsItem.module.scss';

export default function getActionClass(actionType: ActionType): string {
  switch (actionType) {
    case 'roleChange':
      return s.roleChange;
    case 'companyChange':
      return s.companyChange;
    case 'websiteView':
      return s.websiteView;
    default:
      return s.defaultAction;
  }
}

import React from 'react';
import { Divider } from '@mui/material';

import { taskStatusData, statusConfig } from './data';

import TaskStatusItem from 'components/TaskStatusItem/TaskStatusItem';
import { Box } from 'ui/Box';

import s from './TodayTask.module.scss';

export default function TodayTask() {
  return (
    <Box variant='rounded' className={s.TodayTask}>
      <h2 className={s.title}>Today's tasks</h2>
      <div className={s.content}>
        {taskStatusData.map((task) => {
          const config = statusConfig[task.status as keyof typeof statusConfig];
          const shouldShowDividerAfter =
            task.status === 'Overdue' || task.status === 'Auto';

          return (
            <React.Fragment key={task.status}>
              <TaskStatusItem
                status={task.status}
                count={task.count}
                errors={task.errors}
                backgroundColor={config.backgroundColor}
                numberColor={config.numberColor}
                path={config.path}
              />
              {shouldShowDividerAfter && (
                <Divider orientation='vertical' className={s.divider} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </Box>
  );
}

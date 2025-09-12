import React from 'react';

import { IconButton, LinearProgress, Tooltip } from '@mui/material';
import cn from 'classnames';

import formatNumber from './helpers/getFormatNumber';

import { InfoIcon } from 'assets/Icons/HomePage';
import { Box } from 'ui/Box';

import s from './PerformanceItem.module.scss';

interface Props {
  className?: string;
  currentNumber: number;
  title: string;
  maxNumber: number;
  toolTipInfo?: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
}

/**
 *  PerformanceItem
 *  @param className
 */

export default function PerformanceItem({
  className = '',
  title,
  currentNumber,
  maxNumber,
  toolTipInfo,
  icon: IconComponent,
  color,
}: Props) {
  const progressValue = (currentNumber / maxNumber) * 100;

  return (
    <Box variant='rounded' className={cn(s.PerformanceItem, className)}>
      {toolTipInfo && (
        <Tooltip
          title={toolTipInfo}
          arrow
          placement='top'
          className={s.tooltip}
        >
          <IconButton>
            <InfoIcon className={s.infoIcon} />
          </IconButton>
        </Tooltip>
      )}
      <h2 className={s.title}>{title}</h2>
      <div className={s.content}>
        <div className={s.numbers}>
          <span className={s.currentNumber} style={{ color }}>
            <IconComponent className={s.iconSvg} />
            {formatNumber(currentNumber)}
          </span>
          <span className={s.maxNumber}>/{formatNumber(maxNumber)}</span>
        </div>
        <LinearProgress
          variant='determinate'
          value={progressValue}
          className={s.progressBar}
          sx={{
            backgroundColor: `${color}20`,
            '& .MuiLinearProgress-bar': {
              backgroundColor: color,
            },
          }}
        />
      </div>
    </Box>
  );
}

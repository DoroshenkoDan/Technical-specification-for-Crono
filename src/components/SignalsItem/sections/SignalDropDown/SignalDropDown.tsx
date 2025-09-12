import React, { useState } from 'react';

import { Button, Menu, MenuItem } from '@mui/material';
import cn from 'classnames';

import { CompleteIcon, DeleteIcon } from 'assets/Icons/HomePage';
import { useDeleteSignalMut } from 'queries/signals';

import s from './SignalDropDown.module.scss';

interface Props {
  className?: string;
  id: string;
}

/**
 *  SignalDropDown
 *  @param className
 *  @param id - Signal ID for deletion
 */

export default function SignalDropDown({ className = '', id }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const deleteSignalMutation = useDeleteSignalMut();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleComplete = () => {
    console.log('Complete signal:', id);
    handleClose();
  };

  const handleDelete = async () => {
    try {
      await deleteSignalMutation.mutateAsync(id);
      console.log('Signal deleted successfully');
    } catch (error) {
      console.error('Error deleting signal:', error);
    }
    handleClose();
  };

  return (
    <div className={cn(s.SignalDropDown, className)}>
      <Button
        onClick={handleClick}
        aria-controls={open ? 'signal-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        className={s.button}
      >
        Action
      </Button>

      <Menu
        id='signal-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={s.menu}
        slotProps={{
          list: { className: s.menuList },
          paper: { className: s.menuPaper },
        }}
      >
        <MenuItem onClick={handleComplete} className={s.menuItem}>
          <span>Complete</span>
          <CompleteIcon className={s.icon} />
        </MenuItem>

        <MenuItem
          onClick={handleDelete}
          className={s.menuItem}
          disabled={deleteSignalMutation.isPending}
        >
          <span>
            {deleteSignalMutation.isPending ? 'Deleting...' : 'Delete'}
          </span>
          <DeleteIcon className={s.icon} />
        </MenuItem>
      </Menu>
    </div>
  );
}

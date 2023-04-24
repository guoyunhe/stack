import { Drawer, DrawerProps, Toolbar } from '@mui/material';

export interface SidebarProps {
  variant: DrawerProps['variant'];
  width: number;
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ variant, width, open, onClose }: SidebarProps) {
  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      sx={{ width, marginTop: variant === 'temporary' ? 0 : 64 }}
    >
      <Toolbar /> {/* placeholder */}
      TODO
    </Drawer>
  );
}

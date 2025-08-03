// Sidebar.tsx
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';

const drawerWidth = 240;

const navItems = [
    { label: 'Fraud Analytics Dashboard', target: 'dashboard', icon: <DashboardIcon /> },
    { label: 'Merchant Risk', target: 'merchant-risk', icon: <InsightsIcon /> },
    { label: 'Fraud Predictor', target: 'fraud-predictor', icon: <InsightsIcon /> },
    { label: 'FraudRate by MCC', target: 'fraud-rate-mcc', icon: <InsightsIcon /> },
    { label: 'Top Risk Indicator: Spending Ratio', target: 'top-users-chart', icon: <InsightsIcon /> },
    { label: 'Fraud rate by Transaction Method', target: 'payment-method-chart', icon: <InsightsIcon /> },
];

export default function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#f5f5f5',
                },
                display: { xs: 'none', md: 'block' },
            }}
        >
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            component="a"
                            href={item.target === 'dashboard' ? '#top' : `#${item.target}`}
                            sx={{ scrollBehavior: 'smooth' }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

import Image from 'next/image';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Logo from "../../../public/MercuriMart.png"
import SmallLogo from "../../../public/MercuriMart_Small.png"

import React from 'react';
import '../../app/globals.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageDropdown from '../LanguageDropdown';

const SideBar: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
        <div className="h-screen flex ">

            <Sidebar collapsed={collapsed} className='flex flex-col h-full'>
                <Menu>
                    <MenuItem onClick={() => setCollapsed(!collapsed)}  icon={<Image src={SmallLogo} alt='logo' width={40} className='mx-auto my-4'
                    />}> <Image src={Logo} alt='logo' width={200} className='mx-auto my-4'
                        /> </MenuItem>
                </Menu>

                <Menu>
                    <SubMenu icon={<DashboardIcon />} label="Dashboard">
                        <MenuItem icon={<ArticleIcon />}> Orders </MenuItem>
                        <MenuItem icon={<ReviewsIcon />}> Reviews </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<StoreIcon />}> Business </MenuItem>
                    <MenuItem icon={<GroupsIcon />}> Customers </MenuItem>
                    <MenuItem icon={<SettingsIcon />}> Settings </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SideBar;
import { useState } from 'react';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import HomeIcon from '@material-ui/icons/Home';
// import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CategoryIcon from '@material-ui/icons/Category';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FolderIcon from '@material-ui/icons/Folder';
// import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CollectionsIcon from '@material-ui/icons/Collections';
import ExtensionIcon from '@material-ui/icons/Extension';
// import BurstModeIcon from '@material-ui/icons/BurstMode';
// import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PaymentIcon from '@material-ui/icons/Payment';
import InfoIcon from '@material-ui/icons/Info';
import ReportIcon from '@material-ui/icons/Report';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import BusinessIcon from '@material-ui/icons/Business';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PagesIcon from '@material-ui/icons/Pages';
import HighQualityIcon from '@material-ui/icons/HighQuality';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function useListMenu() {
    const [list] = useState([{
        title: "DashBoard",
        path: "/dashboard",
        icon: DashboardIcon,
        submenu: null
    },
    {
        title: "Log Menager",
        path: "/log_manager",
        icon: PeopleAltIcon,
        submenu: null
    },
    {
        title: "Newslet Manager",
        path: "/newslet_manager",
        icon: RssFeedIcon,
        submenu: null
    },
    {
        title: "Order Product Manager",
        path: "/order_product_manager",
        icon: AssignmentIcon,
        submenu: null
    },
    {
        title: "Collection Manager",
        path: "/collection_manager",
        icon: CollectionsIcon,
        submenu: null
    },
    {
        title: "Reference Manager",
        path: "/reference_manager",
        icon: AccountTreeOutlinedIcon,
        submenu: null
    },
    {
        title: "Product Manager",
        path: "/product_manager",
        icon: ShoppingBasketIcon,
        submenu: null
    },
    {
        title: "Catalogue Manager",
        path: "/catalogue_manager",
        icon: ImportContactsIcon,
        submenu: null
    },
    {
        title: "Components",
        path: "/components",
        icon: FolderIcon,
        submenu: [
            {
                title: "Wallpaper Manager",
                path: "/components/wallpaper_manager",
                icon: WallpaperIcon,
                submenu: null
            },
            {
                title: "Wallpaper By Video Manager",
                path: "/components/wallpaper_by_video_manager",
                icon: YouTubeIcon,
                submenu: null
            }
        ]
    },
    {
        title: "Branch Manager",
        path: "/branch_manager",
        icon: BusinessIcon,
        submenu: null
    },
    {
        title: "Join Our Team Manager",
        path: "/join_our_team_manager",
        icon: GroupWorkIcon,
        submenu: null
    },
    {
        title: "Newsletter Page Manager",
        path: "/newsletter_page_manager",
        icon: PagesIcon,
        submenu: null
    },
    {
        title: "About US",
        path: "/about_us",
        icon: InfoIcon,
        submenu: [{
            title: "Company Profile Manager",
            path: "/about_us/company_profile_manager",
            icon: LocationCityIcon,
            submenu: null
        },
        {
            title: "Kenkoon HQ Manager",
            path: "/about_us/kenkoon_hq_manager",
            icon: HighQualityIcon,
            submenu: null
        },
        {
            title: "Our Designer Manager",
            path: "/about_us/our_designer_manager",
            icon: CategoryIcon,
            submenu: null
        },
        {
            title: "Register Manager",
            path: "/about_us/register",
            icon: AccountCircleIcon,
            submenu: null
        }]
    }
    ]);

    return { list }
}

export default useListMenu;
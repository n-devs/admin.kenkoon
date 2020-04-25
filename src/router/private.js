import {
    HomePage,
    CategoryManagerPage,
    WallpaperManagerPage,
    WallpaperByVideoManagerPage,
    CollectionManagerPage,
    ReferenceManagerPage,
    ProductManagerPage,
    OrderManagerPage,
    CatalogueManagerPage,
    NewsletManagerPage,
    CompanyProfileManagerPage,
    BranchManagerPage,
    JoinOurTeamManagerPage,
    NewsletterPageManagerPage,
    KenkoonHQManagerPage,
    OurDesignerManagerPage,
    LogManagerPage,
    RegisterPage
} from "@kenkoon/pages";

export const routePrivate = [
    {
        exact: true,
        path: "/",
        header: "dashboard",
        component: HomePage
    },
    {
        exact: false,
        path: "/dashboard",
        header: "dashboard",
        component: HomePage
    },
    {
        exact: false,
        path: "/log_manager",
        header: "Log Manager",
        component: LogManagerPage
    },
    {
        exact: false,
        path: "/category_manager",
        header: "Category Manager",
        component: CategoryManagerPage
    },
    {
        exact: false,
        path: "/components/wallpaper_manager",
        header: "Wallpaper Manager",
        component: WallpaperManagerPage
    },
    {
        exact: false,
        path: "/components/wallpaper_by_video_manager",
        header: "Wallpaper By Video Manager",
        component: WallpaperByVideoManagerPage
    },
    {
        exact: false,
        path: "/collection_manager",
        header: "Collection Manager",
        component: CollectionManagerPage
    },
    {
        exact: false,
        path: "/reference_manager",
        header: "Reference Manager",
        component: ReferenceManagerPage
    },
    {
        exact: false,
        path: "/product_manager",
        header: "Product Manager",
        component: ProductManagerPage
    },
    {
        exact: false,
        path: "/order_product_manager",
        header: "Order Product Manager",
        component: OrderManagerPage
    },
    {
        exact: false,
        path: "/catalogue_manager",
        header: "Catalogue Manager",
        component: CatalogueManagerPage
    },
    {
        exact: false,
        path: "/newslet_manager",
        header: "Newslet Manager",
        component: NewsletManagerPage
    },
    {
        exact: false,
        path: "/about_us/company_profile_manager",
        header: "Company Profile Manager",
        component: CompanyProfileManagerPage
    },
    {
        exact: false,
        path: "/branch_manager",
        header: "Branch Manager",
        component: BranchManagerPage
    },
    {
        exact: false,
        path: "/join_our_team_manager",
        header: "Join Our Team Manager",
        component: JoinOurTeamManagerPage
    },
    {
        exact: false,
        path: "/newsletter_page_manager",
        header: "Newsletter Page Manager",
        component: NewsletterPageManagerPage
    },
    {
        exact: false,
        path: "/about_us/kenkoon_hq_manager",
        header: "Kenkoon HQ Manager",
        component: KenkoonHQManagerPage
    },
    {
        exact: false,
        path: "/about_us/our_designer_manager",
        header: "Our Designer Manager",
        component: OurDesignerManagerPage
    },
    {
        exact: false,
        path: "/about_us/register",
        header: "Register Manager",
        component: RegisterPage
    }
]
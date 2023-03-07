import DashboardPageLayout from "../pages/db_1-5/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardIndex from "../pages/db_1-5/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import ComponentPageLayout from "../pages/db_6-7/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Page_2_1 from "../pages/db_6-7/Page_2_1";
import Page_2_2 from "../pages/db_6-7/Page_2_2";
import Page_4_1 from "../pages/db_11/Page_4_1";
import Page_1_1 from "../pages/db_1-5/Page_1_1";
import Page_1_2 from "../pages/db_1-5/Page_1_2";
import Page_1_3 from "../pages/db_1-5/Page_1_3";
import Page_1_4 from './../pages/db_1-5/Page_1_4';
import Page_1_5 from './../pages/db_1-5/Page_1_5';
import Outlet3 from "../pages/db_8-10/Outlet3";
import Page_3_2 from "../pages/db_8-10/Page_3_2";
import Page_3_1 from "../pages/db_8-10/Page_3_1";
import Page_3_3 from "../pages/db_8-10/Page_3_3";
import Page_4_2 from "../pages/db_11/Page_4_2";
import Page_4_3 from "../pages/db_11/Page_4_3";
import Page_4_4 from "../pages/db_11/PAge_4_4";
import Outlet4 from "../pages/db_11/Outlet4";

const appRoutes: RouteType[] = [
  {
    path: "/",
    index: true,
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Bce",
      icon: <AppsOutlinedIcon />
    }
  },
  {
    path: "/db_1-5",
    element: <DashboardPageLayout />,
    state: "data  base 1 -5 ",
    sidebarProps: {
      displayText: "DB 1-5",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/db_1-5/page_1_1",
        element: <Page_1_1 />,
        state: "db_1-5.page 1-1",
        sidebarProps: {
          displayText: "ОРГАНИЗАЦИЯ"
        },
      },
      {
        path: "/db_1-5/page_1_2",
        element: <Page_1_2 />,
        state: "db_1-5.page_1_2",
        sidebarProps: {
          displayText: "ИНФ И ОБ ИНФОРМАТИЗАЦИИ"
        }
      },
      {
        path: "/db_1-5/page_1_3",
        element: <Page_1_3 />,
        state: "db-1-5.page_1_3",
        sidebarProps: {
          displayText: "ПОДР(СОТРУДНИК) ИБ (ИКТ) ОРГАНИЗАЦИИ"
        }
      },
      {
        path: "/db_1-5/page_1_4",
        element: <Page_1_4 />,
        state: "db-1-5.page_1_4",
        sidebarProps: {
          displayText: "ПОДР ГУП ЦЕНТР КИБЕРБЕЗОПАСНОСТИ"
        }
      },
      {
        path: "/db_1-5/page_1_5",
        element: <Page_1_5 />,
        state: "db-1-5.page_1_5",
        sidebarProps: {
          displayText: "АИСМ ИБ ГУП ЦЕНТР КИБЕРБЕЗОПАСНОСТИ"
        }
      }
    ]
  },
  {
    path: "/db_6-7",
    element: <ComponentPageLayout />,
    state: "data base 6 - 7",
    sidebarProps: {
      displayText: "DB 6-7",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_6-7/page_2_1",
        element: <Page_2_1 />,
        state: "db_6-7.alert",
        sidebarProps: {
          displayText: "ХАКЕРСКИЕ  ГРУППИРОВКИ"
        },
      },
      {
        path: "/db_6-7/page_2_2",
        element: <Page_2_2 />,
        state: "db_6-7.page_2_1",
        sidebarProps: {
          displayText: "НАРУШИТЕЛЬ"
        }
      }
    ]
  },
  {
    path: "/db_8-10",
    element: <Outlet3 />,
    state: "data base 8 - 10",
    sidebarProps: {
      displayText: "DB 8-10",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_8-10/page_3_1",
        element: <Page_3_1 />,
        state: "db_8-10.alert",
        sidebarProps: {
          displayText: "Л И Ц О"
        },
      },
      {
        path: "/db_8-10/page_3_2",
        element: <Page_3_2 />,
        state: "db_8-10.alert",
        sidebarProps: {
          displayText: "К О Н Т А К Т - СВЯЗЬ ЛИЦА"
        },
      },
      {
        path: "/db_8-10/page_3_3",
        element: <Page_3_3 />,
        state: "db_8-10.alert",
        sidebarProps: {
          displayText: "А Д Р Е С"
        },
      }
    ]
  },
  {
    path: "/db_11",
    element: <Outlet4/>,
    state: "Page 11 19 22 28",
    sidebarProps: {
      displayText: "DB 11-19-22-28",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_11/page_4_1",
        element: <Page_4_1 />,
        state: "db_11.alert",
        sidebarProps: {
          displayText: "ЭКСПЕРТИЗА ВЕБ-САЙТОВ ДОМЕННОЙ ЗОНЫ 'uz' "
        }
      },
      {
        path: "/db_11/page_4_2",
        element: <Page_4_2 />,
        state: "db_11.alert",
        sidebarProps: {
          displayText: "РАССЛЕДОВАНИЕ"
        }
      },
      {
        path: "/db_11/page_4_3",
        element: <Page_4_3/>,
        state: "db_11.alert",
        sidebarProps: {
          displayText: "А Д Р Е С"
        },
      },
      {
        path: "/db_11/page_4_4",
        element: <Page_4_4 />,
        state: "db_11.alert",
        sidebarProps: {
          displayText: "А Д Р Е С "
        }
      },
    ]

  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;
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
import Outlet5 from "../pages/db_12-13/Outlet5";
import Outlet6 from "../pages/db_14-21/Outlet6";
import Page_14 from "../pages/db_14-21/Page_14";
import Page_21 from "../pages/db_14-21/Page_21";

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
          displayText: "КОНТАКТ - СВЯЗЬ ЛИЦА"
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
          displayText: "ВОСС И УНИЧ Ц-Д С ЭЛЕК НОСИТЕЛЕЙ ИНФО"
        },
      },
      {
        path: "/db_11/page_4_4",
        element: <Page_4_4 />,
        state: "db_11.alert",
        sidebarProps: {
          displayText: "РЕАГИРОВАНИЕ - ПРИНЯТЫЕ МЕРЫ"
        }
      },
    ]

  },
  {
    path: "/db_12-13",
    element: <Outlet5/>,
    state: "Page 12 - 13 ",
    sidebarProps: {
      displayText: "DB 12-13",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_12-13/page_12",
        element: <Page_4_1 />,
        state: "db_12-13.alert",
        sidebarProps: {
          displayText: "ЭКСПЕРТИЗА ТЕХНИЧЕСКИХ ЗАДАНИЙ"
        }
      },
      {
        path: "/db_12-13/page_13",
        element: <Page_4_2 />,
        state: "db_12-13.alert",
        sidebarProps: {
          displayText: "ЭКСПЕРТИЗА ГОС.ИНФОРМАЦИОННЫХ СИСТЕМ"
        }
      }
    ]

  },
  {
    path: "/db_14-21",
    element: <Outlet6/>,
    state: "Page 14 - 21 ",
    sidebarProps: {
      displayText: "DB 14-21",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_14-21/page_14",
        element: <Page_14 />,
        state: "db_14-21.alert",
        sidebarProps: {
          displayText: "КСПЕРТИЗА ИНФ СИСТ НА СООТЕ ТРЕ ИНФ БЕЗ"
        }
      },
      {
        path: "/db_14-21/page_21",
        element: <Page_21/>,
        state: "db_14-21.alert",
        sidebarProps: {
          displayText: "ТЕСТИРОВАНИЕ НА ПРОНИКНОВЕНИЕ (PENTEST)"
        }
      }
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
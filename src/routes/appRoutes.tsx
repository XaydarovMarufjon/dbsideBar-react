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
import Outlet7 from "../pages/db_15-16/Outlet7";
import Outlet8 from "../pages/db_17-30/Outlet8";
import Outlet9 from "../pages/db_18-20/Outlet9";
import Page_17 from "../pages/db_17-30/Page_17";
import Page_29 from "../pages/db_17-30/Page_29";
import Page_30 from "../pages/db_17-30/Page_30";
import Page_18 from "../pages/db_18-20/Page_18";
import Page_20 from "../pages/db_18-20/Page_20";
import Page_23 from "../pages/db_23-26/Page_23";
import Page_24 from "../pages/db_23-26/Page_24";
import Page_25 from "../pages/db_23-26/Page_25";
import Page_26 from "../pages/db_23-26/Page_26";
import Page_27 from "../pages/db_27/Page_27";
import Outlet11 from "../pages/db_27/Outlet11";
import Outlet10 from "../pages/db_23-26/Outlet10";
import Page_15 from "../pages/db_15-16/Page_15";

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
      displayText: "DB 1-2-3-4-5",
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
    state: "data base 8 - 9 - 10",
    sidebarProps: {
      displayText: "DB 8-9-10",
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
    path: "/db_15-16",
    element: <Outlet7/>,
    state: "Page 15 - 16",
    sidebarProps: {
      displayText: "DB 15-16",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_15-16/page_15",
        element: <Page_15 />,
        state: "db_15-16.alert",
        sidebarProps: {
          displayText: "СЕРТИФИКАЦИЯ ИКТ (ПО)"
        }
      },
      {
        path: "/db_15-16/page_16",
        element: <Page_21/>,
        state: "db_15-16.alert",
        sidebarProps: {
          displayText: "СЕРТИФИКАЦИЯ СИСТ УПР ИНФО БЕЗОПАСНОСТИ"
        }
      }
    ]
  },
  {
    path: "/db_17-30",
    element: <Outlet8/>,
    state: "Page 17- 29 - 30",
    sidebarProps: {
      displayText: "DB 17-29-30",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_17-30/page_17",
        element: <Page_17 />,
        state: "db_17-30.alert",
        sidebarProps: {
          displayText: "РАЗРАБОТКА ПОЛИТИКИ ИНФО БЕЗ"
        }
      },
      {
        path: "/db_17-30/page_29",
        element: <Page_29/>,
        state: "db_17-30.alert",
        sidebarProps: {
          displayText: "МЕЖВЕДОМСТВЕННОЕ ВЗАИМОДЕЙСТВИЕ"
        }
      },
      {
        path: "/db_17-30/page_30",
        element: <Page_30/>,
        state: "db_17-30.alert",
        sidebarProps: {
          displayText: "НОРМАТИВНО-ПРАВОВОЕ ОБЕС И СОВЕР Н Б"
        }
      }
    ]
  },
  {
    path: "/db_18-20",
    element: <Outlet9/>,
    state: "Page 18 - 20",
    sidebarProps: {
      displayText: "DB 18-20",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_18-20/page_18",
        element: <Page_18 />,
        state: "db_18-20.alert",
        sidebarProps: {
          displayText: "АУДИТ ИНФОРМАЦИОННОЙ БЕЗ ОБЪЕКТОВ ИНФО"
        }
      },
      {
        path: "/db_18-20/page_20",
        element: <Page_20/>,
        state: "db_18-20.alert",
        sidebarProps: {
          displayText: "ПРОВЕРКИ И ИЗУЧЕНИЯ"
        }
      }
    ]
  },
  {
    path: "/db_23-26",
    element: <Outlet10/>,
    state: "Page 23 - 24 - 25 - 26",
    sidebarProps: {
      displayText: "DB 23-24-25-26",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_23-26/page_23",
        element: <Page_23 />,
        state: "db_23-26.alert",
        sidebarProps: {
          displayText: "КИБЕРИНЦИДЕНТ"
        }
      },
      {
        path: "/db_23-26/page_24",
        element: <Page_24/>,
        state: "db_23-26.alert",
        sidebarProps: {
          displayText: "СОБЫТИЕ  ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ"
        }
      },
      {
        path: "/db_23-26/page_25",
        element: <Page_25 />,
        state: "db_23-26.alert",
        sidebarProps: {
          displayText: "УЯЗВИМОСТЬ  ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ"
        }
      },
      {
        path: "/db_23-26/page_26",
        element: <Page_26/>,
        state: "db_23-26.alert",
        sidebarProps: {
          displayText: "УГРОЗА  ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ"
        }
      }
    ]
  },
  {
    path: "/db_27",
    element: <Outlet11/>,
    state: "Page 27",
    sidebarProps: {
      displayText: "DB 27",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/db_27/page_27",
        element: <Page_27 />,
        state: "db_27.alert",
        sidebarProps: {
          displayText: "ИСТОЧНИК   ИНФОРМАЦИИ"
        }
      }
    ]
  },





  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Documentation",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;
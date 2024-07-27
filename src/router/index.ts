/*
 * @Author: caixin caixin185@163.com
 * @Date: 2024-07-27 10:48:07
 * @LastEditors: caixin
 * @LastEditTime: 2024-07-27 11:33:58
 * @Description: file content
 */
import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import SuspenseLazy from "../components/SuspenseLazy";
const User = SuspenseLazy(() => import("../pages/User"));
const Home = SuspenseLazy(() => import("../pages/Home"));

interface RouteMeta {
    title?: string;
    icon?: string;
    auth?: boolean;
    isShow?: boolean;
}
export type RouteType = RouteObject & { meta: RouteMeta };
export const router: any = createBrowserRouter([
    {
        path: "/",
        element: Home,
        meta: {
          title: "首页",
          icon: "home",
          auth: true,
          isShow: true,
        }
    },
    {
        path: "/home",
        element: Home,
         meta: {
          title: "首页",
          icon: "home",
          auth: true,
          isShow: true,
        }
    },
    {
        path: "/user",
        element: User,
        // children: [
        //     {
        //         index:true,
        //         element: UserInfo
        //      },
        //     {
        //         path: "/user/list",
        //         element: UserList
        //     }
        // ],
    },
    {
      path: "/*",
      element: Home,
    }
]  as RouteType[]);
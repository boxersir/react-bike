/*
 * @Author: caixin caixin185@163.com
 * @Date: 2024-07-27 10:58:04
 * @LastEditors: caixin
 * @LastEditTime: 2024-07-27 10:59:41
 * @Description: file content
 */
import { getToken } from "@/utils";
import { Navigate, useLocation, useRouteError } from "react-router-dom";
// 高阶组件:把一个组件当成另外一个组件的参数传入 然后通过一定的判断 返回新的组件
// 这里的AuthRoute就是一个高阶组件

function AuthRoute({ children }: any) {
  const location = useLocation();
  // const href = useHref({
  //   pathname: location.pathname,
  //   search: location.search,
  //   hash: location.hash,
  // })
  // const params = useParams()
  const error = useRouteError();
  console.log(location, error);
  const tokenStr = getToken();
  const whiteList = ["/login", "/404", "/home", "/about"];
  if (error) {
    return <Navigate to="/404" replace />;
  }
  if (tokenStr || whiteList.includes(location.pathname)) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export { AuthRoute };

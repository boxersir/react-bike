/*
 * @Author: caixin caixin185@163.com
 * @Date: 2024-07-12 23:34:43
 * @LastEditors: caixin
 * @LastEditTime: 2024-07-14 18:56:12
 * @Description: file content
 */
import React, { Suspense, lazy } from 'react'
import Loading from '../Loading/index.tsx'
import { AuthRoute } from './AuthRouter.tsx'

const SuspenseLazy = (props: any) => {
  return (
    <Suspense fallback={<Loading />}>
      <AuthRoute>{React.createElement(lazy(props))}</AuthRoute>
    </Suspense>
  )
}

export default SuspenseLazy

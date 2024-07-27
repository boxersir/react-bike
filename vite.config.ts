/*
 * @Author: caixin caixin185@163.com
 * @Date: 2024-07-27 08:22:42
 * @LastEditors: caixin
 * @LastEditTime: 2024-07-27 10:47:47
 * @Description: file content
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': '/src', // 设置别名
    },
  },
})

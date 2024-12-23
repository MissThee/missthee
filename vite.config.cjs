import {defineConfig} from 'vite'
import path from 'path';
// import TestVitePlugin from './plugin/TestVitePlugin'
import Inspect from 'vite-plugin-inspect'
export default defineConfig({
    base: './',
    server: {
        port: 8080,
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src')
        }
    },
    plugins: [
        Inspect(),
        // TestVitePlugin(),
    ],
    build: {
        outDir: 'docs', // 配合github静态页的导出目录
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                // // 分包
                // manualChunks: (id) => {
                //     if (id.includes('node_modules')) {
                //         let idTmp = id.substring(id.lastIndexOf('node_modules/') + 'node_modules/'.length)
                //         idTmp = idTmp.substring(0, idTmp.indexOf('.'))
                //         const idArr = idTmp.split('/')
                //         let result = ''
                //         for (let i = 0; i < Math.min(3, idArr.length); i++) {
                //             result += (i > 0 ? '_' : '') + idArr[i]
                //         }
                //         return result
                //     }
                // },
                // // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
                entryFileNames: 'entry/[name].[hash].js',
                // 用于命名代码拆分时创建的共享块的输出命名
                chunkFileNames: (chunkInfo) => {
                    return `chunk/${chunkInfo.name.replace('_', '')}.[hash].js`
                },
                // 用于输出静态资源的命名，[ext]表示文件扩展名
                assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
                // 拆分js到模块文件夹
                // chunkFileNames: (chunkInfo) => {
                //     const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
                //     const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
                //     return `js/${fileName}/[name].[hash].js`;
                // },
            },
        },
    },
})
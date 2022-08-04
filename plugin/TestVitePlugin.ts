import type {PluginOption} from 'vite';

const TestVitePlugin = (): PluginOption => {
    let configTmp
    return {
        // 插件名称
        name: 'TestVitePlugin',
        // 该插件在 plugin-vue 插件之前执行，这样就可以直接解析到原模板文件
        enforce: 'pre',
        //以下钩子在服务器启动时被调用：
        options(options) {
            console.log('hook options', options)
            return options
        },

        buildStart(options) {
            console.log('hook buildStart', options)
        },
        //以下钩子会在每个传入模块请求时被调用：
        resolveId(source, importer, options) {
            console.log('hook resolveId', source, importer, options)
        },

        load(id, options) {
            console.log('hook load', id, options)
        },

        transform(code, id, options) {
            console.log('hook transform', code, id, options)
        },
        //以下钩子在服务器关闭时被调用：
        buildEnd(err) {
            console.log('hook buildEnd', err)
        },

        closeBundle() {
            console.log('hook closeBundle')
        },

        // ------------------------vite独有钩子------------------------
        // 此处再修改配置中的plugins将不会生效，所有用户插件已被解析了
        config(config, env) {
            console.log('hook-vite config', config, env)
            // 返回配置内容，会自动和现有配置进行合并（推荐）
            // 直接修改config对象（合并达不到预期效果时使用）
        },

        // 读取和存储最终解析的配置
        configResolved(resolvedConfig) {
            // 存储最终解析的配置,可在之后的钩子中调用
            configTmp = resolvedConfig
        },
    }
}

export default TestVitePlugin

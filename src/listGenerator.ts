import * as Assets from './assets/img'

const contentDataList = [
    {
        title: 'three.js我的世界',
        description: 'three.js构建的简易我的世界静态页',
        href: 'https://missthee.github.io/threejs-minecraft/index.html',
        img: Assets.threeJsMinecraft
    },
    {
        title: '手绘风格UI组件',
        description: 'lit-element、rough.js构建手绘风格组件',
        href: 'https://missthee.github.io/hand-drawn-component/index.html',
        img: Assets.handDrawnComponent
    },
    {
        title: '表格行内编辑',
        description: 'element-ui表格行内编辑',
        href: 'https://missthee.github.io/elementui-table-cell-edit/dist/index.html',
        img: Assets.tableCellEdit
    },
    {
        title: '简单大数据表格',
        description: '动态渲染数据行的大数据表格',
        href: 'https://missthee.github.io/simple-big-data-table/src/big-data-table.html',
        img: Assets.simpleBigDataTable
    },
    {
        title: '像素画板',
        description: 'canvas像素画板',
        href: 'https://missthee.github.io/pixel-pad/index.html',
        img: Assets.pixel
    },
    {
        title: 'github文件树浏览',
        description: '树状视图形式展示github仓库文件',
        href: 'https://missthee.github.io/page',
        img: Assets.githubFileTree
    },
    {
        title: 'nodejs自动部署工具',
        description: '根据配置进行多环境打包、文件分发、文件清理',
        href: 'https://github.com/MissThee/simple-deploy',
        img: Assets.simpleDeploy
    },
]

function createCard(title: string, description: string, href: string, img: string) {
    const itemEl = document.createElement('div')
    itemEl.className = 'info-card'
    const anchorEl = document.createElement('a')
    anchorEl.href = href
    anchorEl.target = '_blank'
    const imgEl = document.createElement('img')
    imgEl.src = img
    imgEl.alt = title
    imgEl.className = 'img'
    const titleEl = document.createElement('div')
    titleEl.innerText = title
    titleEl.className = 'title'
    const descriptionEl = document.createElement('div')
    descriptionEl.innerText = description
    descriptionEl.className = 'description'

    anchorEl.append(imgEl, titleEl, descriptionEl)
    itemEl.append(anchorEl)

    return itemEl
}

(function (dataList) {
    const contentEl = document.getElementById('content')
    dataList.forEach(data => {
        contentEl?.append(createCard(data.title, data.description, data.href, data.img))
    })
    console.log(contentEl?.innerHTML)
})(contentDataList)

export {}

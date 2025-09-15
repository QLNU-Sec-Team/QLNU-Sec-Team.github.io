# 齐鲁师范学院网络安全社团(QLNU-Sec-Team)官网

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/QLNU-Sec-Team/QLNU-Sec-Team.github.io/astro.yml)
![GitHub License](https://img.shields.io/github/license/QLNU-Sec-Team/QLNU-Sec-Team.github.io)
![GitHub deployments](https://img.shields.io/github/deployments/QLNU-Sec-Team/QLNU-Sec-Team.github.io/github-pages)
![GitHub Release](https://img.shields.io/github/v/release/QLNU-Sec-Team/QLNU-Sec-Team.github.io)

![NPM Version](https://img.shields.io/npm/v/astro)
![GitHub last commit](https://img.shields.io/github/last-commit/QLNU-Sec-Team/QLNU-Sec-Team.github.io)
![GitHub contributors](https://img.shields.io/github/contributors-anon/QLNU-Sec-Team/QLNU-Sec-Team.github.io)




运行在: https://www.qlnu-sec.cn

## About

> 本项目使用 `Astro` 作为 Web 框架进行编写
>
> 基本框架由 [shenghuo2](https://github.com/shenghuo2) 进行编写实现
>
> 于 2024.8.5 基本完成实现

## 维护提示

若需维护 `index`/`award` 页的内容

直接修改 `src/pages/index.md` / `src/pages/award.md` 即可

---

如需增加`member`页的成员

请修改`src/assets/memberList.json`

按照以下格式编写

```
{
    "index": {
        "level": "number",
        "member": [
            "name"
        ],
        "link": {
            "name": "https://link"
        }
    }
}
```

---

如需增加`friends`页的成员

请在`src/assets/friends.json`

按照以下格式新增
```
{
    "name": "", //名称
    "description": "", //描述
    "avatar": "", //要求https图片链接
    "link" : "" //网站链接
}
```


---

> 本项目使用了**ViewTransition**特性，所以请使用Astro ^4.12.2
>
> 使用nodejs v20


# 项目结构

```
.
├── public
│   ├── scripts
│   │   └── menu.js
│   ├── favicon.svg
│   ├── icon.png
│   ├── QLNU.png
│   └── wx.svg
├── src
│   ├── assets
│   │   ├── friends.json
│   │   └── memberList.json
│   ├── pages
│   │   ├── components
│   │   │   ├── footer.astro
│   │   │   ├── Navbar.astro
│   │   │   └── NavItem.astro
│   │   ├── layouts
│   │   │   ├── BaseLayout.astro
│   │   │   └── BaseMarkdownLayout.astro
│   │   ├── index.md
│   │   ├── award.md
│   │   ├── friends.astro
│   │   └── member.astro
│   │   
│   ├── styles
│   │   └── global.css
│   └── env.d.ts
├── astro.config.mjs
├── CNAME
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json

```

## public

此文件夹下为网站根目录可直接使用的文件

主要是存放非代码、未处理的资源 

这个文件夹中的文件将会被原封不动地复制到构建文件夹中

`favicon.svg` 未使用，为Astro的icon

## src

### assets

`memberList.json` 为 member.astro所引用的成员列表JSON

结构请参考 [维护提示](#维护提示)

`friends.json` 为 friends.astro所引用的友链列表JSON

结构请参考 [维护提示](#维护提示)


### pages

`Astro`将渲染在本文件夹下的文件为页面

### pages/components

基本组件，Astro使用模块化设计

可以是 `Astro 组件` 或是像 React 或 Vue 这样的 `UI 框架组件`

Navbar由NavItem组成

Footer为页脚

### pages/layouts

框架模板，两个模板几乎相同，可以再进行合并重构

BaseLayout为原模板，后改为`member.astro`独用

BaseMarkdownLayout为`index.md`和`award.md`的渲染模板

### styles

本文件夹下存放的`global.css`暂未实装

### scripts

本文件夹下存放的`menu.js`为`Navbar`组件的脚本

## 根目录

### package.json

nodejs 项目清单

名称和版本 (name 和 version): 定义项目的名称和版本号。

描述 (description): 项目简要描述。

脚本 (scripts): 定义一组可以通过 `npm run <script>` 运行的命令，如启动项目、运行测试等。

依赖项 (dependencies): 列出项目运行时所需的包和版本。

### astro.config.mjs

包括了 Astro 项目的配置。你可以在这里指定要使用的集成、构建选项、服务器选项以及其他内容


# 其他

## Contributors

<!-- readme: shenghuo2,collaborators,contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/shenghuo2">
                    <img src="https://avatars.githubusercontent.com/u/69127301?v=4" width="80;" alt="shenghuo2"/>
                    <br />
                    <sub><b>shenghuo2</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/1-r1ce">
                    <img src="https://avatars.githubusercontent.com/u/117970635?v=4" width="80;" alt="1-r1ce"/>
                    <br />
                    <sub><b>Yime</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/CG-Jue">
                    <img src="https://avatars.githubusercontent.com/u/131164348?v=4" width="80;" alt="CG-Jue"/>
                    <br />
                    <sub><b>CGjue</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Yalois">
                    <img src="https://avatars.githubusercontent.com/u/40634854?v=4" width="80;" alt="Yalois"/>
                    <br />
                    <sub><b>Yalois</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/suyoleaves">
                    <img src="https://avatars.githubusercontent.com/u/69106541?v=4" width="80;" alt="suyoleaves"/>
                    <br />
                    <sub><b>fishfond</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/qingchuana">
                    <img src="https://avatars.githubusercontent.com/u/131779281?v=4" width="80;" alt="qingchuana"/>
                    <br />
                    <sub><b>Q1ngchuan</b></sub>
                </a>
            </td>
		</tr>
		<tr>
            <td align="center">
                <a href="https://github.com/f1ngy3">
                    <img src="https://avatars.githubusercontent.com/u/126939293?v=4" width="80;" alt="f1ngy3"/>
                    <br />
                    <sub><b>f1ngy3</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Yhuanhuan01">
                    <img src="https://avatars.githubusercontent.com/u/118103563?v=4" width="80;" alt="Yhuanhuan01"/>
                    <br />
                    <sub><b>huan</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: shenghuo2,collaborators,contributors -end -->

### Bots

<!-- readme: bots -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/github-actions[bot]">
                    <img src="https://avatars.githubusercontent.com/in/15368?v=4" width="80;" alt="github-actions[bot]"/>
                    <br />
                    <sub><b>github-actions[bot]</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/dependabot[bot]">
                    <img src="https://avatars.githubusercontent.com/in/29110?v=4" width="80;" alt="dependabot[bot]"/>
                    <br />
                    <sub><b>dependabot[bot]</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: bots -end -->

## VCS

本项目使用Git进行版本管理。您可以在repository查看可用版本。

## License

[AGPL3.0](LICENSE)


# 開發指南

### 介紹

感謝你使用 `rc-ui-lib`。

以下是關於提交反饋或代碼的指南。在提交 issue 或者 PR 之前，請先花幾分鐘時間閱讀以下文字。

## 參與開發

### 本地開發

按照下面的步驟操作，即可在本地開發組件。

```bash
# 克隆倉庫
https://github.com/rancui/rc-ui-lib.git

# 安裝依賴
cd my-app && yarn bootstrap

# 进入開發模式，瀏覽器訪問 http://localhost:8080
yarn start
```

### 目錄結構

- 倉庫的組件代碼位於 src 下，每個組件一個文件夾
- docs目錄下是文檔網站的代碼，本地開發時可以在目錄下運行 yarn start 開啟文檔網站

項目主要目錄如下：

```
rc-ui-lib
├─ build     # 建構
├─ docs      # 文檔
├─ src       # 元件
├─ packages  # 子包
├─ tests     # 單測
└─ typings   # 類型
```

### 新增新元件

添加新組件時，請按照下面的目錄結構組織文件，並在 `vant.config.js` 中配置組件名稱。

```
src
└─ button
   ├─ demo              # 示例程式碼
   ├─ __test__          # 單元測試
   ├─ index.tsx         # 元件入口
   ├─ PropsType.ts      # 元件屬性
   ├─ style/index.less  # 元件樣式
   ├─ style/var.less    # 樣式變數
   ├─ README.md         # 中文文檔
   └─ README.en-US.md   # 英文文件檔
```

## 提交 PR

### Pull Request 規範

如果你是第一次在 GitHub 上提 Pull Request ，可以閱讀下面這兩篇文章來學習：

- [如何優雅地在 GitHub 上貢獻代碼](https://segmentfault.com/a/1190000000736629)
- [第一次參與開源](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md)

#### 規範

- 如果遇到問題，建議保持你的 PR 足夠小。保證一個 PR 只解決一個問題或只添加一個功能
- 當新增組件或者修改原有組件時，記得增加或者修改測試代碼，保證代碼的穩定
- 在 PR 中請添加合適的描述，並關聯相關的 Issue

### Pull Request流程

- fork 主倉庫，如果已經 fork 過，請同步主倉庫的最新代碼
- 基於 fork 後倉庫的 `main` 分支新建一個分支，比如 `feat-button_color`
- 在新分支上進行開發，開發完成後，提 Pull Request 到主倉庫的 `main` 分支
- Pull Request 会在 Review 通過後被合併到主倉庫
- 等待 rc-ui-lib 發佈版本

### 同步最新程式碼

提 Pull Request 前，請依照下面的流程同步主倉庫的最新代碼：

```bash
# 新增主倉庫到 remote，作為 fork 後倉庫的上游倉庫
git remote add upstream https://github.com/rancui/rc-ui-lib.git

# 拉取主倉庫最新代碼
git fetch upstream

# 合併主倉庫代碼
git merge upstream/main
```

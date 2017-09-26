This repository is sample code for Angular 4 (Angular 2) SPA.  
Use the Visual Studio Code to development.  

# Angular 4 教學 - Webpack 預先編譯 Ahead-of-Time (AOT)

之前用 Angular 4 開發後台系統，使用者都是在 PC 上面使用，網站啟動速度都很快，所以沒有使用到 Ahead-of-Time (AOT) 預先編譯的需求。  
最近新產品上線，遇到很多 Android 的使用者開啟網站超級慢，舊一點的機型甚至開一分鐘才有畫面。事後才趕緊補上 AOT 編譯。  
本篇將介紹用 Webpack 預先編譯 AOT 編譯。  

Blog：  
[Angular 4 教學 - Webpack 預先編譯 Ahead-of-Time (AOT)](https://blog.johnwu.cc/article/angular-4-webpack-ahead-of-time.html)  

## 說明

安裝軟體的部分我就沒有詳細介紹，以下是我使用到的工具跟語言。  

開發工具：
1. Visual Studio Code。[官網下載頁面](https://code.visualstudio.com/Download)  
> 基本上 VS Code 就是純文字編輯工具，你要用 Sublime、Notepade++、Atom、TextEdit都可以。  
2. Nodejs 6.9.x 以上版本 及 npm 3 以上版本。[官網下載頁面](https://nodejs.org/en/download/)  

下載範例後記得在專案目錄安裝 npm packages

``` batch
npm install
```

啟動範例：

``` batch
npm run dev
```

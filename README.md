# Gardenic-front
Gardenicフロント用

## node.js
version16以下を利用のこと  
※開発時はver. 16.13.1

## Github ブランチルール

**main**  
↑　pull request to sugimoto  
**staging**  
↑　pull request to hori with developer  
**develop**  
↑　pull request to { someone }  
yourname_filename  


## 環境構築後に追加したパッケージ
* sass(dart sass): Sassをコンパイルするためのツール
* sass-loader: SassファイルをCSSに変換するツールを呼び出す
* sass-resources-loader: Vueで共通のSCSS（SASS）を使う
* body-scroll-lock: ターゲット要素のスクロールを中断することなく、ボディスクロールのロックを有効にする
* vue-material: google material Desing
* sanitize.css: デフォルトCSSをリセット
* splidejs/vue-splide: スライダー


#### sass, sass-loaderはバージョン指定すること
`yarn add -D sass@^1.26.5 sass-loader@^8.0.2 sass-resources-loader fibers`


## コマンド
 * 開発サーバー起動：　`yarn serve`
 * jsonサーバー起動：　`yarn json`

## Build後のサーバアップ

1. /dist内のコンテンツをS3にアップ
2. S3の「アクセス許可」タブからブロックパブリックアクセス (バケット設定)を設定
	- cf. https://qiita.com/kiyokiyo_kzsby/items/77bdb81a1ce1852b30ca
	- ※ Historyモードでbuildしたものをローカルで見ると<!—>になるが、サーバにアップすると見れる。

###その他サーバアップ時の参考
- [https://engineer-ninaritai.com/aws-s3-cloudfront/](https://engineer-ninaritai.com/aws-s3-cloudfront/)
- [https://chico-shikaku.com/2020/07/vuejs-npm-run-build-s3-static-hosting-404/](https://chico-shikaku.com/2020/07/vuejs-npm-run-build-s3-static-hosting-404/)

## Design
[Gardenic](https://www.figma.com/file/7i5stZvk43VGfV1PVOOJlu/Gardenic?node-id=0%3A1)

## その他
### 参考サイト
* [json-serverのインストールと設定](https://chaika.hatenablog.com/entry/2019/01/07/083000)
* [ライフサイクルフック](https://v3.ja.vuejs.org/guide/composition-api-lifecycle-hooks.html)
* [Vue3のVueライフサイクルフックの完全ガイド](https://ichi.pro/vue-3-no-vue-raifusaikuru-fukku-no-kanzen-gaido-61992878486458)
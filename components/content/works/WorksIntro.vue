<template>
  <div class="worksIntro">
    <h1>Overview</h1>
    <p>
      Vue.jsのフレームワークNuxt.jsを使った
      サーバーサイドレンダリングのデモサイトです。
      このウェブアプリケーションは、GithubとNetlifyに連携しています。
      Githubのブランチにマージすると、
      Netlifyは自動的に生成しホスティングされます。
    </p>

    <div class="flex-container select-mode">
      <div class="two-col">
        <div class="mode-text">
          Nuxt.js + SSR
        </div>
        <h5>サーバーサイドレンダリング</h5>
        <br>
        <p />
        <!-- <p>nuxt-univ-app1</p> -->
        <section>
          <h3>サーバーサイドレンダリング（ユニバーサル SSR）</h3>
          <p>Nuxt.js をプロジェクトの UI レンダリング全体を担うフレームワークとして使うことができます。nuxt コマンドを実行すると開発サーバーが起動します。このサーバーはホットリローディング及び Vue Server Renderer を備えており、アプリケーションが自動的にサーバーサイドレンダリングするよう設定されています。</p>
        </section>
        <section>
          <h3>静的ファイルの生成</h3>
          <p>アプリケーションをビルドする際、ルートやストアにあるファイル全てに対し HTML を生成します。</p>
        </section>
        <section>
          <h3>主な機能</h3>
          <ul>
            <li>
              <p>Vue ファイルで記述できること（*.vue）</p>
              <p>コードを自動的に分割すること</p>
              <p>サーバーサイドレンダリング</p>
              <p>非同期データをハンドリングするパワフルなルーティング</p>
              <p>静的ファイルの配信</p>
              <p>ES2015+ のトランスパイレーション</p>
              <p>JS と CSS のバンドル及びミニファイ化</p>
              <p>head要素の管理</p>
              <p>開発モードにおけるホットリローディング</p>
              <p>プリプロセッサ: Sass, Less, Stylus など</p>
              <p>HTTP/2 push headers ready</p>
              <p>モジュール構造で拡張できること</p>
            </li>
          </ul>
        </section>
      </div>
      <div class="two-col">
        <div class="mode-text">
          GitHub + netlify
        </div>
        <h5>バージョン管理と自動ディプロイ</h5>
        <br>
        <p />
        <section>
          <h3>バージョン管理</h3>
          <p>GitHubを利用することで、プロジェクトマネージャと開発者が一箇所で作業を調整、追跡、および更新するので、プロジェクトは透明でスケジュールどおりに維持されます。</p>

          <p>GitHubを利用することで、すべての作業を視覚化し、プロジェクトボードを使用してコードと並行して優先順位を付けます。リポジトリ内または組織全体で、どのようなタスクが計画されているか、または進行中かを確認できます。</p>

          <p>GitHubを利用することで、チームの連携を強化できます。問題を見つけやすくなります。</p>
        </section>
        <section>
          <h3>自動ディプロイ</h3>
          <p>Netlifyは新しいコミットを検出し、あなたのサイトを自動的に再構築し、そして結果を即時のグローバルアップデートとしてデプロイします。</p>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
//   props: {
//     pageTitle: {
//       type: String,
//       default: 'a'
//     },
//   }
//     data() {
//     return {
//       active: true
//     }
//   },
//   computed: {
//     page() {
//       return this.$store.state.page
//     }
//   },
//   methods: {
//     link_commit(linkPath) {
//       this.active = true
//       this.$store.commit('pagePathSet', linkPath)
//       setTimeout(() => {
//         this.$router.push({ path: linkPath })
//       }, 500)
//     }
//   }
}
</script>
<style scoped lang="scss">
.worksIntro{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 2rem;
  @media (min-width: 768px) {
      padding: 8rem 8rem;
  };
  border: 1px solid  rgba(0,0,0,.2);
}
.flex-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 768px) {
      flex-direction: row;
  };
}
.select-mode{
    margin-top:2rem;
}
.two-col{
    width: 100%;
    @media (min-width: 768px) {
        width: 50%;
    };
    padding-right: 8rem;
    padding-bottom: 2rem;
    section{
      margin-bottom: 2rem;
    }
    h3{
      color:#000000;
      font-weight: 600;
    }
    p{
      color:rgb(70, 69, 69);
    }

}
.mode-text{
    font-size: 8rem;
    font-weight: 700;
    color: green;
}
a{
    color: black;
}
.word-wrap{
    word-break: break-all;
}

</style>

import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body className="select-none bg-white dark:bg-black text-gray-700 dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

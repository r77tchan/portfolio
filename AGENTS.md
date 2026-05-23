<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 作業の進め方

依頼を受けたら、まず調査・整理・プラン提示を行うこと。
編集・実装は、明示的な指示（「実装して」「修正して」「進めて」等）を受けてから着手する。

- 質問・依頼の意図が曖昧な場合は、勝手に判断せず確認する
- 「〇〇を直したい」のような相談形式の発言は、調査・提案までに留める
- 「ついでに」「念のため」で範囲外の編集をしない

## 進行ルール

承認は不要だが、現状と次の行動をこまめに報告すること。

- ツール実行の前に、何をするか一文で述べる
- 想定外の結果（エラー、予期しない出力）が出たら、即報告してから次に進む
- 複数ステップの作業では、節目ごとに「ここまで完了、次はX」と一言入れる
- 冗長な報告は避け、節目ごとに留める

## 変更後の検証

コードを変更したら、ターンを終える前に以下を必ず実行する。

- `npm run lint`
- `npm run typecheck`

エラーがあれば内容を報告してから修正に着手する。

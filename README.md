# Oxc Configuration

このリポジトリは別のリポジトリのコードをリントするためのOxc設定です。Oxcは高速なJavaScript/TypeScriptリンターです。

## インストール方法

### 1. npm linkを使用する場合（開発用）

```bash
# このリポジトリでnpm linkを実行
npm link

# 他のリポジトリで使用可能になります
```

### 2. グローバルインストール（推奨）

```bash
# このリポジトリでグローバルインストール
npm install -g .

# または他の場所から
npm install -g /path/to/my-oxc
```

## 使用方法

### CLIコマンドとして使用（推奨）

```bash
# 特定のファイルをリント
my-oxc /path/to/other/repo/file.js

# 特定のディレクトリをリント
my-oxc /path/to/other/repo/src/

# 複数のファイル・ディレクトリをリント
my-oxc /path/to/other/repo/src/ /path/to/other/repo/utils/

# 自動修正付きでリント
my-oxc /path/to/other/repo/src/ --fix

# コードフォーマット
my-oxc /path/to/other/repo/src/ --format
```

### npm scriptsとして使用

```bash
# 特定のファイルをリント
npm run lint:external /path/to/other/repo/file.js

# 特定のディレクトリをリント
npm run lint:external /path/to/other/repo/src/

# 複数のファイル・ディレクトリをリント
npm run lint:external /path/to/other/repo/src/ /path/to/other/repo/utils/

# 自動修正付きでリント
npm run lint:external:fix /path/to/other/repo/src/

# コードフォーマット
npm run format:external /path/to/other/repo/src/
```

### 現在のリポジトリをリントする

```bash
# 現在のリポジトリをリント
npm run lint

# 自動修正付きでリント
npm run lint:fix

# コードフォーマット
npm run format
```

## 設定されているルール

### 基本的なルール
- `no-unused-vars`: 使用されていない変数をエラーとする
- `no-undef`: 未定義の変数をエラーとする
- `prefer-const`: 変更されない変数は`const`を使用する
- `semi`: セミコロンを必須とする
- `quotes`: ダブルクォートを使用する
- `no-var`: var使用を禁止
- `eqeqeq`: 厳密等価演算子を使用

### TypeScript 厳格な型安全性ルール
- `no-explicit-any`: anyの使用を禁止
- `no-unsafe-assignment`: 安全でない代入を禁止
- `no-unsafe-member-access`: 安全でないメンバーアクセスを禁止
- `no-unsafe-call`: 安全でない関数呼び出しを禁止
- `no-unsafe-return`: 安全でない戻り値を禁止
- `no-unsafe-argument`: 安全でない引数を禁止
- `no-non-null-assertion`: non-null assertionを禁止
- `no-implicit-any`: 暗黙的anyを禁止

### Dead Code削減ルール
- `no-unused-expressions`: 未使用の式を禁止
- `no-unused-labels`: 未使用ラベルを禁止
- `no-unreachable`: 到達不可能なコードを禁止
- `no-unreachable-loop`: 到達不可能なループを禁止
- `no-constant-condition`: 定数条件を禁止
- `no-constant-binary-expression`: 定数二項式を禁止
- `no-duplicate-case`: 重複ケースを禁止
- `no-duplicate-imports`: 重複インポートを禁止

### 複雑性制限ルール
- `complexity`: 循環的複雑度を10に制限
- `max-params`: 関数の引数数を3に制限
- `max-depth`: ネストの深さを3に制限
- `max-lines-per-function`: 関数の行数を50行に制限
- `max-lines`: ファイルの行数を300行に制限

### セキュリティルール
- `no-eval`: evalの使用を禁止
- `no-implied-eval`: 暗黙的evalを禁止
- `no-new-func`: new Functionを禁止
- `no-with`: with文を禁止

### Promise/非同期ルール
- `no-async-promise-executor`: 非同期Promise executorを禁止
- `no-await-in-loop`: ループ内でのawaitを禁止
- `require-await`: 非同期関数でのawaitを強制

### コードスタイル
- `indent`: インデント2スペース
- `comma-trailing`: 末尾カンマを強制
- `object-curly-spacing`: オブジェクトの波括弧内にスペース
- `space-before-blocks`: ブロック前にスペース
- `keyword-spacing`: キーワード周りのスペース

## 使用例

```bash
# CLIコマンドとして使用
my-oxc ../other-project/src/
my-oxc ../other-project/src/app.js --fix
my-oxc ../other-project/src/app.js --format

# npm scriptsとして使用
npm run lint:external ../other-project/src/
npm run lint:external:fix ../other-project/src/
npm run format:external ../other-project/src/
```

## セットアップ手順

1. このリポジトリをクローンまたはダウンロード
2. 依存関係をインストール: `npm install`
3. グローバルインストール: `npm install -g .`
4. 任意の場所で `my-oxc` コマンドが使用可能

## 対象ファイル

- JavaScript: `**/*.js`, `**/*.mjs`, `**/*.cjs`
- TypeScript: `**/*.ts`, `**/*.tsx`

## Oxcの特徴

### 高速性
- ESLintと比較して10倍以上高速
- Rustで実装されており、ネイティブレベルのパフォーマンス
- 大規模なプロジェクトでも快適に動作

### 機能
- リンティング（コードの品質チェック）
- フォーマッティング（コードの整形）
- TypeScriptサポート
- 設定ファイル不要（デフォルト設定で動作）

### 必要な設定

対象プロジェクトに以下のファイルが必要です：

### tsconfig.json（TypeScript使用時）
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## コード例

### ❌ Bad Examples
```typescript
// anyの使用
function process(data: any) {
  return data.value;
}

// 未使用の変数
const result = calculate();
const unused = 42;

// 不適切なboolean式
if (value) {
  doSomething(value);
}

// 型アサーション
const data = response as ApiResponse;

// enumの使用
enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}
```

### ✅ Good Examples
```typescript
// 明示的な型定義
interface ProcessData {
  value: string;
}

function process(data: ProcessData): string {
  return data.value;
}

// 使用する変数のみ定義
const result = calculate();
// 意図的に未使用の場合はプレフィックスを使用
const _unused = 42;

// 明示的なnull/undefinedチェック
if (value !== null && value !== undefined) {
  doSomething(value);
}

// type importの使用
import type { ApiResponse } from './types';

// Union型の使用
type Status = 'active' | 'inactive';
```
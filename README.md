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

### 環境設定
- Browser環境、Node.js環境、ES2022標準のグローバル変数をサポート
- `process`, `fetch`, `TextDecoder`などのビルトインオブジェクトを認識

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
- `@typescript-eslint/consistent-type-definitions`: type定義を強制（interfaceではなくtype）

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
- `max-lines-per-function`: 関数の行数を200行に制限
- `max-lines`: ファイルの行数を500行に制限（警告レベル）
- `max-dependencies`: ファイルの依存関係数を20に制限

### セキュリティルール
- `no-eval`: evalの使用を禁止
- `no-implied-eval`: 暗黙的evalを禁止
- `no-new-func`: new Functionを禁止
- `no-with`: with文を禁止

### Promise/非同期ルール
- `no-async-promise-executor`: 非同期Promise executorを禁止
- `no-await-in-loop`: 無効化（直列処理やfor await...ofを許可）
- `require-await`: 非同期関数でのawaitを強制
- `oxc/no-async-await`: 無効化（async/awaitの使用を許可）

### モダンJavaScript機能
- `oxc/no-optional-chaining`: 無効化（オプショナルチェーニング`?.`を許可）
- `oxc/no-rest-spread-properties`: 無効化（オブジェクトのrest/spreadを許可）
- `no-ternary`: 無効化（三項演算子の使用を許可）
- `no-nested-ternary`: ネストした三項演算子を禁止
- `no-unneeded-ternary`: 不要な三項演算子を禁止

### コードスタイル
- `indent`: インデント2スペース
- `comma-trailing`: 末尾カンマを強制
- `object-curly-spacing`: オブジェクトの波括弧内にスペース
- `space-before-blocks`: ブロック前にスペース
- `keyword-spacing`: キーワード周りのスペース
- `camelcase`: キャメルケース命名を強制
- `id-length`: 無効化（短い変数名を許可）
- `sort-keys`: 無効化（オブジェクトキーの順序チェックなし）

### ファイル名規則
- `unicorn/filename-case`: ファイル名はcamelCaseまたはPascalCaseを強制
  - 例: `myFile.js`, `MyComponent.tsx`, `ConsistentItemsTable.tsx`

### Import/Export規則
- `import/no-default-export`: default exportを禁止
- `import/prefer-default-export`: default exportの推奨を無効化
- `import/exports-last`: 無効化（ファイル末尾でのexport強制なし）
- `import/group-exports`: 無効化（export文の統合強制なし）
- `max-dependencies`: ファイルの依存関係数を20に制限
- Named exportの使用を強制
- `sort-imports`: 無効化（importの順序チェックなし）

### 値の取り扱い
- `unicorn/no-null`: 無効化（nullとundefinedの使用を開発者の判断に委ねる）
- `no-undefined`: 無効化（undefinedの使用を許可）

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

// default exportの使用
export default function MyComponent() {
  return <div>Hello</div>;
}

// ファイル名の不適切な命名
// my-component.tsx (kebab-case)
// my_component.tsx (snake_case)

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

// named exportの使用
export const MyComponent = () => {
  return <div>Hello</div>;
};

// 適切なファイル名
// myComponent.tsx (camelCase)
// MyComponent.tsx (PascalCase)
// ConsistentItemsTable.tsx (PascalCase)

// 三項演算子の使用（許可）
export const getMessage = (isError) => isError ? "エラーです" : "成功です";

// importの順序は任意（sort-importsが無効化されているため）
import { useState } from 'react';
import axios from 'axios';
import { validateInput } from './utils';

// nullとundefinedの使用は開発者の判断に委ねる
const value1 = undefined;
const value2 = null;
const result = data !== undefined ? data : "default";

// Reactコンポーネントではnullが型システム上必要
export const MyComponent = ({ show }: { show: boolean }) => {
  if (!show) {
    return null; // TypeScriptの型システムで要求される
  }
  return <div>Hello</div>;
};
```
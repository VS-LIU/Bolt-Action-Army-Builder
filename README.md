# React + TypeScript + Vite + SSR

This repo was setup using:
```sh
> npm install -g pnpm  
> pnpm create vite@latest .  
> framework: Others > create-vite-extra
> template: ssr-react > Streaming > TypeScript
> pnpm install
> pnpm add --save-dev @types/uuid
```
To run dev server: 
```sh
> pnpm run dev
```

## Additional packages used

- [uuid](https://www.npmjs.com/package/uuid) 


---

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

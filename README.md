# NextJS Starter kit

## This boilerplate contains the following customizations

- Storybook
- Lint
- Husky
- Prettier
- Semantic git

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and some custom configurations

## Getting Started

After clone or fork the repository, install dependencies

```bash
npm install
# or
yarn
```

## Run the project

To start the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using Storybook and [component driven development](https://componentdriven.org)

To run storybook

```bash
npm run storybook
# or
yarn storybook
```

To learn more, see the [Awesome UI](http://localhost:6006/?path=/story/awesome-ui--page)

## About husky and lint-staged

Each time you commit some changes, the husky pre-commit hook will be triggered and run the following commands.

```
yarn lint-staged
```

That will trigger the linte-staged process define on the `lint-staged.config.js`

When this commands is **sucessfully** executed then the hook will try to build the project using

```
yarn build
```

If you want to disable the build before commiting, just comment the code on `.husky/pre-commit`

---

### Made with love

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

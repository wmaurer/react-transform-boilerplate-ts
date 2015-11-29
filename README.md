React Transform Boilerplate, using Typescript
=============================================

This is a new boilerplate for live editing ReactJS components written in Typescript.
It replaces a previous boilerplate [react-hot-boilerplate-ts](https://github.com/wmaurer/react-hot-boilerplate-ts),
as that uses the now deprecated [react-hot-loader](https://github.com/gaearon/react-hot-loader).
This boilerplate uses the new [React Transform](https://github.com/gaearon/react-transform-boilerplate) family of products.

It is directly copied from Dan Abramov's [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate),
converted to Typescript, and uses an additional loader [ts-loader](https://github.com/TypeStrong/ts-loader)

## How does Typescript help when writing a React Application?

Typesript is about type safety, and by using the [typings for react on DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/react),
we can define a `Counter` component as follows:

```
interface ICounterProps {
	increment: number;
	color: string;
}

interface ICounterState {
	counter: number;
}

export default class Counter extends React.Component<ICounterProps, ICounterState> {
...
}
```

Accessing a property on `this.props` or `this.state` which is not defined on the relevant interfaces (`ICounterProps` and `ICounterState`)
will cause a Typescript type checking error.

In addition, when using the `Counter` component, if either `increment` or `color` are not defined, or if an additional property
were to be set, a Typescript type checking error will also arise.

## Notes about Webpack loaders

The previous boilerplate used only ts-loader, but now babel-loader is also required with the new react-transform, unless
somebody writes a special additional loader for Typescript:

![image 1](https://cloud.githubusercontent.com/assets/2899448/11448335/2ba57154-9556-11e5-8514-50641c37211e.png)

Adding this second transpilation step adds a barely noticeable delay to how quickly hot-reload runs, however this is very
insignificant compared to the rather slow ts-loader. There is currently an issue open about ts-loader's performance [here](https://github.com/TypeStrong/ts-loader/issues/78)

## Questions?

Raise an issue or ping [@waynemaurer](https://twitter.com/waynemaurer) on Twitter.

## License

CC0 (public domain)

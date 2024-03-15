It allows you to load parts of your application on-demand to reduce the initial load time.

1. Class Based Components
2. Fibre Components
3. Lifecycle Mthods - component did mount
4. Diffing Algorithm

## Lazy Loading

POOR SEO -> SEARCH ENGINE OPTIMSATION

Pages

add a component  until the page requested has not loaded -> suspense

- Home /home -> lazy react
- About /about
- Store /store

- Mouse Page /store/mouse
- Keyboard Page /store/keyboard

<head>
    <meta description>keyboard redgear</meta>
</head>

## To increase seo in react
- Do lazy loading only if necessary: Dont load all pages inititally but laod those pages where there are refeernces for your search
- Use server side rendering: It is a technique used to render the initial view of the web page on the server side html page is sent to the client and then the client side javascript takes over and the page behaves like a single page application



## Aplication 

1. Lazy Loading for web pages
2. We will see how to add global theme
3. How to add provate routes



## Virtual DOM

DOM is Document Ibject Model


```html
<!doctype html>
<html lang="en">
  <head>
    <title> What's Dom </title>
</head>
<body>
    <h1>DOM</h1>
    <p>Document Object Model</p> -> <p> What is Document Object Model </p>
    </body>
    </html>
```

DOM Manipulate ->

1. Dom Update - This can be minimised by using virtual dom
2. DOM Rerendering - This cant be minimised by using virtual dom

Virtual DOM is a lightweight copy of the actual DOM. 

useState(x=>x+1); -> DOM update this cnt 0 to 1
useState(x=>x-1); -> DOM update couint from 1 to 0

-> If we use virtual dom here above there will be no effect because the state has not changed but had we used actual dom then the dom would have been updated twice

Homework - 
- Diffing Algorithm

Virtual Dom is inmemory represataion of the actual dom

- The changes to be done from virtual dom to actual dom -> reconcilation -> maintinaing a sync

// made in a batch -> this complete batch is optimised for minimal chanegs -> then these chanhes are done in actaul dom


## What we have covered and what we are going to cover next

- What is react and advantages of react
- What is JSX
- Limitation of React
- Babel (Transpiler ensures compatibility with older browsers)
- Virtual Dom
- Styling React Components (!!style attribute)
- Class Based Components (!! to bed one)
- Lifecycle Methods(!!to be done)
- this keyword binding in class components(!!!)
- HOC
- Props
- Props Drilling
- Context API
- Redux and Redux toolkit 
- Lazy Loading
- useRef Hook
- useCallBack Hook, useMemo Hook, memo
- customHooks
- Adding Global Themes
- Adding Privates Routes
- Components -> Notification, Tbale, Tabs, Carousel, Accordion -> tommorow
- buling 3-4 custimHooks which are used in real world applications -> tommorow
- Using Firbase and react we will create a basic project (Todo App)
- React Fibre(!!!)
- React Tailwind
- Crypto Project
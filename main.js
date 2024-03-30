// const dom = document.createElement('div');
// dom.id = 'app';
// document.body.appendChild(dom);

// const textEL = document.createTextNode('Hello World');
// dom.appendChild(textEL);

// react vdom 其实是一个 js object
// const textEl = {
//   type: "TEXE_ELEMENT",
//   props: {
//     nodeValue: "Hello World",
//     children: [],
//   },
// };

function createTextEL(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// const el = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

function createEl(type, props, ...children) {
  return {
    type: type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "string" ? createTextEL(child) : child;
      }),
    },
  };
}

function render(el, container) {
  const dom =
    el.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(el.type);

  // id class
  Object.keys(el.props).forEach((key) => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });

  const children = el.props.children;
  children.forEach((child) => {
    render(child, dom);
  });

  container.append(dom);
}
// const textEL = createTextEL("Hello World");
const app = createEl("div", { id: "app" }, "hello ", "world");
console.log(app);
render(app, document.getElementById("root"));

// const dom = document.createElement(app.type);
// dom.id = app.props.id;
// document.body.appendChild(dom);

// const textNode = document.createTextNode(textEL.props.nodeValue);
// dom.appendChild(textNode);

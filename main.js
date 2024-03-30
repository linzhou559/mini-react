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
    type: "TEXE_ELEMENT",
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
      children,
    },
  };
}

const textEL = createTextEL("Hello World");
const app = createEl("div", { id: "app" }, textEL);

const dom = document.createElement(app.type);
dom.id = app.props.id;
document.body.appendChild(dom);

const textNode = document.createTextNode(textEL.props.nodeValue);
dom.appendChild(textNode);

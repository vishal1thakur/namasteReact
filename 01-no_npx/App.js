// How react creates elements

// heading is an object
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// object is converted to HTML by render
// root.render(heading);

// nesting in react
const parent = React.createElement(
    "div",
    { id: "parent" },
    // single child
    React.createElement(
        "div",
        { id: "child" },
        // multiple children with array
        [
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag also"),
        ]
    )
);

root.render(parent);

// This gets chaotic very fast, thats why we use JSX

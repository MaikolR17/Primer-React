const App = () => {
    return React.createElement("h1", {}, "Our First React page has rendered");
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

const h2 = () => {
    return React.createElement("h2", {}, "¡This is Amazing!");
}
ReactDOM.render(React.createElement(h2), document.getElementById("subtitle"));
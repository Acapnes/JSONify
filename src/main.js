var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {
      count: 1,
      selectedTypes: [[]],
      selectedTableCount: 0
    };
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var typeArray = ["Integer", "String", "Boolean", "Byte", "Char", "DateTime"];
      this.setState();

      return React.createElement(
        "div",
        { className: "w-screen h-full py-10 px-8 flex justify-between" },
        React.createElement(
          "div",
          { className: "w-[30%] h-full flex flex-col space-y-5 " },
          React.createElement(
            "div",
            { className: "w-full h-full flex flex-row" },
            React.createElement(
              "div",
              { className: "w-full h-full bg-purple-600 flex flex-col space-y-4 items-center justify-between sticky top-5" },
              typeArray.map(function (type, index) {
                return React.createElement(
                  "button",
                  {
                    key: index,
                    onClick: function onClick() {
                      _this2.state.selectedTypes[_this2.state.selectedTableCount].push(type);
                      _this2.setState({
                        selectedTypes: [].concat(_toConsumableArray(_this2.state.selectedTypes))
                      });
                    },
                    className: "w-full h-[4rem] flex justify-between items-center text-xl text-white hover:bg-red-400 px-4"
                  },
                  React.createElement(
                    "p",
                    null,
                    type
                  ),
                  " ",
                  React.createElement(
                    "p",
                    null,
                    "+"
                  )
                );
              })
            ),
            React.createElement(
              "div",
              { className: "w-[25%] h-full flex flex-col space-y-5 mx-4 relative" },
              React.createElement(
                "button",
                {
                  className: "w-24 h-24 bg-purple-400 items-center",
                  onClick: function onClick() {
                    _this2.state.selectedTypes.push([]);
                    _this2.setState({
                      selectedTableCount: _this2.state.selectedTypes.length - 1
                    });
                    console.log(_this2.state.selectedTableCount);
                    console.log(_this2.state.selectedTypes);
                  }
                },
                "+"
              )
            )
          ),
          React.createElement(
            "div",
            { className: " w-full h-[8rem] bg-white" },
            this.state.selectedTypes[this.state.selectedTableCount] + " "
          )
        ),
        React.createElement(
          "div",
          { className: "w-[60%] h-full grid grid-cols-2" },
          this.state.selectedTypes.map(function (data, index) {
            return React.createElement(
              "button",
              {
                key: index,
                className: "w-full min-h-[32rem] bg-white text-black flex flex-col mb-10 shadow-xl border-8 border-white " + (_this2.state.selectedTableCount == index ? " border-yellow-300" : "border-white"),
                onClick: function onClick() {
                  _this2.setState({
                    selectedTableCount: index
                  });
                }
              },
              React.createElement(
                "div",
                { className: "w-full h-[4rem] bg-slate-700 flex flex-row justify-between items-center px-8" },
                React.createElement(
                  "p",
                  { className: "text-white text-2xl" },
                  "Table ",
                  index
                ),
                React.createElement(
                  "div",
                  { className: "space-x-10" },
                  React.createElement(
                    "button",
                    { className: " hover:bg-red-500 p-2 items-center rounded-xl" },
                    React.createElement(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "white",
                        "class": "bi bi-upload",
                        viewBox: "0 0 16 16"
                      },
                      React.createElement("path", { d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" }),
                      React.createElement("path", { d: "M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" })
                    )
                  ),
                  React.createElement(
                    "button",
                    { className: " hover:bg-red-500 p-2 items-center rounded-xl" },
                    React.createElement(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "white",
                        "class": "bi bi-trash",
                        viewBox: "0 0 16 16"
                      },
                      React.createElement("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
                      React.createElement("path", {
                        "fill-rule": "evenodd",
                        d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      })
                    )
                  )
                )
              ),
              _this2.state.selectedTypes[index].map(function (data) {
                return React.createElement(
                  "div",
                  { className: "w-full h-[4rem] px-8 my-2 shadow-lg flex justify-between items-center" },
                  React.createElement(
                    "div",
                    { className: "flex flex-row" },
                    React.createElement("input", { value: data, type: "text", className: " outline-none  w-[10rem]" }),
                    React.createElement("input", {
                      placeholder: "name",
                      type: "text",
                      className: " outline-none w-[10rem]"
                    }),
                    React.createElement("input", {
                      placeholder: "*(10)",
                      type: "text",
                      className: " outline-none w-[3.5rem]"
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "flex flex-row space-x-3" },
                    React.createElement(
                      "select",
                      {
                        //onChange={(e) => alert(e.target.value)}
                        id: "countries",
                        "class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      },
                      React.createElement("option", { selected: "" }),
                      React.createElement(
                        "option",
                        { value: "PK" },
                        "PRIMARY KEY"
                      ),
                      React.createElement(
                        "option",
                        { value: "FK" },
                        "FOREIGN KEY"
                      )
                    ),
                    React.createElement(
                      "button",
                      { className: "px-2 py-2 hover:bg-red-500 hover:opacity-70 rounded-3xl" },
                      React.createElement(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          fill: "currentColor",
                          "class": "bi bi-trash",
                          viewBox: "0 0 16 16"
                        },
                        React.createElement("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
                        React.createElement("path", {
                          "fill-rule": "evenodd",
                          d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        })
                      )
                    )
                  )
                );
              })
            );
          })
        )
      );
    }
  }]);

  return Main;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById("main"));
root.render(React.createElement(Main, null));
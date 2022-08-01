var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var typeArray = ["Integer", "String", "Boolean", "Byte", "Char", "DateTime"];
      return React.createElement(
        "div",
        { className: "w-[30%] h-full flex flex-col space-y-16 sticky top-0" },
        React.createElement(
          "div",
          { className: "w-full h-full flex flex-row sticky top-0" },
          React.createElement(
            "div",
            { className: "w-full h-full bg-purple-600 flex flex-col space-y-4 items-center justify-between " },
            typeArray.map(function (type, index) {
              return React.createElement(
                "button",
                {
                  key: index,
                  onClick: function onClick(e) {
                    _this2.props.selectedTypes[_this2.props.selectedTableCount].push({
                      id: index,
                      type: type,
                      name: "",
                      limit: 10,
                      AllowNull: false,
                      primarykey: false,
                      foreignkey: { host: "", targetTable: "" },
                      regex: ""
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
                }
              },
              "+"
            )
          )
        ),
        React.createElement(
          "div",
          { className: " w-full min-h-[10rem] h-[full] bg-white whitespace-pre-wrap p-5" },
          this.state.classData + " "
        )
      );
    }
  }]);

  return List;
}(React.Component);
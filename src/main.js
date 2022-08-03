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
      selectedTable: 0,
      setTypeId: 0,
      mainArray: [{
        id: 0,
        primaryKey: null,
        types: [],
        foreignKeys: [{
          foreignKeyId: null,
          hostId: null,
          targetTableId: null,
          targetTypeId: null
        }]
      }]
    };
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state.mainArray);
      var typesArray = ["Integer", "String", "Char", "DateTime", "Boolean", "Byte"];

      var addNewTable = function addNewTable(data) {
        _this2.setState(function (prevState) {
          return {
            mainArray: [].concat(_toConsumableArray(prevState.mainArray), [{
              id: _this2.state.mainArray[_this2.state.selectedTable - 1].id + 1,
              primaryKey: null,
              types: [],
              foreignKeys: [{
                foreignKeyId: null,
                hostId: null,
                targetTableId: null,
                targetTypeId: null
              }]
            }])
          };
        });
      };

      var addNewType = function addNewType(type, typeId, name) {
        _this2.state.mainArray[_this2.state.selectedTable].types.push({
          type: type,
          typeId: typeId,
          name: name
        });
        _this2.forceUpdate();

        // this.setState((prevState) => ({
        //   mainArray: [
        //       ...prevState.mainArray[prevState.selectedTable],
        //       {
        //         types: [
        //           ...prevState.mainArray[prevState.selectedTable].types,
        //           {
        //             typeId,
        //             type,
        //             name,
        //           },
        //         ],
        //       },
        //   ],
        // }));
      };

      return React.createElement(
        "div",
        { className: "w-full h-full flex flex-row justify-between" },
        React.createElement(
          "div",
          { className: " w-[35vw] h-[62rem] flex flex-row p-20 space-x-10" },
          React.createElement(
            "div",
            { className: "flex flex-col space-y-5" },
            typesArray.map(function (selectedType, IndexSelectedType) {
              return React.createElement(
                "button",
                {
                  key: IndexSelectedType,
                  onClick: function onClick() {
                    addNewType(selectedType, _this2.state.setTypeId, "null");
                  },
                  className: "px-4 py-2 bg-yellow-200 rounded-lg"
                },
                selectedType
              );
            })
          ),
          React.createElement(
            "div",
            { className: "flex flex-col  space-y-5" },
            React.createElement(
              "button",
              {
                onClick: function onClick() {
                  addNewTable();
                  _this2.state.selectedTable += 1;
                  _this2.forceUpdate();
                },
                className: "bg-green-400 text-3xl p-8 rounded-lg"
              },
              "+"
            )
          )
        ),
        React.createElement(
          "div",
          { className: " w-full h-[62rem] p-16" },
          React.createElement(
            "div",
            { className: "w-full h-full grid grid-cols-2" },
            this.state.mainArray.map(function (Table, IndexTable) {
              return React.createElement(
                "div",
                {
                  key: IndexTable,
                  className: "bg-white text-black w-full h-[24rem] flex flex-col border-4 rounded-lg " + (_this2.state.selectedTable == IndexTable ? " border-yellow-400" : "border-white")
                },
                React.createElement(
                  "button",
                  {
                    onClick: function onClick() {
                      _this2.setState({
                        selectedTable: IndexTable
                      });
                    },
                    className: "w-full h-[3rem]  rounded-t-md flex justify-between px-6 items-center bg-slate-500"
                  },
                  React.createElement("input", {
                    className: "bg-slate-500 w-[40%] outline-none",
                    type: "text",
                    placeholder: "Table" + IndexTable
                  }),
                  React.createElement(
                    "div",
                    { className: "flex flex-row justify-end space-x-3  w-[60%]" },
                    React.createElement(
                      "select",
                      {
                        onChange: function onChange(e) {
                          if (e.target.value != "null") {
                            _this2.state.mainArray[_this2.state.selectedTable].primaryKey = e.target.value;
                          } else {
                            _this2.state.mainArray[_this2.state.selectedTable].primaryKey = null;
                          }
                        },
                        id: "countries",
                        className: "border mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                      },
                      React.createElement("option", { value: "null", selected: "" }),
                      _this2.state.mainArray[IndexTable].types.filter(function (types) {
                        return types.type === "Integer";
                      }).map(function (primaryType, primaryTypeIndex) {
                        return React.createElement(
                          "option",
                          {
                            key: primaryTypeIndex,
                            value: primaryType.typeId,
                            selected: ""
                          },
                          primaryType.type
                        );
                      })
                    ),
                    React.createElement(
                      "a",
                      null,
                      "Print"
                    ),
                    React.createElement(
                      "a",
                      {
                        onClick: function onClick() {
                          _this2.state.mainArray.splice(IndexTable, 1);
                          _this2.forceUpdate();
                        }
                      },
                      "Delete"
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "w-full h-full" },
                  _this2.state.mainArray[IndexTable].types.map(function (Type, IndexType) {
                    return React.createElement(
                      "div",
                      {
                        key: IndexType,
                        className: "p-4 shadow-lg flex flex-row space-x-2"
                      },
                      React.createElement(
                        "div",
                        null,
                        Type.type
                      ),
                      React.createElement("input", {
                        className: "outline-none",
                        type: "text",
                        placeholder: "name"
                      }),
                      Type.type === "Integer" && _this2.state.mainArray[_this2.state.selectedTable].primaryKey !== Type.typeId ? React.createElement(
                        "select",
                        {
                          onChange: function onChange() {},
                          id: "countries",
                          className: "border mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                        },
                        React.createElement("option", { value: "null", selected: "" }),
                        React.createElement(
                          "option",
                          { value: "fk" },
                          "Foreign Key"
                        )
                      ) : "",
                      React.createElement(
                        "button",
                        {
                          className: " shadow-lg px-4 py-2",
                          onClick: function onClick() {
                            _this2.state.mainArray[IndexTable].types.splice(IndexType, 1);
                            _this2.forceUpdate();
                          }
                        },
                        "Delete"
                      )
                    );
                  })
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Main;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById("main"));
root.render(React.createElement(Main, null));
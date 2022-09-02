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
      print: "null",
      showModal: false,
      selectedTable: 0,
      setTypeId: 0,
      mainArray: [{
        id: 0,
        primaryKey: null,
        types: []
      }]
    };
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state.mainArray);

      var typesArray = ["Integer", "String", "Char", "DateTime", "Boolean", "Byte", "Varchar", "Nvarchar", "DateTimeNow", "Tinyint"];

      var addNewTable = function addNewTable() {
        _this2.setState(function (prevState) {
          return {
            mainArray: [].concat(_toConsumableArray(prevState.mainArray), [{
              id: _this2.state.mainArray[_this2.state.mainArray.length - 1].id + 1,
              primaryKey: null,
              types: []
            }])
          };
        });
      };

      var addNewType = function addNewType(type, typeId, name) {
        type == "Integer" ? _this2.state.mainArray[_this2.state.selectedTable].types.push({
          type: type,
          typeId: typeId,
          name: name,
          foreignKey: {
            foreignState: false,
            targetTableId: null,
            targetPrimaryKeyId: null
          }
        }) : _this2.state.mainArray[_this2.state.selectedTable].types.push({
          type: type,
          typeId: typeId,
          name: name
        });
        _this2.forceUpdate();
      };

      return React.createElement(
        "div",
        { className: "w-full h-full flex flex-col" },
        React.createElement(
          "div",
          { className: "w-full h-full flex flex-row justify-between" },
          React.createElement(
            "div",
            { className: " w-[20vw] min-h-screen h-full flex flex-row py-20 px-2  bg-gray-900 sticky top-0" },
            React.createElement(
              "div",
              { className: "w-full absolute top-5 text-center text-white text-lg" },
              React.createElement(
                "a",
                { href: "https://github.com/acapnes" },
                "Developed by Acapnes"
              )
            ),
            React.createElement(
              "div",
              { className: "flex flex-col space-y-5 w-full" },
              typesArray.map(function (selectedType, IndexSelectedType) {
                return React.createElement(
                  "button",
                  {
                    onClick: function onClick() {
                      addNewType(selectedType, _this2.state.setTypeId, "null");
                      _this2.state.setTypeId += 1;
                      _this2.forceUpdate();
                    },
                    className: " flex flex-row justify-between px-4 py-2 text-gray-300 text-lg rounded-lg hover:bg-slate-700 items-center"
                  },
                  React.createElement(
                    "div",
                    { key: IndexSelectedType, className: "" },
                    selectedType
                  ),
                  React.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      fill: "currentColor",
                      "class": "bi bi-arrow-right",
                      viewBox: "0 0 16 16"
                    },
                    React.createElement("path", {
                      "fill-rule": "evenodd",
                      d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    })
                  )
                );
              })
            )
          ),
          React.createElement(Print, { mainArray: this.state.mainArray }),
          this.state.mainArray[this.state.selectedTable] && React.createElement(
            "div",
            {
              "class": "modal fade",
              id: this.state.selectedTable,
              "data-backdrop": "static",
              "data-keyboard": "false",
              tabindex: "-1",
              "aria-labelledby": "staticBackdropLabel",
              "aria-hidden": "true"
            },
            React.createElement(
              "div",
              { "class": "modal-dialog w-screen" },
              React.createElement(
                "div",
                { "class": "modal-content" },
                React.createElement(
                  "div",
                  { "class": "modal-header flex justify-between" },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "h5",
                      { "class": "modal-title", id: "staticBackdropLabel" },
                      "Modal title"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "flex flex-row" },
                    React.createElement(
                      "select",
                      {
                        onChange: function onChange(e) {
                          if (e.target.value != "null") {
                            _this2.state.mainArray[_this2.state.selectedTable].primaryKey = e.target.value;
                          } else {
                            _this2.state.mainArray[_this2.state.selectedTable].primaryKey = null;
                          }
                          _this2.forceUpdate();
                        },
                        id: "countries",
                        className: "border mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                      },
                      React.createElement("option", { value: "null" }),
                      this.state.mainArray[this.state.selectedTable].types.filter(function (types) {
                        return types.type === "Integer";
                      }).map(function (primaryType, primaryTypeIndex) {
                        return React.createElement(
                          "option",
                          {
                            key: primaryTypeIndex,
                            value: primaryType.typeId
                          },
                          primaryType.type,
                          " ",
                          primaryType.typeId
                        );
                      })
                    ),
                    React.createElement(
                      "button",
                      {
                        type: "button",
                        "class": "close",
                        "data-dismiss": "modal",
                        "aria-label": "Close"
                      },
                      React.createElement(
                        "span",
                        { "aria-hidden": "true" },
                        "\xD7"
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { "class": "modal-body" },
                  this.state.mainArray[this.state.selectedTable].types.map(function (Type, IndexType) {
                    return React.createElement(
                      "div",
                      {
                        key: IndexType,
                        className: "p-4 shadow-lg flex flex-row space-x-2"
                      },
                      React.createElement(
                        "div",
                        { className: "flex flex-row space-x-3 w-[35%] items-center" },
                        React.createElement(
                          "div",
                          null,
                          Type.type
                        ),
                        React.createElement("input", {
                          className: "outline-none",
                          type: "text",
                          placeholder: "name"
                        })
                      ),
                      Type.type === "Integer" && _this2.state.mainArray[_this2.state.selectedTable].primaryKey != Type.typeId && _this2.state.mainArray[_this2.state.selectedTable + 1] && React.createElement("input", {
                        type: "checkbox",
                        onChange: function onChange(e) {
                          e.target.checked ? _this2.state.mainArray[_this2.state.selectedTable].types[IndexType].foreignKey.foreignState = true : _this2.state.mainArray[_this2.state.selectedTable].types[IndexType].foreignKey.foreignState = false;
                          _this2.forceUpdate();
                        }
                      }),
                      Type.type == "Integer" && _this2.state.mainArray[_this2.state.selectedTable].primaryKey != Type.typeId && _this2.state.mainArray[_this2.state.selectedTable].types[IndexType].foreignKey.foreignState == true && React.createElement(
                        "select",
                        {
                          onChange: function onChange(e) {
                            e.target.value !== "null" ? _this2.state.mainArray[_this2.state.selectedTable].types[IndexType].foreignKey.targetTableId = e.target.value : _this2.state.mainArray[_this2.state.selectedTable].types[IndexType].foreignKey.targetTableId = null;
                            _this2.forceUpdate();
                          },
                          id: "countries",
                          className: "border mx-5 bg-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                        },
                        React.createElement("option", { value: "null", selected: "" }),
                        _this2.state.mainArray.filter(function (table) {
                          return table.id != _this2.state.selectedTable;
                        }).map(function (foreignTables, foreignTablesIndex) {
                          return React.createElement(
                            "option",
                            {
                              key: foreignTablesIndex,
                              value: foreignTables.id,
                              selected: ""
                            },
                            foreignTables.id
                          );
                        })
                      ),
                      Type.type == "Integer" && _this2.state.mainArray[_this2.state.selectedTable].types[IndexType].foreignKey.foreignState == true && _this2.state.mainArray[_this2.state.selectedTable].types[IndexType].foreignKey.targetTableId !== null && React.createElement(
                        "select",
                        {
                          onChange: function onChange(e) {
                            e.target.value != "null" && (_this2.state.mainArray[_this2.state.selectedTable].types[IndexType].foreignKey.targetPrimaryKeyId = e.target.value);
                          },
                          id: "countries",
                          className: "border mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                        },
                        React.createElement("option", { value: "null", selected: "" }),
                        _this2.state.mainArray[_this2.state.mainArray[_this2.state.selectedTable].types[IndexType].foreignKey.targetTableId].types.map(function (foreignTargetType, foreignTargetTypeIndex) {
                          return foreignTargetType.type === "Integer" && React.createElement(
                            "option",
                            {
                              value: foreignTargetType.typeId,
                              selected: ""
                            },
                            foreignTargetType.typeId,
                            " ",
                            foreignTargetType.name
                          );
                        })
                      )
                    );
                  })
                ),
                React.createElement(
                  "div",
                  { "class": "modal-footer" },
                  React.createElement(
                    "button",
                    {
                      onClick: function onClick() {
                        _this2.state.selectedTable != 0 && _this2.state.mainArray.splice(_this2.state.selectedTable, 1);
                        _this2.forceUpdate();
                      },
                      type: "button",
                      "class": "btn btn-primary bg-red-600 text-white",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    React.createElement(
                      "span",
                      { "aria-hidden": "true" },
                      "Delete Table"
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "w-full flex flex-col" },
            React.createElement(Navbar, null),
            React.createElement(
              "div",
              { className: "flex flex-row" },
              React.createElement(
                "div",
                { className: " w-full h-full p-8" },
                React.createElement(
                  "div",
                  { className: "w-full h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 " },
                  this.state.mainArray.map(function (Table, IndexTable) {
                    return React.createElement(
                      "div",
                      {
                        key: IndexTable,
                        className: "bg-white text-black min-h-[24rem] flex flex-col border-4 rounded-lg " + (_this2.state.selectedTable == IndexTable ? " border-yellow-400" : "border-gray-200")
                      },
                      React.createElement(
                        "button",
                        {
                          onClick: function onClick() {
                            _this2.setState({
                              selectedTable: IndexTable
                            });
                          },
                          className: "w-full h-[3rem] rounded-t-md flex justify-between items-center bg-slate-500"
                        },
                        React.createElement("input", {
                          className: "bg-slate-500 w-[50%] hover:bg-slate-700 focus:bg-slate-700 focus:text-white hover:text-white rounded-tl-md rounded-br-md h-full px-2 outline-none",
                          type: "text",
                          placeholder: "Table " + IndexTable /// Print zamanında tablo ismini placeholderdan çek.
                        }),
                        React.createElement(
                          "div",
                          { className: "flex flex-row justify-end space-x-3 h-full" },
                          React.createElement(
                            "button",
                            {
                              type: "button",
                              "class": "px-2 hover:bg-red-400 hover:text-white rounded-bl-md rounded-tr-md",
                              "data-toggle": "modal",
                              "data-target": "#" + _this2.state.selectedTable
                            },
                            "Open Settings"
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
                              className: "p-4 shadow-lg flex flex-row justify-between space-x-2"
                            },
                            React.createElement(
                              "div",
                              { className: "flex flex-row space-x-4 w-[70%] items-center" },
                              React.createElement(
                                "p",
                                null,
                                Type.type
                              ),
                              React.createElement("input", {
                                className: "outline-none",
                                type: "text",
                                placeholder: "name"
                              })
                            ),
                            React.createElement(
                              "button",
                              {
                                onClick: function onClick() {
                                  _this2.state.mainArray[IndexTable].types.splice(IndexType, 1);
                                  _this2.forceUpdate();
                                },
                                className: "shadow-md p-3 hover:bg-red-300 hover:opacity-70"
                              },
                              React.createElement(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "20",
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
                          );
                        })
                      )
                    );
                  })
                )
              ),
              React.createElement(
                "div",
                { className: " h-fit flex flex-col items-end space-y-4 p-5 sticky top-0" },
                React.createElement(
                  "a",
                  { className: "w-16 h-16", href: "" },
                  React.createElement("img", {
                    className: "rounded-full",
                    src: "https://avatars.githubusercontent.com/u/61701011?v=4",
                    alt: ""
                  })
                ),
                React.createElement(
                  "button",
                  {
                    type: "button",
                    className: "w-16 h-16 bg-slate-800 text-white items-center flex justify-center p-2 border-2 border-stone-600 rounded-full sticky bottom-5",
                    "data-toggle": "modal",
                    "data-target": "#PrintModal"
                  },
                  React.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      fill: "currentColor",
                      "class": "bi bi-printer",
                      viewBox: "0 0 16 16"
                    },
                    React.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" }),
                    React.createElement("path", { d: "M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" })
                  )
                ),
                React.createElement(
                  "button",
                  {
                    onClick: function onClick() {
                      addNewTable();
                      _this2.state.selectedTable += 1;
                      _this2.forceUpdate();
                    },
                    className: "w-16 h-16 bg-slate-800 text-white items-center flex justify-center p-2 border-2 border-stone-600 rounded-full sticky bottom-5"
                  },
                  React.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      fill: "currentColor",
                      "class": "bi bi-plus-circle",
                      viewBox: "0 0 16 16"
                    },
                    React.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    React.createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Main;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById("main"));
root.render(React.createElement(Main, null));
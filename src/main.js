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
      count: [{
        index: 0
      }],
      mainArray: [[]], //projedeki tüm arraylerin tutulduğu array
      mainController: [{
        pkDisabled: true,
        pk: "null", //tablo primary key'ini tutuyor
        indexForeignKeys: "null", //hedeflenen tablonun main arraydaki index numarası
        foreignIndex: [
        // tabloların içerisindeki 'int'
        {
          typeId: "null", //int elemanın kendi ıd si
          targetId: "null" // hedeflediği int elemanın ıd si
        }]
      }],
      IsActiveSelectedTableIndexNumber: 0, // seçili olan tablonun aktifliğini gösterir sarı border aynı zamanda onun index numarasını main array içerisinden alır.
      classData: "", // class oluşturulduğunda classların tutulduğu array.
      tableName: [], // bir tablo isim array  ör: ['batuhnan', 'serhat', 'hakim'] bu şekilde tablo isimleri tutuluyor.
      primaryEnabled: true
    };
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var typeArray = ["Integer", "String", "Boolean", "Byte", "Char", "DateTime"];

      return React.createElement(
        "div",
        { className: "w-screen h-full py-10 px-8 flex justify-between overflow-y-hidden" },
        React.createElement(
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
                      console.log(_this2.state.mainArray);
                      _this2.state.mainArray[_this2.state.IsActiveSelectedTableIndexNumber].push({
                        typeId: _this2.state.count[_this2.state.IsActiveSelectedTableIndexNumber].index,
                        type: type,
                        name: "",
                        limit: 10,
                        AllowNull: false,
                        primarykey: false,
                        foreignkey: { host: "null", targetTable: "null" },
                        regex: ""
                      });
                      _this2.setState({
                        mainArray: [].concat(_toConsumableArray(_this2.state.mainArray))
                      });
                      _this2.state.count[_this2.state.IsActiveSelectedTableIndexNumber].index += 1;
                      _this2.forceUpdate();
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
                    _this2.setState({
                      IsActiveSelectedTableIndexNumber: _this2.state.mainArray.length
                    });
                    _this2.state.mainArray.push([]);
                    _this2.state.mainController.push({
                      pk: "null",
                      indexForeignKeys: "null",
                      pkDisabled: true,
                      foreignIndex: [{ typeId: "null", targetId: "null" }]
                    });
                    _this2.state.tableName.push([]);
                    _this2.state.count[_this2.state.IsActiveSelectedTableIndexNumber] ? _this2.state.count.push({ index: 0 }) : "";
                  }
                },
                "+"
              ),
              React.createElement(
                "button",
                {
                  className: "w-24 h-24 bg-purple-400 items-center",
                  onClick: function onClick() {
                    _this2.setState({
                      classData: "" + _this2.state.mainArray.map(function (table, tableIndex) {
                        return "public static " + _this2.state.tableName[tableIndex] + "\n                        " + _this2.state.mainArray[tableIndex].map(function (data, textIndex) {
                          return "\n                          " + data.type + "   " + data.name + "  (" + data.limit + ") " + (data.AllowNull ? "not null" : "null") + " " + (data.type == "Integer" && data.typeId == _this2.state.mainController[tableIndex].pk ? "PRIMARY KEY" : "") + (data.type == "Integer" && data.typeId == _this2.state.mainController[tableIndex].foreignIndex[data.typeId].typeId ? "FOREIGN KEY REFERENCES  " + _this2.state.mainController[tableIndex].foreignIndex[data.typeId].typeId : "") + "{get; set;}\n";
                        });
                      })
                    });
                  }
                },
                "Print All Tables"
              )
            )
          ),
          React.createElement(
            "div",
            { className: " w-full min-h-[10rem] h-[full] bg-white whitespace-pre p-5" },
            this.state.classData + " "
          )
        ),
        React.createElement(
          "div",
          { className: "w-[60%] h-full grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1" },
          this.state.mainArray.map(function (data, indexTables) {
            return React.createElement(
              "div",
              {
                key: indexTables,
                className: "min-w-[46rem] min-h-[32rem] bg-white text-black flex flex-col mb-10 shadow-xl border-8 border-white " + (_this2.state.IsActiveSelectedTableIndexNumber == indexTables ? " border-yellow-300" : "border-white")
              },
              React.createElement(
                "button",
                {
                  onClick: function onClick() {
                    _this2.setState({
                      IsActiveSelectedTableIndexNumber: indexTables
                    });
                  },
                  className: "w-full h-[4rem] bg-slate-700 flex flex-row justify-between items-center px-8"
                },
                React.createElement("input", {
                  className: "text-white text-2xl outline-none bg-slate-700",
                  type: "text",
                  placeholder: "Table " + indexTables,
                  onChange: function onChange(e) {
                    _this2.state.tableName[indexTables] = e.target.value;
                  }
                }),
                React.createElement(
                  "div",
                  { className: "space-x-10 flex justify-center items-center" },
                  React.createElement(
                    "label",
                    { className: "text-md text-white w-36" },
                    "Primary Key"
                  ),
                  React.createElement(
                    "select",
                    {
                      disabled: _this2.state.mainController[indexTables].pkDisabled //default olarak true gelerek alanı disabled eder.
                      , onChange: function onChange(e) {
                        _this2.state.mainController[indexTables].pk = e.target.value; // seçili tablonun primaryket objesini günceller.
                        _this2.forceUpdate();
                      },
                      className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    },
                    React.createElement("option", { value: "null", selected: "" }),
                    _this2.state.mainArray[indexTables].map(function (types, indexTableTypes2) {
                      return types.type == "Integer" && types.name != "" ? React.createElement(
                        "option",
                        {
                          key: indexTableTypes2,
                          value: types.typeId,
                          selected: ""
                        },
                        types.name
                      ) : "";
                    })
                  ),
                  React.createElement(
                    "a",
                    {
                      onClick: function onClick() {
                        console.log(_this2.state.mainController[indexTables]);
                        _this2.setState({
                          classData: "public static " + _this2.state.tableName + " \n" + _this2.state.mainArray[indexTables].map(function (data, textIndex) {
                            return "            " + data.type + "  " + data.name + " (" + data.limit + ") " + (data.AllowNull ? "not null" : "null") + " " + (data.type == "Integer" && data.typeId == _this2.state.mainController[indexTables].pk ? "PRIMARY KEY" : "") + " " + (data.type == "Integer" && data.typeId == _this2.state.mainController[indexTables].foreignIndex[data.typeId].typeId ? "FOREIGN KEY REFERENCES " + _this2.state.mainController[indexTables].foreignIndex[data.typeId].targetId : "") + " {get; set;}\n";
                          })
                        });
                      },
                      className: " hover:bg-red-500 p-2 items-center rounded-xl"
                    },
                    React.createElement(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fillRule: "white",
                        className: "bi bi-upload",
                        viewBox: "0 0 16 16"
                      },
                      React.createElement("path", { d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" }),
                      React.createElement("path", { d: "M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" })
                    )
                  ),
                  React.createElement(
                    "a",
                    {
                      onClick: function onClick() {
                        _this2.state.mainArray.splice(indexTables, 1);
                        _this2.forceUpdate();
                      },
                      className: " hover:bg-red-500 p-2 items-center rounded-xl"
                    },
                    React.createElement(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fillRule: "white",
                        className: "bi bi-trash",
                        viewBox: "0 0 16 16"
                      },
                      React.createElement("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
                      React.createElement("path", {
                        fillRule: "evenodd",
                        d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      })
                    )
                  )
                )
              ),
              _this2.state.mainArray[indexTables].map(function (data, indexTypes) {
                return React.createElement(
                  "div",
                  {
                    key: indexTypes,
                    className: "w-full h-[4rem] px-8 mt-2 my-10 shadow-lg flex justify-between items-center"
                  },
                  React.createElement(
                    "div",
                    { className: "flex flex-row" },
                    React.createElement("input", {
                      defaultValue: data.type,
                      type: "text",
                      className: " outline-none  w-[10rem]"
                    }),
                    React.createElement("input", {
                      // TYPE INTEGER SA COUNT > 0 && NAME != NULL PRIMARY KEY DROPOWN AKTİFLEŞTİR
                      onChange: function onChange(e) {
                        if (e.target.value !== "") {
                          _this2.state.mainArray[indexTables][indexTypes].name = e.target.value;
                          _this2.state.mainController[indexTables].pkDisabled = false;
                        } else {
                          _this2.state.mainArray[indexTables][indexTypes].name = e.target.value;
                          _this2.state.mainController[indexTables].pkDisabled = true;
                        }
                        _this2.forceUpdate();
                      },
                      placeholder: "name",
                      value: _this2.state.mainArray[indexTables][indexTypes].name,
                      type: "text",
                      className: " outline-none w-[10rem]"
                    }),
                    React.createElement("input", {
                      onChange: function onChange(e) {
                        _this2.state.mainArray[indexTables][indexTypes].limit = e.target.value;
                      },
                      placeholder: "(" + data.limit + ")",
                      type: "text",
                      className: " outline-none w-[3.5rem]"
                    }),
                    React.createElement("input", {
                      onChange: function onChange() {
                        data.AllowNull = !data.AllowNull;
                      },
                      type: "checkbox",
                      className: " outline-none w-[3.5rem] text-black"
                    }),
                    React.createElement(
                      "label",
                      { htmlFor: "vehicle1" },
                      "Null"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "flex flex-row space-x-3" },
                    React.createElement(
                      "div",
                      {
                        id: "Menus",
                        className: "flex flex-row w-full space-x-3 min-w-[42rem]"
                      },
                      data.type == "Integer" && data.typeId != _this2.state.mainController[indexTables].pk ? React.createElement(
                        "select",
                        {
                          onChange: function onChange(e) {
                            if (e.target.value == "fk") {
                              _this2.state.mainArray[indexTables][indexTypes].foreignkey = {
                                host: indexTypes,
                                targetTable: ""
                              };
                            } else if (e.target.value == "null") {
                              _this2.state.mainArray[indexTables][indexTypes].foreignkey = {
                                host: "null",
                                targetTable: "null"
                              };
                            }
                            _this2.forceUpdate();
                          },
                          id: "countries",
                          className: "bg-gray-50 border border-gray-300 mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        },
                        React.createElement("option", { value: "null", selected: "" }),
                        React.createElement(
                          "option",
                          { value: "fk" },
                          "Foreign Key"
                        )
                      ) : "",
                      data.foreignkey.host !== "null" && data.typeId != _this2.state.mainController[indexTables].pk ? React.createElement(
                        "select",
                        {
                          onChange: function onChange(event) {
                            _this2.state.mainArray[indexTables][indexTypes].foreignkey = {
                              host: indexTables,
                              targetTable: event.target.value
                            };
                            _this2.state.mainController[indexTables].indexForeignKeys = event.target.value;
                            _this2.forceUpdate();
                          },
                          id: "countries",
                          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        },
                        React.createElement("option", { value: "null", selected: "" }),
                        _this2.state.mainArray.map(function (foreignTable, indexForeignKeys) {
                          return indexForeignKeys != indexTables ? React.createElement(
                            "option",
                            {
                              key: indexForeignKeys,
                              value: indexForeignKeys,
                              selected: ""
                            },
                            "table ",
                            indexForeignKeys
                          ) : "";
                        })
                      ) : "",
                      data.foreignkey.targetTable !== "" && _this2.state.mainController[indexTables].indexForeignKeys !== "null" && data.typeId != _this2.state.mainController[indexTables].pk ? React.createElement(
                        "select",
                        {
                          onChange: function onChange(event) {
                            if (_this2.state.mainController[indexTables].foreignIndex[indexTypes]) {
                              _this2.state.mainController[indexTables].foreignIndex[indexTypes] = {
                                typeId: _this2.state.mainArray[indexTables][indexTypes].typeId,
                                targetId: event.target.value
                              };
                            } else {
                              _this2.state.mainController[indexTables].foreignIndex.push({
                                typeId: _this2.state.mainArray[indexTables][indexTypes].typeId,
                                targetId: event.target.value
                              });
                            }

                            _this2.forceUpdate();
                          },
                          id: "countries",
                          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        },
                        React.createElement("option", { value: "null", selected: "" }),
                        _this2.state.mainArray[data.foreignkey.targetTable].map(function (targetTable, indexTargetTable) {
                          return targetTable.type === "Integer" && _this2.state.mainController[_this2.state.mainController[indexTables].indexForeignKeys].pk != "" && _this2.state.mainController[_this2.state.mainController[indexTables].indexForeignKeys].pk != "null" ? React.createElement(
                            "option",
                            {
                              key: indexTargetTable,
                              value: targetTable.name,
                              selected: ""
                            },
                            targetTable.name
                          ) : "";
                        })
                      ) : ""
                    ),
                    React.createElement(
                      "button",
                      {
                        onClick: function onClick() {
                          // this.state.mainArray[indexTables].splice(indexTypes,1);
                          // this.state.count[indexTables].index -= 1;

                          // this.state = {
                          //   food: {
                          //     sandwich: {
                          //       capsicum: true,
                          //       crackers: true,
                          //       mayonnaise: true
                          //     },
                          //     pizza: {
                          //       jalapeno: true,
                          //       extraCheese: false
                          //     }
                          //   }
                          // }

                          // this.setState(prevState => ({
                          //   mainArray: [ //mainArray 
                          //     ...prevState.mainArray,           // copy all other key-value pairs of food object
                          //     indexTables: [                     // specific object of food object
                          //       ...prevState.food.pizza,   // copy all pizza key-value pairs
                          //       extraCheese: true          // update value of specific key
                          //     }
                          //   ]
                          // }))


                          _this2.setState({

                            mainArray: [].concat(_toConsumableArray(_this2.state.mainArray[indexTables]), [_this2.state.mainArray[indexTables].filter(function (type) {
                              return type.typeId !== _this2.state.mainArray[indexTables][indexTypes].typeId;
                            })])
                          });
                          //this.state.mainArray[indexTables].splice(this.state.mainArray[indexTables][indexTypes],1)
                          _this2.forceUpdate();
                        },
                        className: "px-2 py-2 hover:bg-yellow-500 hover:opacity-70 rounded-3xl"
                      },
                      React.createElement(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          fillRule: "currentColor",
                          className: "bi bi-trash",
                          viewBox: "0 0 16 16"
                        },
                        React.createElement("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
                        React.createElement("path", {
                          fillRule: "evenodd",
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
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const typeArray = [
      "Integer",
      "String",
      "Boolean",
      "Byte",
      "Char",
      "DateTime",
    ];
    return (
      <div className="w-[30%] h-full flex flex-col space-y-16 sticky top-0">
        <div className="w-full h-full flex flex-row sticky top-0">
          <div className="w-full h-full bg-purple-600 flex flex-col space-y-4 items-center justify-between ">
            {typeArray.map((type, index) => (
              <button
                key={index}
                onClick={(e) => {
                  this.props.selectedTypes[this.props.selectedTableCount].push({
                    id: index,
                    type: type,
                    name: "",
                    limit: 10,
                    AllowNull: false,
                    primarykey: false,
                    foreignkey: { host: "", targetTable: "" },
                    regex: "",
                  });
                  
                }}
                className="w-full h-[4rem] flex justify-between items-center text-xl text-white hover:bg-red-400 px-4"
              >
                <p>{type}</p> <p>+</p>
              </button>
            ))}
          </div>

          <div className="w-[25%] h-full flex flex-col space-y-5 mx-4 relative">
            <button
              className="w-24 h-24 bg-purple-400 items-center"
              onClick={() => {
                this.state.selectedTypes.push([]);
                this.setState({
                  selectedTableCount: this.state.selectedTypes.length - 1,
                });
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className=" w-full min-h-[10rem] h-[full] bg-white whitespace-pre-wrap p-5">
          {`${this.state.classData} `}
        </div>
      </div>
    );
  }
}

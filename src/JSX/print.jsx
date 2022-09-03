class Print extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        class="modal fade"
        id="PrintModal"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Class Format
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body whitespace-pre">
              {this.props.mainArray &&
                this.props.mainArray.map(
                  (tables, tablesIndex) =>
                    `public class ${
                      tables.name == undefined
                        ? `Table ${tablesIndex}`
                        : tables.name
                    } 
             ${
               this.props.mainArray[tablesIndex].types &&
               this.props.mainArray[tablesIndex].types.map(
                 (types, typesIndex) => `${types.type}`
               )
             }
            
            `
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

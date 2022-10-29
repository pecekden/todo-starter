import './App.css'

export const App = () => {
  return (
    <>
      <div className="title">ToDo App</div>
      <div className="content">
        <div>
          <input
            type="text"
            className="regularInput"
            placeholder="Aufgabe..."
          ></input>
          <button type="button" className="regularButton">
            Hinzufügen
          </button>
        </div>
        <div>
          <input type="checkbox" className="regularCheckbox"></input>
          Alle Anzeigen
        </div>
        <div className="table">
          <div className="header"></div>
          <div className="header">Wichtigkeit</div>
          <div className="header">Aufgabe</div>
          <div className="header"></div>
          <div>
            <input type="checkbox" className="regularCheckbox"></input>
          </div>
          <div className="symbol">
            <div className="lightning_hidden">&#128498;</div>
          </div>
          <div>Johnny</div>
          <div>
            <button type="button" className="regularButton">
              Löschen
            </button>
          </div>
          <div>
            <input type="checkbox" className="regularCheckbox"></input>
          </div>
          <div>3</div>
          <div>Saburo</div>
          <div>
            <button type="button" className="regularButton">
              Löschen
            </button>
          </div>
          <div>
            <input type="checkbox" className="regularCheckbox"></input>
          </div>
          <div>3</div>
          <div>Judy</div>
          <div>
            <button type="button" className="regularButton">
              Löschen
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

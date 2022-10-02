import './App.css'

export const App = () => {
  return (
    <>
      <div className="title">ToDo App</div>
      <div className="content">
        <div>
          <input type="text" placeholder="Aufgabe..."></input>
          <button type="button">Hinzufügen</button>
        </div>
        <div>
          <input type="checkbox" className="regularCheckbox"></input>
          Alle Anzeigen
        </div>
        <div id="taskList">
          <table>
            <thead>
              <tr>
                <tr></tr>
                <th>Wichtigkeit</th>
                <th>Aufgabe</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" className="regularCheckbox"></input>
                </td>
                <td>2</td>
                <td>task1</td>
                <td>
                  <button type="button">Löschen</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="regularCheckbox"></input>
                </td>
                <td>3</td>
                <td>task2</td>
                <td>
                  <button type="button">Löschen</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

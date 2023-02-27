//Exercice Formulaires

function Field ({name, value, onChange, children}) {
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
    </div>
}

function Checkbox ({name, value, onChange, children}) {
return <div className="form-check">
    <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input" />
    <label htmlFor={name} className="form-check-label">{children}</label>
</div>
}

class Home extends React.Component {

  /*Démo
constructor(props) {
    super(props)
    this.state = {
        nom: 'demo2'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
}

handleChange (e) {
    this.setState({
        nom: e.target.value
    })
}

handleChecked (e) {
    this.setState({
        checked: e.target.checked
    })
}

render () {
    return <div>
        <label htmlFor="nom">Mon nom</label>
        <input type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange} />
        <select value={this.state.nom} onChange={this.handleChange}>
            <option  value="demo1">Demo 1</option>
            <option  value="demo2">Demo 2</option>
            <option  value="demo3">Demo 3</option>
        </select>
        {JSON.stringify(this.state.nom)}
        <input type="checkbox" checked={this.state.checked} onChange={this.handleChecked} />
        {this.state.checked ? <div>Checkbox cochée</div> : null}
    </div>
}*/

constructor(props) {
    super(props)
    this.state = {
        nom: '',
        prenom:'',
        newsletter: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange (e) {
    const name = e.target.name
    const type = e.target.type
    const value = type === "checkbox" ? e.target.checked : e.target.value
    this.setState({
        [name]: value
    })
}

handleSubmit (e) {
    e.preventDefault()
    const data = JSON.stringify(this.state)
    this.setState({
        nom: '',
        prenom:'',
        newsletter: false
    })
}

render() {
    return <form className="container" onSubmit={this.handleSubmit}>
        <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
        <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>
        <Checkbox name={"newsletter"} value={this.state.newsletter} onChange={this.handleChange}>S'abonner à la Newsletter</Checkbox>
        <div className="form-group">
        <button className="btn btn-primary">Envoyer</button>
        </div>
        {JSON.stringify(this.state)}
    </form>
}
}

ReactDOM.render(<Home />, document.querySelector('#app'))
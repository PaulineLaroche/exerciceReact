/* Exercice d'introduction

let n = 0

function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

function render() {
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3'
    ]
    const lis = items.map((item, k) => <li key={k}>{item}</li>)
    const title = <React.Fragment><h1 id={'title' + n} className='title'>
        Bonjour les gens <span>{numberFormat(n)}</span>
    </h1>
    <ul>{lis}</ul>
    </React.Fragment>

    ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    n++
    render()
}, 1000)
*/

/*Exercice Composant (actualisation automatique date et incrémentation) + Evènements

function WelcomeFunc ({name, children}) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {

    render () {
        return <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>
            {this.props.children}
        </p>
    </div>
    }

}

class Clock extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }
    
    componentWillUnmount () {
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render () {
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {

    constructor (props) {
        super(props)
        this.state = {n: props.start, timer: null}
        this.toggle = this.toggle.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount () {
        this.play()
    }

    componentWillUnmount () {
        window.clearInterval(this.state.timer)
    }

    increment () {
        this.setState(function (state, props) {
            return {n: state.n + props.step}
        })
    }

    pause () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    toggle () {
        return this.state.timer ? this.pause() : this.play()
    }

    label () {
        return this.state.timer ? 'Pause' : 'Lecture'
    }

    reset () {  
        this.pause()
        this.play()
        this.setState((state, props) => ({n: props.start}))
    }

    render () {
        return <div>
            Valeur: {this.state.n}
            <button onClick={this.toggle}>{this.label()}</button>
            <button onClick={this.reset}>Réinitialiser</button>
        </div>
    }

}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

class ManualIncrementer extends React.Component {

    constructor (props) {
        super(props)
        this.state = {n: 0}
    }

    increment (e) {
        e.preventDefault()
        this.setState(function (state, props) {
            return {n: state.n + 1}
        })
    }

    render () {
        return <div>
            Valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button>
        </div>
    }

}

function Home () {
    return <div>
        <Welcome name="Lisa" />
        <Welcome name="Jean" />
        <Clock />
        <Incrementer />
        <Incrementer start={10} step={10} />
        <ManualIncrementer />
    </div>
}*/

/* Exercice Formulaires

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

    /*constructor(props) {
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

ReactDOM.render(<Home />, document.querySelector('#app'))*/

//TP Convertisseur °C - °F

const scaleNames= {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32
}

function BoilingVerdict({celsius}) {
    if (celsius >= 100) {
        return <div className="alert alert-success">L'eau bout</div>
    }
    return <div className="alert alert-info">L'eau ne bout pas</div>
}

function tryConvert (temperature, convert) {
    const value = parseFloat(temperature)
    if (Number.isNaN(value)) {
        return '';
    }
    return (Math.round(convert(value) * 100) / 100).toString()
}

function Column2 ({left, right}) {
    return <div className="row">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
    </div>
}

class TemperatureInput extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render () {
        const {temperature} = this.props
        const name = 'scale' + this.props.scale
        const scaleName = scaleNames[this.props.scale]
        return <div className="form-group">
            <label htmlFor={name}>Température (en {scaleName})</label>
            <input type="text" id={name} value={temperature} className="form-control" onChange={this.handleChange} />
        </div>
    }
    
}

class Calculator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            scale: 'c',
            temperature: 20
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange (temperature) {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handleFahrenheitChange (temperature) {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    render() {
        const {temperature, scale} = this.state
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius)
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)
        return <div className="container">
            <Column2
                left={<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>}
                right={<TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>}
            />
            <BoilingVerdict celsius={celsius}/>
        </div>
    }

}

ReactDOM.render(<Calculator />, document.querySelector('#app'))
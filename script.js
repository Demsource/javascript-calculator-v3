function App() {
    const [expression, setExpression] = React.useState('')
    const [result, setResult] = React.useState('0')

    const display = symbol => {
        if (/\+|-|\*|\//.test(symbol) && expression == '') return
        if (/(\d*\.\d*)$/.test(expression) && symbol == '.') return
        if (/\+|-|\*|\//.test(expression[expression.length - 1]) && /\+|\*|\//.test(symbol)) return

        if(/\+|\*|\//.test(expression[expression.length - 2]) && expression[expression.length - 1] == '-' && symbol =='-') return

        if (expression[expression.length - 2] == ' ' && symbol == '-') return
        if (expression[expression.length - 1] == '-' && symbol == '-') {
            setExpression(prev => prev + ' ')
        }

        setExpression(prev => prev + symbol)
        if (expression[expression.length - 1] == '=') {
            if (/[0-9]|\./.test(symbol)) {
                setExpression(symbol)
            } else {
                setExpression(result + symbol)
            }
        }
    }
    const clear = () => {
        setExpression('')
        setResult('0')
    }
    const remove = () => {
        setExpression(prev => prev.split('').slice(0, -1).join(''))
    }
    const calculate = () => {
        if (expression.includes('=') || /\+|-|\*|\//.test(expression[expression.length - 1])) return
        if (expression) {
            setExpression(prev => prev + '=')
            setResult(eval(expression))
        }
    }
    return (
        <div className="container">
            <div className="grid">
                <div id="display">
                    <input type="text" value={expression} placeholder="0" disabled />
                    <div className="result">{result}</div>
                </div>
                <div onClick={clear} id="clear" className="button tomato">AC</div>
                <div onClick={remove} id="delete" className="button tomato">C</div>
                <div onClick={() => { display('/') }} id="divide" className="button">/</div>
                <div onClick={() => { display('*') }} id="multiply" className="button">*</div>
                <div onClick={() => { display('7') }} id="seven" className="button dark">7</div>
                <div onClick={() => { display('8') }} id="eight" className="button dark">8</div>
                <div onClick={() => { display('9') }} id="nine" className="button dark">9</div>
                <div onClick={() => { display('-') }} id="subtract" className="button">-</div>
                <div onClick={() => { display('4') }} id="four" className="button dark">4</div>
                <div onClick={() => { display('5') }} id="five" className="button dark">5</div>
                <div onClick={() => { display('6') }} id="six" className="button dark">6</div>
                <div onClick={() => { display('+') }} id="add" className="button">+</div>
                <div onClick={() => { display('1') }} id="one" className="button dark">1</div>
                <div onClick={() => { display('2') }} id="two" className="button dark">2</div>
                <div onClick={() => { display('3') }} id="three" className="button dark">3</div>
                <div onClick={calculate} id="equals" className="button blue">=</div>
                <div onClick={() => { display('0') }} id="zero" className="button dark">0</div>
                <div onClick={() => { display('.') }} id="decimal" className="button dark">.</div>
            </div>
            <address>By <a rel="author" href="https://github.com/Demsource" target="_blank">Demo</a></address>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
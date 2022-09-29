import * as React from "react"

type InputLinkProps = {
    onValid: (value: string) => string
    onSubmit: () => Promise<any> | null
}

const InputLink = (props: InputLinkProps) => {
    const { onValid, onSubmit } = props

    const [value, setValue] = React.useState('')
    const [touched, setTouched] = React.useState(false)
    const [focused, setFocused] = React.useState(false)
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        if (touched) {
            setError(onValid(value))
        }
    }, [value, touched])

    return (
        <div className="inputContainer">
            <div
                className="inputLink__label"
            >
                Введите ссылку
            </div>

            <div style={{display: 'flex', border: '0px'}}>
                <input
                    type='text'
                    value={value}
                    className={`inputLink noBorder`}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => {
                        setFocused(true)
                        if (!touched) setTouched(true)
                    }}
                    onBlur={() => setFocused(false)}
                />
                <button disabled={!!error} className="inputLink__button" onClick={() => {onSubmit && onSubmit()}}>Сократить</button>
            </div>

            {!focused && error && <div className="error">{error}</div>}
        </div>
    )
}


export default InputLink

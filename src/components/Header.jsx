import propTypes from 'prop-types'

function Header({ text }){
    return(
        <header>
            <h1>{text}</h1>
        </header>
    )
}

Header.defaultProps = {
    text: "Defualt tezt"
}

Header.propTypes = {
    text : propTypes.string
}
export default Header
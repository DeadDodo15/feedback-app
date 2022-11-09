import propTypes from 'prop-types'

function Header({ text, bgColor, textColor  }){
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }
    
    return(
        <header style={headerStyles}>
            <div className='container'>
            <h1>{text}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Defualt text",
    bgColor: 'rgba(0,0,0,0.7)',
    textColor: '#ff6a95',
}

Header.propTypes = {
    text : propTypes.string,
    bgColor: propTypes.string,
    textColor: propTypes.string
}
export default Header
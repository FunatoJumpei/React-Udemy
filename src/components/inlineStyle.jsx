export const InlineStyle = () => {
    const containerStyle = {
        border: "solid 2px red",
        padding: "8px",
        margin: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    };
    const titleStyle = {
        margin: 0,
        color: "green"
    };
    const buttonStyle = {
        backgroundColor: "blue",
        borderColor: "none",
        padding: "8px"
    };

    return (
        <div style={containerStyle}>
            <p style={titleStyle}>-- Inline Style --</p>
            <button style={buttonStyle}> ボタン </button>
        </div>
    )
}
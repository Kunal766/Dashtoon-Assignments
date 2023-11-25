import './Panel.css'
function Panel({ sender, urls }) {

    return (
        <div className="panel">
            {
                urls && urls.map((url, index) => {
                    return (<img key={index} src={url} alt='comicimage' />)
                })
            }
        </div>
    )
}

export default Panel;
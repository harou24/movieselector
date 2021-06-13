function SearchBox(props) {
    return (
        <div class="my_div">
            <input
                value={props.value}
                onChange={(event)=>props.setSearchValue(event.target.value)}
                placeholder="type to search"
            ></input>            
        </div>
    )
}

export default SearchBox

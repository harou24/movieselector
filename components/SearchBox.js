function SearchBox(props) {
    return (
        <div className="my-12 ml-80 mr-80 my_div">
            <input className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                type="text" 
                placeholder="Type to search"
                value={props.value}
                onChange={(event)=>props.setSearchValue(event.target.value)}
            />
        </div>
    )
}

export default SearchBox

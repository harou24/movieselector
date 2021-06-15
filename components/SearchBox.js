function SearchBox(props) {
    return (
          <div className="m-12 md:mx-24 text-center">
            <input className="w-1/2 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                type="text" 
                placeholder="Type to search"
                value={props.value}
                onChange={(event)=>props.setSearchValue(event.target.value)}
            />
        </div>
    )
}

export default SearchBox

// eslint-disable-next-line react/prop-types
const FormSearch = ({ handleInput, handleSelect, handleFormSubmit, searchKeyword }) => {
    return (
        <form action="GET" onSubmit={handleFormSubmit}>
            <div className="flex items-center justify-center bg-white rounded-full gap-2 px-2">
            <input type="text" autoComplete="off" required placeholder="Search" value={searchKeyword} onChange={handleInput} className="w-full bg-transparent p-3 outline-none font-main text-slate-700"/>
                <select onChange={handleSelect} id="img-qty" className="bg-transparent font-main outline-none">
                    <option value="5">5 Image</option>
                    <option value="10">10 Image</option>
                    <option value="15">15 Image</option>
                    <option value="20">20 Image</option>
                    <option value="25">25 Image</option>
                </select>
                <button type="submit" className="bg-indigo-500 py-2 px-3 text-white rounded-full font-main text-sm">Search</button>
            </div>
        </form>
    );
}

export default FormSearch;
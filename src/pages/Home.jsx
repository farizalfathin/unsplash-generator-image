import { useState, useEffect, useCallback } from "react";
import SecHero from "../Layouts/SecHero";
import SecImages from "../Layouts/SecImages";
import SecSearch from "../Layouts/SecSearch";
import { fetchingDataImg, fetchingDataImgBySearch } from "../utils/fetchData";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Circles } from "react-loader-spinner";

function Home() {
    const [ listImage, setListImage ] = useState([]);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ statusCode, setStatusCode ] = useState(null);

    const fetchData = useCallback(async () => {
        const paramsData = {
            keyword: searchParams.get('keyword'),
            imgQty: searchParams.get('imgQty'),
            page: Number(searchParams.get('page')) || 1
        }

        if(!paramsData.keyword) {
            const { results, statusCode } = await fetchingDataImg(paramsData.page);
            setListImage(results);
            setStatusCode(statusCode);
        }else {
            const { results, statusCode } = await fetchingDataImgBySearch(paramsData);
            setListImage(results);
            setStatusCode(statusCode);
        }

    }, [searchParams]);

    useEffect(() => {
        setIsLoading(true);
        if(setIsLoading) {
            fetchData();
            statusCode === 200 && setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    }, [fetchData, statusCode]);

    return (
        <>
            <main>
                <SecHero />
                <SecSearch />
                { isLoading
                ? ( <div className="flex justify-center items-center">
                    <Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}/>
                    </div> )
                : ( <>
                    <SecImages listImage={listImage} />
                    <PaginatedItems pageCount={30} searchParams={searchParams} setSearchParams={setSearchParams}/>
                </> )}
            </main>
        </>
    );
}

// eslint-disable-next-line react/prop-types
function PaginatedItems({ pageCount, setSearchParams, searchParams }) {
    const [currentPage, setCurrentPage] = useState(
        // eslint-disable-next-line react/prop-types
        Number(searchParams.get('page')) || 1
    ); // Initialize with 0 for zero-based indexing

    const handlePageClick = (event) => {
        const selectedPage = event.selected + 1; 
        setCurrentPage(selectedPage);
        setSearchParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set('page', selectedPage);
            return newParams;
        });
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="flex justify-center mt-4"
                pageClassName="mx-1"
                pageLinkClassName="px-3 py-1 border border-gray-300 rounded"
                previousClassName="mx-1"
                previousLinkClassName="px-3 py-1 border border-gray-300 rounded"
                nextClassName="mx-1"
                nextLinkClassName="px-3 py-1 border border-gray-300 rounded"
                breakClassName="mx-1"
                breakLinkClassName="px-3 py-1 border border-gray-300 rounded"
                activeClassName="bg-indigo-500 text-white"
                forcePage={currentPage}
            />
        </>
    );
}

export default Home;
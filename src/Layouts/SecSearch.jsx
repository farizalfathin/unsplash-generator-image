import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FormSearch from "../Components/FormSearch";

const SecSearch = () => {
    const [ searchParams, setSearchParams ] = useSearchParams(); 
    const [search, setSearch] = useState( {
        keyword: searchParams.get('keyword') || '',
        imgQty: searchParams.get('imgQty') || '5',
        result: ''
    });

    const handleInput = ({ target }) => {
        setSearch((prevState) => {
            return {
                ...prevState,
                keyword: target.value
            }
        });

        setSearchParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set('keyword', target.value);
            return newParams;
        });
    }

    const handleSelect = ({ target }) => {
        setSearch((prevState) => {
            return {
                ...prevState,
                imgQty: target.value
            }
        });

        setSearchParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set('imgQty', target.value || '5');
            return newParams;
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setSearchParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set('result', searchParams.get('keyword'));
            return newParams;
        });
    }

    return (
        <section id="sec-search" className="w-full">
            <div className="flex items-center pt-8 p-4 justify-center flex-col bg-indigo-500">
                <h2 className="font-main text-2xl md:text-3xl font-medium text-white mb-4">Search Your Image</h2>
                <FormSearch handleFormSubmit={handleFormSubmit} handleInput={handleInput} handleSelect={handleSelect} searchKeyword={search.keyword}/>
            </div>
            <div className="w-full z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6366f1" fillOpacity="1" d="M0,192L14.1,186.7C28.2,181,56,171,85,165.3C112.9,160,141,160,169,165.3C197.6,171,226,181,254,186.7C282.4,192,311,192,339,165.3C367.1,139,395,85,424,69.3C451.8,53,480,75,508,69.3C536.5,64,565,32,593,58.7C621.2,85,649,171,678,192C705.9,213,734,171,762,144C790.6,117,819,107,847,117.3C875.3,128,904,160,932,149.3C960,139,988,85,1016,85.3C1044.7,85,1073,139,1101,176C1129.4,213,1158,235,1186,202.7C1214.1,171,1242,85,1271,42.7C1298.8,0,1327,0,1355,26.7C1383.5,53,1412,107,1426,133.3L1440,160L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path></svg>
            </div>
        </section>
    )
}

export default SecSearch;
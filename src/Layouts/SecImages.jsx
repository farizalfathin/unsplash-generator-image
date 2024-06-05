import CardImage from "../Components/CardImage";
import { useState } from "react";
import { TypewriterEffectSmooth } from "../Components/TypeWriter";
import { useSearchParams } from "react-router-dom";
import RotatingButton from "../Components/RotatingButton";
import SpringModal from "../Components/SpringModal";

// eslint-disable-next-line react/prop-types
const SecImages = ({ listImage = [] }) => {
    const [isOpen, setIsOpen] = useState({
      status: false,
      image: '',
      desc: '',
      altDesc: ''
    });
    const [ searchParams ] = useSearchParams();
    let words = searchParams.get('result') ? searchParams.get('result').split(' ').map((word, index, array) => {
      if (index === array.length - 1) {
        return { text: word + '.', className: 'text-indigo-500' };
      }
      return { text: word };
    }) : [];

    return (
        <>
            <section className="w-full px-4 pb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <RotatingButton />
                <div className="w-1 h-10 bg-slate-700 rounded-full"></div>
                { words.length > 0 ? 
                  (<TypewriterEffectSmooth words={words} />)
                : null }
              </div>
              <div className="gap-4" style={{ columns: `4 12rem`}}>
                {listImage.length > 0 ?
                listImage.map((data) => (
                    <CardImage key={data.id} img={data.urls.full} name={data.user.name} profile={data.user.profile_image.large} altDesc={data.alt_description} desc={data.description}  openModal={setIsOpen}/>
                )) : null }
              </div>
            </section>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
}

export default SecImages;
import styles from '../styles/secImages.module.css'

// eslint-disable-next-line react/prop-types
const CardImage = ({ altDesc, desc, img, openModal, name = 'no name', profile }) => {
    return (
        <div className={`w-full mb-4 ${styles.imgWrapper}`} onClick={() => openModal({ status: true, image: img, altDesc: altDesc, desc: desc })}>
            <img src={img} alt="" />
            <div className={`z-10 absolute bottom-3 px-3 flex w-full justify-between ${styles.hiddenOnLoad} items-center`}>
                <div className='flex gap-2 items-center'>
                    <div className='w-10 h-10 bg-cover bg-center rounded-full' style={{ backgroundImage: `url(${profile})` }}/>
                    <p className='text-white font-medium font-main'>{name}</p>
                </div>
                <a href="#">
                    <div className="bg-white rounded-md p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56">
                            <path fill="currentColor" d="M27.944 24.335c.958 0 1.767.74 1.845 1.659l.007.146v18.062l-.141 3.493l1.594-1.665l3.539-3.773a1.71 1.71 0 0 1 1.266-.562c.984 0 1.71.68 1.71 1.64c0 .458-.148.806-.428 1.124l-.11.118l-7.922 7.64c-.47.47-.891.634-1.36.634c-.443 0-.81-.133-1.22-.501l-.14-.132l-7.921-7.64c-.352-.352-.563-.727-.563-1.243c0-.96.704-1.64 1.688-1.64c.417 0 .852.148 1.174.444l.115.118l3.562 3.773l1.594 1.665l-.164-3.493V26.14c0-.984.867-1.805 1.875-1.805m4.713-20.564c8.507 0 15.403 6.896 15.403 15.402c0 .484-.023.963-.066 1.435c4.303 1.014 7.506 4.88 7.506 9.492c0 5.386-4.366 9.752-9.752 9.752H34.5v-3.75h11.248A6.002 6.002 0 0 0 51.75 30.1a6.006 6.006 0 0 0-4.616-5.842l-3.174-.748l.3-3.247c.033-.36.05-.724.05-1.09c0-6.435-5.217-11.652-11.653-11.652a11.637 11.637 0 0 0-9.777 5.31l-1.525 2.344l-2.681-.792a4.994 4.994 0 0 0-6.408 4.574l-.004.293l.093 3.15l-2.997.691a6.594 6.594 0 0 0-5.1 6.422a6.59 6.59 0 0 0 6.59 6.59H21.5v3.75H10.848c-5.71 0-10.34-4.63-10.34-10.34c0-4.908 3.42-9.018 8.007-10.076l-.004-.264a8.744 8.744 0 0 1 11.225-8.387c2.747-4.223 7.508-7.015 12.921-7.015"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default CardImage;
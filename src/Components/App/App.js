import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchPixaBayAPI from '../../Services/searchPicturesAPI';
import Container from '../Container';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import LoaderSpinner from '../Loader';
import Button from '../Button';
import Modal from '../Modal';
import Skeleton from '../Sceleton';
import scrollPageDown from '../../scroll/scrollTo';
// import ScrollToButton from '../ButtonScrollTo';
import useToggle from '../../hooks/index';

function App() {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    // const [showModal, setShowModal] = useState(false);
    const [showModal, setShowModal] = useToggle(false);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [pixaBayImages, setPixaBayImages] = useState([]);
    const [largeImage, setLargeImage] = useState({});

    useEffect(() => {
        if (!searchQuery) return;
        setLoadingSpinner(true);
        const fetchPixaBayImage = async () => {
            try {
                const hits = await fetchPixaBayAPI(searchQuery, page);
                setPixaBayImages(pixaBayImages => [...pixaBayImages, ...hits]);
                if (page !== 1) {
                    scrollPageDown();
                }
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoadingSpinner(false);
            }
        };
        fetchPixaBayImage();
    }, [page, searchQuery]);

    const handleLoadMoreClick = () => {
        setLoadingSpinner(!loadingSpinner);
        setPage(prevPage => prevPage + 1);
        setLoadingSpinner(loadingSpinner);
    };

    const handleFormSubmit = searchQuery => {
        setSearchQuery(searchQuery);
        setPage(page);
        setPixaBayImages([]);
    };

    // const toggleModal = () => {
    //     setShowModal(!showModal);
    // };

    const clickImages = largeImage => {
        setLargeImage(largeImage);
        // toggleModal();
        setShowModal();
    };

    return (
        <>
            <ToastContainer />
            <Searchbar onSubmit={handleFormSubmit} />
            <Container>
                {pixaBayImages.length !== 0 ? (
                    <ImageGallery
                        onModal={clickImages}
                        pixaBayImages={pixaBayImages}
                    />
                ) : (
                    searchQuery !== '' && <Skeleton />
                )}

                {loadingSpinner && <LoaderSpinner />}

                {pixaBayImages.length !== 0 && (
                    <Button onClick={handleLoadMoreClick} />
                )}

                {showModal && (
                    <Modal onModal={setShowModal}>
                        {loadingSpinner && <LoaderSpinner />}
                        <img
                            src={largeImage.largeImageURL}
                            alt={largeImage.tags}
                        />
                    </Modal>
                )}
            </Container>
        </>
    );
}

export default App;

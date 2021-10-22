import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import defaultImage from '../../images/error.jpg';

function ImageGalleryItem({
    onModal,
    webformatURL = defaultImage,
    tags = 'photo',
    image,
}) {
    return (
        <>
            <li className={s.ImageGalleryItem}>
                <img
                    onClick={() => {
                        onModal(image);
                    }}
                    src={webformatURL}
                    alt={tags}
                    className={s.ImageGalleryItem__image}
                />
            </li>
        </>
    );
}

ImageGalleryItem.propTypes = {
    onModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

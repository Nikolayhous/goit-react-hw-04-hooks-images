import { useState } from 'react';
import s from './ButtonScrollTo.module.css';

const ScrollToButton = () => {
    const [active, setActive] = useState(false);

    const onVisibleBtn = () => {
        const scroll = window.pageYOffset;
        const height = document.documentElement.clientHeight;
        if (scroll > height) {
            setActive(!active);
        }
        if (scroll < height) {
            setActive(active);
        }
    };
    window.addEventListener('scroll', onVisibleBtn);

    const onClickScrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className={s.btnToTop}>
                <button>
                    <img
                        onClick={onClickScrollTop}
                        src="https://img.icons8.com/nolan/50/circled-up-2.png"
                        className={s.scroll__img}
                        alt="icon-up-arrow"
                    />
                </button>
            </div>
        </>
    );
};

export default ScrollToButton;

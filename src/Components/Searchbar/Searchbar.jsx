import s from './Search.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (searchQuery.trim() === '') {
            return toast('Enter a name for the picture!');
        }

        onSubmit(searchQuery);
        setSearchQuery('');
    };

    const handleNameChange = e => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    return (
        <>
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={s.SearchFormBtn}>
                        <span className={s.SearchFormBtnLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        name="searchQuery"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchQuery}
                        onChange={handleNameChange}
                    />
                </form>
            </header>
        </>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

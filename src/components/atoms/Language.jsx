import React from 'react';
import Select from 'react-select';

const options = [
    {
        value: 'en',
        label: (
            <div className="flex items-center">
                <img
                    src="https://hatscripts.github.io/circle-flags/flags/us.svg"
                    alt="English"
                    width="24"
                    height="24"
                    className="mr-2"
                />
                English
            </div>
        ),
        flag: 'https://hatscripts.github.io/circle-flags/flags/us.svg',
        name: 'English',
    },
    {
        value: 'id',
        label: (
            <div className="flex items-center">
                <img
                    src="https://hatscripts.github.io/circle-flags/flags/id.svg"
                    alt="Indonesian"
                    width="24"
                    height="24"
                    className="mr-2"
                />
                Indonesian
            </div>
        ),
        flag: 'https://hatscripts.github.io/circle-flags/flags/id.svg',
        name: 'Indonesia',
    },
];

function Language({ language, setLanguage }) {
    const handleChange = (selectedOption) => {
        setLanguage(selectedOption.value);
    };

    language = language || 'en';

    const currentLanguage = options.find((option) => option.value === language);

    return (
        <div className="flex justify-end items-center p-4 fixed top-0 right-0">
            <Select
                options={options}
                value={currentLanguage}
                onChange={handleChange}
                getOptionLabel={(e) => (
                    <div className="flex items-center">
                        <img
                            src={e.flag}
                            alt={e.name}
                            width="24"
                            height="24"
                            className="mr-2"
                        />
                        {e.name}
                    </div>
                )}
                placeholder={
                    currentLanguage ? (
                        <div className="flex items-center">
                            <img
                                src={currentLanguage.flag}
                                alt={currentLanguage.name}
                                width="24"
                                height="24"
                                className="mr-2"
                            />
                            {currentLanguage.name}
                        </div>
                    ) : (
                        'Select a language'
                    )
                }
                isSearchable={false}
                styles={{
                    control: (base) => ({
                        ...base,
                        borderColor: 'transparent',
                        backgroundColor: 'var(--bg-dark-secondary)',
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: 'white',
                    }),
                    placeholder: (base) => ({
                        ...base,
                        color: 'white',
                    }),
                    option: (base, state) => ({
                        ...base,
                        color: state.isSelected ? 'var(--text-purple-light)' : 'white',
                        backgroundColor: state.isSelected ? 'var(--bg-selected)' : 'transparent',
                        '&:hover': {
                            backgroundColor: 'var(--purple-dark)',
                        },
                    }),
                    menu: (base) => ({
                        ...base,
                        backgroundColor: 'var(--bg-dark-secondary)',
                        borderRadius: '4px',
                    }),
                    menuList: (base) => ({
                        ...base,
                        maxHeight: '200px',
                        overflowY: 'auto',
                    }),
                    indicatorSeparator: (base) => ({
                        ...base,
                        display: 'none',
                    }),
                }}
            />
        </div>
    );
}

export default Language;

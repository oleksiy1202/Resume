class Hello extends React.Component {
    render() {
        let work_1 = 'https://oleksiy1202.github.io/EXAMEN_BOOTSTRAP/';
        let work_2 = 'https://oleksiy1202.github.io/Examen_BOOTSTRAP_1/';
        let work_3 = 'https://oleksiy1202.github.io/Hosting_EMPOWER-YOUR-BUSINESS/#';
        let work_4 = 'https://oleksiy1202.github.io/Materialize_HTML/';
        let email = 'kuzminov.oleksiy@gmail.com';
        let phone = '0968668686';
        let linkedIn = 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%BA%D1%83%D0%B7%D1%8C%D0%BC%D1%96%D0%BD%D0%BE%D0%B2-327a91290/';
        let name_cv = 'Oleksiy Kuzminov';

        return (
            <div>
                <header>
                    <h1>{name_cv}</h1>
                    <p>Front End Developer</p>
                    <img src="./image/photo_2023-10-23_11-10-51.jpg" className="image_logo" alt="" />
                </header>
                <div className="container color_style">
                    <h2>Про мене</h2>
                    <p>Junior Front-end розробник. Я — молодий розробник, який готовий розпочати свій
                        шлях в індустрії розробки програмного забезпечення.</p>
                    <p>Маю міцні знання в галузі
                        Angular і фронтенд розробки. Готовий навчатися та рости як фахівець.</p>
                    <p>Що я пропоную:</p>
                    <p>Знання Angular та веб-розробки.
                        Мету розвивати як програміста та приносити внесок в команду та проекти.
                        Готовність працювати над власними проектами та завданнями під наглядом
                        досвідчених колег.</p>
                    <p>Я з великим ентузіазмом шукаю можливість покращити свої навички та набути
                        досвіду від професіоналів у галузі. Якщо Ваша компанія шукає пристрасного та
                        відданого розробника, готового навчатися та зростати, я готовий приєднатися до
                        Вашої команди.</p>
                </div>

                <h2>Навички</h2>
                <ul className="skills color_style">
                    <li>HTML5 <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                    <li>CSS3 <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                    <li>Bootstrap <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                    <li>Materialize <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                    <li>JavaScript <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                    <li>Angular <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                    <li>React <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                    <li>jQuery <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                    <li>GitHub <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                </ul>

                <h2>Мої роботи</h2>
                <p><a target="_blank" href={work_1}>Dashboard</a></p>
                <p><a target="_blank" href={work_2}>Tour-qiude</a></p>
                <p><a target="_blank" href={work_3}>EMPOWER YOUR BUSINESS</a></p>
                <p><a target="_blank" href={work_4}>Starter Template</a></p>

                <h2>Навчання</h2>
                <p><a target="_blank" href="https://lviv.itstep.org/">IT Step Academy lviv</a> 2022-2023р.</p>
                <div className="footer">
                    <p><a href={`mailto:${email}`}>{email}</a> | Телефон: <a href={`tel:+380${phone}`}>{phone}</a> | LinkedIn: <a target="_blank" href={linkedIn}>{name_cv}</a></p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);

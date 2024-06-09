class Hello extends React.Component {
    render() {
        let work_1 = 'https://oleksiy1202.github.io/EXAMEN_BOOTSTRAP/'
        let work_2 = 'https://oleksiy1202.github.io/Examen_BOOTSTRAP_1/'
        let work_3 = 'https://oleksiy1202.github.io/Hosting_EMPOWER-YOUR-BUSINESS/#'
        let work_4 = 'https://oleksiy1202.github.io/Materialize_HTML/'
        let work_5 = 'https://oleksiy1202.github.io/Facade-of-Lviv/'
        let work_6 = 'http://kayaksport.com.ua/#/'
        let work_7 = 'https://oleksiy1202.github.io/Books/'
        let work_8 = 'https://oleksiy1202.github.io/Chat/'
        let email = 'kuzminov.oleksiy@gmail.com'
        let phone = '0968668686'
        let linkedIn = 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%BA%D1%83%D0%B7%D1%8C%D0%BC%D1%96%D0%BD%D0%BE%D0%B2-327a91290/'
        let name_cv = 'Oleksiy Kuzminov'

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
                    <p>Люблю пізнавати нові галузі інформаційних технологій</p>
                    <p>Я з великим ентузіазмом шукаю можливість покращити свої навички та набути
                        досвіду від професіоналів у галузі. Якщо Ваша компанія шукає
                        відданого розробника який готового навчатися та зростати, я готовий приєднатися до
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
                    <li>API <span className="rating">
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
                        <span className="star">&#9733;</span>
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
                    <li>MySQL <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                    <li>PHP <span className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                        <span className="star_grey">&#9733;</span>
                    </span></li>
                </ul>
                <section class="skills-container">
                    <h2>Мої роботи</h2>
                    <h3>Всі роботи повністю адаптивні під будь-який пристрій</h3>
                    <ul>
                        <li>
                            <p>В цьому проєкті я використав jQuery<a target="_blank" href={work_7}> Books</a></p>
                        </li>
                        <li>
                            <p>Проєкт Який я розробив на основі SPA додатку ANGULAR.io <a target="_blank" href={work_6}> kayaksport.com.ua</a></p>
                        </li>
                        <li>
                            <p>Чат з використанням рандомного користувача та кольору для нього <a target="_blank" href={work_8}> Chat</a></p>
                        </li>
                        <li>
                            <p>Цей проєкт був розроблений на платформі React.js з використанням JSON: <a target="_blank" href={work_5}> Facade-of-Lviv</a></p>
                        </li>
                        <li>
                            <p>Використано HTML/CSS з гіперпосиланнями: <a target="_blank" href={work_1}> Dashboard</a></p>
                        </li>
                        <li>
                            <p>Працював з Bootstrap та здійснив адаптацію під телефон: <a target="_blank" href={work_2}> Tour-guide</a></p>
                        </li>
                        <li>
                            <p>Проект розміщено на популярному хостингу в Україні: <a target="_blank" href={work_3}> EMPOWER YOUR BUSINESS</a></p>
                        </li>
                        <li>
                            <p>Використовував бібліотеку Materialize у цьому проекті: <a target="_blank" href={work_4}> Starter Template</a></p>
                        </li>
                    </ul>
                </section>

                <h2>Навчання</h2>
                <p><a target="_blank" href="https://lviv.itstep.org/">IT Step Academy lviv</a> 2022-2023р.</p>
                <footer>
                    <div className="footer">
                        <p><a href={`mailto:${email}`}>{email}</a> | <a href={`tel:+380${phone}`}>Телефон: +380{phone}</a> | <a target="_blank" href={linkedIn}>LinkedIn: {name_cv}</a></p>
                    </div>
                </footer>
            </div>
        );
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);

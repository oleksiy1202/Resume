class Hello extends React.Component {
    render() {
        let work_1 = 'https://oleksiy1202.github.io/EXAMEN_BOOTSTRAP/'
        let work_2 = 'https://oleksiy1202.github.io/Examen_BOOTSTRAP_1/'
        let work_3 = 'https://oleksiy1202.github.io/Hosting_EMPOWER-YOUR-BUSINESS/#'
        let work_4 = 'https://oleksiy1202.github.io/Materialize_HTML/'
        let email = 'kuzminov.oleksiy@gmail.com'
        let phone = '0968668686'
        let linkedIn = 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%BA%D1%83%D0%B7%D1%8C%D0%BC%D1%96%D0%BD%D0%BE%D0%B2-327a91290/'
        let name_cv = 'Oleksiy Kuzminov'
        return (
            <div>
                <header>
                    <h1>{name_cv}</h1>
                    <p>Front End Developer</p>
                </header>

                <div className="container">
                    <h2>Про мене</h2>
                    <p>Junior Front-end розробник Я — молодий розробник, який готовий розпочати свій
                        шлях в індустрії розробки програмного забезпечення. Маю міцні знання в галузі
                        Angular і фронтенд розробки. Готовий навчатися та рости як фахівець.
                        Що я пропоную:
                        Знання Angular та веб-розробки.
                        Мету розвивати як програміста та приносити внесок в команду та проекти.
                        Готовність працювати над власними проектами та завданнями під наглядом
                        досвідчених колег.
                        Я з великим ентузіазмом шукаю можливість покращити свої навички та набути
                        досвіду від професіоналів у галузі. Якщо Ваша компанія шукає пристрасного та
                        відданого розробника, готового навчатися та зростати, я готовий приєднатися до
                        Вашої команди.
                    </p>
                    <h2>Навички</h2>
                    <ul className="skills">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Bootstrap <a target="#" href={work_1}>BOOTSTRAP</a>, <a target="#" href={work_2}>BOOTSTRAP_2</a>
                        </li>
                        <li>Materialize <a target="#" href={work_3}>Materialize</a>, <a target="#" href={work_4}>Materialize_2</a></li>
                        <li>JavaScript</li>
                        <li>Angular</li>
                        <li>jQuery</li>
                    </ul>
                    <h2>Навчання</h2>
                    <p><strong>IT Step Academy lviv 2022-2023</strong><br />
                    </p>
                </div>

                <div className="footer">
                    <p><a href="mailto:">{email}</a> | Телефон: <a href="tel:+380">{phone}</a> | LinkedIn: <a target="#" href={linkedIn}>{name_cv}</a></p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);

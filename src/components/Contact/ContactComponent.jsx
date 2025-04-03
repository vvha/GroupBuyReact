import React from 'react';

const ContactComponent = () => {
    return (
        <div>
            <section>
                <h2>Остались вопросы?</h2>
                <form>
                    <label htmlFor="name">Ваше имя:</label>
                    <input type="text" id="name" required/>

                    <label htmlFor="phone">Ваш номер телефона:</label>
                    <input type="text" id="phone" required/>

                    <button type="submit">Отправить</button>
                </form>
            </section>
        </div>
    );
};

export default ContactComponent;
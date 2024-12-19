import React from 'react';
import $ from 'jquery';
import 'reset-css';
import './App.css'
import './fonts/stylesheet.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function link(url: string) {
    return window.location.href = url;
}
function a1() {
    $('.modal_menu').toggleClass('active')
    $('html').toggleClass('no-scroll')
}
function a2() {
    $('.modal_obrat_svaz').toggleClass('active')
}
function a4() {
    $('.zakaz_zvon').toggleClass('active')
}
const App = () => {
    return (
        <div className="main">
            <header>
                <div className="nenu_and_logo2">
                    <div className='menu123123' onClick={a1}><img src="./assets/burger.png" /></div>
                    <div><img src="./assets/Group (1).png" /></div>

                </div>
                <div className="navss">
                    <img onClick={a4} className='m_hide' src="./assets/call.png" alt="" />
                    <img onClick={a2} className='m_hide' src="./assets/chat copy 2.png" alt="" />
                    <img className='m_hide' src="./assets/profile copy.png" alt="" />
                    <img className='m_hide' src="./assets/divider.png" alt="" />
                    <img src="./assets/repair copy.png" alt="" />
                    <img src="./assets/checkstatus.png" alt="" />
                </div>
            </header>
            <div className="modal_menu">
                <div className='kjasdjsad'>
                    <div className="nenu_and_logo2">
                        <div className='menu123123' onClick={a1}><img src="./assets/burger copy.png" /></div>
                        <div><img src="./assets/Group (1).png" /></div>

                    </div>
                    <div className="navss askjdsajkhd">
                        <img src="./assets/repair copy.png" alt="" />
                        <img src="./assets/checkstatus.png" alt="" />
                    </div>
                </div>
                <div className="asdjksadqq">
                    <a href="" className="link_uslugi_modal">Ремонт техники</a>
                    <div className="kakasadsadsnd">
                        <img alt="" src="./assets/highlight.png" />
                        <a href="" className="link_uslugi_modal2">Услуги и сервисы</a>
                    </div>
                    <a href="" className="link_uslugi_modal">Корпоративным клиентам</a>
                    <a href="" className="link_uslugi_modal">Продавцам техники</a>
                    <a href="" className="link_uslugi_modal">Партнерам</a>
                    <a href="" className="link_uslugi_modal">Производителям</a>
                    <a href="" className="link_uslugi_modal">Наши сервисные центры</a>
                    <a href="" className="link_uslugi_modal">Контакты</a>
                </div>
                <div className="adaqjmsdfk">
                    <div className="contacts">
                        <div className="contacts_icons">
                            <img onClick={a4} src="./assets/chat copy.png" />
                            <img onClick={a2} src="./assets/chat.png" />
                            <img src="./assets/profile.png" />
                        </div>
                        <div className="email">
                            <span>mail@cps.com</span>
                        </div>
                        <div className="number">
                            <span>8 800 890 8900</span>
                        </div>
                        <div className="lang">
                            <a href="">RU</a>
                            <a href="">EN</a>
                            <a href="">CH</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal_obrat_svaz">
                <div className='menu123123' onClick={a2}><img src="./assets/burger copy.png" /></div>
                <div className="asdjkasjdksajkd">
                    <div className="lkjwqirwerwer">
                        <img alt="" src="./assets/highlight.png" />
                        <a href="" >Обратная связь</a>
                    </div>
                    <div className="inputs">
                        <input placeholder='Имя' type="text" className='input_modal' />
                        <input placeholder='Телефон' type="text" className='input_modal' />
                        <input placeholder='Электронная почта' type="text" className='input_modal' />
                        <textarea className='input_modal' placeholder='Сообщение' name="" id=""></textarea>
                    </div>
                    <div className="accept">
                        <span className='accept_span'>Нажимая “отправить”, вы даете согласие на <p className="sadasdas11111">обработку персональных данных</p> и соглашаетесь с нашей <p className="sadasdas11111">политикой конфиденциальности</p></span>
                    </div>
                    <div className="pqwieierhgwer">
                        <button className="knopka">ОТПРАВИТЬ<img src="./assets/goside.png" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="zakaz_zvon">
                <div className='menu123123' onClick={a4}><img src="./assets/burger copy.png" /></div>
                <div className="asdjkasjdksajkd">
                    <div className="lkjwqirwerwer">
                        <img alt="" src="./assets/highlight.png" />
                        <a href="" >Заказать звонок</a>
                    </div>
                    <div className="inputs">
                        <input placeholder='Телефон' type="text" className='input_modal' />
                    </div>
                    <div className="accept">
                        <span className='accept_span'>Нажимая “отправить”, вы даете согласие на <p className="sadasdas11111">обработку персональных данных</p> и соглашаетесь с нашей <p className="sadasdas11111">политикой конфиденциальности</p></span>
                    </div>
                    <div className="pqwieierhgwer">
                        <button className="knopka">ОТПРАВИТЬ<img src="./assets/goside.png" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="jksfjksdf">
                <img src="./assets/highlight.png" alt="" />
                <h2>Услуги и сервисы</h2>
            </div>
            <div className="left_block">
                <div className="logo_and_search">
                    <img className='logo' src="./assets/Group (1).png" />
                    <img className='search' src="./assets/search.svg" />
                </div>
                <div className="uslugi">
                    <a href="" className="link_uslugi">Ремонт техники</a>
                    <a href="" className="link_uslugi">Услуги и сервисы</a>
                    <a href="" className="link_uslugi">Корпоративным клиентам</a>
                    <a href="" className="link_uslugi">Продавцам техники</a>
                    <a href="" className="link_uslugi">Партнерам</a>
                    <a href="" className="link_uslugi">Производителям</a>
                    <a href="" className="link_uslugi">Наши сервисные центры</a>
                    <a href="" className="link_uslugi">Контакты</a>
                </div>
                <div className="contacts">
                    <div className="contacts_icons">
                        <img onClick={a4} src="./assets/chat copy.png" />
                        <img onClick={a2} src="./assets/chat.png" />
                        <img src="./assets/profile.png" />
                    </div>
                    <div className="email">
                        <span>mail@cps.com</span>
                    </div>
                    <div className="number">
                        <span>8 800 890 8900</span>
                    </div>
                    <div className="lang">
                        <a href="">RU</a>
                        <a href="">EN</a>
                        <a href="">CH</a>
                    </div>
                </div>
            </div>
            <div className="gl">
                <div className="sd_header">
                    <div className="sdnkfsdjkfs">
                        <img alt="" src="./assets/highlight.png" />
                        <h2>Услуги и сервисы</h2>
                    </div>
                    <div className="rem_and_status">
                        <div className="rem">
                            <span>Оставить заявку</span>
                            <img src="./assets/repair.png" />
                        </div>
                        <div className="status">
                            <span>Статус ремонта</span>
                            <img src="./assets/checkstatus.png" />
                        </div>
                    </div>
                </div>
                <div className="s_r">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.3,
                            },
                            783: {
                                slidesPerView: 2,
                            },
                            1000: {
                                slidesPerView: 2,
                            },
                            1100: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1300: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <a className="swiper_link first">
                                Ремонтируемые бренды
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Дополнительные услуги
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Цены на услуги
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Адреса сервисных центров
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Специальные цены
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="swiper_link">
                                Отзывы
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="asd">
                    <div className="text_sajd">
                        <span>
                            Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                            <br />   <br />
                            Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                        </span>
                        <div className="next">
                            <img src="./assets/expand.png" />
                            <span>Читать далее</span>
                        </div>
                    </div>
                    <img className='sdfaa' src="./assets/_MG_3223.png" alt="" />
                </div>
                <div className="rem_raz">
                    <h3>РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ</h3>
                    <div className="rem_raz_brand">
                        <div className="block1">
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap.png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (1).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (2).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (3).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                        </div>
                        <div className="block2">
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (4).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (5).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap (6).png" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                            <div className="brand_block">
                                <img className='brand_logo_2' src="./assets/Bitmap.svg" alt="" />
                                <img className='go_brand' src="./assets/go.svg" />
                            </div>
                        </div>

                    </div>
                    <div className="rem_raz_brand_swiper">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={4}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.5,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1150: {
                                    slidesPerView: 3,
                                },
                                1398: {
                                    slidesPerView: 4,
                                },
                            }}
                            pagination={{
                                clickable: true,
                            }}
                        >
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap.png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (1).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (2).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (3).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (4).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (5).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap (6).png" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand_block">
                                    <img className='brand_logo_2' src="./assets/Bitmap.svg" alt="" />
                                    <img className='go_brand' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="vidi_tex">
                    <h3>РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ</h3>
                    <div className="rem_sada">
                        <div className="jksdfk">
                            <span>Ремонт ноутбуков</span>
                            <img className='jksdfk_a' src="./assets/go.svg" />
                        </div>
                        <div className="jksdfk">
                            <span>Ремонт планшетов</span>
                            <img className='jksdfk_a' src="./assets/go.svg" />
                        </div>
                        <div className="jksdfk">
                            <span>Ремонт ПК</span>
                            <img className='jksdfk_a' src="./assets/go.svg" />
                        </div>
                        <div className="jksdfk">
                            <span>Ремонт мониторов</span>
                            <img className='jksdfk_a' src="./assets/go.svg" />
                        </div>
                    </div>
                    <div className="rem_sada_swiper">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1.2}
                        >
                            <SwiperSlide>
                                <div className="jksdfk">
                                    <span>Ремонт ноутбуков</span>
                                    <img className='jksdfk_a' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="jksdfk">
                                    <span>Ремонт планшетов</span>
                                    <img className='jksdfk_a' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="jksdfk">
                                    <span>Ремонт ПК</span>
                                    <img className='jksdfk_a' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="jksdfk">
                                    <span>Ремонт мониторов</span>
                                    <img className='jksdfk_a' src="./assets/go.svg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="next">
                        <img src="./assets/expand.png" />
                        <span>Показать все</span>
                    </div>
                </div>
                <div className="usl_swiper">
                    <h3 className='asdasdsadsad'>ЦЕНЫ НА УСЛУГИ</h3>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            475: {
                                slidesPerView: 1.5,
                            },
                            767: {
                                slidesPerView: 2,
                            },
                            1070: {
                                slidesPerView: 2.3,
                            },
                            1150: {
                                slidesPerView: 3,
                            },
                            1398: {
                                slidesPerView: 4,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        <SwiperSlide>
                            <div className="ajksdhjsa">
                                <span className='zagol'>Ремонтные услуги</span>
                                <span className="zagol_chern">Диагностика</span>
                                <span className="pricce">Цена</span>
                                <span className="besbl">Бесплатно</span>
                                <div className="sroki">
                                    <div className='snkdfsd'>
                                        <span className="srdsd">
                                            Срок
                                        </span>
                                        <span className="timme">
                                            30 мин
                                        </span>
                                    </div>
                                    <button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="ajksdhjsa">
                                <span className='zagol'>Ремонтные услуги</span>
                                <span className="zagol_chern">Замена дисплея</span>
                                <span className="pricce">Цена</span>
                                <span className="besbl">1000 ₽</span>
                                <div className="sroki">
                                    <div className='snkdfsd'>
                                        <span className="srdsd">
                                            Срок
                                        </span>
                                        <span className="timme">
                                            30-120 мин
                                        </span>
                                    </div>
                                    <button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="ajksdhjsa">
                                <span className='zagol'>Ремонтные услуги</span>
                                <span className="zagol_chern">Замена <br /> полифонического динамика</span>
                                <span className="pricce">Цена</span>
                                <span className="besbl">1000 ₽</span>
                                <div className="sroki">
                                    <div className='snkdfsd'>
                                        <span className="srdsd">
                                            Срок
                                        </span>
                                        <span className="timme">
                                            30-120 мин
                                        </span>
                                    </div>
                                    <button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="ajksdhjsa">
                                <span className='zagol'>Ремонтные услуги</span>
                                <span className="zagol_chern">Тестирование<br /> с выдачей технического заключения</span>
                                <span className="pricce">Цена</span>
                                <span className="besbl">1000 ₽</span>
                                <div className="sroki">
                                    <div className='snkdfsd'>
                                        <span className="srdsd">
                                            Срок
                                        </span>
                                        <span className="timme">
                                            30-120 мин
                                        </span>
                                    </div>
                                    <button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="ajksdhjsa">
                                <span className='zagol'>Ремонтные услуги</span>
                                <span className="zagol_chern">Замена<br /> программного обеспечения</span>
                                <span className="pricce">Цена</span>
                                <span className="besbl">1000 ₽</span>
                                <div className="sroki">
                                    <div className='snkdfsd'>
                                        <span className="srdsd">
                                            Срок
                                        </span>
                                        <span className="timme">
                                            30-120 мин
                                        </span>
                                    </div>
                                    <button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="usl">
                    <h3>ЦЕНЫ НА УСЛУГИ</h3>
                    <table className="services_table">
                        <thead>
                            <tr>
                                <th>Ремонтные услуги</th>
                                <th>Цена</th>
                                <th>Срок</th>
                                <th>Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Диагностика</td>
                                <td>Бесплатно</td>
                                <td>30 мин</td>
                                <td><button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button></td>
                            </tr>
                            <tr>
                                <td>Замена дисплея</td>
                                <td>1000 ₽</td>
                                <td>30-120 мин</td>
                                <td><button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button></td>
                            </tr>
                            <tr>
                                <td>Замена полифонического динамика</td>
                                <td>1000 ₽</td>
                                <td>30-120 мин</td>
                                <td><button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button></td>
                            </tr>
                            <tr>
                                <td>Тестирование с выдачей технического заключения</td>
                                <td>1000 ₽</td>
                                <td>30-120 мин</td>
                                <td><button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button></td>
                            </tr>
                            <tr>
                                <td>Замена программного обеспечения</td>
                                <td>1000 ₽</td>
                                <td>30-120 мин</td>
                                <td><button className="knopka">Заказать<img src="./assets/goside.png" alt="" /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="commer">
                    <span>
                        Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.
                    </span>
                </div>
                <div className="pred_l">
                    <span>
                        Получить коммерческое предложение
                    </span>
                    <img src="./assets/more.png" alt="" />
                </div>
                <div className="about">
                    <span>
                        © 2019 CPS <br />
                        Разработано командой Apesong
                    </span>
                    <span>Политика конфиденциальности</span>
                    <span>Информация, размещенная на данной странице, не является публичной офертой</span>
                </div>
            </div>
        </div>
    );
};
export default App;

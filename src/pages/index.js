import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DeliverManagerIcon from "@site/static/img/delivery-manager.svg"
import AboutDeliverManagerIcon from "@site/static/img/about-delivery-manager-1.svg"
import AboutDeliverManager2Icon from "@site/static/img/about-delivery-manager-1-2.svg"
import POSTER1_URL from "@site/static/img/poster1.jpg"
import POSTER1_2_URL from "@site/static/img/poster1-2.jpg"
import ONBOARDING_POSTER_URL from "@site/static/img/roadmap.png"
import READING_POSTER_URL from "@site/static/img/useful.png"
import AboutProcessArrow from "@site/static/img/about-process-arrow.svg"
import AboutProcessArrow2 from "@site/static/img/about-process-arrow-2.svg"
// import BlinkingSwitchboard from "../components/BlinkingSwitchboard";

import s from './index.module.css';
import BlinkingSwitchboard from '../components/BlinkingSwitchboard'
import BlogHere from '../components/BlogHere';
import Faqs from '../components/Faqs'

export function useMediaQuery(query) {
    const getMatches = (query) => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches
        }
        return false
    }

    const [matches, setMatches] = useState(getMatches(query))

    function handleChange() {
        setMatches(getMatches(query))
    }

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        handleChange()

        matchMedia.addEventListener('change', handleChange)

        return () => {
            matchMedia.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', s.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">База знаний профессии {siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={s.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/profession/about">
                        Хочу изучить!
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    const isTablet = useMediaQuery("screen and (min-width: 599px)")
    return (
        <Layout
            title="Delivery Manager"
            description="База знаний профессии Деливери менеджер">
            <main>
                <section className={s.beginSectionWrapper}>
                    <div className={s.wrapper}>
                        <div className={s.beginSection}>
                            <picture className={s.beginSection__poster}>
                                <source srcSet={POSTER1_URL} media="(min-width: 760px)" />
                                <img className={s.beginSection__posterImage} src={POSTER1_URL} alt="" />
                            </picture>

                            <div className={s.beginSection__description}>
                                <DeliverManagerIcon style={{ color: "white" }}></DeliverManagerIcon>

                                <div className={s.beginSection__descriptionContent}>
                                    <p>Вся информация о профессии в одном месте:</p>
                                    <ul>
                                        <li>карта развития</li>
                                        <li>инструменты</li>
                                        <li>статьи и события</li>
                                        <li>полезные материалы</li>
                                    </ul>
                                </div>

                                <Link className={s.beginSection__descriptionActionButton} to="/docs/profession/about">Узнать
                                    больше</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={s.aboutDeliveryManagers__wrapper}>
                    <div className={s.wrapper}>
                        <div className={s.aboutDeliveryManagers}>
                            <h2 className={s.aboutDeliveryManagers__title}>О профессии:<br /> что делает Деливери менеджер и как им стать</h2>
                            <div className={s.aboutDeliveryManagers__article}>
                                <p>Деливери менеджер – молодая профессия, которая сочетает в себе подходы и практики проектного и стратегического управления, работу с изменениями, риск-менеджмент, консалтинг, коучинг и менторинг.</p>
                                <p>Используемые инструменты и практики сильно зависят от задачи, которую требуется решить и окружающего контекста, но предназначение профессии – улучшение производственных процессов доставки ценности, работы команд, бизнеса компании.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*here*/}

                <div className={s.aboutDeliveryManagersMarqueeWrapper}>
                    <div style={{
                        transformOrigin: "center",
                        transform: "rotate(2deg) scale(1.1)",
                        position: "relative",
                        zIndex: 1
                    }}>
                        <div
                          className={clsx(s.aboutDeliveryManagersMarquee, s.aboutDeliveryManagersMarqueeFirst)}>
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManagerIcon className={s.aboutDeliveryManagersMarqueeItem} />
                        </div>
                    </div>

                    <div style={{
                        transformOrigin: "center",
                        transform: "rotate(-2deg) scale(1.1)",
                        marginTop: "-2.5rem"
                    }}>
                        <div
                          className={clsx(s.aboutDeliveryManagersMarquee, s.aboutDeliveryManagersMarqueeSecond, s.aboutDeliveryManagersMarqueeReverse)}>
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                            <AboutDeliverManager2Icon className={s.aboutDeliveryManagersMarqueeItem} />
                        </div>
                    </div>
                </div>

                <section>
                    <div className={s.wrapper}>
                        <div className={s.aboutWorkProcess}>
                            <div className={clsx(s.aboutWorkProcessCard, s.complexTask)}>
                                <h3 className={s.aboutWorkProcessCard__title}>Решает сложные задачи</h3>

                                <p className={s.aboutWorkProcessCard__description}>Помогает компаниям и их продуктам ускорять поставку ценности на рынок, выстраивать коммуникации между командами, структурными подразделениями и клиентами.</p>
                            </div>
                            <div className={s.aboutWorkProcessCard}
                                 style={{ background: "#FFD31B", borderColor: "#FFD31B" }}>
                                <h3 className={s.aboutWorkProcessCard__title}>Анализирует контекст</h3>

                                <p className={s.aboutWorkProcessCard__description}>Используя данные и личный опыт, ищет точки оптимизации процессов в командах и компании.</p>
                            </div>
                            <div className={s.aboutWorkProcessCard}>
                                <h3 className={s.aboutWorkProcessCard__title}>Запускает продукты</h3>

                                <p className={s.aboutWorkProcessCard__description}>Ускоряет производство и поставку продуктов на рынок в условиях, когда ИТ-системы усложняются.

                                </p>
                            </div>
                            <div className={s.aboutWorkProcessCard}>
                                <h3 className={s.aboutWorkProcessCard__title}>Общается</h3>

                                <p className={s.aboutWorkProcessCard__description}>Работает с ожиданиями заказчиков, повышает прогнозируемость поставки и прозрачность в работе процессов.

                                </p>
                            </div>
                            <div className={s.aboutWorkProcessCard}
                                 style={{ background: "#512DE2", borderColor: "#512DE2", color: "white" }}>
                                <h3 className={s.aboutWorkProcessCard__title}>Идёт своим путём</h3>

                                <p className={s.aboutWorkProcessCard__description}>Работает с современными методологиями и фреймворками, но не навязывает их. Сам принимает решение как решить задачу.</p>
                            </div>

                            <div className={clsx(s.aboutWorkProcessCardSpecificWrapper, s.professionDescription)}>
                                <Link to="/docs/profession/about" className={s.aboutWorkProcessCardSpecificLink}>
                                    <header className={s.aboutWorkProcessCardSpecific}>
                                        <BlinkingSwitchboard />
                                    </header>
                                    <div className={s.aboutWorkProcessCardSpecificContent}>
                                        <span
                                          className={s.aboutWorkProcessCardSpecific__title}>Описание профессии</span>

                                        {isTablet ?
                                          <AboutProcessArrow2 className={s.aboutWorkProcessCardSpecific__icon} /> :
                                          <AboutProcessArrow className={s.aboutWorkProcessCardSpecific__icon} />}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={s.aboutWorkProcessMoreSection}>
                    <div className={s.wrapper}>
                        <div className={s.aboutWorkProcessMore}>
                            <div style={{ gridColumn: "-1/1" }}>01</div>

                            <div className={s.aboutWorkProcessMore__content}>
                                <p className={s.aboutWorkProcessMore__contentSubTitle}>Новичкам</p>
                                <h2 className={s.aboutWorkProcessMore__contentTitle}>Онбординг и развитие в профессии</h2>
                                <p>Какими навыками и инструментарием должен владеть Деливери менеджер?</p>
                                <p>Собрали «Карту развития», где можно подобрать решение под свои текущие задачи и изучить области, на которые стоит обратить внимание в будущем, заложить их изучение в свой индивидуальный план развития.</p>
                                <Link className={s.aboutWorkProcessMore__contentButton} to="/docs/roadmap">Карта развития</Link>
                            </div>

                            <picture>
                                <img src={ONBOARDING_POSTER_URL} alt="" className={s.aboutWorkProcessMore__img} />
                            </picture>
                        </div>
                    </div>
                </section>

                <section className={s.aboutWorkProcessMoreSection}>
                    <div className={s.wrapper}>
                        <div className={s.aboutWorkProcessMore}>
                            <div style={{ gridColumn: "-1/1" }}>02</div>

                            <div className={s.aboutWorkProcessMore__content}>
                                <p className={s.aboutWorkProcessMore__contentSubTitle}>Продвинутым</p>
                                <h2 className={s.aboutWorkProcessMore__contentTitle}>Почитать, посмотреть, послушать</h2>
                                <p>Видео, книги, статьи и подкасты – все эти материалы помогут вам лучше понять что требуется от Деливери менеджера, как другие коллеги подходят к решению своих задач, где черпать вдохновение и энергию для проведения новых изменений.</p>
                                <Link className={s.aboutWorkProcessMore__contentButton} to="/docs/profession/good-to-know ">Полезные материалы</Link>
                            </div>

                            <picture>
                                <img src={READING_POSTER_URL} alt="" className={s.aboutWorkProcessMore__img} />
                            </picture>
                        </div>
                    </div>
                </section>
                <BlogHere />
                {/** пока скрываем */}
                {/*<Faqs />*/}
            </main>
        </Layout>
    );
}

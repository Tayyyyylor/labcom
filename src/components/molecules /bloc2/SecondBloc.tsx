import Title from '@/components/atoms/title/Title'
import Image from 'next/image'
import React from 'react'
import styles from './SecondBloc.module.scss'
import { useTranslations } from 'next-intl'

export const SecondBloc = () => {
    const t = useTranslations()
    return (
        <article className={styles.secondBloc}>
            <Title title={t('Homepage.title2')} />
            <section className={styles.container}>
                <div className={styles.subContainer1}>
                    <Image
                        src="/03.png"
                        width={400}
                        height={300}
                        alt="art"
                        className={styles.image}
                    />
                    <div className={styles.textContainer1}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus voluptate veritatis repudiandae
                            suscipit, fugiat aut exercitationem blanditiis iure,
                            assumenda eius minima rerum repellat dolorum? Cumque
                            dolorem adipisci soluta consectetur numquam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam aut error, culpa, ducimus alias nulla
                            delectus praesentium dolorem expedita debitis
                            temporibus! Ad labore saepe ipsum sed quidem
                            officiis quod itaque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque rem facere vitae perferendis eius sunt
                            quae fugit voluptatibus quam, consectetur minima eos
                            est minus nostrum ex dolore ipsum cupiditate
                            sapiente!
                        </p>
                    </div>
                </div>
                <div className={styles.subContainer2}>
                    <div className={styles.textContainer2}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Placeat voluptate vero quisquam id repudiandae
                            esse. Sequi, quas in, perferendis fuga officia ut
                            ipsam aliquid quae itaque rerum corrupti, ipsum
                            ipsa.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nihil, voluptatum velit eius dolore porro ex
                            beatae voluptatibus totam, eum qui sit unde vitae ea
                            dolorum deserunt ipsum illo tenetur quam!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem labore impedit commodi atque animi
                            aliquid et ad, fuga accusantium delectus nisi
                            assumenda id perspiciatis minima exercitationem
                            error veritatis nesciunt reprehenderit.
                        </p>
                    </div>
                    <Image
                        src="/04.png"
                        width={400}
                        height={300}
                        alt="art"
                        className={styles.image}
                    />
                </div>
                <div className={styles.subContainer3}>
                    <Image
                        src="/05.png"
                        width={400}
                        height={300}
                        alt="art"
                        className={styles.image}
                    />
                    <div className={styles.textContainer3}>
                        <div className={styles.blueLine} />
                        <div className={styles.gridContainer}>
                            <div>
                                <h5>1</h5>
                                <p>toto</p>
                            </div>
                            <div>
                                <h5>2</h5>
                                <p>toto</p>
                            </div>
                            <div>
                                <h5>3</h5>
                                <p>toto</p>
                            </div>
                            <div>
                                <h5>4</h5>
                                <p>toto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

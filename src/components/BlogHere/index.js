import BlogThereIcon from "@site/static/img/blog-there.svg"
import StartIcon from "@site/static/img/star.svg"
import ArrowIcon from "@site/static/img/blog-here-arrow.svg"
import Tooltip from "@site/static/img/Tooltip.jpg"
import Rectangle675 from "@site/static/img/Rectangle675.jpg"
import Rectangle677 from "@site/static/img/Rectangle677.jpg"
import Rating from "@site/static/img/Rating.jpg"
import Link from '@docusaurus/Link';
import React from 'react'
import s from './styles.module.css'

export default function BlogHere() {
  return (
    <section>
      <div className={s.picsContainer}>
        <div className={s.pics__container}>
        <div className={s.pics}>
          <picture>
            <img src={Rating} alt="" />
            {/*<img src={Rating} alt="" />*/}
          </picture>
          <picture>
            <img src={Tooltip} alt="" />
          </picture>
          <picture>
            <img src={Rectangle675} alt="" />
          </picture>
          <picture>
            <img src={Rectangle677} alt="" />
          </picture>
        </div>
        <div className={s.blogHere}>
          <div className={s.blogHere_container}>
            <div className={s.content}>
              <StartIcon className={s.content__starIcon} />
              <div>
                <p className={s.blogHere__article}>
                  Мы ведём свой блог, где публикуем что изменилось в профессии,
                  анонсируем конференции и просто делимся мыслями
                </p>
                <Link className={s.blogHere__link} to="/blog">
                  <BlogThereIcon className={s.content__icon} />
                  <ArrowIcon className={s.content__arrowIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
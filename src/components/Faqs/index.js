import React,  {useState} from 'react'
import PlusIcon from "@site/static/img/plus-icon.svg"
import s from './styles.module.css'

function Question() {
  const [isOpen, setIsOpen] = useState(false)
  const onClick = () => {
    setIsOpen((prev) => !prev)
  }

  return <div className={s.question}>
    <div>
    <p>Question text goes here</p>
      <p className={isOpen ? s.question__innerTextShow : s.question__innerTextHidden}>Answer text goes here</p>
    </div>
    {isOpen ?
      (<PlusIcon className={s.question__plusIcon} onClick={onClick} />) :
    (<PlusIcon className={s.question__plusIcon} onClick={onClick} />)
    }
  </div>

}


export default function Faqs() {

  const onQuestionClick = () => {

  }

  return (<div className={s.faqs}>
    <div className={s.layer}>
    <div className={s.faqs__content}>
      <p className={s.faqs__title}>Faqs</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
        tristique.</p>
      <div>
      </div>
    </div>
    <div className={s.questions}>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
    </div>
  </div>);
}
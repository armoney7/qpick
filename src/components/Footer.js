import React from 'react';
import { MdOutlineLanguage as LanguageIcon } from "react-icons/md";
import { SlSocialVkontakte as VkIcon } from "react-icons/sl";
import { RiWhatsappLine as WhatsappIcon, RiTelegramLine as TelegramIcon } from "react-icons/ri";



export default function Footer() {
  return (
    <footer>
        <span className='logo'>QPICK</span>
        <div className='links'>
            <a href='/#' className='link'>Избранное</a>
            <a href='/#' className='link'>Корзина</a>
            <a href='/#' className='link'>Контакты</a>
        </div>
        <div className='languages'>
            <div className='terms'>
                <a href='/#' className='link'> Условия сервиса</a>
            </div>
            <div className='language'>
                <LanguageIcon size={20} />
                <a href='/#' className='link link-rus'>Рус</a>
                <a href='/#' className='link'>Eng</a>
            </div>
        </div>
        <div className='socials'>
            <a className='icon' href="https://vk.com/neoflex_ru" target="_blank" rel="noreferrer">
            <VkIcon size={30} />
            </a>
            <a className='icon' href="https://t.me/neoflexcareers" target="_blank" rel="noreferrer">
            <TelegramIcon size={30} />
            </a>
            <a className='icon' href="tel:+1234567890">
            <WhatsappIcon size={30} />
            </a>
        </div>
    </footer>
  )
}

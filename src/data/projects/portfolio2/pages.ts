import { Page } from 'data/types';
import { components } from './components';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineFormatPainter } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';

const page_names = [
  { name: 'Home', icon: AiOutlineHome },
  { name: 'Articles', icon: FaBlogger },
  { name: 'Projects', icon: MdTimeline },
  { name: 'Open Source', icon: BsBook },
  { name: 'Theme', icon: AiOutlineFormatPainter }
];

export const pages_list = () => {
  let pages: Page[] = [];
  page_names.map((p) => {
    const id = p.name.toLowerCase().replace(/ /g, '-');
    pages.push({
      name: p.name,
      id: id,
      icon: p.icon,
      components: components.filter((c) => c.page_id === id)
    });
  });
  return pages;
};
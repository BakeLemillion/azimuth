// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/azimuth/${name}.svg`} sx={{ width: 1, height: 1 }} />;

export const navConfig = [
  {
    title: 'Панель управления',
    path: '/dashboard/app',
    icon: icon('ic_control'),
  },
  {
    title: 'Накладные',
    path: '/dashboard/user',
    icon: icon('ic_docs'),
  },
  {
    title: 'Импорт накладных',
    path: '/dashboard/products',
    icon: icon('ic_archive'),
  },
  {
    title: 'Мои отправления',
    path: '/dashboard/blog',
    icon: icon('ic_truck'),
  },
  {
    title: 'Адресная книга',
    path: '/login',
    icon: icon('ic_address'),
  },
];


export const navConfigAdmin = [
  {
    title: 'Все накладные',
    path: '/dashboard/app',
    icon: icon('ic_invoice'),
  },
  {
    title: 'Все гуппы накладных',
    path: '/dashboard/app',
    icon: icon('ic_doc'),
  },
]

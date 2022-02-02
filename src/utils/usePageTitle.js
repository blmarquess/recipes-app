import { useLocation } from 'react-router-dom';

export default () => {
  const pathname = useLocation().pathname.replace('/', '');
  const pageTitle = pathname[0].toUpperCase() + pathname.slice(1)
    .toLowerCase();
  return pageTitle;
};

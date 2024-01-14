import favicon from '../../../../../../favicon.svg';

export default function initFavicon() {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = favicon;
  document.head.append(link);
}

export const headerTemplate = ({ templates = [] }) => `
<header class="header">
  <h1 class="header__logo logo">Cinemaddict</h1>

  ${templates.join('')}
</header>
`;

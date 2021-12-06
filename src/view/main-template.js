export const mainTemplate = ({ templates = [] }) => `
<main class="main">
  ${templates.join('')}
</main>
`;

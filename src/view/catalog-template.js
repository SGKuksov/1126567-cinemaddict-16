export const catalogTemplate = ({ templates = [] }) => `
<section class="films">
  ${templates.join('')}
</section>
`;

export const footerTemplate = (templates = []) => `
<footer class="footer">
  <section class="footer__logo logo logo--smaller">Cinemaddict</section>

  <section class="footer__statistics">
    ${templates.join('')}
  </section>
</footer>
`;

module.exports = {
  hooks: {
    "page:before": function(page) {
      const mathjaxScript = `
        <script type="text/javascript" async
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
        </script>
      `;
      page.content = mathjaxScript + page.content;
      return page;
    }
  }
};
export default async function paginationLaunch(
  hits,
  requestFrom = 'popular',
  offset
) {
  function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
      return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      return range(1, maxLength - sideWidth - 1).concat(
        0,
        range(totalPages - sideWidth + 1, totalPages)
      );
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
      return range(1, sideWidth).concat(
        0,
        range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
      );
    }
    return range(1, sideWidth).concat(
      0,
      range(page - leftWidth, page + rightWidth),
      0,
      range(totalPages - sideWidth + 1, totalPages)
    );
  }

  $(function () {
    // !!! вказати шлях до контейнера з карточками
    // let numberOfItem = $('.card-container .card').length;
    let currentPage;

    let numberOfItem = hits;
    // console.log(numberOfItem);
    let limitPerPage = 9;
    let totalPages = Math.ceil(hits / limitPerPage);
    let paginationSize = 7;
    if (window.screen.width <= 767) {
      paginationSize = 5;
    }

    function showPage(whichPage) {
      if (whichPage < 1 || whichPage > totalPages) return false;
      currentPage = whichPage;
      if (currentPage === 1) {
        limitPerPage = 8;
      } else {
        limitPerPage = 9;
      }

      // !!! вказати шлях до контейнера з карточками
      $('.card-container .card')
        .hide()
        .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
        .show();
      $('.pagination li').slice(1, -1).remove();

      getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $('<li>')
          .addClass('page-item')
          .addClass(item ? 'current-page' : 'dots')
          .toggleClass('active', item === currentPage)
          .append(
            $('<a>')
              .addClass('page-link')
              .attr({ href: 'javascript:void(0)' })
              .text(item || '...')
          )
          .insertBefore('.next-page');
      });

      $('.previuos-page').toggleClass('disable', currentPage === 1);
      $('.next-page').toggleClass('disable', currentPage === totalPages);
      return true;
    }

    const imageUrlP = new URL('../images/prew.svg', import.meta.url);
    const svgImgP = $('<img>', { src: imageUrlP, class: 'page__svg--prev' });
    const imageUrlN = new URL('../images/next.svg', import.meta.url);
    const svgImgN = $('<img>', { src: imageUrlN, class: 'page__svg--next' });

    $('.pagination').append(
      $('<li>')
        .addClass('page-item')
        .addClass('previuos-page')
        .append(svgImgP)
        .append(
          $('<a>')
            .addClass('page-link')
            .attr({ href: 'javascript:void(0)' })
            .text('Prev')
        ),

      $('<li>')
        .addClass('page-item')
        .addClass('next-page')
        .append(
          $('<a>')
            .addClass('page-link')
            .attr({ href: 'javascript:void(0)' })
            .text('Next')
        )
        .append(svgImgN)
    );

    // !!! вказати контейнер з карточками
    $('.card-container').show();
    showPage(1);

    $(document).on(
      'click',
      '.pagination li.current-page:not(.active)',
      function () {
        showPage(+$(this).text());
        $('html, body').animate({ scrollTop: 0 }, 'slow');
      }
    );

    $('.next-page').on('click', function () {
      if (currentPage === totalPages) {
        // !!! налаштування offset , page number
        // pageNumber++;
        if (requestFrom !== 'popular') {
          offset++;
        }
        // console.log(offset);
      } else {
        showPage(currentPage + 1);
        $('html, body').animate({ scrollTop: 0 }, 'slow');
      }
    });
    $('.previuos-page').on('click', function () {
      showPage(currentPage - 1);
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  });
}

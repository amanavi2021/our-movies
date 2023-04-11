import markupTpl from '../templates/markupFilmMainPage.hbs';
import renderFilms from './renderFilms';

const NUMBER_PAGINATION = 5;
const NUMBER_PER_PAGE = 3;
const cardContainerEl = document.querySelector('.gallery');
const paginationEl = document.querySelector('.pagination__box');
const paginationContainerEl = document.querySelector('.pagination__container');



export function paginationLocalStorage(placeKey) {

    const savedFilms = localStorage.getItem(`${placeKey}`) || [];
    try {
        const parsedSavedFilms = JSON.parse(savedFilms);
        const filmsNumber = parsedSavedFilms.length;
    
    if (filmsNumber === 0) {
        return;
    }

        console.log('film number', filmsNumber);
        console.log('parcedFilms', parsedSavedFilms);
   // paginationContainerEl.classList.remove('visually-hidden');

    const total_pages = Math.ceil(filmsNumber / NUMBER_PER_PAGE);
    const films = filmsList(parsedSavedFilms, NUMBER_PER_PAGE, 1);
        
    console.log('films', films);
        
    appendFromLocalStorage(films);
  
    if (total_pages <= NUMBER_PAGINATION + 2 && total_pages >= 1) {
        
        paginationEl.innerHTML = '';
        document.querySelector('.pagination__btnLeft')?.remove();
        document.querySelector('.pagination__btnRight')?.remove();

        displayPaginationSmall(total_pages);
        document.querySelector('.js-page-1')?.classList.add('pagination__item--select');

        paginationEl.addEventListener('click', (e) => {
            if (!e.target.classList.contains('pagination__item')) {
                return;
            }

            const currentPage = Number(e.target.textContent);

            //document.querySelector('.pagination__item--select')?.classList.remove('pagination__item--select');
            //document.querySelector(`.js-page-${currentPage}`)?.classList.add('pagination__item--select');
            
            document.querySelector('.pagination__btnLeft')?.remove();
            document.querySelector('.pagination__btnRight')?.remove();
            paginationEl.innerHTML = '';

            onBigPaginationBtnClickrRenderFilms(currentPage, parsedSavedFilms);
            displayPaginationSmall(total_pages);
            document.querySelector(`.js-page-${currentPage}`)?.classList.add('pagination__item--select');
        });
        
        return;
    }
    
    paginationEl.innerHTML = '';
    document.querySelector('.pagination__btnLeft')?.remove();
    document.querySelector('.pagination__btnRight')?.remove();
        
    displayPaginationBig(total_pages);
    document.querySelector('.js-page-1')?.classList.add('pagination__item--select');

    const btnLeft = document.querySelector('.pagination__btnLeft');
    const btnRight = document.querySelector('.pagination__btnRight');

    btnLeft.setAttribute('disabled', true);

    paginationContainerEl.addEventListener('click', (e) => {
        if (!e.target.classList.contains('pagination__item') && !e.target.classList.contains('pagination__btnLeft') && !e.target.classList.contains('pagination__btnRight') ) {
            return;
        };
        
        if (e.target.classList.contains('pagination__item')) {
            const currentPage = Number(e.target.textContent);        
        
            onBigPaginationBtnClickrRenderFilms(currentPage, parsedSavedFilms);
            onBigPaginationBtnClickrRenderPagination(total_pages, currentPage); 

            if (currentPage === 1) {
                document.querySelector('.pagination__btnLeft').disabled = true;
            } else {
                document.querySelector('.pagination__btnLeft').disabled = false;
            }

            if (currentPage === total_pages) {
                document.querySelector('.pagination__btnRight').disabled = true;
            } else {
                document.querySelector('.pagination__btnRight').disabled = false;
            }
        }
     

            if (e.target.classList.contains('pagination__btnLeft')) {
                const activePage = document.querySelector('.pagination__item--select');
                const activePageNumber = Number(activePage.textContent);
                
                const nextPage = activePageNumber - 1;

                onBigPaginationBtnClickrRenderFilms(nextPage, parsedSavedFilms);
                onBigPaginationBtnClickrRenderPagination(total_pages, nextPage); 

                 if (Number(document.querySelector('.pagination__item--select').textContent) === 1) {
                    document.querySelector('.pagination__btnLeft').disabled = true;
                } else {
                    document.querySelector('.pagination__btnLeft').disabled = false;
                };
            }

            if (e.target.classList.contains('pagination__btnRight')) {
                const activePage = document.querySelector('.pagination__item--select');
                const activePageNumber = Number(activePage.textContent);
                
                const previousPage = activePageNumber + 1;

            onBigPaginationBtnClickrRenderFilms(previousPage, parsedSavedFilms);
            onBigPaginationBtnClickrRenderPagination(total_pages, previousPage); 
                
            if (Number(document.querySelector('.pagination__item--select').textContent) === total_pages) {
                document.querySelector('.pagination__btnRight').disabled = true;
            } else {
                document.querySelector('.pagination__btnRight').disabled = false;
            }
        }
    })
    
    } catch {
        console.log('nothing are parsed');
    }
}

function filmsList(arrFilms, numberPerPage, page) {
        cardContainerEl.innerHTML = '';
        page -= 1;

        const start = numberPerPage * page;
        const end = start + numberPerPage;
        const paginatedData = arrFilms.slice(start, end);

        return paginatedData;
    }


function onBigPaginationBtnClickrRenderFilms(currentPage, parsedSavedFilms) {
    cardContainerEl.innerHTML = '';
    
    const films = filmsList(parsedSavedFilms, NUMBER_PER_PAGE, currentPage);
        
    appendFromLocalStorage(films);
}

function onBigPaginationBtnClickrRenderPagination(total_pages, currentPage) {
    paginationEl.innerHTML = '';
    document.querySelector('.pagination__btnLeft')?.remove();
    document.querySelector('.pagination__btnRight')?.remove();


    const n = NUMBER_PAGINATION - (Math.ceil(NUMBER_PAGINATION / 3) - 2);
    const m = total_pages - (NUMBER_PAGINATION - 1);


    if (currentPage < n) {
        displayPaginationBig(total_pages);
    } else if (currentPage >= n && currentPage <= m) {
        displayPaginationBigMiddle(total_pages, currentPage);
    } else {
        displayPaginationBigFinish(total_pages);
    }

    document.querySelector(`.js-page-${currentPage}`).classList.add('pagination__item--select');
}

function displayPaginationBig(total_pages) {
    createPaginationArrowLeft(paginationContainerEl);

    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    for (let i = 0; i < NUMBER_PAGINATION; i += 1) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl);
    }

    createPaginationDots(ulEl);

    const finishPage = displayPaginationBtn(total_pages);
    ulEl.appendChild(finishPage);

    paginationEl.appendChild(ulEl);

    createPaginationArrowRight(paginationContainerEl);
}

function displayPaginationBigFinish(total_pages) {
    createPaginationArrowLeft(paginationContainerEl);

    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    const firstPage = displayPaginationBtn(1);
    ulEl.appendChild(firstPage);

    createPaginationDots(ulEl);

    for (let i = total_pages - (NUMBER_PAGINATION - 1); i <= total_pages; i += 1) {
        const liEl = displayPaginationBtn(i);
        ulEl.appendChild(liEl);
    }

    paginationEl.appendChild(ulEl);

    createPaginationArrowRight(paginationContainerEl);
}

function displayPaginationBigMiddle(total_pages, currentPage) {
    createPaginationArrowLeft(paginationContainerEl);

    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    const firstPage = displayPaginationBtn(1);
    ulEl.appendChild(firstPage);

    createPaginationDots(ulEl);

    for (let i = currentPage - (Math.ceil(NUMBER_PAGINATION / 2) - 1); i <= currentPage + (Math.ceil(NUMBER_PAGINATION / 2) - 1); i += 1) {
        const liEl = displayPaginationBtn(i);
        ulEl.appendChild(liEl);
    }

    createPaginationDots(ulEl);

    const lastPage = displayPaginationBtn(total_pages);
    ulEl.appendChild(lastPage);

    paginationEl.appendChild(ulEl);

    createPaginationArrowRight(paginationContainerEl);
}

function displayPaginationSmall(totalPages) {
       
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    for (let i = 0; i < totalPages; i += 1) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl);
    }
       
    paginationEl.appendChild(ulEl);
}
    
function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item', `js-page-${page}`);
    liEl.innerText = page;

    return liEl;
}

function createPaginationDots(parrent) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__dots');
    liEl.innerText = '...';
    parrent.appendChild(liEl);
}

function createPaginationArrowLeft(parrent) {
    const btnLeft = document.createElement('button');
    btnLeft.classList.add('pagination__btnLeft');
    btnLeft.innerText = '<';
    btnLeft.type = "button";
    parrent.prepend(btnLeft);
}

function createPaginationArrowRight(parrent) {
    const btnRight = document.createElement('button');
    btnRight.classList.add('pagination__btnRight');
    btnRight.innerText = '>';
    btnRight.type = "button";
    parrent.append(btnRight);
}     

async function appendFromLocalStorage(parsedFilms) {
    try {
        const markup = await renderFilms(parsedFilms).then(result => result);
        cardContainerEl.innerHTML = markup;
    } catch (error) {
        console.error(error);
    };
};
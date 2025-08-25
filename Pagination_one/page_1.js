const buttons = document.querySelectorAll('.button');
const currentPage = 'page_1.html';

// Danh sách các trang (bao gồm Home)
const pages = [
    'Pagination_Home.html',
    'page_1.html',
    'page_two.html',
    'page_three.html',
    'page_four.html'
];

// Xác định index hiện tại
console.log('Current Page:', currentPage);
console.log('Pages List:', pages);

const currentIndex = pages.indexOf(currentPage);
console.log('CurrentIndex: ', currentIndex);

// Gắn link cho Previous và Next
const prevBtn = document.querySelector('.btn-pre');
const nextBtn = document.querySelector('.btn-next');

console.log('Prev Button: ', prevBtn);
console.log('Next Button: ', nextBtn);

if (currentIndex > 0) {
    const prevPage = pages[currentIndex - 1];
    prevBtn.dataset.page = `../${getFolderName(prevPage)}/${prevPage}`;
    console.log('Previous Page:', prevBtn.dataset.page);
} else {
    prevBtn.disabled = true; // Disable nếu không có trang trước
    console.log('Previous button disabled');
}

if (currentIndex < pages.length - 1) {
    const nextPage = pages[currentIndex + 1];
    nextBtn.dataset.page = `../${getFolderName(nextPage)}/${nextPage}`;
    console.log('Next Page:', nextBtn.dataset.page);
} else {
    nextBtn.disabled = true; // Disable nếu không có trang sau
    console.log('Next button disabled');
}

// Chức năng click chuyển trang
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.page) {
            console.log('Redirecting to:', btn.dataset.page);
            window.location.href = btn.dataset.page;
        } else {
            console.log('Button has no page data attribute');
        }
    });
});

// Highlight nút hiện tại
buttons.forEach(btn => {
    if (btn.dataset.page && btn.dataset.page.includes(currentPage)) {
        btn.classList.add('active');
        console.log('Active button:', btn);
    }
});

// Hàm lấy folder dựa vào tên file
function getFolderName(fileName) {
    if (fileName === 'Pagination_Home.html') return 'Pagination_Home';
    if (fileName === 'page_1.html') return 'Pagination_one';
    if (fileName === 'page_two.html') return 'Pagination_two';
    if (fileName === 'page_three.html') return 'Pagination_three';
    if (fileName === 'page_four.html') return 'Pagination_four';
}

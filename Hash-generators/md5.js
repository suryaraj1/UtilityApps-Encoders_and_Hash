const btn = document.querySelector('.encoder');
const input = document.querySelector('.text-input');
const output = document.querySelector('.text-output');
const navBar = document.querySelector('header');
const wrapperOutput = document.querySelector('.output');
const accordion = document.querySelectorAll('.contentBox');

const getHash = (url) => CryptoJS.MD5(url);

window.onscroll = () => {
    const sticky = navBar.offsetTop;
    if (window.pageYOffset > sticky) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
};

btn.addEventListener('click', () => {
    const url = input.value;
    output.value = getHash(url, 'md5');
    let checker = false;
    if (!url) {
        wrapperOutput.classList.toggle('failure');
        output.value = '';
    } else {
        checker = true;
        wrapperOutput.classList.toggle('success');
    }
    setTimeout(() => {
        wrapperOutput.classList.toggle(checker ? 'success' : 'failure');
    }, 1000);
});

const runAccordion = () => {
    for (let i = 0; i < accordion.length; i += 1) {
        accordion[i].addEventListener('click', () => {
            accordion[i].classList.toggle('activate');
            for (let j = 0; j < accordion.length; j += 1) {
                if (i !== j && accordion[j].classList.contains('activate')) {
                    // switches off other accordions
                    accordion[j].classList.toggle('activate');
                }
            }
        });
    }
};

runAccordion();

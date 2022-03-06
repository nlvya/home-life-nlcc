const menuButtonDOM = document.querySelector('.menu-button');
const linksDivDOM = document.querySelector('.links');
const barsDOM = document.querySelector('.fa-bars')

menuButtonDOM.addEventListener('click', () => {
    linksDivDOM.classList.toggle("closed");
    barsDOM.classList.toggle("open");
})

const scrollToElement = (elementId) => {
    const element = document.querySelector(elementId);
    // console.log(element)
        // scroll to element
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    element.scrollTop -= 100;
        // close navigation
    linksDivDOM.classList.toggle("closed");
    barsDOM.classList.toggle("open");
}
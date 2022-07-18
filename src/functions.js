
export const OpenMenu = () => {
    document.querySelector('body').classList.add('block-body');
    document.querySelector('.collapsed-menu').classList.add('show-menu');
    document.querySelector('.visible-menu').classList.add('move-menu');
    document.querySelector('.background-menu').classList.add('opacity-menu');
}

export const CloseMenu = () => {
    document.querySelector('body').classList.remove('block-body');
    document.querySelector('.collapsed-menu').classList.remove('show-menu');
    document.querySelector('.visible-menu').classList.remove('move-menu');
    document.querySelector('.background-menu').classList.remove('opacity-menu');
}

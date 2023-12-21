document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.card-container');
    const trees = document.querySelectorAll('.tree');
    const gifts = document.querySelectorAll('.gift');

    trees.forEach((tree, index) => {
        setTimeout(() => {
            tree.style.animation = 'treeAppear 3s ease-in-out infinite';
        }, index * 1000);
    });

    gifts.forEach((gift, index) => {
        setTimeout(() => {
            gift.style.animation = 'giftMove 6s ease-in-out infinite';
        }, index * 1000);
    });

    // Criar flocos de neve
    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    document.body.appendChild(snowflake);

    // Posição inicial aleatória
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    snowflake.style.left = startX + 'px';
    snowflake.style.top = startY + 'px';

    // Animar o floco de neve
    const animation = snowflake.animate(
        [
            { transform: 'translate(0, 0)' },
            { transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight + 20}px)` }
        ],
        {
            duration: Math.random() * 3000 + 3000,
            iterations: Infinity
        }
    );

    return { element: snowflake, animation };
}

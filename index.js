document.addEventListener('DOMContentLoaded', function () {
    const curweek = document.getElementsById("week");

    const startDate = new Date('2025-09-01');

    function getWeek() {
        const today = new Date();

        const timeDiff = today - startDate;
        const weeksDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));

        return weeksDiff % 2 === 0 ? 'числитель' : 'знаменатель';
    }

    curweek.textContent = getWeek();
});
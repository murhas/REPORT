
document.getElementById('save-memo').addEventListener('click', function () {
    const memoInput = document.getElementById('memo-input');
    const memoList = document.getElementById('memo-list');

    if (memoInput.value.trim() !== "") {
        const memoDiv = document.createElement('div');
        memoDiv.className = 'memo';
        memoDiv.textContent = memoInput.value;

        memoList.appendChild(memoDiv);
        memoInput.value = '';
    }
});
// setItem
window.localStorage.setItem('report','테스트' );
// getItem
const report = window.localStorage.getItem('report');

// 결과 출력
//document.write(report);

const first = document.createElement('first');
first.className = 'first';
first.textContent = report.value;


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
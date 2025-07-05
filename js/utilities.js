document.getElementById('btn-blog').addEventListener('click', function () {
    document.getElementById('show-faq').classList.remove('hidden');
    document.getElementById('show-donation').classList.add('hidden');
    document.getElementById('show-history').classList.add('hidden');
    document.getElementById('btn-blog').classList.add('hidden');
    document.getElementById('btn-home').classList.remove('hidden');
})

document.getElementById('btn-home').addEventListener('click', function () {
    document.getElementById('show-faq').classList.add('hidden');
    document.getElementById('show-donation').classList.remove('hidden');
    document.getElementById('btn-blog').classList.remove('hidden');
    document.getElementById('btn-home').classList.add('hidden');
})

document.getElementById('btn-history').addEventListener('click', function () {
    document.getElementById('show-donation').classList.add('hidden');
    document.getElementById('show-history').classList.remove('hidden');
    document.getElementById('btn-donation').classList.remove('bg-lime-400');
    document.getElementById('btn-history').classList.add('bg-lime-400');
    document.getElementById('show-faq').classList.add('hidden');
    document.getElementById('btn-blog').classList.remove('hidden');
    document.getElementById('btn-home').classList.add('hidden');
})

document.getElementById('btn-donation').addEventListener('click', function () {
    document.getElementById('show-history').classList.add('hidden');
    document.getElementById('show-donation').classList.remove('hidden');
    document.getElementById('btn-donation').classList.add('bg-lime-400');
    document.getElementById('btn-history').classList.remove('bg-lime-400');
    document.getElementById('show-faq').classList.add('hidden');
    document.getElementById('btn-blog').classList.remove('hidden');
    document.getElementById('btn-home').classList.add('hidden');
})

let currentAmount = parseInt(document.getElementById('current-amount').innerText);

document.getElementById('btn-donate-noakhali').addEventListener('click', function () {
    const title = document.getElementById('title-Noakhali').innerText;
    let donatedAmount = parseInt(document.getElementById('donated-noakhali').innerText);
    const newDonate = parseInt(document.getElementById('new-donate-noakhali').value);
    const data = updateDonate(donatedAmount, newDonate, title);
    document.getElementById('donated-noakhali').innerText = data[0];
    document.getElementById('current-amount').innerText = data[1];
    document.getElementById('new-donate-noakhali').value = '';
    document.getElementById('my_modal_5').showModal();
})

document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const title = document.getElementById('title-feni').innerText;
    let donatedAmount = parseInt(document.getElementById('donated-feni').innerText);
    const newDonate = parseInt(document.getElementById('new-donate-feni').value);
    const data = updateDonate(donatedAmount, newDonate, title);
    document.getElementById('donated-feni').innerText = data[0];
    document.getElementById('current-amount').innerText = data[1];
    document.getElementById('new-donate-feni').value = '';
    document.getElementById('my_modal_5').showModal();
})

document.getElementById('btn-donate-quota').addEventListener('click', function () {
    const title = document.getElementById('title-quota').innerText;
    let donatedAmount = parseInt(document.getElementById('donated-quota').innerText);
    const newDonate = parseInt(document.getElementById('new-donate-quota').value);
    const data = updateDonate(donatedAmount, newDonate, title);
    document.getElementById('donated-quota').innerText = data[0];
    document.getElementById('current-amount').innerText = data[1];
    document.getElementById('new-donate-quota').value = '';
    document.getElementById('my_modal_5').showModal();
})

function updateDonate(donatedAmount, newDonate, title) {
    if (currentAmount >= newDonate && newDonate > 0) {
        donatedAmount = donatedAmount + newDonate;
        currentAmount = currentAmount - newDonate;
        updateHistory(title, newDonate);
        return [donatedAmount, currentAmount];
    }
    else {
        alert('Please enter a valid donation amount!');
    }

}

function updateHistory(title, newDonate) {
    const showHistory = document.getElementById('show-history');
    const div = document.createElement('div');
    div.classList.add('mx-4', 'p-5', 'my-6', 'shadow-sm', 'rounded-md');
    div.innerHTML = `
    <h3 class="text-lg font-semibold text-green-700">${newDonate} Taka is ${title}</h3>
    <p class="text-sm text-gray-500">Date : ${new Date()}</p>
    `;
    showHistory.appendChild(div);
}




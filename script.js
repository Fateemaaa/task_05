document.getElementById('userInfoForm').onsubmit = async function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    await fetch('http://localhost:8000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    });

    alert('Info submitted!');
};

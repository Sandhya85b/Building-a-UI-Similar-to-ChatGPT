async function sendMessage() {
    const message = document.getElementById("message").value;
    if (!message) return;

    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/chat/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ message })
    });

    const data = await res.json();
    document.getElementById("chat").innerHTML += `<p>User: ${message}</p><p>AI: ${data.aiMessage.message}</p>`;
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}
